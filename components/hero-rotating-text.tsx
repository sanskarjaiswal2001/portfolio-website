"use client"

import { useEffect, useState, useRef, useCallback } from "react"

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%!&*?0123456789"

const UNDER_PHRASES = [
  "real load.",
  "scale.",
  "3am incidents.",
  "production.",
  "your SLA.",
  "10M records.",
]

const HOLDUP_PHRASES = [
  "hold up",
  "perform",
  "survive",
  "deliver",
  "stick",
  "last",
]

const ROLE_PHRASES = ["Backend engineer.", "AI engineer.", "Python engineer."]

function useScramble(phrases: string[], interval: number) {
  const [display, setDisplay] = useState(phrases[0])
  const idxRef = useRef(0)
  const rafRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const scrambleTo = useCallback((target: string) => {
    if (rafRef.current) clearInterval(rafRef.current)
    const stepMs = 28
    const lockPerStep = target.length / 18 // how many chars lock per step
    let lockedCount = 0

    rafRef.current = setInterval(() => {
      lockedCount = Math.min(lockedCount + lockPerStep, target.length)
      const locked = Math.floor(lockedCount)
      setDisplay(
        target
          .split("")
          .map((ch, i) =>
            i < locked
              ? ch
              : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
          )
          .join("")
      )
      if (locked >= target.length) {
        clearInterval(rafRef.current!)
        setDisplay(target)
      }
    }, stepMs)
  }, [])

  useEffect(() => {
    const tick = setInterval(() => {
      idxRef.current = (idxRef.current + 1) % phrases.length
      scrambleTo(phrases[idxRef.current])
    }, interval)
    return () => {
      clearInterval(tick)
      if (rafRef.current) clearInterval(rafRef.current)
    }
  }, [phrases, interval, scrambleTo])

  return display
}

export function HeroRoleText() {
  const display = useScramble(ROLE_PHRASES, 3000)
  return (
    <span style={{ display: "inline-block" }}>
      {display}
    </span>
  )
}

export function HeroHoldUpText() {
  const display = useScramble(HOLDUP_PHRASES, 3700)
  return (
    <em style={{ display: "inline-block", minWidth: "7ch" }}>
      {display}
    </em>
  )
}

export function HeroRotatingText() {
  const display = useScramble(UNDER_PHRASES, 2600)
  return (
    <em
      style={{
        display: "inline-block",
        minWidth: "14ch",
      }}
    >
      {display}
    </em>
  )
}
