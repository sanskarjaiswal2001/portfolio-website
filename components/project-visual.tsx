"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface ProjectVisualProps {
  type: "guardian" | "rag" | "automation" | "monitoring"
  className?: string
}

// ctOS-style data panel visuals
export function ProjectVisual({ type, className = "" }: ProjectVisualProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const configs = {
    guardian: {
      label: "NETWORK_SEC",
      nodes: ["USR:1024", "AUTH:OK", "P2P:LIVE", "FW:ACTIVE"],
      color: "#FF2D2D",
      bars: [85, 92, 78, 95, 88, 70, 82],
    },
    rag: {
      label: "RAG_PIPELINE",
      nodes: ["DOC:3.2M", "EMB:768d", "VDB:READY", "LLM:GPT4"],
      color: "#3092FF",
      bars: [45, 80, 65, 92, 88, 55, 72],
    },
    automation: {
      label: "AUTO_PLATFORM",
      nodes: ["JOBS:50+", "SAVE:$1M", "UP:99.8%", "CLI:11"],
      color: "#00FF88",
      bars: [90, 75, 88, 60, 95, 82, 70],
    },
    monitoring: {
      label: "SITE_MONITOR",
      nodes: ["SITES:100+", "PING:42ms", "UP:99.2%", "ALT:ON"],
      color: "#00E5FF",
      bars: [72, 85, 90, 65, 78, 95, 80],
    },
  }

  const c = configs[type]

  return (
    <div
      ref={ref}
      className={`relative bg-[#040610] border border-[rgba(48,146,255,0.1)] overflow-hidden ${className}`}
    >
      {/* Scan lines overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
        }}
      />

      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[rgba(48,146,255,0.06)]">
        <span className="font-mono text-[10px] tracking-wider" style={{ color: c.color }}>
          {c.label}
        </span>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#00FF88] animate-pulse" />
          <span className="font-mono text-[9px] text-muted-foreground/40">ONLINE</span>
        </div>
      </div>

      {/* Data grid */}
      <div className="p-4 space-y-4">
        {/* Metric nodes */}
        <div className="grid grid-cols-2 gap-2">
          {c.nodes.map((node, i) => (
            <motion.div
              key={i}
              className="px-3 py-2 border border-[rgba(48,146,255,0.06)] bg-[rgba(48,146,255,0.02)] font-mono text-[11px]"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08 }}
            >
              <span className="text-muted-foreground/40">{node.split(":")[0]}:</span>
              <span className="text-foreground/80 ml-1">{node.split(":")[1]}</span>
            </motion.div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="flex items-end gap-1 h-12">
          {c.bars.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1"
              style={{ backgroundColor: c.color, opacity: 0.3 + (h / 100) * 0.7 }}
              initial={{ height: 0 }}
              animate={isInView ? { height: `${h}%` } : {}}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.4, ease: "easeOut" }}
            />
          ))}
        </div>

        {/* ctOS progress bar */}
        <div className="ctos-bar">
          <motion.div
            className="ctos-bar-fill"
            style={{ background: `linear-gradient(90deg, ${c.color}, ${c.color}88)` }}
            initial={{ width: 0 }}
            animate={isInView ? { width: `${c.bars[0]}%` } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* Status line */}
        <div className="flex items-center justify-between pt-2 border-t border-[rgba(48,146,255,0.06)]">
          <span className="font-mono text-[9px] text-muted-foreground/30">
            SYS.STATUS
          </span>
          <div className="flex gap-1">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1"
                style={{ backgroundColor: c.color }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: [0.2, 0.8, 0.2] } : {}}
                transition={{ delay: i * 0.1, duration: 1.5, repeat: Infinity }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l" style={{ borderColor: c.color, opacity: 0.4 }} />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r" style={{ borderColor: c.color, opacity: 0.4 }} />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l" style={{ borderColor: c.color, opacity: 0.4 }} />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r" style={{ borderColor: c.color, opacity: 0.4 }} />
    </div>
  )
}
