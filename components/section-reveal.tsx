"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { usePerf } from "@/components/perf-provider"

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function SectionReveal({ children, className = "", delay = 0 }: SectionRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { lowPower } = usePerf()

  if (lowPower) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 60, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.97 }}
      transition={{
        type: "tween",
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
