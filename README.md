# 🎧 SoundWave Pro - Premium Wireless Headphones Landing Page

<div align="center">
  <img src="https://product-landing-gold.vercel.app/opengraph-image" alt="SoundWave Pro Banner" width="600" />
  
  [![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=vercel)](https://product-landing-gold.vercel.app/)
  [![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
</div>

## 🌟 Overview

SoundWave Pro is a modern, responsive landing page showcasing premium wireless headphones. Built with cutting-edge web technologies, it features stunning animations, optimized performance, and comprehensive SEO implementation.

**🔗 Live Demo:** [https://product-landing-gold.vercel.app/](https://product-landing-gold.vercel.app/)

## ✨ Features

### 🎨 **Design & User Experience**
- **Modern Glassmorphism UI** - Beautiful frosted glass effects and gradients
- **Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Powered by Framer Motion for engaging user interactions
- **Custom Typography** - Poppins and Montserrat fonts for premium aesthetics
- **Dark Theme** - Elegant dark color scheme with purple/pink accents

### 🚀 **Performance & Technical**
- **Next.js 14** - Latest App Router with server-side rendering
- **TypeScript** - Type-safe development with full IntelliSense
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Edge Runtime** - Optimized for fast global delivery
- **Image Optimization** - Next.js automatic image optimization

### 📱 **SEO & Social Media**
- **Complete SEO Setup** - Meta tags, structured data, and sitemap
- **Custom OG Images** - Dynamic Open Graph and Twitter card generation
- **Schema Markup** - Rich snippets for better search visibility
- **Social Media Ready** - Optimized sharing across all platforms
- **Accessibility** - WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React Framework | 14.x |
| **TypeScript** | Type Safety | 5.x |
| **Tailwind CSS** | Styling | 3.4.x |
| **Framer Motion** | Animations | 11.x |
| **Lucide React** | Icons | Latest |
| **Vercel** | Deployment | - |

## 📁 Project Structure

\`\`\`
soundwave-pro/
├── app/
│   ├── globals.css           # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Main landing page component
│   ├── sitemap.ts           # Dynamic sitemap generation
│   ├── robots.ts            # SEO robots configuration
│   ├── opengraph-image.tsx  # Custom OG image generation
│   ├── twitter-image.tsx    # Custom Twitter card generation
│   ├── icon.tsx             # Favicon generation
│   └── apple-icon.tsx       # Apple touch icon generation
├── components/
│   └── ui/                  # Reusable UI components
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── next.config.mjs          # Next.js configuration
└── package.json             # Dependencies and scripts
\`\`\`

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm**, **yarn**, or **pnpm** package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/soundwave-pro-landing.git
   cd soundwave-pro-landing
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📱 Responsive Design

The landing page is fully responsive and optimized for:

- **Desktop** (1920px+) - Full-featured layout with animations
- **Laptop** (1024px - 1919px) - Optimized spacing and typography
- **Tablet** (768px - 1023px) - Stacked layout with touch-friendly interactions
- **Mobile** (320px - 767px) - Single-column layout with mobile navigation

## 🎨 Customization

### Colors & Branding

The color scheme can be easily customized in \`tailwind.config.ts\`:

\`\`\`typescript
theme: {
  extend: {
    colors: {
      primary: '#a855f7',    // Purple
      secondary: '#ec4899',  // Pink
      accent: '#8b5cf6',     // Light purple
    }
  }
}
\`\`\`

### Typography

Fonts are configured in \`app/layout.tsx\` and can be changed:

\`\`\`typescript
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})
\`\`\`

### Content

Update product information in \`app/page.tsx\`:

\`\`\`typescript
const features = [
  {
    title: "Your Feature",
    description: "Your description",
    icon: <YourIcon />
  }
]
\`\`\`

## 🔧 SEO Configuration

### Metadata Setup

SEO is configured in \`app/layout.tsx\` with comprehensive metadata:

- **Title Templates** - Dynamic page titles
- **Meta Descriptions** - Search engine descriptions
- **Open Graph** - Social media previews
- **Twitter Cards** - Twitter-specific metadata
- **Structured Data** - Rich snippets for search results

### Sitemap & Robots

- **Dynamic Sitemap** - Auto-generated at \`/sitemap.xml\`
- **Robots.txt** - Search engine crawling instructions
- **Canonical URLs** - Prevent duplicate content issues

## 📊 Performance

### Core Web Vitals

- **LCP** (Largest Contentful Paint) - < 2.5s
- **FID** (First Input Delay) - < 100ms
- **CLS** (Cumulative Layout Shift) - < 0.1

### Optimization Features

- **Image Optimization** - Next.js automatic optimization
- **Font Loading** - Optimized Google Fonts loading
- **Code Splitting** - Automatic bundle optimization
- **Edge Runtime** - Global CDN delivery

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure environment variables** (if needed)
3. **Deploy automatically** on every push to main branch

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/soundwave-pro-landing)

### Other Platforms

The project can be deployed on:
- **Netlify** - Static site hosting
- **AWS Amplify** - Full-stack deployment
- **Railway** - Container deployment
- **DigitalOcean** - VPS deployment

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (\`git checkout -b feature/amazing-feature\`)
3. **Commit your changes** (\`git commit -m 'Add amazing feature'\`)
4. **Push to the branch** (\`git push origin feature/amazing-feature\`)
5. **Open a Pull Request**

### Development Guidelines

- Follow **TypeScript** best practices
- Use **Tailwind CSS** for styling
- Maintain **responsive design** principles
- Add **proper accessibility** attributes
- Write **meaningful commit messages**

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Vercel** - For seamless deployment
- **Lucide** - For beautiful icons

## 📞 Contact & Support

- **Live Demo:** [https://product-landing-gold.vercel.app/](https://product-landing-gold.vercel.app/)
- **Issues:** [GitHub Issues](https://github.com/yourusername/soundwave-pro-landing/issues)
- **Discussions:** [GitHub Discussions](https://github.com/yourusername/soundwave-pro-landing/discussions)

---

<div align="center">
  <p>Made with ❤️ and ☕ by <a href="https://github.com/yourusername">Your Name</a></p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
