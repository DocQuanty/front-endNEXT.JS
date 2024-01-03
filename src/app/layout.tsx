import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import { Inter } from 'next/font/google'
import './globals.css'

const workSans = Work_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'NFT Sales',
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
