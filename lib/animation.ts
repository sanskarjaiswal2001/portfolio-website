// Centralized animation variants & transitions used across the app
// Keep shapes loose (any) to avoid strict typing friction for motion props
export type VariantsLike = Record<string, unknown>

export const pageVariants: VariantsLike = {
  initial: { opacity: 0, y: 18, scale: 0.98, filter: "blur(6px)" },
  in: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  out: { opacity: 0, y: -18, scale: 1.02, filter: "blur(6px)" },
}

export const pageTransition: VariantsLike = {
  type: "tween",
  duration: 0.45,
  ease: "easeOut",
}

export const containerVariants: VariantsLike = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

export const itemVariants: VariantsLike = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
  y: 0,
  scale: 1,
  transition: { type: "tween", duration: 0.32, ease: "easeOut" },
  },
}

export const cardHoverVariants: VariantsLike = {
  hover: {
  y: -6,
  rotateX: 2,
  rotateY: 2,
  scale: 1.01,
  transition: { type: "tween", duration: 0.18, ease: "easeOut" },
  },
  tap: { scale: 0.98 },
}

export const magneticVariants: VariantsLike = {
  hover: {
  scale: 1.08,
  rotate: 0,
  transition: { type: "tween", duration: 0.22, ease: "easeInOut" },
  },
  tap: { scale: 0.9 },
}

export const badgeSpring: VariantsLike = { type: "tween", duration: 0.18 }
