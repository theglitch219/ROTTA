import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'ROTTA — Collective Finance, Onchain',
  description: 'ROTTA turns savings circles into programmable, intelligent financial systems.',
  keywords: 'ROTTA, DeFi, savings circles, collective finance, Web3',
  openGraph: {
    title: 'ROTTA — Collective Finance, Onchain',
    description: 'Savings circles that manage themselves.',
    siteName: 'ROTTA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROTTA — Collective Finance, Onchain',
    description: 'Savings circles that manage themselves.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
