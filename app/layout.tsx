import type { Metadata } from 'next'
import './globals.css'



export const metadata: Metadata = {
  title: 'Tik-tok clone',
  description: 'Tiktok clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

