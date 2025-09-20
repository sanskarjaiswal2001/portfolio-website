"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import avatarImg from "../assets/avatar.jpg"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const [imgFailed, setImgFailed] = useState(false)

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        // When scrolled, force the neutral glass look explicitly to avoid
        // picking up any warm/destructive color tokens from elsewhere.
        isScrolled
          ? "backdrop-blur-[20px] bg-[rgba(0,0,0,0.18)] border border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          : "bg-transparent",
      )}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
              {!imgFailed ? (
                <Image
                  src={avatarImg}
                  alt="Sanskar Jaiswal avatar"
                  width={40}
                  height={40}
                  priority
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <div
                  role="img"
                  aria-label="Sanskar Jaiswal avatar"
                  className="w-10 h-10 flex items-center justify-center bg-primary text-white font-semibold"
                >
                  SJ
                </div>
              )}
            </div>
            {pathname !== "/" && (
              <span className="text-xl font-semibold text-foreground hover:text-primary transition-colors">Sanskar Jaiswal</span>
            )}
          </Link>

            <div className="hidden md:flex items-center gap-4 p-2 rounded-full bg-transparent backdrop-blur-xl border border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button className="p-2 text-foreground/90 hover:text-foreground transition-colors rounded-md">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
