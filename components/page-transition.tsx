"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

import { pageVariants, pageTransition } from "@/lib/animation"

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className="will-change-transform">
      {children}
    </motion.div>
  )
}
