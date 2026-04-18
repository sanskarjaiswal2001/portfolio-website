"use client"

import { useState } from "react"

export function ContactForm() {
  const [sent, setSent] = useState(false)

  return (
    <form
      className="pg-form"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <div className="field">
        <label htmlFor="cf-name">Your name</label>
        <input id="cf-name" type="text" required />
      </div>
      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" type="email" required />
      </div>
      <div className="field">
        <label htmlFor="cf-pitch">The pitch</label>
        <textarea
          id="cf-pitch"
          required
          placeholder="Keep it short. I read everything."
        />
      </div>
      <button type="submit">{sent ? "sent ✓" : "Send →"}</button>
    </form>
  )
}
