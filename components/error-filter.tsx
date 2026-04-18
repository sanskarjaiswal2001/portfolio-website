"use client"

import { useEffect } from "react"

export function ErrorFilter() {
  useEffect(() => {
    const handler = (event: ErrorEvent) => {
      // Resource load failures (blocked scripts, failed images) fire an Event
      // with no .error property — these are not real JS errors.
      // Suppress them before Next.js error overlay catches them.
      if (!event.error) {
        event.preventDefault()
        event.stopImmediatePropagation()
      }
    }
    window.addEventListener("error", handler, true)
    return () => window.removeEventListener("error", handler, true)
  }, [])

  return null
}
