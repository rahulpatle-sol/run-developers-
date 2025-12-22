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
  keywords: [
    "Run Developers",
    "A.K. Nagar Seoni",
    "RERA approved plots",
    "Residential plots in Seoni",
    "Bithli Seoni plots",
    "MP real estate plots",
  ],
  applicationName: "Run Developers",
  generator: "Next.js",
  authors: [{ name: "Run Developers" }],
  creator: "Run Developers",
  publisher: "Run Developers",
  robots: "index, follow",
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
