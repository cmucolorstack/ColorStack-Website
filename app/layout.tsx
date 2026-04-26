import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://colorstackcmu.org'),
  title: {
    default: 'ColorStack at CMU | ColorStack Chapter at Carnegie Mellon University',
    template: '%s | ColorStack CMU Chapter',
  },
  description: 'ColorStack at Carnegie Mellon University (CMU) — the official ColorStack chapter at CMU. Community, workshops, and professional development for Black, Latinx, and Indigenous students in tech.',
  keywords: [
    'ColorStack CMU',
    'ColorStack Carnegie Mellon',
    'ColorStack chapter',
    'ColorStack chapters',
    'ColorStack chapter website',
    'Black students tech CMU',
    'diversity tech Carnegie Mellon',
    'underrepresented minorities computing CMU',
    'HBCU tech pipeline',
    'ColorStack national chapter',
  ],
  openGraph: {
    title: 'ColorStack at CMU | ColorStack Chapter at Carnegie Mellon University',
    description: 'ColorStack at Carnegie Mellon University (CMU) — the official ColorStack chapter at CMU. Community, workshops, and professional development for Black, Latinx, and Indigenous students in tech.',
    type: 'website',
    url: 'https://colorstackcmu.org',
    siteName: 'ColorStack at CMU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ColorStack at CMU | ColorStack Chapter at Carnegie Mellon University',
    description: 'The official ColorStack chapter at Carnegie Mellon University.',
  },
  alternates: {
    canonical: 'https://colorstackcmu.org',
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#C41230',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

