"use client"

import { usePerf } from "@/components/perf-provider"

export function AuroraBackground() {
  const { lowPower } = usePerf()

  if (lowPower) return null

  return (
    <>
      <div className="wd-background" aria-hidden="true">
        <div className="wd-grid" />
        <div className="wd-scanlines" />
        <div className="wd-data-stream" />
        <div className="wd-scan-beam" />
      </div>
      {/* ctOS corner brackets */}
      <div className="wd-corner-tl" aria-hidden="true" />
      <div className="wd-corner-tr" aria-hidden="true" />
      <div className="wd-corner-bl" aria-hidden="true" />
      <div className="wd-corner-br" aria-hidden="true" />
    </>
  )
}
