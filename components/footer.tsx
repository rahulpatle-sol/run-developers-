"use client"

import { useRef } from "react"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp, Mail, Phone } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { MagneticButton } from "./magnetic-button"

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "A.K. Nagar", href: "#projects" },
    { name: "Amenities", href: "#amenities" },
    { name: "Certifications", href: "#certifications" },
  ],
  support: [
    { name: "Contact Us", href: "#contact" },
    { name: "Site Visit", href: "#" },
    { name: "Plot Booking", href: "#plot-layout" },
    { name: "Documentation", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "RERA Info", href: "#certifications" },
    { name: "Refund Policy", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(footerRef, { once: true, margin: "-100px" })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer ref={footerRef} className="bg-background relative">
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </motion.div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.a href="#home" className="flex items-center gap-2 mb-6 group" whileHover={{ scale: 1.05 }}>
              <motion.div
                className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center neon-glow"
                whileHover={{
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
                  rotate: [0, -5, 5, 0],
                }}
              >
                <span className="text-primary-foreground font-bold text-lg">R</span>
              </motion.div>
              <span className="font-display text-xl font-bold text-foreground tracking-tight">
                Run<span className="text-primary">Developers</span>
              </span>
            </motion.a>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-sm">
              Building dreams at A.K. Nagar, Seoni, MP. RERA registered premium residential plots with T&CP approval.
            </p>

            <div className="space-y-2 mb-6">
              <a
                href="tel:9300160966"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span className="font-semibold">9300 160 966</span>
              </a>
              <a
                href="mailto:rundev@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>rundev@gmail.com</span>
              </a>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <MagneticButton strength={0.3}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  </MagneticButton>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {[
            { title: "Company", links: footerLinks.company },
            { title: "Support", links: footerLinks.support },
            { title: "Legal", links: footerLinks.legal },
          ].map((column, columnIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + columnIndex * 0.1, duration: 0.6 }}
            >
              <h3 className="font-semibold text-foreground mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + columnIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <a
                      href={link.href}
                      data-text={link.name}
                      className="glitch-link text-muted-foreground hover:text-foreground transition-colors relative group"
                    >
                      {link.name}
                      <motion.span
                        className="absolute -bottom-0.5 left-0 h-px bg-primary"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm text-muted-foreground">
            © 2025 Run Developers. All rights reserved. | RERA Reg: MP/XXXX/XXXX
          </p>

          <MagneticButton>
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to top
              <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                <ArrowUp className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </MagneticButton>
        </motion.div>
      </div>
    </footer>
  )
}
