import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ClientLayout } from '@/components/ClientLayout'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Sarvesh - Full Stack Developer | Laravel, React, Next.js Expert',
    template: '%s | Sarvesh - Full Stack Developer'
  },
  description: 'Professional Full Stack Developer with 4+ years of experience in Laravel, React, Next.js, and modern web technologies. Specializing in scalable web applications and innovative solutions.',
  keywords: [
    'Full Stack Developer',
    'Laravel Developer',
    'React Developer',
    'Next.js Developer',
    'PHP Developer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Node.js Developer',
    'MySQL Developer',
    'Web Application Developer',
    'Portfolio',
    'Surat',
    'Gujarat',
    'India'
  ],
  authors: [{ name: 'Sarvesh Tiwari', url: 'https://portfolio-wine-ten-eyu3bhz0ea.vercel.app' }],
  creator: 'Sarvesh',
  publisher: 'Sarvesh',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://portfolio-wine-ten-eyu3bhz0ea.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-wine-ten-eyu3bhz0ea.vercel.app',
    title: 'Sarvesh - Full Stack Developer | Laravel, React, Next.js Expert',
    description: 'Professional Full Stack Developer with 4+ years of experience in Laravel, React, Next.js, and modern web technologies. Specializing in scalable web applications and innovative solutions.',
    siteName: 'Sarvesh Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sarvesh - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarvesh - Full Stack Developer | Laravel, React, Next.js Expert',
    description: 'Professional Full Stack Developer with 4+ years of experience in Laravel, React, Next.js, and modern web technologies.',
    images: ['/og-image.jpg'],
    creator: '@sarvesh',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio',
  other: {
    'theme-color': '#3b82f6',
    'color-scheme': 'light dark',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Sarvesh Portfolio',
    'application-name': 'Sarvesh Portfolio',
    'msapplication-TileColor': '#3b82f6',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} dark`}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sarvesh",
              "jobTitle": "Full Stack Developer",
              "description": "Professional Full Stack Developer with expertise in Laravel, React, Next.js, and modern web technologies",
              "url": "https://portfolio-wine-ten-eyu3bhz0ea.vercel.app",
              "image": "https://portfolio-wine-ten-eyu3bhz0ea.vercel.app/favicon.svg",
              "sameAs": [
                "https://www.linkedin.com/in/sarvesh-tiwari-45315b162/",
                "https://github.com/skweb56",
                "https://twitter.com/sarvesh"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Generation Next"
              },
              "knowsAbout": [
                "Laravel",
                "React.js",
                "Next.js",
                "Node.js",
                "PHP",
                "TypeScript",
                "MySQL",
                "Web Development",
                "Full Stack Development"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Surat",
                "addressRegion": "Gujarat",
                "addressCountry": "India"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Jain University"
              },
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Master of Computer Applications",
                  "recognizedBy": {
                    "@type": "EducationalOrganization",
                    "name": "Jain University"
                  }
                }
              ]
            })
          }}
        />
        
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sarvesh Portfolio",
              "url": "https://portfolio-wine-ten-eyu3bhz0ea.vercel.app",
              "logo": "https://portfolio-wine-ten-eyu3bhz0ea.vercel.app/favicon.svg",
              "description": "Professional portfolio showcasing Full Stack Development work and expertise",
              "founder": {
                "@type": "Person",
                "name": "Sarvesh"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "skweb790@gmail.com",
                "availableLanguage": "English"
              }
            })
          }}
        />
        
        {/* Website Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Sarvesh Portfolio",
              "url": "https://portfolio-wine-ten-eyu3bhz0ea.vercel.app",
              "description": "Professional Full Stack Developer Portfolio",
              "author": {
                "@type": "Person",
                "name": "Sarvesh"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://portfolio-wine-ten-eyu3bhz0ea.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="font-poppins antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
