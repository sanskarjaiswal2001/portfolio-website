import type React from "react"
import type { Metadata } from "next"
import { Share_Tech_Mono, Barlow_Condensed } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { PerfProvider } from "@/components/perf-provider"
import { Navigation } from "@/components/navigation"
import { AuroraBackground } from "@/components/aurora-background"
import { CursorGlow } from "@/components/cursor-glow"
import "./globals.css"

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech",
  display: "swap",
})

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sanskar Jaiswal - Software Engineer",
  description:
    "Python Developer with 2.6 years of experience delivering backend systems, automation frameworks, and AI-driven applications.",
  icons: {
    icon: "/avatar.jpg",
    shortcut: "/avatar.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/avatar.jpg" />
      </head>
      <body className={`font-mono ${shareTechMono.variable} ${barlowCondensed.variable} antialiased grain-overlay`}>
        <Navigation />
        <PerfProvider>
          <AuroraBackground />
          <CursorGlow />
          {children}
        </PerfProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
