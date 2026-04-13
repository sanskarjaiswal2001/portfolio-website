"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface DiagramStep {
  label: string
}

interface ArchitectureDiagramProps {
  steps: DiagramStep[]
  className?: string
}

export function ArchitectureDiagram({ steps, className = "" }: ArchitectureDiagramProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className={`flex items-center gap-0 overflow-x-auto py-2 ${className}`}>
      {steps.map((step, i) => (
        <div key={i} className="flex items-center shrink-0">
          <motion.div
            className="px-2.5 py-1.5 border border-[#3092FF]/10 bg-[rgba(48,146,255,0.03)] text-[10px] font-mono text-muted-foreground whitespace-nowrap"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: i * 0.08, duration: 0.25 }}
          >
            {step.label}
          </motion.div>
          {i < steps.length - 1 && (
            <motion.div
              className="flex items-center mx-0.5"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: i * 0.08 + 0.1, duration: 0.15 }}
            >
              <div className="w-3 h-px bg-[#3092FF]/20" />
              <div className="w-0 h-0 border-t-[2px] border-t-transparent border-b-[2px] border-b-transparent border-l-[3px] border-l-[#3092FF]/20" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}
