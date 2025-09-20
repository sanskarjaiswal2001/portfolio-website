"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { containerVariants as sharedContainer, itemVariants as sharedItem, cardHoverVariants as sharedCardHover, badgeSpring } from "@/lib/animation"
import Image from "next/image"
import { useRef } from "react"

import guardianImg from "../assets/guardian-modified.png"
import ragImg from "../assets/RAG-pipeline.png"
import automationImg from "../assets/automation-platform.png"
import monitoringImg from "../assets/monitoring-system.png"

const projects = [
  {
    title: "Guardian Modified",
    description:
      "Implemented token-based access control in GTA V P2P network for 1,000+ users. Ready to deploy on GCP Cloud Functions with Firebase integration.",
    technologies: ["Python", "Firebase", "GCP", "Network Security"],
    github: "https://github.com/sanskarjaiswal2001/guardian-modified",
    image: guardianImg,
  },
  {
    title: "RAG Pipeline System",
    description:
      "Scalable RAG pipeline using Azure OpenAI and FastMCP, achieving sub-2s query responses on 3M+ records. Built for enterprise-scale knowledge retrieval.",
    technologies: ["Python", "Azure OpenAI", "FastMCP", "LangChain"],
    image: ragImg,
  },
  {
    title: "Automation Platform",
    description:
      "Python-based automation platform replacing BluePrism, saving $1M+ annually. Includes 50+ automations across 11+ enterprise clients.",
    technologies: ["Python", "Django", "MongoDB", "Docker"],
    image: automationImg,
  },
  {
    title: "Monitoring System",
    description:
      "Real-time monitoring tool for 100+ websites with Python-integrated React+Grafana dashboard. Reduced downtime by 80% and saves $40,000/month.",
    technologies: ["Python", "React", "Grafana", "Prometheus"],
    image: monitoringImg,
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = sharedContainer
  const itemVariants = sharedItem
  const cardHoverVariants = sharedCardHover

  return (
    <section className="py-24 px-6 min-h-screen" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  variants={cardHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{ perspective: 1000 }}
                >
                  <Card className="group overflow-hidden liquid-glass-card hover:bg-card/70 transition-all duration-300 h-full pt-0 min-h-[380px] md:min-h-[420px] flex flex-col">
                    <div className="rounded-t-xl overflow-hidden">
                      <motion.div
                        className="aspect-video relative flex-shrink-0"
                        whileHover={{
                          scale: 1.03,
                          transition: { type: "spring", damping: 20, stiffness: 300 },
                        }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                        <motion.div
                          className="absolute inset-0 bg-primary/10"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </div>

                    <div className="pt-6 px-6 pb-6 flex-1 overflow-hidden">
                      <motion.h3
                        className="text-xl font-bold text-foreground mb-3"
                        whileHover={{
                          x: 5,
                          transition: { type: "spring", damping: 20, stiffness: 400 },
                        }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-5">{project.description}</p>

                      <motion.div className="flex flex-wrap gap-2 mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 + 0.3 }}>
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + techIndex * 0.05 + 0.4, ...badgeSpring }}
                            whileHover={{
                              scale: 1.1,
                              y: -2,
                              transition: { type: "spring", damping: 15, stiffness: 400 },
                            }}
                          >
                            <Badge variant="outline" className="border-border/50">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>

                      <motion.div
                        className="flex gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        {project.github && (
                          <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", damping: 20, stiffness: 400 }}
                          >
                            <Button variant="outline" size="sm" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </a>
                            </Button>
                          </motion.div>
                        )}
                        {/* Learn More button removed per request */}
                      </motion.div>
                    </div>
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
