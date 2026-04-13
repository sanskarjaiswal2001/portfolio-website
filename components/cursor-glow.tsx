"use client"

import { useEffect, useRef } from "react"
import { usePerf } from "@/components/perf-provider"

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const { lowPower } = usePerf()

  useEffect(() => {
    if (lowPower) return
    // Disable on touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) return

    const el = ref.current
    if (!el) return

    let x = 0
    let y = 0
    let currentX = 0
    let currentY = 0
    let rafId: number

    function onMouseMove(e: MouseEvent) {
      x = e.clientX
      y = e.clientY
    }

    function animate() {
      currentX += (x - currentX) * 0.15
      currentY += (y - currentY) * 0.15
      el!.style.left = `${currentX}px`
      el!.style.top = `${currentY}px`
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true })
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [lowPower])

  if (lowPower) return null

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}
