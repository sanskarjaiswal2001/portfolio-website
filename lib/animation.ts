// Centralized animation variants & transitions used across the app
// Keep shapes loose (any) to avoid strict typing friction for motion props
export const pageVariants = {
  initial: { opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" },
  in: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  out: { opacity: 0, y: -30, scale: 1.05, filter: "blur(10px)" },
} as any

export const pageTransition = {
  type: "spring",
  damping: 25,
  stiffness: 300,
  mass: 0.8,
} as any

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
} as any

export const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", damping: 20, stiffness: 300, mass: 0.8 },
  },
} as any

export const cardHoverVariants = {
  hover: {
    y: -10,
    rotateX: 5,
    rotateY: 5,
    scale: 1.02,
    transition: { type: "spring", damping: 20, stiffness: 400 },
  },
  tap: { scale: 0.98 },
} as any

export const magneticVariants = {
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
} as any

export const badgeSpring = { type: "spring", damping: 20, stiffness: 400 } as any
