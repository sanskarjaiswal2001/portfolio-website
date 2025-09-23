"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, useInView, type Variants } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { usePerf } from "@/components/perf-provider"

const experiences = [
  {
    title: "Software Engineer",
    company: "Betsol",
    location: "Bangalore, IN",
    period: "Jan 2025 - Present",
    technologies: [
      "Python",
      "Django REST Framework",
      "Generative AI",
      "Model Context Protocol",
      "Prompt Engineering",
      "Podman",
      "React",
      "Tailwind",
    ],
    highlights: [
      "Designed and deployed a scalable RAG pipeline in Python using Azure OpenAI and FastMCP, achieving sub-2s query responses on 3M+ records and cutting escalations by 40%",
      "Built a Python-integrated React+Grafana dashboard for real-time monitoring of 11 global performance metrics, proactively detecting outages such as Office 365 disruptions",
      "Architected Python tool to monitor 100+ websites, replacing legacy tool, reducing downtime by 80%, and saving $40,000/month",
      "Created a Python LlamaIndex adapter layer and agent tracing, improving observability and standardizing agent workflows across 3+ tools",
      "Reviewed and maintained high-quality Python code by performing 100+ pull request reviews",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "Betsol",
    location: "Bangalore, IN",
    period: "Jul 2023 - Jan 2025",
    technologies: ["Python", "Django", "MongoDB", "Nginx", "RPAFramework", "Docker", "MSSQL", "Git"],
    highlights: [
      "Migrated from BluePrism to a python based in-house platform, saving $1M+ annually",
      "Developed 3+ core Python modules for the automation platform, improving observability and debugging",
      "Engineered 50+ Python automations for 11+ clients, reducing manual operations by 90% (600+ hours/year saved)",
      "Built an audit automation in Python to process 10M+ financial records, increasing compliance accuracy and reducing manual effort",
      "Implemented a custom Python-based retry mechanism for unreliable endpoints, boosting nightly batch success rates by 25%",
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { lowPower } = usePerf()
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    try {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
      setPrefersReduced(mq.matches)
      const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
      if (mq.addEventListener) mq.addEventListener("change", handler)
      else mq.addListener(handler)
      return () => {
        if (mq.removeEventListener) mq.removeEventListener("change", handler)
        else mq.removeListener(handler)
      }
    } catch (e) {
      setPrefersReduced(false)
    }
  }, [])

  const enableMotion = !lowPower && !prefersReduced

  // Lightweight entrance animation for the whole section.
  // Avoid per-item springs and many motion wrappers to reduce CPU/GPU load.
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  }

  return (
    <section className="py-24 px-6 min-h-screen bg-secondary/20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {enableMotion ? (
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">Professional Experience</h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index}>
                  <div className="transform transition-transform duration-200 hover:-translate-y-1">
                    <Card className="p-8 liquid-glass-card transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                          <p className="text-lg text-primary font-semibold">{exp.company} - {exp.location}</p>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <span className="text-muted-foreground font-medium">{exp.period}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.technologies.map((tech) => (
                          <div key={tech}>
                            <Badge variant="secondary" className="bg-secondary/80 text-secondary-foreground">
                              {tech}
                            </Badge>
                          </div>
                        ))}
                      </div>

                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-muted-foreground leading-relaxed flex items-start">
                            <span className="text-primary mr-3 mt-2">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          /* Low-power / reduced-motion fallback: static, non-animated content */
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Professional Experience</h2>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index}>
                  <Card className="p-6 bg-secondary/30">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                        <p className="text-base text-primary font-semibold">{exp.company} - {exp.location}</p>
                      </div>
                      <div className="mt-1 md:mt-0">
                        <span className="text-muted-foreground font-medium">{exp.period}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-secondary/80 text-secondary-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-muted-foreground leading-relaxed">
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
