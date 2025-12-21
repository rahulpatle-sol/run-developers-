import type React from "react"
import type { Metadata } from "next"
import { Outfit, Syne, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
// import { LenisSmoothScroll } from "@/components/lenis-smooth-scroll"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Run Developers | A.K. Nagar - Premium Plots in Seoni, MP | RERA Approved",
  description:
    "Run Developers presents A.K. Nagar - RERA approved residential plots in Seoni, Madhya Pradesh. T&CP approved, Bank loan available. Contact: 9300 160 966",
  keywords: "A.K. Nagar, Run Developers, Seoni plots, RERA approved plots, residential plots MP, Bithli Seoni",
  generator: "Next.js framework project built by  Run Developers",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${syne.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {/* <LenisSmoothScroll /> */}
        <Navbar/>
        {children}
        <Analytics />
        <Footer/>
      </body>
    </html>
  )
}
