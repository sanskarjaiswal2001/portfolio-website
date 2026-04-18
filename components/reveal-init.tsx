"use client"

import { useEffect } from "react"

export function RevealInit() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement
            el.style.willChange = "transform, opacity"
            el.classList.add("in")
            // Release GPU layer after animation completes
            setTimeout(() => { el.style.willChange = "auto" }, 800)
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
