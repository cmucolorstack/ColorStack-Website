import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'ColorStack at CMU',
  description: 'ColorStack at Carnegie Mellon University — community, workshops, and professional development for Black, Latinx, and Indigenous students in tech.',
  openGraph: {
    title: 'ColorStack at CMU',
    description: 'ColorStack at Carnegie Mellon University — community, workshops, and professional development for Black, Latinx, and Indigenous students in tech.',
    type: 'website',
    images: [
      {
        url: '/documents/colorstack portal (2).png',
        width: 512,
        height: 512,
        alt: 'ColorStack at CMU',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/documents/colorstack portal (2).png'],
  },
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

