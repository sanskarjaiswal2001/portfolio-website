// Lightweight heuristics for detecting low-power / low-capability devices.
export function isLowEndDevice(): boolean {
  try {
    if (typeof navigator === "undefined") return false

    // Save-Data & effective connection type (NetworkInformation API)
    const navAny = navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }
    const conn = navAny.connection
    if (conn) {
      if (conn.saveData === true) return true
      if (conn.effectiveType === "2g" || conn.effectiveType === "slow-2g") return true
    }

    // Prefer reduced motion explicit user preference
    if (typeof window !== "undefined" && 'matchMedia' in window) {
      try {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true
      } catch (e) {
        /* ignore matchMedia failures */
      }
    }

    // Low number of logical CPU cores suggests limited device
    interface NavHints {
      hardwareConcurrency?: number
      deviceMemory?: number
    }
    const hints = navigator as unknown as NavHints

    if (typeof hints.hardwareConcurrency === "number") {
      if (hints.hardwareConcurrency <= 2) return true
    }

    // Device memory (GB) — experimental but useful when present
    if (typeof hints.deviceMemory === "number") {
      if (hints.deviceMemory <= 2) return true
    }
  } catch (e) {
    // Be conservative: assume not low-end if detection fails
    return false
  }

  return false
}
