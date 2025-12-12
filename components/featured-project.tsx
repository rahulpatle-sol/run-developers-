"use client"

import React, { useRef, useEffect } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  MapPin,
  Ruler,
  Trees,
  Car,
  Home,
  Shield,
  Phone,
  Sparkles,
} from "lucide-react"

/**
 * Self-contained FeaturedProject + HoverTestCard + AboutSection file
 * Includes small local implementations for MagneticButton and TiltCard so you can drop this file in directly.
 *
 * Requirements:
 * - Tailwind CSS configured in your project
 * - framer-motion and lucide-react installed
 *
 * Paste this file into your components folder and import FeaturedProject where needed.
 */

/* ----------------------------- Helper UI pieces ---------------------------- */

function MagneticButton({ children }: { children: React.ReactNode }) {
  // Simple wrapper that adds a subtle hover transform
  return (
    <div className="inline-block transform-gpu hover:-translate-y-0.5 transition-transform">
      {children}
    </div>
  )
}

function TiltCard({ children }: { children: React.ReactNode }) {
  // Lightweight tilt wrapper (no external lib) — subtle hover lift
  return (
    <div className="transform-gpu hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      {children}
    </div>
  )
}

/* ----------------------------- Shared data ----------------------------- */

const projectFeatures = [
  { icon: Ruler, label: "Plot Sizes", value: "750 - 6600 Sq.ft" },
  { icon: Trees, label: "Green Area", value: "30% Open Space" },
  { icon: Car, label: "Road Width", value: "7.5m - 9m Wide" },
  { icon: Home, label: "Total Plots", value: "72+ Premium" },
]

const amenities = [
  "24/7 Security",
  "Street Lights",
  "Underground Drainage",
  "Wide CC Roads",
  "Garden Area",
  "Temple",
  "Children Park",
  "Community Hall",
]

/* ----------------------------- HoverTestCard ----------------------------- */

