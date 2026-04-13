"use client"

import { useEffect, useState, useCallback } from "react"
import { usePerf } from "@/components/perf-provider"
import { Github, Linkedin, FileText, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { containerVariants, itemVariants, magneticVariants } from "@/lib/animation"

interface TerminalLine {
  type: "prompt" | "output" | "blank"
  text: string
  delay: number
}

const terminalScript: TerminalLine[] = [
  { type: "prompt", text: "whoami", delay: 0 },
  { type: "output", text: "Sanskar Jaiswal -- Software Engineer @ Betsol", delay: 600 },
  { type: "blank", text: "", delay: 200 },
  { type: "prompt", text: "cat impact.log", delay: 400 },
  { type: "output", text: "$1M saved  /  80% less downtime  /  600+ hrs automated", delay: 600 },
  { type: "blank", text: "", delay: 200 },
  { type: "prompt", text: "cat about.txt", delay: 400 },
  { type: "output", text: "Python Developer with 2.6 years of experience delivering", delay: 300 },
  { type: "output", text: "backend systems, automation frameworks, and AI-driven apps.", delay: 300 },
  { type: "blank", text: "", delay: 200 },
  { type: "prompt", text: "ls projects/", delay: 400 },
  { type: "output", text: "guardian-modified/  rag-pipeline/  automation-platform/  monitoring-system/", delay: 600 },
]

function useTypewriter(text: string, speed: number, startTyping: boolean) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!startTyping) return
    setDisplayed("")
    setDone(false)
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed, startTyping])

  return { displayed, done }
}

function TerminalPrompt({ command, onDone }: { command: string; onDone: () => void }) {
  const { displayed, done } = useTypewriter(command, 40, true)

  useEffect(() => {
    if (done) onDone()
  }, [done, onDone])

  return (
    <div className="flex items-center gap-2 font-mono">
      <span className="text-[#FF6A00] select-none">~$</span>
      <span className="text-foreground">{displayed}</span>
      {!done && <span className="terminal-cursor" />}
    </div>
  )
}

function TerminalOutput({ text }: { text: string }) {
  return (
    <div className="font-mono text-muted-foreground pl-6">{text}</div>
  )
}

