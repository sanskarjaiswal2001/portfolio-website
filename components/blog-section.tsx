"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Terminal } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { containerVariants, itemVariants } from "@/lib/animation"
import { SectionReveal } from "@/components/section-reveal"

interface BlogPost {
  title: string
  excerpt: string
  date: string
  link: string
  category?: string
}

const fallbackPosts: BlogPost[] = [
  {
    title: "Building Scalable RAG Pipelines with Azure OpenAI",
    excerpt:
      "Learn how to architect and deploy production-ready RAG systems that can handle millions of records with sub-second response times.",
    date: "2025-01-15",
    link: "https://blog.sanskarjaiswal.dev",
    category: "AI/ML",
  },
  {
    title: "Python Automation: From BluePrism to Custom Solutions",
    excerpt:
      "A deep dive into migrating enterprise automation platforms and the lessons learned from saving $1M+ annually.",
    date: "2024-12-20",
    link: "https://blog.sanskarjaiswal.dev",
    category: "Automation",
  },
  {
    title: "Monitoring 100+ Websites with Python and Grafana",
    excerpt:
      "How I built a real-time monitoring system that reduced downtime by 80% and replaced a legacy tool saving $40K/month.",
    date: "2024-11-10",
    link: "https://blog.sanskarjaiswal.dev",
    category: "DevOps",
  },
]

export function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("/api/blog-rss")
        if (response.ok) {
          const data = await response.json()
          if (Array.isArray(data) && data.length > 0) {
            const clean = data.map((p: BlogPost) => ({
              ...p,
              excerpt: (p.excerpt || "").replace(/#\w+/g, "").trim(),
              category: p.category ? String(p.category).replace(/#\w+/g, "").trim() : p.category,
            }))
            setBlogPosts(clean.slice(0, 4))
          } else {
            setBlogPosts(fallbackPosts)
          }
        } else {
          setBlogPosts(fallbackPosts)
        }
      } catch {
        setBlogPosts(fallbackPosts)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  return (
    <section id="blog" ref={ref} className="py-32 md:py-40 px-6">
      <SectionReveal className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-14">
            <span className="section-label">04 — Blog</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-3 uppercase">
              Latest<span className="text-[#3092FF]">_</span>Writing
            </h2>
            <p className="text-muted-foreground font-mono text-sm max-w-lg">
              <span className="text-[#3092FF]">&gt;</span> Thoughts on AI, automation, and backend systems
            </p>
          </motion.div>

          {loading ? (
            <div className="py-12 font-mono text-sm text-muted-foreground">
              <span className="text-[#3092FF]">$</span> fetching posts<span className="terminal-cursor ml-1" />
            </div>
          ) : (
            <>
              <div className="space-y-3 mb-10">
                {blogPosts.map((post, index) => (
                  <motion.a
                    key={index}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block scan-hover"
                    variants={itemVariants}
                  >
                    <div className="bento-tile p-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                      {/* Index + icon */}
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="font-mono text-xs text-[#3092FF]/50">0{index + 1}</span>
                        <Terminal className="w-4 h-4 text-[#3092FF]/30" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          {post.category && (
                            <span className="ctos-tag text-[10px]">
                              {post.category}
                            </span>
                          )}
                          <span className="text-xs font-mono text-muted-foreground/50 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <h3 className="font-mono text-sm font-bold text-foreground group-hover:text-[#3092FF] transition-colors truncate">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground/70 mt-1 line-clamp-1 hidden md:block">{post.excerpt}</p>
                      </div>

                      {/* Arrow */}
                      <ExternalLink className="w-4 h-4 text-muted-foreground/30 group-hover:text-[#3092FF] transition-colors shrink-0" />
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div variants={itemVariants}>
                <Button variant="outline" size="sm" asChild className="font-mono text-xs rounded-none border-[#3092FF]/20 hover:bg-[#3092FF]/5 hover:text-[#3092FF] hover:border-[#3092FF]/40">
                  <a href="https://blog.sanskarjaiswal.dev" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5 mr-2" />
                    view_all_posts
                  </a>
                </Button>
              </motion.div>
            </>
          )}
        </motion.div>
      </SectionReveal>
    </section>
  )
}
