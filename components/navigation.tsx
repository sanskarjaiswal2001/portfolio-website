"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={`pg-nav${scrolled ? " scrolled" : ""}`} id="topnav">
      <div className="inner">
        <a href="#" className="brand">
          <Image
            src="/avatar.jpg"
            alt="Sanskar Jaiswal"
            width={28}
            height={28}
            className="pg-nav-avatar"
            suppressHydrationWarning
          />
          Sanskar Jaiswal
        </a>

        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#vision">Vision</a></li>
          <li><a href="#writing">Writing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="cta">{"Let's talk →"}</a>
      </div>
    </nav>
  )
}