export function HeroSection() {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [currentPromptDone, setCurrentPromptDone] = useState(false)
  const { lowPower } = usePerf()

  const advanceLine = useCallback(() => {
    setVisibleLines((prev) => {
      const nextIndex = prev
      if (nextIndex >= terminalScript.length) return prev
      const nextLine = terminalScript[nextIndex]
      if (nextLine.type === "prompt") {
        setCurrentPromptDone(false)
      }
      return prev + 1
    })
  }, [])

  useEffect(() => {
    if (visibleLines === 0) {
      const t = setTimeout(() => setVisibleLines(1), 600)
      return () => clearTimeout(t)
    }

    const lastShown = visibleLines - 1
    const lastLine = terminalScript[lastShown]

    if (!lastLine) return
    if (lastLine.type === "prompt" && !currentPromptDone) return

    const nextIndex = visibleLines
    if (nextIndex >= terminalScript.length) return

    const nextLine = terminalScript[nextIndex]
    const t = setTimeout(() => advanceLine(), nextLine.delay)
    return () => clearTimeout(t)
  }, [visibleLines, currentPromptDone, advanceLine])

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const enableMotion = !lowPower

  return (
    <section id="hero" className="h-screen flex items-center justify-center px-6 relative">
      {/* ctOS HUD decorations */}
      <div className="absolute top-8 left-8 hidden md:block" aria-hidden="true">
        <div className="ctos-tag">SYS.PROFILE</div>
      </div>
      <div className="absolute top-8 right-8 hidden md:block" aria-hidden="true">
        <div className="ctos-status">
          <span className="ctos-status-dot" />
          <span className="text-[#00FF88]">ONLINE</span>
        </div>
      </div>
      <div className="absolute bottom-8 left-8 hidden md:block" aria-hidden="true">
        <span className="font-mono text-[10px] text-[#FF6A00]/30 tracking-widest">DedSec v2.0</span>
      </div>

      <div className="max-w-3xl w-full mx-auto relative z-10">
        {enableMotion ? (
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Profiler ID line */}
            <motion.div variants={itemVariants} className="mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[#FF6A00]/30" />
                <span className="font-mono text-[10px] text-[#FF6A00]/50 tracking-[0.3em] uppercase">
                  Subject Profile — ID:SJ_2023
                </span>
              </div>
            </motion.div>

            {/* Name — large, Barlow Condensed heading */}
            <motion.div variants={itemVariants} className="mb-2">
              <h1
                className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground glitch-text uppercase"
                data-text="SANSKAR JAISWAL"
              >
                SANSKAR<span className="text-[#FF6A00]"> </span>JAISWAL
              </h1>
            </motion.div>

            {/* Subtitle — ctOS profiler style */}
            <motion.div variants={itemVariants} className="mb-8">
              <p className="font-mono text-sm md:text-base text-muted-foreground">
                <span className="text-[#FF6A00]">&gt;</span> Software Engineer{" "}
                <span className="text-[#FF6A00]/30">{"///"}</span>{" "}
                <span className="text-[#E100FF]">Python</span>{" "}
                <span className="text-[#FF6A00]/30">/</span>{" "}
                <span className="text-[#E100FF]">AI</span>{" "}
                <span className="text-[#FF6A00]/30">/</span>{" "}
                <span className="text-[#E100FF]">Backend</span>
              </p>
            </motion.div>

            {/* Terminal */}
            <motion.div variants={itemVariants} className="terminal-window mb-8">
              <div className="terminal-titlebar">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FF6A00]" />
                  <span className="text-[10px] text-[#FF6A00]/50 font-mono tracking-wider">TERMINAL</span>
                </div>
                <span className="text-xs text-muted-foreground/40 font-mono ml-auto">sanskar@ctos ~</span>
              </div>
              <div className="terminal-body space-y-1">
                {terminalScript.slice(0, visibleLines).map((line, i) => {
                  if (line.type === "blank") return <div key={i} className="h-2" />
                  if (line.type === "prompt") {
                    const isLatestPrompt = i === visibleLines - 1
                    return (
                      <TerminalPrompt
                        key={i}
                        command={line.text}
                        onDone={() => {
                          if (isLatestPrompt) setCurrentPromptDone(true)
                        }}
                      />
                    )
                  }
                  return <TerminalOutput key={i} text={line.text} />
                })}
                {visibleLines >= terminalScript.length && (
                  <div className="flex items-center gap-2 font-mono mt-2">
                    <span className="text-[#FF6A00] select-none">~$</span>
                    <span className="terminal-cursor" />
                  </div>
                )}
              </div>
            </motion.div>

            {/* Nav links — ctOS style */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
              {["projects", "experience", "about", "blog", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => handleScrollTo(section)}
                  className="px-3 py-1.5 text-xs font-mono border border-[#FF6A00]/20 text-muted-foreground hover:text-[#FF6A00] hover:border-[#FF6A00]/40 hover:bg-[#FF6A00]/5 transition-colors duration-150 scan-hover"
                >
                  /{section}
                </button>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">
              {[
                { href: "https://github.com/sanskarjaiswal2001", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/sanskarjaiswal", icon: Linkedin, label: "LinkedIn" },
                { href: "https://blog.sanskarjaiswal.dev", icon: FileText, label: "Blog" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-[#FF6A00]/15 text-muted-foreground hover:text-[#FF6A00] hover:border-[#FF6A00]/30 hover:bg-[#FF6A00]/5 transition-colors"
                  variants={magneticVariants}
                  whileHover="hover"
                  whileTap="tap"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="flex items-center gap-2 text-[#FF6A00]/30 font-mono text-xs"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-3 h-3" />
              <span>scroll_down</span>
            </motion.div>
          </motion.div>
        ) : (
          /* Static fallback */
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[#FF6A00]/30" />
                <span className="font-mono text-[10px] text-[#FF6A00]/50 tracking-[0.3em] uppercase">
                  Subject Profile — ID:SJ_2023
                </span>
              </div>
            </div>
            <div className="mb-2">
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground uppercase">
                SANSKAR JAISWAL
              </h1>
            </div>
            <p className="font-mono text-sm md:text-base text-muted-foreground mb-8">
              <span className="text-[#FF6A00]">&gt;</span> Software Engineer /// Python / AI / Backend
            </p>

            <div className="terminal-window mb-8">
              <div className="terminal-titlebar">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FF6A00]" />
                  <span className="text-[10px] text-[#FF6A00]/50 font-mono tracking-wider">TERMINAL</span>
                </div>
                <span className="text-xs text-muted-foreground/40 font-mono ml-auto">sanskar@ctos ~</span>
              </div>
              <div className="terminal-body space-y-1">
                {terminalScript.map((line, i) => {
                  if (line.type === "blank") return <div key={i} className="h-2" />
                  if (line.type === "prompt") {
                    return (
                      <div key={i} className="flex items-center gap-2 font-mono">
                        <span className="text-[#FF6A00] select-none">~$</span>
                        <span className="text-foreground">{line.text}</span>
                      </div>
                    )
                  }
                  return <div key={i} className="font-mono text-muted-foreground pl-6">{line.text}</div>
                })}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {["projects", "experience", "about", "blog", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => handleScrollTo(section)}
                  className="px-3 py-1.5 text-xs font-mono border border-[#FF6A00]/20 text-muted-foreground hover:text-[#FF6A00] hover:border-[#FF6A00]/40 transition-colors"
                >
                  /{section}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a href="https://github.com/sanskarjaiswal2001" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-[#FF6A00]/15" aria-label="GitHub"><Github className="w-4 h-4" /></a>
              <a href="https://linkedin.com/in/sanskarjaiswal" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-[#FF6A00]/15" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
              <a href="https://blog.sanskarjaiswal.dev" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-[#FF6A00]/15" aria-label="Blog"><FileText className="w-4 h-4" /></a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
