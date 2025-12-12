"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { motion, useInView } from "framer-motion"

const locations = [
  { id: 1, name: "Seoni HQ", x: 50, y: 45, projects: 15 },
  { id: 2, name: "Jabalpur Office", x: 35, y: 35, projects: 8 },
  { id: 3, name: "Nagpur Office", x: 70, y: 55, projects: 12 },
  { id: 4, name: "Chhindwara", x: 30, y: 50, projects: 6 },
  { id: 5, name: "Mandla", x: 45, y: 30, projects: 5 },
]

export function MapSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeLocation, setActiveLocation] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) setIsVisible(true)
  }, [isInView])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1 glass-blue text-primary">
            Our Locations
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Development Sites
            <br />
            <span className="text-gradient-animate">Across Madhya Pradesh</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our premium development locations across MP and nearby regions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-secondary rounded-3xl overflow-hidden border border-border/50">
                <img
                  src="/placeholder.svg?height=500&width=500"
                  alt="Madhya Pradesh map"
                  className="w-full h-full object-contain opacity-30"
                />
              </div>

              {locations.map((location, index) => (
                <motion.button
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                  style={{ left: `${location.x}%`, top: `${location.y}%` }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  onMouseEnter={() => setActiveLocation(location.id)}
                  onMouseLeave={() => setActiveLocation(null)}
                >
                  <div className={`relative ${activeLocation === location.id ? "scale-125" : ""} transition-transform`}>
                    <div className="absolute inset-0 w-10 h-10 -m-2 bg-primary/20 rounded-full animate-ping" />
                    <div className="relative w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg neon-glow">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>

                    {activeLocation === location.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 glass-blue rounded-lg p-3 shadow-xl whitespace-nowrap"
                      >
                        <div className="font-semibold text-foreground text-sm">{location.name}</div>
                        <div className="text-xs text-muted-foreground">{location.projects} Active Projects</div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-card border-r border-b border-primary/30 rotate-45" />
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Head Office - Seoni</h3>
                  <p className="text-muted-foreground">
                    Eco Builders, NH-7, Near Bus Stand
                    <br />
                    Seoni, Madhya Pradesh - 480661
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone / WhatsApp</h3>
                  <p className="text-muted-foreground">
                    +91 98765 43210
                    <br />
                    +91 07692 123456
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    info@ecobuilders.in
                    <br />
                    sales@ecobuilders.in
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Office Timings</h3>
                  <p className="text-muted-foreground">
                    Mon - Sat: 10:00 AM - 7:00 PM
                    <br />
                    Sunday: By Appointment Only
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
