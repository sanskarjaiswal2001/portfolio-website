"use client"

import { useEffect, useState, useRef, useCallback } from "react"

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%!&*?0123456789"
const SYNC_INTERVAL = 3400

// Curated states — every combination reads as a coherent sentence
// [hold]+[under] char counts: 17, 15, 18, 16, 18, 16 — within 3 chars, stable wrapping
const STATES = [
  { role: "Backend engineer.", hold: "hold up",  under: "real load."    },
  { role: "AI engineer.",      hold: "reason",   under: "any load."     },
  { role: "Python engineer.",  hold: "last",     under: "real pressure."},
  { role: "Backend engineer.", hold: "deliver",  under: "your SLA."     },
  { role: "AI engineer.",      hold: "keep up",  under: "production."   },
  { role: "Python engineer.",  hold: "survive",  under: "pressure."     },
]

// Shared module-level index so all three fields change together
let sharedIdx = 0
type Listener = (idx: number) => void
const listeners = new Set<Listener>()
let timerStarted = false

function startSharedTimer() {
  if (timerStarted) return
  timerStarted = true
  setInterval(() => {
    sharedIdx = (sharedIdx + 1) % STATES.length
    listeners.forEach((fn) => fn(sharedIdx))
  }, SYNC_INTERVAL)
}

const SCRAMBLE_MS = 28
const SCRAMBLE_STEPS = 18

function useScrambleField(field: keyof (typeof STATES)[0]) {
  const initial = STATES[0][field]
  const [display, setDisplay] = useState(initial)
  const rafRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const scrambleTo = useCallback((target: string) => {
    if (rafRef.current) clearInterval(rafRef.current)
    const lockPerStep = target.length / SCRAMBLE_STEPS
    let lockedCount = 0
    rafRef.current = setInterval(() => {
      lockedCount = Math.min(lockedCount + lockPerStep, target.length)
      const locked = Math.floor(lockedCount)
      setDisplay(
        target.split("").map((ch, i) =>
          i < locked ? ch : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
        ).join("")
      )
      if (locked >= target.length) {
        clearInterval(rafRef.current!)
        setDisplay(target)
      }
    }, SCRAMBLE_MS)
  }, [])

  useEffect(() => {
    startSharedTimer()
    const listener: Listener = (idx) => scrambleTo(STATES[idx][field])
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
      if (rafRef.current) clearInterval(rafRef.current)
    }
  }, [field, scrambleTo])

  return display
}

export function HeroRoleText() {
  const display = useScrambleField("role")
  return <span className="hero-role-text">{display}</span>
}

export function HeroHoldUpText() {
  const display = useScrambleField("hold")
  return <em>{display}</em>
}

export function HeroRotatingText() {
  const display = useScrambleField("under")
  return <em>{display}</em>
}
