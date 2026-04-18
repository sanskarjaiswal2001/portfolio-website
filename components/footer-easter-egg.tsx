"use client"

import { useState, useRef, useCallback } from "react"
import confetti from "canvas-confetti"

const CLICKS_NEEDED = 7

export function FooterEasterEgg() {
  const [count, setCount] = useState(0)
  const [pulsing, setPulsing] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const spanRef = useRef<HTMLSpanElement>(null)

  const handleClick = useCallback(() => {
    setPulsing(false)
    requestAnimationFrame(() => setPulsing(true))

    setCount((prev) => {
      const next = prev + 1
      if (next >= CLICKS_NEEDED) {
        const rect = spanRef.current?.getBoundingClientRect()
        const x = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5
        const y = rect ? rect.top / window.innerHeight : 0.9

        confetti({
          particleCount: 120,
          spread: 80,
          origin: { x, y },
          colors: ["#a78bfa", "#ffffff", "#c4b5fd", "#7c3aed"],
          scalar: 0.9,
        })

        setShowToast(true)
        if (timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => {
          setShowToast(false)
          setCount(0)
        }, 4000)

        return 0
      }
      return next
    })
  }, [])

  const onAnimationEnd = useCallback(() => setPulsing(false), [])

  return (
    <>
      <span
        ref={spanRef}
        className={`big footer-egg${pulsing ? " pulse" : ""}`}
        onClick={handleClick}
        onAnimationEnd={onAnimationEnd}
        title="Try clicking me"
      >
        SANSKAR.
      </span>
      {showToast && (
        <div className="footer-toast">
          You clicked 7 times. I respect the persistence. It&apos;s exactly what I ship to production.
        </div>
      )}
    </>
  )
}
