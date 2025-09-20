"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Github, Linkedin, FileText, Send } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

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
    hidden: { opacity: 0, y: 40, scale: 0.9 },
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

  const magneticVariants = {
    hover: {
      scale: 1.05,
      y: -3,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 400,
      },
    },
    tap: { scale: 0.95 },
  } as any

  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, 0],
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 400,
        rotate: {
          duration: 0.6,
          ease: "easeInOut",
        },
      },
    },
    tap: { scale: 0.9 },
  } as any

  return (
    <section className="py-24 px-6 min-h-screen" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", damping: 20, stiffness: 300 },
              }}
            >
              Let's Work Together
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              I'm always interested in discussing new opportunities, innovative projects, or just having a conversation
              about technology and software engineering.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <motion.h3
                  className="text-xl font-semibold text-foreground mb-6"
                  whileHover={{
                    x: 5,
                    transition: { type: "spring", damping: 20, stiffness: 400 },
                  }}
                >
                  Get in Touch
                </motion.h3>

                <div className="space-y-4">
                  <motion.a
                    href="mailto:sanskar.jaiswal.work@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors group"
                    variants={magneticVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <motion.div
                      className="p-2 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ type: "spring", damping: 15, stiffness: 300 }}
                    >
                      <Mail className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">sanskar.jaiswal.work@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+91-7719040098"
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors group"
                    variants={magneticVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <motion.div
                      className="p-2 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ type: "spring", damping: 15, stiffness: 300 }}
                    >
                      <Phone className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+91 7719040098</p>
                    </div>
                  </motion.a>
                </div>
              </div>

              <div>
                <motion.h3
                  className="text-xl font-semibold text-foreground mb-6"
                  whileHover={{
                    x: 5,
                    transition: { type: "spring", damping: 20, stiffness: 400 },
                  }}
                >
                  Connect Online
                </motion.h3>

                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/sanskarjaiswal2001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-secondary hover:bg-secondary/80 transition-colors group"
                    variants={socialVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/sanskarjaiswal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-secondary hover:bg-secondary/80 transition-colors group"
                    variants={socialVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
                  </motion.a>
                  <motion.a
                    href="https://blog.sanskarjaiswal.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-secondary hover:bg-secondary/80 transition-colors group"
                    variants={socialVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <FileText className="w-6 h-6 group-hover:text-primary transition-colors" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { type: "spring", damping: 20, stiffness: 300 },
                }}
              >
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        className="space-y-2"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                      >
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </motion.div>
                      <motion.div
                        className="space-y-2"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                      >
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </motion.div>
                    </div>

                    <motion.div
                      className="space-y-2"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    >
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </motion.div>

                    <motion.div
                      className="space-y-2"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    >
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Project Discussion" required />
                    </motion.div>

                    <motion.div
                      className="space-y-2"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    >
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project or just say hello..."
                        rows={5}
                        required
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", damping: 20, stiffness: 400 }}
                    >
                      <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                        <motion.div
                          className="inline-block mr-2"
                          animate={{ rotate: [0, 15, -15, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        >
                          <Send className="w-4 h-4" />
                        </motion.div>
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-24 pt-8 border-t border-border/50 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
      >
        <motion.p
          className="text-muted-foreground"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          © 2025 Sanskar Jaiswal. Built with Next.js and Tailwind CSS.
        </motion.p>
      </motion.div>
    </section>
  )
}
