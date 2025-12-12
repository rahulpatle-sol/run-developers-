"use client"

import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Ruler, Trees, Car, Home, Shield } from "lucide-react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { MagneticButton } from "./magnetic-button"
import { TiltCard } from "./parallax-section"

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

export function FeaturedProject() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1])
  const textY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section id="ak-nagar" ref={sectionRef} className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="featured-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#featured-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 bg-secondary/10 text-secondary border-secondary/20">
            Flagship Project
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient-red">A.K.</span> <span className="text-gradient-navy">Nagar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg">
            Premium RERA approved residential colony at Bypass Chowk, Bithli, Seoni - Your gateway to peaceful living
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ scale: imageScale }}>
              <img
                src="/images/main-gate.png"
                alt="A.K. Nagar Main Gate"
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Overlay badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 }}
                  className="px-3 py-1.5 rounded-full bg-green-500 text-white text-xs font-bold"
                >
                  T&CP Approved
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 }}
                  className="px-3 py-1.5 rounded-full bg-primary text-white text-xs font-bold"
                >
                  RERA: P-SNI-24-5050
                </motion.div>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-white mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">Kh No. 218/2, 214/1, Village Bithli, Seoni</span>
                </div>
                <div className="text-white/80 text-xs">Total Area: 2.040 Hectare</div>
              </div>
            </motion.div>

            {/* Floating AK Nagar Logo */}
            <motion.div
              className="absolute -bottom-6 -right-4 lg:-right-8 z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="glass-card p-3 rounded-xl shadow-xl">
                <img src="/images/ak-logo.png" alt="AK Nagar Logo" className="w-20 h-20 object-contain" />
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div style={{ y: textY }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">Bank Loan Available</h3>
                  <p className="text-sm text-muted-foreground">Easy EMI options from all major banks</p>
                </div>
              </div>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {projectFeatures.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <TiltCard>
                    <div className="p-4 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/30 transition-all">
                      <feature.icon className="w-6 h-6 text-primary mb-2" />
                      <div className="font-display text-lg font-bold text-foreground">{feature.value}</div>
                      <div className="text-xs text-muted-foreground">{feature.label}</div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>

            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <h4 className="font-display text-lg font-bold text-foreground mb-4">Amenities</h4>
              <div className="flex flex-wrap gap-2">
                {amenities.map((amenity, i) => (
                  <motion.span
                    key={amenity}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + i * 0.05 }}
                    className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                  >
                    {amenity}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton>
                <Button className="btn-glass-navy text-white px-6 py-5 group">
                  View Plot Layout
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  variant="outline"
                  className="px-6 py-5 border-secondary/30 hover:border-secondary/50 bg-transparent"
                >
                  Download Brochure
                </Button>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
