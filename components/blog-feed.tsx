"use client"

import { useEffect, useState } from "react"

interface Post {
  title: string
  date?: string
  link: string
  excerpt?: string
}

function fmtDate(d?: string) {
  if (!d) return ""
  const dt = new Date(d)
  return `${dt.getFullYear()}.${String(dt.getMonth() + 1).padStart(2, "0")}.${String(dt.getDate()).padStart(2, "0")}`
}

const FALLBACK: Post[] = [
  { title: "A Tiny Crew of Agents Running My Homelab", date: "2026-04-17", link: "https://blog.sanskarjaiswal.dev/a-tiny-crew-of-agents-running-my-homelab" },
  { title: "Building a Clean DNS Stack at Home", date: "2025-12-01", link: "https://blog.sanskarjaiswal.dev/building-a-clean-dns-stack-at-home" },
  { title: "Running LLMs Locally: Why It's Important and How to Do It", date: "2025-09-15", link: "https://blog.sanskarjaiswal.dev/running-llms-locally-why-its-important-and-how-to-do-it" },
  { title: "My Engineering Operating Manual — Patterns, Rituals, and Receipts", date: "2025-09-04", link: "https://blog.sanskarjaiswal.dev/my-engineering-operating-manual-patterns-rituals-and-receipts" },
]

export function BlogFeed() {
  const [posts, setPosts] = useState<Post[]>(FALLBACK)

  useEffect(() => {
    fetch("/api/blog-rss")
      .then((r) => (r.ok ? r.json() : null))
      .then((data: Post[] | null) => {
        if (Array.isArray(data) && data.length > 0) setPosts(data)
      })
      .catch(() => {})
  }, [])

  return (
    <div className="pg-blog">
      {posts.map((post, i) => (
        <a key={i} className="pg-post" href={post.link} target="_blank" rel="noopener noreferrer">
          <div className="date">{fmtDate(post.date)}</div>
          <div className="pg-post-title">{post.title}</div>
          <div className="read">read →</div>
        </a>
      ))}
    </div>
  )
}
