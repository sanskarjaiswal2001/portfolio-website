"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LiquidGlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "default" | "active"
  size?: "sm" | "md" | "lg"
  asChild?: boolean
}

export function LiquidGlassButton({
  children,
  className,
  variant = "default",
  size = "md",
  ...props
}: LiquidGlassButtonProps) {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }

  const baseClasses = cn(
    // Base styling
    "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out",
    "border border-white/10 backdrop-blur-xl",
    "overflow-hidden isolate",
    // Glass morphism effect
    "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none",
    "after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-t after:from-black/10 after:to-transparent after:pointer-events-none",
    // Hover effects
    "hover:border-white/20 hover:shadow-lg hover:shadow-black/20",
    "hover:before:from-white/10",
    // Active state
    "active:scale-95",
    // Size classes
    sizeClasses[size],
    className,
  )

  const variantClasses = {
  default: "bg-black/20 text-white/90 hover:bg-black/30 hover:text-white",
  // Use an explicit neutral translucent active style to avoid depending on theme tokens
  // (prevents warm/brown tint if card token maps unexpectedly).
  active: "bg-[rgba(0,0,0,0.24)] text-white border-[rgba(255,255,255,0.12)] hover:bg-[rgba(0,0,0,0.32)] shadow-[0_8px_24px_rgba(0,0,0,0.35)]",
  }

  return (
    <motion.button
      className={cn(baseClasses, variantClasses[variant])}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 400, damping: 25 }}
  {...(props as any)}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
