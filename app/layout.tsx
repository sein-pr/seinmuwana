import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, IBM_Plex_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: "600", variable: "--font-plex" });

export const metadata: Metadata = {
  metadataBase: new URL('https://seinmuwana.netlify.app'),
  title: 'Sein Muwana | Software Engineer | Automation Specialist | QA Engineer | Namibia',
  description:
    'Sein Muwana is a Software Engineer and Automation Specialist based in Namibia with experience in full-stack development, RPA using Power Automate and UiPath, Quality Assurance, database systems, and banking ICT solutions.',
    keywords: [
    'Sein Muwana',
    'Software Engineer Namibia',
    'Automation Specialist Namibia',
    'Quality Assurance Engineer',
    'Full Stack Developer',
    'RPA Developer',
    'Power Automate Developer',
    'UiPath Developer',
    'C# Developer',
    'Java Developer',
    'Python Developer',
    'University of Namibia Computer Science',
  ],
  authors: [{ name: 'Sein Muwana' }],
  creator: 'Sein Muwana',
  publisher: 'Sein Muwana',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Sein Muwana | Software Engineer | Automation Specialist',
    description:
      'Portfolio of Sein Muwana, Software Engineer specializing in automation, RPA, quality assurance, and scalable full-stack systems.',
    type: 'website',
    url: 'https://seinmuwana.netlify.app',
    siteName: 'Sein Muwana Portfolio',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Sein Muwana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sein Muwana | Software Engineer | Automation Specialist',
    description:
      'Portfolio of Sein Muwana, Software Engineer specializing in automation, RPA, quality assurance, and scalable full-stack systems.',
    images: ['/images/profile.jpg'],
  },
  icons: {
    icon: '/SD Logo.png',
    apple: '/SD Logo.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plex.variable} font-sans antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-carbon"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
