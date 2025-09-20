"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollY } = useScroll()

  const y = useTransform(scrollY, [0, 1000], [0, -200])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  } as any

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
        mass: 0.7,
      },
    },
  } as any

  const cardVariants = {
    hover: {
      y: -2,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 400,
      },
    },
    tap: { scale: 0.98 },
  } as any

  return (
    <section className="py-24 px-6 min-h-screen flex items-center relative overflow-hidden" ref={ref}>
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
          >
            About Me
          </motion.h2>

          <motion.div variants={itemVariants} className="prose prose-lg prose-invert max-w-none">
            <motion.p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
              I'm a passionate{" "}
              <motion.span
                className="text-primary font-semibold"
                whileHover={{
                  scale: 1.1,
                  color: "hsl(var(--accent))",
                  transition: { type: "spring", damping: 15, stiffness: 400 },
                }}
              >
                Python Developer
              </motion.span>{" "}
              with expertise in building scalable backend systems, automation frameworks, and cutting-edge AI
              applications. My journey in software engineering has been driven by a love for clean, maintainable code
              and high-performance system design.
            </motion.p>

            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 mt-16">
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                className="p-6 rounded-lg liquid-glass-card"
                style={{ perspective: 1000 }}
              >
                <motion.h3
                  className="text-xl font-semibold text-foreground mb-4"
                  whileHover={{
                    x: 5,
                    transition: { type: "spring", damping: 20, stiffness: 400 },
                  }}
                >
                  Technical Expertise
                </motion.h3>
                <p className="text-muted-foreground leading-relaxed">
                  Specialized in Python, Django, and REST API development. Experienced with AI technologies including
                  Azure OpenAI, FastMCP, and building scalable RAG pipelines. Proficient in database design, automation
                  frameworks, and DevOps practices.
                </p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                className="p-6 rounded-lg liquid-glass-card"
                style={{ perspective: 1000 }}
              >
                <motion.h3
                  className="text-xl font-semibold text-foreground mb-4"
                  whileHover={{
                    x: 5,
                    transition: { type: "spring", damping: 20, stiffness: 400 },
                  }}
                >
                  Impact & Results
                </motion.h3>
                <p className="text-muted-foreground leading-relaxed">
                  Delivered solutions that saved over{" "}
                  <motion.span
                    className="text-primary font-semibold"
                    whileHover={{
                      scale: 1.1,
                      transition: { type: "spring", damping: 15, stiffness: 400 },
                    }}
                  >
                    $1M annually
                  </motion.span>
                  , reduced system downtime by{" "}
                  <motion.span
                    className="text-primary font-semibold"
                    whileHover={{
                      scale: 1.1,
                      transition: { type: "spring", damping: 15, stiffness: 400 },
                    }}
                  >
                    80%
                  </motion.span>
                  , and automated processes saving{" "}
                  <motion.span
                    className="text-primary font-semibold"
                    whileHover={{
                      scale: 1.1,
                      transition: { type: "spring", damping: 15, stiffness: 400 },
                    }}
                  >
                    600+ hours/year
                  </motion.span>
                  . Known for delivering production-ready solutions aligned to business goals.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
