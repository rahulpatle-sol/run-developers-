"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Play, MapPin, Phone, BadgeCheck } from "lucide-react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MagneticButton } from "./magnetic-button"
import { RevealText, StaggerText } from "./cinematic-text"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  const bgY = useTransform(scrollY, [0, 1000], [0, 300])
  const bgScale = useTransform(scrollY, [0, 1000], [1, 1.15])
  const contentY = useTransform(scrollY, [0, 500], [0, 150])
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0])

  const smoothBgY = useSpring(bgY, { stiffness: 50, damping: 20 })
  const smoothContentY = useSpring(contentY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    if (!heroRef.current) return

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = Number.parseFloat(el.dataset.parallax || "0.5")
        gsap.to(el, {
          y: () => window.innerHeight * speed * 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        })
      })

      gsap.to("[data-rotate]", {
        rotateY: 10,
        rotateX: -3,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const stats = [
    { value: 72, suffix: "+", label: "Premium Plots" },
    { value: 2024, suffix: "", label: "RERA Approved" },
    { value: 500, suffix: "+", label: "Happy Families" },
  ]

  const certifications = [
    { label: "T&CP Approved", color: "bg-green-500" },
    { label: "RERA: P-SNI-24-5050", color: "bg-primary" },
    { label: "Bank Loan Available", color: "bg-secondary" },
  ]

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background - A.K. Nagar Main Gate */}
      <motion.div className="absolute inset-0 z-0" style={{ y: smoothBgY, scale: bgScale }}>
        <img
          src="/images/image.png"
          alt="A.K. Nagar Main Gate - Premium Entry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </motion.div>

      {/* Floating decoration elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-primary/10 blur-xl"
        data-parallax="0.3"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
      <motion.div
        className="absolute top-1/3 right-16 w-36 h-36 rounded-full bg-secondary/10 blur-xl"
        data-parallax="0.2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-20 h-20 rounded-full bg-primary/5 blur-lg"
        data-parallax="0.4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <svg className="w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Content */}
      <motion.div
        ref={textRef}
        className="relative z-10 container mx-auto px-4 lg:px-6 text-center"
        style={{ y: smoothContentY, opacity: contentOpacity }}
      >
        <div className="max-w-5xl mx-auto perspective-1000" data-rotate>
          {/* Certifications badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card"
              >
                <BadgeCheck className={`w-4 h-4 text-white ${cert.color} rounded-full p-0.5`} />
                <span className="text-xs font-semibold text-foreground">{cert.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Location tag */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-6"
          >
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-foreground">Bithli, Seoni, Madhya Pradesh</span>
          </motion.div>

          {/* Main heading */}
          <div className="mb-6">
            <RevealText className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Welcome to A.K. Nagar
            </RevealText>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="mt-2"
            >
              <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                by <span className="text-gradient-red">Run</span> <span className="text-gradient-navy">Developers</span>
              </span>
            </motion.div>
          </div>

          <StaggerText
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
            delay={0.7}
          >
            Premium RERA approved residential plots at Bypass Chowk, Seoni. Your dream home awaits with verified land
            titles, wide roads, beautiful landscaping, and all modern amenities. Bank loan facility available.
          </StaggerText>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <MagneticButton>
              <Button
                size="lg"
                className="btn-glass-navy text-white px-8 py-6 text-base shadow-xl hover:shadow-2xl transition-all duration-300 group neon-glow-navy"
              >
                <span className="flex items-center">
                  View Plot Layout
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-secondary/40 hover:border-secondary/60 px-8 py-6 text-base bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 group"
              >
                <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform text-secondary" />
                Watch Site Tour
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Phone CTA */}
          <motion.a
            href="tel:9300160966"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="inline-flex items-center gap-3 text-lg font-bold text-foreground hover:text-primary transition-colors group"
          >
            <motion.div
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Phone className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-2xl">9300 160 966</span>
          </motion.a>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 pt-12 border-t border-border/30"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="text-center"
              >
                <CountUp value={stat.value} suffix={stat.suffix} delay={1.5 + i * 0.2} />
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  )
}

function CountUp({ value, suffix, delay }: { value: number; suffix: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const start = 0
    const duration = 2000
    const startTime = performance.now() + delay * 1000

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      if (elapsed < 0) {
        requestAnimationFrame(animate)
        return
      }

      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(start + (value - start) * easeOut)

      if (ref.current) {
        ref.current.textContent = `${current}${suffix}`
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [value, suffix, delay])

  return (
    <div ref={ref} className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2">
      0{suffix}
    </div>
  )
}
