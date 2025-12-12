"use client"

import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Shield, BadgeCheck, Clock, Award, Headphones, Eye } from "lucide-react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { TiltCard } from "./parallax-section"

const reasons = [
  {
    icon: Shield,
    title: "Verified Land Titles",
    description: "Every property comes with thoroughly verified documentation and clear legal titles.",
  },
  {
    icon: BadgeCheck,
    title: "Zero Hidden Costs",
    description: "Complete transparency in pricing. What you see is exactly what you pay.",
  },
  {
    icon: Clock,
    title: "Fast Development",
    description: "Efficient project management ensures timely delivery without compromising quality.",
  },
  {
    icon: Award,
    title: "Award-Winning Design",
    description: "Our architectural designs have won multiple national and international awards.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support to address all your queries and concerns.",
  },
  {
    icon: Eye,
    title: "100% Transparency",
    description: "Complete visibility into every aspect of your project from start to finish.",
  },
]

export function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const dot1Y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const dot2Y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const dot3Y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="why-us" ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute top-20 left-10 w-3 h-3 bg-accent rounded-full" style={{ y: dot1Y }} />
        <motion.div className="absolute top-40 right-20 w-4 h-4 bg-primary/30 rounded-full" style={{ y: dot2Y }} />
        <motion.div className="absolute bottom-20 left-1/4 w-2 h-2 bg-accent/50 rounded-full" style={{ y: dot3Y }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-1">
              Why Choose Us
            </Badge>
          </motion.div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Built on Trust,
            <br />
            <span className="text-accent">Driven by Excellence</span>
          </h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We don't just build properties; we build lasting relationships founded on transparency, quality, and
            unwavering commitment to your dreams.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                delay: 0.2 + index * 0.1,
                duration: 0.6,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              <TiltCard>
                <motion.div
                  className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-500 h-full"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  {/* Icon with animation */}
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <reason.icon className="w-7 h-7 text-accent" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>

                  {/* Animated accent line */}
                  <motion.div
                    className="h-0.5 bg-accent mt-6"
                    initial={{ width: 0 }}
                    whileHover={{ width: 48 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
