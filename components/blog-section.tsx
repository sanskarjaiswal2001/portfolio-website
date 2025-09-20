"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar } from "lucide-react"

interface BlogPost {
  title: string
  excerpt: string
  date: string
  link: string
  category?: string
}

export function BlogSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("/api/blog-rss")
          if (response.ok) {
          const posts = await response.json()
          // sanitize: ensure hashtags are removed from excerpt and category as a final safety
          const clean = posts.map((p: any) => ({
            ...p,
            excerpt: (p.excerpt || "").replace(/#\w+/g, "").trim(),
            category: p.category ? String(p.category).replace(/#\w+/g, "").trim() : p.category,
          }))
          setBlogPosts(clean.slice(0, 4)) // Show only latest 4 posts
        }
      } catch (error) {
        console.error("Failed to fetch blog posts:", error)
        setBlogPosts([
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
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="blog" ref={sectionRef} className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest Writing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts on software engineering, AI, automation, and building scalable systems.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="text-muted-foreground mt-4">Loading latest posts...</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-6 mb-12 items-stretch">
                {blogPosts.map((post, index) => (
                  <a key={index} href={post.link} target="_blank" rel="noopener noreferrer" className="group block h-full">
                    <Card className="group p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 liquid-glass-card h-full flex flex-col">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      {/* category/tags intentionally removed per request */}
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>

                    <div className="mt-auto text-sm">
                      <span className="text-muted-foreground">Read full post</span>
                      <ExternalLink className="w-4 h-4 ml-2 inline-block align-middle text-muted-foreground" />
                    </div>
                    </Card>
                  </a>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://blog.sanskarjaiswal.dev" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View All Posts
                  </a>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
