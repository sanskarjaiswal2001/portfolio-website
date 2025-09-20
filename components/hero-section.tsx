"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { containerVariants as sharedContainer, itemVariants as sharedItem, magneticVariants as sharedMagnetic } from "@/lib/animation"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  const y = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = sharedContainer
  const itemVariants = sharedItem
  const magneticVariants = sharedMagnetic

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
  <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance"
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", damping: 20, stiffness: 300 },
            }}
          >
            Sanskar Jaiswal
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Software Engineer / Software Developer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance leading-relaxed"
          >
            Python Developer with{" "}
            <motion.span
              className="text-primary font-semibold"
              whileHover={{ scale: 1.1, color: "hsl(var(--accent))" }}
              transition={{ type: "spring", damping: 20, stiffness: 400 }}
            >
              2.6 years of experience
            </motion.span>{" "}
            delivering backend systems, automation frameworks, and AI-driven applications. Passionate about building
            scalable solutions that drive business impact.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", damping: 20, stiffness: 400 }}
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 group">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                  <motion.div
                    className="inline-block ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Button>
              </motion.div>
            </Link>

            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com/sanskarjaiswal2001"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                variants={magneticVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sanskarjaiswal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                variants={magneticVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://blog.sanskarjaiswal.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                variants={magneticVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FileText className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              href="/about"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors group"
            >
              <motion.span
                className="mr-2"
                whileHover={{ x: -5 }}
                transition={{ type: "spring", damping: 20, stiffness: 400 }}
              >
                Explore More
              </motion.span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
