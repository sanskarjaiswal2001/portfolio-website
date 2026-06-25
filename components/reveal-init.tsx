"use client"

import { useEffect } from "react"

export function RevealInit() {
  useEffect(() => {
    const root = document.documentElement
    root.classList.add("js-reveal")

    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))

    const revealVisible = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      els.forEach((el) => {
        if (el.classList.contains("in")) return
        const rect = el.getBoundingClientRect()
        const entersViewport = rect.top < viewportHeight - 40 && rect.bottom > 0
        if (entersViewport) el.classList.add("in")
      })
    }

    revealVisible()
    const frame = requestAnimationFrame(revealVisible)

    let io: IntersectionObserver | null = null
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in")
              io?.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.01, rootMargin: "0px 0px 120px 0px" }
      )
      els.forEach((el) => io?.observe(el))
    }

    window.addEventListener("scroll", revealVisible, { passive: true })
    window.addEventListener("resize", revealVisible)

    return () => {
      cancelAnimationFrame(frame)
      io?.disconnect()
      window.removeEventListener("scroll", revealVisible)
      window.removeEventListener("resize", revealVisible)
      root.classList.remove("js-reveal")
      els.forEach((el) => el.classList.remove("in"))
    }
  }, [])

  return null
}
