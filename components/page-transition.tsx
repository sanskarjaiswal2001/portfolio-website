"use client"

import { motion } from "framer-motion"
import { usePerf } from "@/components/perf-provider"
import { useEffect, useState } from "react"
import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

import { pageVariants, pageTransition } from "@/lib/animation"

export function PageTransition({ children }: PageTransitionProps) {
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

  return (
    <>
      {enableMotion ? (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className="will-change-transform">
          {children}
        </motion.div>
      ) : (
        <div className="will-change-transform">{children}</div>
      )}
    </>
  )
}
