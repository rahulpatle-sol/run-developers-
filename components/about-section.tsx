"use client"

import { useRef, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, MapPin, Shield, Home, Phone, CheckCircle2 } from "lucide-react"
import { motion, useInView } from "framer-motion"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { icon: Shield, label: "RERA Regd.", value: "P-SNI-24-5050" },
  { icon: Building2, label: "Experience", value: "9+ Years" },
  { icon: Users, label: "Families", value: "500+" },
  { icon: Home, label: "Status", value: "T&CP Approved" },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#fafafa] dark:bg-[#0a0a0a] overflow-hidden"
    >
      {/* Premium Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src="/images/main-gate.png" // Ensure you use a high-quality gate image here
                alt="A.K. Nagar Entrance"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Quality Badge */}
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-2xl border border-white/30 backdrop-blur-md bg-white/10">
                <p className="text-white/80 text-sm font-medium tracking-widest uppercase mb-1">Developed By</p>
                <h3 className="text-white text-3xl font-bold tracking-tight">Run Developers</h3>
              </div>
            </div>

            {/* Experience Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 hidden md:block"
            >
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">100%</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-tighter">Legal Security</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div className="flex flex-col pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Badge className="bg-primary/10 text-primary hover:bg-primary/15 border-none px-4 py-1 mb-6 rounded-full text-xs font-semibold tracking-widest uppercase">
                The New Standard of Living
              </Badge>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Crafting Legacies in <span className="text-primary">Seoni.</span>
            </motion.h2>

            <motion.div 
              className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <p>
                <span className="text-foreground font-semibold underline decoration-primary/30">A.K. Nagar</span> isn’t just a residential colony; it’s a statement of prestige. Spread across a prime landscape near Bypass Chowk, we offer a sanctuary of order, safety, and modern aesthetics.
              </p>
              <p>
                Every plot is meticulously planned with <span className="text-foreground font-medium">40-feet wide internal roads</span>, lush green belts, and a commitment to infrastructure that lasts generations. 
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + (idx * 0.1) }}
                  className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-border hover:border-primary/50 transition-colors group"
                >
                  <stat.icon className="w-5 h-5 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA & Contact Section */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/25">
                Download Brochure
              </button>
              
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center bg-white dark:bg-zinc-900 shadow-sm">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Inquiry Line</p>
                  <a href="tel:9300160966" className="text-xl font-bold hover:text-primary transition-colors">+91 9300 160 966</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}