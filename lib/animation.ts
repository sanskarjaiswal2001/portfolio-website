// Centralized animation variants & transitions used across the app
// Keep shapes loose (any) to avoid strict typing friction for motion props
export type VariantsLike = Record<string, unknown>

export const pageVariants: VariantsLike = {
  initial: { opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" },
  in: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  out: { opacity: 0, y: -30, scale: 1.05, filter: "blur(10px)" },
}

export const pageTransition: VariantsLike = {
  type: "spring",
  damping: 25,
  stiffness: 300,
  mass: 0.8,
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
    transition: { type: "spring", damping: 20, stiffness: 300, mass: 0.8 },
  },
}

export const cardHoverVariants: VariantsLike = {
  hover: {
    y: -10,
    rotateX: 5,
    rotateY: 5,
    scale: 1.02,
    transition: { type: "spring", damping: 20, stiffness: 400 },
  },
  tap: { scale: 0.98 },
}

export const magneticVariants: VariantsLike = {
  hover: {
    scale: 1.15,
    rotate: [0, -5, 5, 0],
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 400,
      rotate: { duration: 0.6, ease: "easeInOut" },
    },
  },
  tap: { scale: 0.9 },
}

export const badgeSpring: VariantsLike = { type: "spring", damping: 20, stiffness: 400 }
