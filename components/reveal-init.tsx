"use client"

import { useEffect } from "react"

export function RevealInit() {
  useEffect(() => {
    const root = document.documentElement
    root.classList.add("js-reveal")

    const els = document.querySelectorAll<HTMLElement>(".reveal")
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in")
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )
    els.forEach((el) => io.observe(el))

    return () => {
      io.disconnect()
      root.classList.remove("js-reveal")
      els.forEach((el) => el.classList.remove("in"))
    }
  }, [])

  return null
}
