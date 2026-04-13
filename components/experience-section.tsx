"use client"

import { Badge } from "@/components/ui/badge"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { containerVariants, timelineNodeVariants, slideFromLeft } from "@/lib/animation"
import { SectionReveal } from "@/components/section-reveal"

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

function TimelineNode({ experience, index }: { experience: typeof experiences[number]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      variants={timelineNodeVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0"
    >
      {/* Timeline dot — ctOS square */}
      <div className="absolute left-0 top-1.5 w-3 h-3 border border-[#3092FF] bg-[#3092FF]/10 z-10" />

      {/* Connecting line */}
      {index < experiences.length - 1 && (
        <motion.div
          className="absolute left-[5px] top-5 w-px bg-gradient-to-b from-[#3092FF]/40 to-transparent"
          initial={{ height: 0 }}
          animate={isInView ? { height: "100%" } : { height: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        />
      )}

      {/* Content */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
          <div>
            <h3 className="text-lg md:text-xl font-heading font-bold text-foreground uppercase tracking-wide">{experience.title}</h3>
            <p className="text-[#3092FF] text-sm font-mono">{experience.company} — {experience.location}</p>
          </div>
          <span className="text-xs text-muted-foreground/50 font-mono shrink-0">{experience.period}</span>
        </div>

        <motion.div
          className="flex flex-wrap gap-1.5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experience.technologies.map((tech) => (
            <motion.div key={tech} variants={slideFromLeft}>
              <Badge variant="secondary" className="bg-[#3092FF]/5 text-[#3092FF]/80 border border-[#3092FF]/15 text-[10px] font-mono rounded-none">
                {tech}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        <ul className="space-y-2">
          {experience.highlights.map((highlight, idx) => (
            <motion.li
              key={idx}
              className="text-muted-foreground leading-relaxed flex items-start text-sm"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: 0.2 + idx * 0.08, duration: 0.3 }}
            >
              <span className="text-[#3092FF]/40 mr-3 mt-1 shrink-0 font-mono text-xs">&gt;</span>
              <span>{highlight}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"])

  return (
    <section id="experience" className="py-32 md:py-40 px-6 min-h-screen" ref={sectionRef}>
      <SectionReveal className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="section-label">02 — Experience</span>
          <motion.h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Work<span className="text-[#3092FF]">_</span>History
          </motion.h2>
        </div>

        <div className="relative">
          {/* Background track */}
          <div className="absolute left-[5px] top-0 bottom-0 w-px bg-[#3092FF]/10" />

          {/* Animated progress */}
          <motion.div
            className="absolute left-[5px] top-0 w-px bg-[#3092FF]/30 origin-top"
            style={{ height: lineHeight }}
          />

          {experiences.map((exp, index) => (
            <TimelineNode key={index} experience={exp} index={index} />
          ))}
        </div>
      </SectionReveal>
    </section>
  )
}
