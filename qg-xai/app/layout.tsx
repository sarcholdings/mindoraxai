import { EB_Garamond } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import type { Metadata } from 'next'

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-garamond'
})

export const metadata: Metadata = {
  title: 'MindoraX AI Labs - IT Consulting & Technology Solutions',
  description: 'Digital transformation with expert IT consulting, SAP solutions, cloud services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${garamond.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
