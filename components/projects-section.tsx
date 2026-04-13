"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import { ArchitectureDiagram } from "@/components/architecture-diagram"
import { ProjectVisual } from "@/components/project-visual"

const projects = [
  {
    title: "Guardian Modified",
    tagline: "Token-based access control for P2P networks",
    problem: "GTA V P2P networks lacked proper access control, leaving 1,000+ users vulnerable to unauthorized sessions.",
    technologies: ["Python", "Firebase", "GCP", "Network Security"],
    github: "https://github.com/sanskarjaiswal2001/guardian-modified",
    visualType: "guardian" as const,
    impact: "1,000+ users secured",
    architecture: [
      { label: "Client" },
      { label: "Token Auth" },
      { label: "Firebase" },
      { label: "GCP Functions" },
      { label: "P2P Network" },
    ],
  },
  {
    title: "RAG Pipeline System",
    tagline: "Enterprise-scale knowledge retrieval",
    problem: "Manual escalation of support queries on 3M+ records was slow and costly, with high response times.",
    technologies: ["Python", "Azure OpenAI", "FastMCP", "LangChain"],
    visualType: "rag" as const,
    impact: "Sub-2s on 3M+ records",
    architecture: [
      { label: "Documents" },
      { label: "Embeddings" },
      { label: "Vector DB" },
      { label: "LLM" },
      { label: "Response" },
    ],
  },
  {
    title: "Automation Platform",
    tagline: "Enterprise RPA replacement saving $1M+/yr",
    problem: "BluePrism licensing costs exceeded $1M annually while limiting automation flexibility across 11+ clients.",
    technologies: ["Python", "Django", "MongoDB", "Docker"],
    visualType: "automation" as const,
    impact: "$1M+ saved annually",
    architecture: [
      { label: "Scheduler" },
      { label: "Django API" },
      { label: "Worker Pool" },
      { label: "MongoDB" },
      { label: "Reports" },
    ],
  },
  {
    title: "Monitoring System",
    tagline: "Real-time uptime monitoring for 100+ sites",
    problem: "Legacy monitoring tool missed outages and lacked real-time visibility across 100+ global websites.",
    technologies: ["Python", "React", "Grafana", "Prometheus"],
    visualType: "monitoring" as const,
    impact: "80% less downtime",
    architecture: [
      { label: "Websites" },
      { label: "Python Agent" },
      { label: "Prometheus" },
      { label: "Grafana" },
      { label: "Alerts" },
    ],
  },
]

function ProjectSlide({ project, index }: { project: typeof projects[number]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className="flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[60vw] h-full snap-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="bento-tile ctos-bracket h-full flex flex-col md:flex-row overflow-hidden">
        {/* ctOS data panel visual */}
        <div className="w-full md:w-[40%] shrink-0">
          <ProjectVisual type={project.visualType} className="h-full min-h-[200px]" />
        </div>

        {/* Content — case study format */}
        <div className="flex-1 p-5 md:p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#3092FF]/40">0{index + 1}</span>
              <span className="ctos-tag text-[10px]">
                {project.impact}
              </span>
            </div>

            <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mb-1 uppercase tracking-wide">
              {project.title}
            </h3>
            <p className="text-xs text-muted-foreground/50 font-mono italic mb-4">{project.tagline}</p>

            {/* Problem */}
            <div className="mb-4">
              <p className="text-[10px] font-mono text-[#FF6A00]/50 uppercase tracking-wider mb-1">{"// Problem"}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
            </div>

            {/* Architecture */}
            <div className="mb-4">
              <p className="text-[10px] font-mono text-[#00E5FF]/50 uppercase tracking-wider mb-1">{"// Architecture"}</p>
              <ArchitectureDiagram steps={project.architecture} />
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="border-[#3092FF]/15 text-[#3092FF]/70 text-[10px] font-mono rounded-none px-2 py-0.5">
                  {tech}
                </Badge>
              ))}
            </div>

            {project.github && (
              <Button variant="outline" size="sm" asChild className="font-mono text-xs rounded-none border-[#3092FF]/20 hover:bg-[#3092FF]/5 hover:text-[#3092FF] hover:border-[#3092FF]/40">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-3.5 h-3.5 mr-2" />
                  view_source
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(projects.length - 1) * 75}%`]
  )

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative"
      style={{ height: `${(projects.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="px-6 mb-8">
          <span className="section-label">03 — Projects</span>
          <motion.h2
            ref={titleRef}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Featured<span className="text-[#3092FF]">_</span>Work
          </motion.h2>
        </div>

        {/* Scrolling track */}
        <motion.div
          className="flex gap-6 px-6 items-stretch"
          style={{ x }}
        >
          <div className="flex-shrink-0 w-[10vw]" />
          {projects.map((project, index) => (
            <ProjectSlide key={index} project={project} index={index} />
          ))}
          <div className="flex-shrink-0 w-[10vw]" />
        </motion.div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <ProgressDot key={i} index={i} scrollYProgress={scrollYProgress} total={projects.length} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProgressDot({
  index,
  scrollYProgress,
  total,
}: {
  index: number
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"]
  total: number
}) {
  const opacity = useTransform(
    scrollYProgress,
    [index / total, (index + 0.5) / total, (index + 1) / total],
    [0.3, 1, 0.3]
  )
  const scale = useTransform(
    scrollYProgress,
    [index / total, (index + 0.5) / total, (index + 1) / total],
    [1, 1.5, 1]
  )

  return (
    <motion.div
      className="w-2 h-2 bg-[#3092FF]"
      style={{ opacity, scale }}
    />
  )
}
