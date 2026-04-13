"use client"

import { Mail, Github, Linkedin, FileText } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { containerVariants, itemVariants, magneticVariants } from "@/lib/animation"
import { SectionReveal } from "@/components/section-reveal"

const socials = [
  { href: "https://github.com/sanskarjaiswal2001", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/sanskarjaiswal", icon: Linkedin, label: "LinkedIn" },
  { href: "https://blog.sanskarjaiswal.dev", icon: FileText, label: "Blog" },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="contact" ref={ref} className="py-32 md:py-40 px-6">
      <SectionReveal className="max-w-3xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="section-label">05 — Contact</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2 uppercase"
          >
            Establish<span className="text-[#3092FF]">_</span>Connection
          </motion.h2>

          <motion.div variants={itemVariants} className="mb-8">
            <p className="font-mono text-sm text-muted-foreground/50">
              <span className="text-[#3092FF]">&gt;</span> ready to collaborate on your next project
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground mb-10 max-w-lg text-sm leading-relaxed"
          >
            I&apos;m always interested in discussing new opportunities, innovative projects,
            or just having a conversation about technology.
          </motion.p>

          {/* Email CTA — ctOS style */}
          <motion.a
            variants={itemVariants}
            href="mailto:sanskar.jaiswal.work@gmail.com"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-[#3092FF]/10 border border-[#3092FF]/30 text-[#3092FF] font-mono text-sm hover:bg-[#3092FF]/20 hover:border-[#3092FF]/50 transition-colors duration-150 mb-10 scan-hover"
          >
            <Mail className="w-4 h-4" />
            <span>sanskar.jaiswal.work@gmail.com</span>
          </motion.a>

          {/* Social icons */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-16">
            {socials.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-[#3092FF]/15 text-muted-foreground hover:text-[#3092FF] hover:border-[#3092FF]/30 hover:bg-[#3092FF]/5 transition-colors"
                variants={magneticVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Footer — ctOS style */}
        <div className="pt-8 border-t border-[#3092FF]/10 font-mono text-xs text-muted-foreground/40">
          <div className="flex items-center justify-between">
            <span>
              <span className="text-[#3092FF]/30">&gt;</span> &copy; {new Date().getFullYear()} Sanskar Jaiswal
            </span>
            <span className="text-[10px] text-[#3092FF]/20 tracking-widest">ctOS // PORTFOLIO v2.0</span>
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
