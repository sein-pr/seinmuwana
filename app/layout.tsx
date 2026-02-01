import React from "react"
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: 'Sein Muwana | Software Engineer',
  description: 'Software Engineer specializing in AI, Automation, and Full-Stack Development. Explore my projects, experience, and technical blog.',
  generator: 'v0.app',
  keywords: ['Software Engineer', 'AI', 'Automation', 'Full-Stack Developer', 'Namibia', 'AgriTech'],
  authors: [{ name: 'Sein Muwana' }],
  icons: {
    icon: '/SD Logo.png',
    apple: '/SD Logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
