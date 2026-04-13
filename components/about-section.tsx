"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, animate } from "framer-motion"
import { bentoContainerVariants, bentoTileVariants } from "@/lib/animation"
import { MapPin, Code2, Zap, TrendingUp } from "lucide-react"
import Image from "next/image"
import avatarImg from "../assets/avatar.jpg"
import { SectionReveal } from "@/components/section-reveal"

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, target, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [isInView, target])

  return (
    <span ref={ref} className="text-2xl md:text-3xl font-mono font-bold text-[#3092FF] tabular-nums">
      {prefix}{value}{suffix}
    </span>
  )
}

const techStack = [
  { name: "Python", level: "core" },
  { name: "Django", level: "core" },
  { name: "REST APIs", level: "core" },
  { name: "Azure OpenAI", level: "ai" },
  { name: "FastMCP", level: "ai" },
  { name: "LangChain", level: "ai" },
  { name: "RAG Pipelines", level: "ai" },
  { name: "React", level: "frontend" },
  { name: "Docker", level: "infra" },
  { name: "MongoDB", level: "infra" },
  { name: "Grafana", level: "infra" },
  { name: "Git", level: "infra" },
] as const

const levelColors: Record<string, string> = {
  core: "border-[#3092FF]/30 text-[#3092FF]",
  ai: "border-[#00E5FF]/30 text-[#00E5FF]",
  frontend: "border-[#00E5FF]/30 text-[#00E5FF]",
  infra: "border-[#00FF88]/30 text-[#00FF88]",
}

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="about" className="py-32 md:py-40 px-6 min-h-screen flex items-center" ref={ref}>
      <SectionReveal className="max-w-5xl mx-auto w-full">
        <motion.div
          variants={bentoContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={bentoTileVariants} className="mb-14">
            <span className="section-label">01 — About</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight uppercase">
              Profile<span className="text-[#3092FF]">_</span>Data
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 auto-rows-min">
            {/* Avatar + Name */}
            <motion.div
              variants={bentoTileVariants}
              className="bento-tile ctos-bracket flex flex-col items-center justify-center gap-4 p-6"
            >
              <div className="border border-[#3092FF]/20 p-[2px]">
                <div className="w-24 h-24 overflow-hidden bg-background">
                  <Image src={avatarImg} alt="Sanskar Jaiswal" width={96} height={96} className="object-cover" />
                </div>
              </div>
              <div className="text-center font-mono">
                <h3 className="text-sm font-bold text-foreground tracking-wider">SANSKAR JAISWAL</h3>
                <p className="text-xs text-[#3092FF]/60">Software Engineer</p>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              variants={bentoTileVariants}
              className="bento-tile p-6 md:col-span-2"
            >
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-4 h-4 text-[#3092FF]/60" />
                <h3 className="text-xs font-mono font-bold text-foreground uppercase tracking-wider">{"// What I Do"}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Passionate Python Developer with expertise in building scalable backend systems,
                automation frameworks, and cutting-edge AI applications. My work focuses on
                clean, maintainable code and high-performance system design that drives
                real business impact.
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={bentoTileVariants}
              className="bento-tile p-6 flex flex-col items-center justify-center"
            >
              <MapPin className="w-6 h-6 text-[#3092FF]/60 mb-2" />
              <p className="text-foreground font-mono text-sm font-bold tracking-wider">Bangalore, IN</p>
              <p className="text-[10px] text-muted-foreground font-mono mt-1">EXP: 2.6 YRS</p>
            </motion.div>

            {/* Metrics */}
            <motion.div
              variants={bentoTileVariants}
              className="bento-tile ctos-bracket p-6 md:col-span-3"
            >
              <div className="flex items-center gap-2 mb-5">
                <TrendingUp className="w-4 h-4 text-[#3092FF]/60" />
                <h3 className="text-xs font-mono font-bold text-foreground uppercase tracking-wider">{"// Impact Metrics"}</h3>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <AnimatedCounter target={1} prefix="$" suffix="M+" />
                  <p className="text-[10px] text-muted-foreground font-mono mt-1">ANNUAL_SAVINGS</p>
                </div>
                <div>
                  <AnimatedCounter target={80} suffix="%" />
                  <p className="text-[10px] text-muted-foreground font-mono mt-1">LESS_DOWNTIME</p>
                </div>
                <div>
                  <AnimatedCounter target={600} suffix="+" />
                  <p className="text-[10px] text-muted-foreground font-mono mt-1">HRS_AUTOMATED</p>
                </div>
              </div>
            </motion.div>

            {/* Currently */}
            <motion.div
              variants={bentoTileVariants}
              className="bento-tile p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-[#FF6A00]/60" />
                <h3 className="text-[10px] font-mono font-bold text-foreground uppercase tracking-wider">Status</h3>
              </div>
              <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                <span className="text-[#00FF88]">ACTIVE</span> — Building AI tools with MCP + RAG at Betsol
              </p>
            </motion.div>

            {/* Tech tags */}
            <motion.div
              variants={bentoTileVariants}
              className="bento-tile p-6 md:col-span-4"
            >
              <h3 className="text-[10px] font-mono font-bold text-foreground uppercase tracking-wider mb-4">{"// Tech Stack"}</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-2.5 py-1 text-xs font-mono border ${levelColors[tech.level]} transition-colors duration-150 hover:bg-white/[0.02]`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4 text-[10px] text-muted-foreground font-mono">
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-[#3092FF]" /> CORE</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-[#FF6A00]" /> AI/ML</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-[#00E5FF]" /> FRONTEND</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-[#00FF88]" /> INFRA</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </SectionReveal>
    </section>
  )
}
