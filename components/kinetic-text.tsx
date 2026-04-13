"use client"

import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { usePerf } from "@/components/perf-provider"

interface KineticTextProps {
  text: string
  className?: string
}

const charContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.1 },
  },
}

const charVariant: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -80 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "tween" as const,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function KineticText({
  text,
  className = "",
}: KineticTextProps) {
  const { lowPower } = usePerf()

  if (lowPower) {
    return <span className={className}>{text}</span>
  }

  const words = text.split(" ")

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={charContainer}
      initial="hidden"
      animate="visible"
      style={{ perspective: 600 }}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split("").map((char, ci) => (
            <motion.span
              key={`${wi}-${ci}`}
              className="inline-block"
              variants={charVariant}
              style={{ transformOrigin: "bottom" }}
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </motion.span>
  )
}
