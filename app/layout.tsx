import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AnimationProvider } from "@/components/animation-provider"
import { Navigation } from "@/components/navigation"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sanskar Jaiswal - Software Engineer",
  description:
    "Python Developer with 2.6 years of experience delivering backend systems, automation frameworks, and AI-driven applications.",
  generator: "v0.app",
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
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Navigation />
        <AnimationProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </AnimationProvider>
        <Analytics />
      </body>
    </html>
  )
}
