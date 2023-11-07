import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Viewport } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Social media by RED Group',
  description: 'Best social media app for everyone',
  icons: '/logo.svg',
}

export const viewport: Viewport = {
  themeColor: '#0e0b18',
  colorScheme: 'dark'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
