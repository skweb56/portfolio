import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const revalidate = 0

type ContactPayload = {
  name: string
  email: string
  subject: string
  message: string
  company?: string // honeypot
}

// Naive in-memory rate limiter (resets on server restart)
const ipToTimestamps: Map<string, number[]> = new Map()
const WINDOW_MS = 60_000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowStart = now - WINDOW_MS
  const timestamps = ipToTimestamps.get(ip) || []
  const recent = timestamps.filter((t) => t > windowStart)
  recent.push(now)
  ipToTimestamps.set(ip, recent)
  return recent.length > MAX_REQUESTS_PER_WINDOW
}

function isValidEmail(email: string): boolean {
  return /^(?:[a-zA-Z0-9_'^&+{}=\-`~!#$%*?\/|]+(?:\.[a-zA-Z0-9_'^&+{}=\-`~!#$%*?\/|]+)*)@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|\[(?:\d{1,3}\.){3}\d{1,3}\])$/.test(email)
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const contentType = req.headers.get('content-type') || ''
    if (!contentType.includes('application/json')) {
      return NextResponse.json({ error: 'Invalid content type, expected application/json' }, { status: 400 })
    }

    const body = (await req.json()) as Partial<ContactPayload>

    // Honeypot trap: if filled, treat as bot
    if (body.company && body.company.trim().length > 0) {
      return NextResponse.json({ error: 'Bot detected' }, { status: 400 })
    }

    const name = (body.name || '').toString().trim()
    const email = (body.email || '').toString().trim()
    const subject = (body.subject || '').toString().trim()
    const message = (body.message || '').toString().trim()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required: name, email, subject, message' }, { status: 400 })
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // Optional API key auth (if set). Do not expose this from the client unless you control the client.
    const serverApiKey = process.env.CONTACT_API_KEY
    if (serverApiKey) {
      const clientKey = req.headers.get('x-api-key')
      if (clientKey !== serverApiKey) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
    }

    // Optional Cloudflare Turnstile or reCAPTCHA verification if env provided
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY
    const botToken = (req.headers.get('x-bot-token') || body['botToken'] || '').toString()

    if (turnstileSecret && botToken) {
      const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ secret: turnstileSecret, response: botToken, remoteip: ip }),
      })
      const verifyData = (await verifyRes.json()) as { success?: boolean }
      if (!verifyData.success) {
        return NextResponse.json({ error: 'Bot verification failed' }, { status: 400 })
      }
    } else if (recaptchaSecret && botToken) {
      const params = new URLSearchParams()
      params.append('secret', recaptchaSecret)
      params.append('response', botToken)
      if (ip !== 'unknown') params.append('remoteip', ip)
      const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      })
      const verifyData = (await verifyRes.json()) as { success?: boolean }
      if (!verifyData.success) {
        return NextResponse.json({ error: 'Bot verification failed' }, { status: 400 })
      }
    }

    // Send email via SMTP (Nodemailer)
    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || '587')
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const from = process.env.MAIL_FROM || user
    const to = process.env.MAIL_TO || user

    if (!host || !user || !pass || !from || !to) {
      return NextResponse.json({ error: 'Email is not configured on server. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    const text = `New contact message\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`
    const html = `<h2>New contact message</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject}</p>
<p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`

    await transporter.sendMail({
      from,
      to,
      subject: `[Portfolio] ${subject}`,
      replyTo: email,
      text,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (error: any) {
    console.error('Contact API error:', error)
    const message = typeof error?.message === 'string' ? error.message : 'Internal server error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}


