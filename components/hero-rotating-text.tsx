"use client"

import { useEffect, useState, useCallback } from "react"

const SYNC_INTERVAL = 4200

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

function useScrambleField(field: keyof (typeof STATES)[0]) {
  const initial = STATES[0][field]
  const [display, setDisplay] = useState(initial)

  const setReadableState = useCallback((target: string) => {
    setDisplay(target)
  }, [])

  useEffect(() => {
    startSharedTimer()
    const listener: Listener = (idx) => setReadableState(STATES[idx][field])
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  }, [field, setReadableState])

  return display
}

export function HeroRoleText() {
  const display = useScrambleField("role")
  return (
    <span className="hero-role-text">
      <span className="hero-role-sizer"><span>{display}</span></span>
    </span>
  )
}

export function HeroHoldUpText() {
  const display = useScrambleField("hold")
  return <em>{display}</em>
}

export function HeroRotatingText() {
  const display = useScrambleField("under")
  return <em>{display}</em>
}
