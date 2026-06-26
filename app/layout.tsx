import type React from "react"
import type { Metadata } from "next"
import { Azeret_Mono, Chivo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { RevealInit } from "@/components/reveal-init"
import { ErrorFilter } from "@/components/error-filter"
import "./globals.css"

const chivo = Chivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-chivo",
  display: "swap",
})

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-azeret-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sanskar Jaiswal, Software Engineer",
  description:
    "Backend engineer at Betsol. I build Python backends, AI pipelines, and automation that quietly saves real money.",
  icons: {
    icon: "/avatar.jpg",
    shortcut: "/avatar.jpg",
  },
  openGraph: {
    title: "Sanskar Jaiswal, Software Engineer",
    description:
      "Backend engineer at Betsol. I build Python backends, AI pipelines, and automation that quietly saves real money.",
    url: "https://sanskarjaiswal.dev",
    siteName: "Sanskar Jaiswal",
    images: [{ url: "https://sanskarjaiswal.dev/avatar.jpg", width: 400, height: 400, alt: "Sanskar Jaiswal" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Sanskar Jaiswal, Software Engineer",
    description:
      "Backend engineer at Betsol. I build Python backends, AI pipelines, and automation that quietly saves real money.",
    images: ["https://sanskarjaiswal.dev/avatar.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${chivo.variable} ${azeretMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/avatar.jpg" />
      </head>
      <body>
        <ErrorFilter />
        <Navigation />
        <RevealInit />
        <Suspense fallback={null}>{children}</Suspense>
        {process.env.NODE_ENV === "production" && process.env.VERCEL === "1" && <Analytics />}
        {process.env.NODE_ENV === "production" && process.env.VERCEL === "1" && <SpeedInsights />}
      </body>
    </html>
  )
}
