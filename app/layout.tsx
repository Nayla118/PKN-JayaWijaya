import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Eksotika Kabupaten Jayawijaya - Surga Budaya Papua",
  description:
    "Jelajahi keanekaragaman budaya, makanan khas, pakaian adat, dan kesenian tradisional Kabupaten Jayawijaya di Pegunungan Papua",
  keywords: "Jayawijaya, Papua, Budaya Papua, Pakaian Adat, Festival Lembah Baliem, Makanan Khas Papua",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
