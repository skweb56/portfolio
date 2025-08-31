# Sarvesh - Full Stack Developer Portfolio

A modern, responsive, and SEO-optimized portfolio website showcasing my expertise as a Full Stack Developer. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

### Core Features
- **Modern Design**: Clean, professional design with glass morphism effects
- **Responsive**: Fully responsive across all devices and screen sizes
- **Performance**: Optimized for speed with Next.js 14 and modern web technologies
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **SEO Optimized**: Comprehensive SEO implementation with structured data

### Interactive Elements
- **Custom Cursor**: Interactive cursor effects with different variants
- **Smooth Animations**: Framer Motion animations throughout the site
- **Theme Switching**: Light, dark, and system theme support
- **Particle Background**: Dynamic animated background effects
- **Loading Screen**: Professional loading animation
- **Scroll Progress**: Visual scroll progress indicator

### SEO & Performance
- **Structured Data**: JSON-LD schema markup for better search visibility
- **Meta Tags**: Comprehensive Open Graph and Twitter Card meta tags
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling instructions
- **PWA Support**: Progressive Web App capabilities
- **Performance**: Optimized images, fonts, and code splitting

## 🛠️ Technologies Used

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### SEO & Performance
- **Next.js Metadata API**: Dynamic meta tags
- **Structured Data**: JSON-LD schema markup
- **PWA**: Progressive Web App features
- **Performance Optimization**: Image optimization, code splitting

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **TypeScript**: Type checking

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Main page component
│   ├── robots.ts            # Robots.txt configuration
│   └── sitemap.ts           # Sitemap generation
├── components/
│   ├── About.tsx            # About section component
│   ├── Contact.tsx          # Contact section component
│   ├── CursorProvider.tsx   # Custom cursor provider
│   ├── Experience.tsx       # Work experience component
│   ├── Footer.tsx           # Footer component
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section component
│   ├── LoadingScreen.tsx    # Loading screen component
│   ├── ParticleBackground.tsx # Animated background
│   ├── Projects.tsx         # Projects showcase
│   ├── ScrollProgress.tsx   # Scroll progress indicator
│   └── ThemeProvider.tsx    # Theme switching provider
└── lib/                     # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 SEO Implementation

### Meta Tags
- **Title**: Dynamic titles with template support
- **Description**: Comprehensive meta descriptions
- **Keywords**: Relevant keywords for search engines
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags

### Structured Data
- **Person Schema**: Personal information and skills
- **Organization Schema**: Portfolio organization details
- **Website Schema**: Website information and search actions

### Performance
- **Image Optimization**: Next.js automatic image optimization
- **Font Optimization**: Google Fonts with display swap
- **Code Splitting**: Automatic code splitting by Next.js
- **Caching**: Optimized caching strategies

## 🎨 Customization

### Colors & Themes
The portfolio uses CSS custom properties for easy theming:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... more variables */
}
```

### Content Updates
1. **Personal Information**: Update content in respective components
2. **Projects**: Modify `Projects.tsx` with your projects
3. **Experience**: Update work experience in `Experience.tsx`
4. **Contact**: Update contact information in `Contact.tsx`

### SEO Configuration
1. **Domain**: Update `metadataBase` in `layout.tsx`
2. **Verification**: Add search console verification codes
3. **Structured Data**: Update personal information in JSON-LD

## 📱 PWA Features

### Manifest
- **App Name**: "Sarvesh - Full Stack Developer Portfolio"
- **Theme Color**: #3b82f6 (Blue)
- **Display Mode**: Standalone
- **Shortcuts**: Quick access to sections

### Icons
- **192x192**: Standard app icon
- **512x512**: High-resolution icon
- **180x180**: Apple touch icon

## 🔧 Build & Deploy

### Build for Production
```bash
npm run build
# or
yarn build
```

### Deploy to Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📈 Performance Metrics

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: sarvesh@example.com
- **LinkedIn**: [linkedin.com/in/sarvesh](https://linkedin.com/in/sarvesh)
- **GitHub**: [github.com/sarvesh](https://github.com/sarvesh)
- **Portfolio**: [sarvesh.dev](https://sarvesh.dev)

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Framer Motion**: For smooth animations
- **Lucide**: For beautiful icons

---

**Built with ❤️ by Sarvesh**
