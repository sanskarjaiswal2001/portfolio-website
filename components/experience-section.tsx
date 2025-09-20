"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    title: "Software Engineer",
    company: "Betsol",
    location: "Bangalore, IN",
    period: "Jan 2025 - Present",
    technologies: [
      "Python",
      "Django REST Framework",
      "Generative AI",
      "Model Context Protocol",
      "Prompt Engineering",
      "Podman",
      "React",
      "Tailwind",
    ],
    highlights: [
      "Designed and deployed a scalable RAG pipeline in Python using Azure OpenAI and FastMCP, achieving sub-2s query responses on 3M+ records and cutting escalations by 40%",
      "Built a Python-integrated React+Grafana dashboard for real-time monitoring of 11 global performance metrics, proactively detecting outages such as Office 365 disruptions",
      "Architected Python tool to monitor 100+ websites, replacing legacy tool, reducing downtime by 80%, and saving $40,000/month",
      "Created a Python LlamaIndex adapter layer and agent tracing, improving observability and standardizing agent workflows across 3+ tools",
      "Reviewed and maintained high-quality Python code by performing 100+ pull request reviews",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "Betsol",
    location: "Bangalore, IN",
    period: "Jul 2023 - Jan 2025",
    technologies: ["Python", "Django", "MongoDB", "Nginx", "RPAFramework", "Docker", "MSSQL", "Git"],
    highlights: [
      "Migrated from BluePrism to a python based in-house platform, saving $1M+ annually",
      "Developed 3+ core Python modules for the automation platform, improving observability and debugging",
      "Engineered 50+ Python automations for 11+ clients, reducing manual operations by 90% (600+ hours/year saved)",
      "Built an audit automation in Python to process 10M+ financial records, increasing compliance accuracy and reducing manual effort",
      "Implemented a custom Python-based retry mechanism for unreliable endpoints, boosting nightly batch success rates by 25%",
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  } as any

  const itemVariants = {
    hidden: { opacity: 0, y: 60, rotateX: 15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
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
    tap: {},
  } as any

  return (
    <section className="py-24 px-6 min-h-screen bg-secondary/20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center"
          >
            Professional Experience
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div variants={cardVariants} whileHover="hover" whileTap="tap">
                  <Card className="p-8 liquid-glass-card transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div>
                        <motion.h3
                          className="text-2xl font-bold text-foreground mb-2"
                          whileHover={{
                            x: 5,
                            transition: { type: "spring", damping: 20, stiffness: 400 },
                          }}
                        >
                          {exp.title}
                        </motion.h3>
                        <motion.p
                          className="text-lg text-primary font-semibold"
                          whileHover={{
                            x: 3,
                            transition: { type: "spring", damping: 20, stiffness: 400 },
                          }}
                        >
                          {exp.company} - {exp.location}
                        </motion.p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="text-muted-foreground font-medium">{exp.period}</span>
                      </div>
                    </div>

                    <motion.div
                      className="flex flex-wrap gap-2 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: index * 0.1 + techIndex * 0.03 + 0.4,
                            type: "spring",
                            damping: 20,
                            stiffness: 400,
                          }}
                          whileHover={{
                            transition: { type: "spring", damping: 15, stiffness: 400 },
                          }}
                        >
                          <Badge variant="secondary" className="bg-secondary/80 text-secondary-foreground">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>

                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          className="text-muted-foreground leading-relaxed flex items-start"
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.1 + idx * 0.05 + 0.5,
                            type: "spring",
                            damping: 20,
                            stiffness: 300,
                          }}
                          whileHover={{
                            x: 5,
                            transition: { type: "spring", damping: 20, stiffness: 400 },
                          }}
                        >
                          <motion.span
                            className="text-primary mr-3 mt-2"
                            whileHover={{
                              transition: { type: "spring", damping: 15, stiffness: 400 },
                            }}
                          >
                            •
                          </motion.span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
