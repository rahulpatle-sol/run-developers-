"use client"

import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { motion, useInView } from "framer-motion"
import { CheckCircle2, Droplets, Zap, ShieldCheck, Trees, MapPin, Building2, Bold as Road, Circle } from "lucide-react"

const amenities = [
  {
    icon: ShieldCheck,
    title: "T.& C.P. Approved",
    description: "Fully approved by Town & Country Planning Authority",
  },
  {
    icon: MapPin,
    title: "Diversion Plots",
    description: "Legally cleared diversion plots with proper documentation",
  },
  {
    icon: Building2,
    title: "RERA Registered Project",
    description: "Registration No: P-SNI-24-5050, Valid till 2027",
  },
  {
    icon: Road,
    title: "Cemented Roads (C.C. Road)",
    description: "40-feet wide concrete roads throughout the colony",
  },
  {
    icon: Circle,
    title: "Underground Drainage System",
    description: "Modern underground sewage and drainage network",
  },
  {
    icon: Building2,
    title: "Attractive Entrance Gate",
    description: "Premium wooden entrance with golden lighting",
  },
  {
    icon: Zap,
    title: "Electricity Facility With Street Lights",
    description: "Complete electricity supply throughout the colony",
  },
  {
    icon: Droplets,
    title: "Continuous Water Supply",
    description: "24/7 water supply for every plot with bore well",
  },
  {
    icon: ShieldCheck,
    title: "Safe Boundary Wall",
    description: "Secure boundary wall around the entire colony",
  },
  {
    icon: Trees,
    title: "Garden And Open Space",
    description: "Landscaped gardens and community open spaces",
  },
]

export function AmenitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="amenities" ref={sectionRef} className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
            World-Class Amenities
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Premium <span className="text-gradient-navy">Colony Features</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience luxury living with best-in-class infrastructure and modern amenities at A.K. Nagar
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <motion.div
                className="glass-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 h-full group cursor-pointer"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <amenity.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {amenity.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{amenity.description}</p>
                <motion.div
                  className="mt-4 flex items-center text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <CheckCircle2 className="w-4 h-4 mr-1" />
                  <span>Included</span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="glass-card inline-block px-6 py-3 rounded-full">
            <p className="text-sm text-muted-foreground">
              All amenities are included in the plot price •{" "}
              <span className="text-primary font-semibold">No hidden charges</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
