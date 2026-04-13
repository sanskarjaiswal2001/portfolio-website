"use client"

import { useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform } from "framer-motion"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
]

const sectionIds = ["hero", "about", "experience", "projects", "blog", "contact"]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)

    const scrollY = window.scrollY + window.innerHeight / 3
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i])
      if (el && el.offsetTop <= scrollY) {
        setActiveSection(sectionIds[i])
        break
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const scrollTo = (href: string) => {
    const id = href.replace("#", "")
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-[rgba(3,3,6,0.92)] border-b border-[rgba(48,146,255,0.1)] translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none",
        )}
      >
        <div className="max-w-6xl mx-auto px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Logo — ctOS style */}
            <button
              onClick={() => scrollTo("#hero")}
              className="flex items-center gap-3 group"
            >
              <div className="w-7 h-7 border border-[#FF6A00]/30 flex items-center justify-center bg-[#FF6A00]/5 group-hover:border-[#FF6A00]/60 transition-colors">
                <span className="font-mono text-[10px] font-bold text-[#FF6A00]">SJ</span>
              </div>
              {activeSection !== "hero" && (
                <span className="text-sm font-mono text-foreground/70 hover:text-[#FF6A00] transition-colors hidden sm:inline tracking-wider">
                  SANSKAR_JAISWAL
                </span>
              )}
            </button>

            {/* Desktop nav — ctOS profiler tabs */}
            <div className="hidden md:flex items-center gap-0.5 relative">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "")
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollTo(item.href)}
                    className={cn(
                      "relative px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors duration-200 z-10",
                      isActive
                        ? "text-[#FF6A00]"
                        : "text-muted-foreground/60 hover:text-foreground/80",
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-[#FF6A00]/8 border-b-2 border-[#FF6A00]"
                        transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </button>
                )
              })}
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-foreground/90 hover:text-[#FF6A00] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll progress bar — ctOS blue gradient */}
        {isScrolled && (
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#FF6A00] via-[#E100FF] to-[#FF6A00]/20"
            style={{ width: progressWidth }}
          />
        )}
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[rgba(3,3,6,0.95)] md:hidden" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute top-16 right-4 left-4 border border-[#FF6A00]/15 bg-[rgba(6,8,16,0.98)] p-4 space-y-1"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#FF6A00]/40" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#FF6A00]/40" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#FF6A00]/40" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#FF6A00]/40" />

            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className={cn(
                  "block w-full text-left px-4 py-3 text-sm font-mono uppercase tracking-wider transition-colors",
                  activeSection === item.href.replace("#", "")
                    ? "text-[#FF6A00] bg-[#FF6A00]/5 border-l-2 border-[#FF6A00]"
                    : "text-muted-foreground hover:text-foreground hover:bg-[#FF6A00]/5",
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
