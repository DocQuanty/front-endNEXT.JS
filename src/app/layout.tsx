import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

// ===FONTS===
const workSans = Work_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ['latin']
})

// =====META DATA =====
export const metadata: Metadata = {
  title: {
    template: `%s | NFT Sales`,
    default: 'NFT', // a default is required when creating a template
  },
  description: 'Generated and create NFT Sales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className={workSans.className}>{children}</main>
      </body>
    </html>
  )
}
