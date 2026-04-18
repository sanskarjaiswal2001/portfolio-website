"use client"

import { useState } from "react"

const EMAIL = "sanskar.jaiswal.work@gmail.com"

export function CopyEmail() {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <a onClick={copy} style={{ cursor: "pointer" }}>
      <span>
        <span className="pg-link-tag">EMAIL</span>
        {copied ? "copied." : EMAIL}
      </span>
      <span className="arrow">{copied ? "✓" : "↗"}</span>
    </a>
  )
}
