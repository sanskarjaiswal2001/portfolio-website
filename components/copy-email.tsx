"use client"

import { useState } from "react"

const EMAIL = "sanskar.jaiswal.work@gmail.com"

export function CopyEmail() {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard?.writeText(EMAIL).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <a href={`mailto:${EMAIL}`} onClick={copy} aria-label={`Email ${EMAIL}`}>
      <span>
        <span className="pg-link-tag">EMAIL</span>
        {copied ? "copied email." : ` ${EMAIL}`}
      </span>
      <span className="arrow">{copied ? "✓" : "↗"}</span>
    </a>
  )
}
