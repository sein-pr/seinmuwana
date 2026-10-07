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
  title: 'Sein Muwana | Data Analyst and Software Engineer | Namibia',
  description:
    'Sein Muwana is a data analyst and software engineer at Agribank Namibia, working with SQL, Power BI, Python, RPA and computer vision.',
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
    title: 'Sein Muwana | Data Analyst and Software Engineer',
    description:
      'Portfolio of Sein Muwana: data, reporting, RPA automation and computer-vision projects from Windhoek, Namibia.',
    type: 'website',
    url: 'https://seinmuwana.netlify.app',
    siteName: 'Sein Muwana Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sein Muwana | Data Analyst and Software Engineer',
    description:
      'Portfolio of Sein Muwana: data, reporting, RPA automation and computer-vision projects from Windhoek, Namibia.',
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
          className="print:hidden sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-carbon"
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