export function HoverTestCard() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative group">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/images/main-gate.png"
            alt="Preview"
            className="w-full h-64 sm:h-80 md:h-96 object-cover object-center"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28 }}
          className="pointer-events-none group-hover:pointer-events-auto absolute inset-4 rounded-2xl bg-white/6 backdrop-blur-md border border-white/10 shadow-lg flex items-center justify-center"
        >
          <div className="w-full h-full rounded-2xl p-6 flex flex-col items-start justify-between">
            <div className="flex w-full justify-between items-start">
              <div className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400/20 to-amber-400/10 text-yellow-300 text-xs font-semibold border border-yellow-300/10">
                Premium Test
              </div>
              <div className="text-xs text-white/70">Since 2015</div>
            </div>

            <div className="mt-2 mb-4">
              <h3 className="cyber-text text-2xl sm:text-3xl font-extrabold leading-tight text-white">
                Premium Plots
              </h3>
              <p className="mt-2 text-sm text-white/80 max-w-lg">
                Hover activated glass panel with a cyber text effect. Use this as a simple test overlay for mobile and desktop.
              </p>
            </div>

            <div className="w-full flex items-center justify-between">
              <div className="text-sm text-white/80">₹ Price on request</div>
              <button
                className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-900 font-semibold shadow-md hover:scale-[1.02] transition-transform"
                aria-label="Explore"
              >
                Explore
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-4 text-center text-xs text-muted-foreground">
        Hover or long-press (mobile) to reveal the glass overlay.
      </div>

      <style jsx>{`
        .cyber-text {
          background: linear-gradient(90deg, #00f5ff 0%, #7c4dff 35%, #ffdd55 70%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
        }
        .cyber-text::after {
          content: "";
          position: absolute;
          inset: 0;
          filter: blur(8px);
          opacity: 0.45;
          background: linear-gradient(90deg, rgba(0,245,255,0.25), rgba(124,77,255,0.25), rgba(255,221,85,0.25));
          z-index: -1;
          border-radius: 6px;
        }
        @keyframes cyberShift {
          0% { transform: translateX(0); opacity: 0.95; }
          50% { transform: translateX(2px); opacity: 1; }
          100% { transform: translateX(0); opacity: 0.95; }
        }
        .cyber-text {
          animation: cyberShift 2.6s ease-in-out infinite;
          text-shadow:
            0 1px 0 rgba(0,0,0,0.6),
            0 6px 18px rgba(124,77,255,0.12),
            0 2px 6px rgba(0,245,255,0.06);
        }
        .group:active .group-hover\\:pointer-events-auto {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  )
}

/* ----------------------------- AboutSection ----------------------------- */

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    // small entrance animation handled by framer-motion props in JSX
    // keep this hook in case you want to add GSAP later
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-card to-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative mx-auto w-full max-w-[720px] px-4 sm:px-0">
              <motion.div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/image.png"
                  alt="Run Developers - Construction Excellence"
                  className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                  <h3 className="text-white font-display text-2xl font-bold mb-1">Run Developers</h3>
                  <p className="text-white/90 text-sm">Building Dreams, Creating Landmarks</p>
                  <p className="text-white/70 text-xs mt-2">Since 2015 • Seoni, Madhya Pradesh</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 right-4 lg:-right-8 z-20"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <div className="glass-card p-5 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-display text-2xl font-bold text-foreground">Seoni, MP</div>
                      <div className="text-xs text-muted-foreground">Since 2015</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -left-4 w-full h-full bg-primary/10 rounded-2xl -z-10"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              />
            </div>
          </motion.div>

          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20 inline-block rounded-full">
              About Run Developers
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Elevate Your Lifestyle
              <br />
              <span className="text-gradient-red">at A.K. Nagar</span>
            </h2>

            <p className="font-display text-lg text-primary/80 mb-6 italic">Where Dreams Meet Reality</p>

            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-5">
              <strong className="text-foreground">Run Developers</strong> presents A.K. Nagar - a meticulously planned
              residential colony featuring <strong className="text-foreground">world-class infrastructure</strong>,{" "}
              <strong className="text-foreground">40-feet wide boulevards</strong>, and{" "}
              <strong className="text-foreground">verified land titles</strong>. Located at the prestigious Bypass
              Chowk, Seoni, Madhya Pradesh.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button className="btn-glass-navy text-white group inline-flex items-center px-4 py-2 rounded-md">
                <Sparkles className="w-4 h-4 mr-2" />
                Explore Master Plan
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-primary/30 hover:border-primary/50 group bg-transparent rounded-md">
                Virtual Site Tour
                <span className="ml-2">→</span>
              </button>
            </div>

            <div className="glass-card p-4 rounded-xl border border-primary/20 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center relative">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">Connect with Excellence</div>
                  <a href="tel:9300160966" className="font-display text-xl font-bold text-foreground hover:text-primary">
                    9300 160 966
                  </a>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    Developed with Excellence by <span className="font-semibold">Run Developers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:gap-4 mt-8">
              {[...projectFeatures, { icon: Shield, label: "Gated Community", value: "24/7" }].map(
                (feature, index) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 + index * 0.08 }}
                    className="feature-card"
                  >
                    <div className="p-4 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                      <feature.icon className="w-7 h-7 text-primary mb-2" />
                      <div className="font-display text-xl font-bold text-foreground">{feature.value}</div>
                      <div className="text-xs text-muted-foreground">{feature.label}</div>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------- FeaturedProject (Premium) ----------------------------- */

export function FeaturedProject() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.06, 1])
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="ak-nagar" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-background to-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <motion.div
          className="text-center mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 px-4 py-1.5 bg-gradient-to-r from-yellow-400/10 to-primary/8 text-yellow-500 border-yellow-200/30 inline-block rounded-full">
            Flagship Project
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 tracking-tight">
            <span className="text-gradient-red">A.K.</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-primary to-yellow-500">
              Nagar
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            Premium RERA approved residential colony at Bypass Chowk, Bithli, Seoni — your gateway to peaceful living
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex justify-center lg:justify-start"
          >
            <motion.div
              style={{ scale: imageScale }}
              className="relative w-full max-w-[780px] px-4 sm:px-0 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="relative rounded-2xl overflow-hidden border border-transparent">
                <img
                  src="/images/main-gate.png"
                  alt="A.K. Nagar Main Gate"
                  className="w-full h-[320px] sm:h-[380px] md:h-[480px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="absolute top-4 left-4">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-400 text-white px-3 py-1.5 rounded-full shadow-md">
                  <span className="text-xs font-semibold">Premium</span>
                  <span className="text-[10px] opacity-90">Limited Plots</span>
                </div>
              </div>

              <div className="absolute top-4 right-4 flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.45 }}
                  className="px-3 py-1.5 rounded-full bg-slate-800/70 text-white text-xs font-semibold backdrop-blur-sm border border-slate-700/30"
                >
                  RERA: P-SNI-24-5050
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.55 }}
                  className="px-3 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-semibold backdrop-blur-sm border border-emerald-500/30"
                >
                  T&CP Approved
                </motion.div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-white mb-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">Kh No. 218/2, 214/1, Village Bithli, Seoni</span>
                  </div>
                </div>
                <div className="text-white/80 text-xs">Total Area: 2.040 Hectare</div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.75 }}
                whileHover={{ scale: 1.04 }}
                className="hidden sm:block absolute -bottom-8 lg:-right-10 right-6 z-20"
              >
                <div className="glass-card p-3 rounded-xl shadow-xl border border-yellow-200/10 bg-gradient-to-b from-white/6 to-white/3">
                  <img src="/images/ak-logo.png" alt="AK Nagar Logo" className="w-20 h-20 object-contain" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: textY }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-slate-900 flex items-center justify-center shadow-md">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">Bank Loan Available</h3>
                  <p className="text-sm text-muted-foreground">Easy EMI options from all major banks</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {projectFeatures.map((feature, idx) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.35 + idx * 0.08 }}
                >
                  <TiltCard>
                    <div className="p-4 rounded-xl bg-gradient-to-b from-white/5 to-white/3 border border-slate-700/20 hover:shadow-lg transition-all">
                      <feature.icon className="w-6 h-6 text-yellow-400 mb-2" />
                      <div className="font-display text-lg font-semibold text-foreground">{feature.value}</div>
                      <div className="text-xs text-muted-foreground">{feature.label}</div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mb-6"
            >
              <h4 className="font-display text-lg font-bold text-foreground mb-3">Amenities</h4>
              <div className="flex flex-wrap gap-2">
                {amenities.map((a, i) => (
                  <motion.span
                    key={a}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.65 + i * 0.03 }}
                    className="px-3 py-1.5 rounded-full bg-gradient-to-r from-white/3 to-white/6 text-foreground text-xs font-medium border border-slate-700/10"
                  >
                    {a}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.85 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <MagneticButton>
                <button className="bg-gradient-to-r from-yellow-500 to-amber-400 text-slate-900 px-6 py-3 rounded-lg shadow-lg hover:scale-[1.01] transition-transform inline-flex items-center gap-2">
                  View Plot Layout
                  <ArrowRight className="w-4 h-4" />
                </button>
              </MagneticButton>

              <MagneticButton>
                <button className="px-6 py-3 border-slate-600/30 hover:border-slate-500 bg-transparent rounded-lg inline-flex items-center justify-center">
                  Download Brochure
                </button>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProject
