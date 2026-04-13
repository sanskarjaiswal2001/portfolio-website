// Centralized animation variants & transitions used across the app
import type { Variants, Transition } from "framer-motion"

// -- Page-level --
export const pageVariants: Variants = {
  initial: { opacity: 0, y: 18, scale: 0.98, filter: "blur(6px)" },
  in: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  out: { opacity: 0, y: -18, scale: 1.02, filter: "blur(6px)" },
}

export const pageTransition: Transition = {
  type: "tween",
  duration: 0.45,
  ease: "easeOut",
}

// -- Container stagger --
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

// -- Individual items --
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.32, ease: "easeOut" },
  },
}

// -- Card hover --
export const cardHoverVariants: Variants = {
  hover: {
    y: -6,
    rotateX: 2,
    rotateY: 2,
    scale: 1.01,
    transition: { type: "tween", duration: 0.18, ease: "easeOut" },
  },
  tap: { scale: 0.98 },
}

// -- Magnetic button --
export const magneticVariants: Variants = {
  hover: {
    scale: 1.08,
    rotate: 0,
    transition: { type: "tween", duration: 0.22, ease: "easeInOut" },
  },
  tap: { scale: 0.9 },
}

export const badgeSpring: Transition = { type: "tween", duration: 0.18 }

// -- Scroll-triggered section reveal --
export const sectionRevealVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.6, ease: "easeOut" },
  },
}

// -- Bento tile stagger --
export const bentoContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

export const bentoTileVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.4, ease: "easeOut" },
  },
}

// -- Timeline node --
export const timelineNodeVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.5, ease: "easeOut" },
  },
}

// -- Slide in from side (for badges in timeline) --
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.3, ease: "easeOut" },
  },
}

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.3, ease: "easeOut" },
  },
}

// -- Character stagger for kinetic text --
export const charContainerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.1 },
  },
}

export const charVariants: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

// -- Section parallax reveal --
export const sectionParallaxVariants: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}
