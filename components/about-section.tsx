"use client"

import { useRef, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, MapPin, Shield, Home, Phone, Sparkles } from "lucide-react"
import { motion, useInView } from "framer-motion"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const features = [
  { icon: Shield, label: "RERA Registered", value: "100%" },
  { icon: Building2, label: "Projects", value: "15+" },
  { icon: Users, label: "Happy Families", value: "500+" },
  { icon: Home, label: "Plots Delivered", value: "1000+" },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
          y: -100,
          scale: 1.1,
        })
      }

      if (contentRef.current) {
        const textElements = contentRef.current.querySelectorAll("h2, p, .feature-card")
        gsap.from(textElements, {
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          y: 80,
          opacity: 0,
          rotationX: -20,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-card to-background relative overflow-hidden"
    >
      {/* Background Decorations */}
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Constrain width and center on small screens */}
            <div className="relative mx-auto w-full max-w-[720px] px-4 sm:px-0">
              <motion.div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/ak-logo.png"
                  alt="Run Developers - Construction Excellence"
                  className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                  <h3 className="text-white font-display text-2xl font-bold mb-1">Run Developers</h3>
                  <p className="text-white/90 text-sm">Building Dreams, Creating Landmarks</p>
                  <p className="text-white/70 text-xs mt-2">Since 2015 • Seoni, Madhya Pradesh</p>
                </div>
              </motion.div>

              {/* Floating stat card - responsive offsets so it doesn't break mobile layout */}
              <motion.div
                className="absolute -bottom-6 right-4 lg:-right-8 z-20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="glass-card p-5 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <motion.div
                        className="font-display text-2xl font-bold text-foreground"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        Seoni, MP
                      </motion.div>
                      <div className="text-xs text-muted-foreground">Since 2015</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Background decoration */}
              <motion.div
                className="absolute -top-4 -left-4 w-full h-full bg-primary/10 rounded-2xl -z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <Badge variant="secondary" className="mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
                About Run Developers
              </Badge>
            </motion.div>

            <motion.h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Elevate Your Lifestyle
              <br />
              <span className="text-gradient-red">at A.K. Nagar</span>
            </motion.h2>

            <motion.p
              className="font-display text-lg text-primary/80 mb-6 italic"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.45 }}
            >
              Where Dreams Meet Reality
            </motion.p>

            <motion.p
              className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <strong className="text-foreground">Run Developers</strong> presents A.K. Nagar - a meticulously planned
              residential colony featuring <strong className="text-foreground">world-class infrastructure</strong>,{" "}
              <strong className="text-foreground">40-feet wide boulevards</strong>, and{" "}
              <strong className="text-foreground">verified land titles</strong>. Located at the prestigious Bypass
              Chowk, Seoni, Madhya Pradesh.
            </motion.p>

            <motion.p
              className="text-muted-foreground leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              With <strong className="text-foreground">T&CP approval</strong>,{" "}
              <strong className="text-foreground">RERA registration (P-SNI-24-5050)</strong>, and{" "}
              <strong className="text-foreground">bank loan facilities</strong>, your dream home is now within reach.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <button className="btn-glass-navy text-white group inline-flex items-center px-4 py-2 rounded-md">
                <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Explore Master Plan
              </button>
              <button
                aria-pressed="false"
                className="inline-flex items-center px-4 py-2 border border-primary/30 hover:border-primary/50 group bg-transparent rounded-md"
              >
                Virtual Site Tour
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.span>
              </button>
            </motion.div>

            <motion.div
              className="glass-card p-4 rounded-xl border border-primary/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center relative"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.4)",
                      "0 0 0 10px rgba(59, 130, 246, 0)",
                      "0 0 0 0 rgba(59, 130, 246, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Phone className="w-6 h-6 text-primary" />
                </motion.div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">Connect with Excellence</div>
                  <a
                    href="tel:9300160966"
                    className="font-display text-xl font-bold text-foreground hover:text-primary transition-colors"
                  >
                    9300 160 966
                  </a>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    Developed with Excellence by{" "}
                    <span className="font-semibold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                      Run Developers
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-3 lg:gap-4 mt-8">
              {[
                ...features,
                { icon: Shield, label: "Gated Community", value: "24/7" },
                { icon: Building2, label: "Smart Infrastructure", value: "Modern" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 30, rotateX: -15 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  className="feature-card"
                >
                  <div className="p-4 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <motion.div whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }} transition={{ duration: 0.5 }}>
                      <feature.icon className="w-7 h-7 text-primary mb-2" />
                    </motion.div>
                    <div className="font-display text-xl font-bold text-foreground">{feature.value}</div>
                    <div className="text-xs text-muted-foreground">{feature.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
