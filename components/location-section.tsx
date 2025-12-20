"use client"

import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { MapPin, Navigation, Phone, Clock, Car, School, Fuel, Building2, Mail } from "lucide-react"
import { MagneticButton } from "./magnetic-button"

const landmarks = [
  { icon: School, name: "Podar School", distance: "2 min", direction: "Adjacent" },
  { icon: Fuel, name: "Jain Petrol Pump", distance: "1 min", direction: "Near Seoni Road" },
  { icon: Building2, name: "Bypass Chowk", distance: "At Location", direction: "Main Intersection" },
  { icon: Car, name: "Mandla Road", distance: "Direct Access", direction: "East Side" },
]

const directions = [
  { from: "Seoni City Center", time: "10 mins", distance: "5 km" },
  { from: "Jabalpur", time: "1.5 hrs", distance: "85 km" },
  { from: "Nagpur", time: "2.5 hrs", distance: "140 km" },
  { from: "Chhindwara", time: "1 hr", distance: "60 km" },
]

export function LocationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="location" ref={sectionRef} className="py-20 md:py-28 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 bg-secondary/10 text-secondary border-secondary/20">
            Prime Location
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Find Us at <span className="text-gradient-red">Bypass Chowk</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strategically located at the intersection of Mandla Road, Seoni Road, Jabalpur Bypass, and Balaghat Bypass
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Map Image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl  overflow-hidden shadow-2xl">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }}>
                <img
                  src="/images/location-map-premium.png"
                  alt="A.K. Nagar Premium Location Map"
                  className="w-full  rounded-2xl"
                />

                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-secondary/40 rounded-full"
                      animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="absolute -bottom-6 -right-4 lg:-right-8 z-20 glass-card p-5 rounded-xl shadow-2xl max-w-[240px] border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Phone className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <div className="text-xs text-muted-foreground">24/7 Support</div>
                  <a
                    href="tel:9300160966"
                    className="font-display text-base font-bold text-foreground hover:text-primary transition-colors"
                  >
                    9300 160 966
                  </a>
                </div>
              </div>
              <a
                href="mailto:info@rundevelopers.com"
                className="text-xs text-primary hover:underline flex items-center gap-1"
              >
                <Mail className="w-3 h-3" />
                info@rundevelopers.com
              </a>
            </motion.div>
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Address Card */}
            <div className="glass-card p-6 rounded-xl mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">A.K. Nagar, Seoni</h3>
                  <p className="text-muted-foreground text-sm">
                    Kh No. 218/2, 214/1, Village Bithli
                    <br />
                    Bypass Chowk, Seoni, M.P. 480661
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Site Visit: 9:00 AM - 6:00 PM (All Days)</span>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="mb-6">
              <h4 className="font-display text-lg font-bold text-foreground mb-4">Nearby Landmarks</h4>
              <div className="grid grid-cols-2 gap-3">
                {landmarks.map((landmark, index) => (
                  <motion.div
                    key={landmark.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-3 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/30 transition-all"
                  >
                    <landmark.icon className="w-5 h-5 text-primary mb-2" />
                    <div className="font-semibold text-sm">{landmark.name}</div>
                    <div className="text-xs text-muted-foreground">{landmark.distance}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Distance from Major Cities */}
            <div className="mb-6">
              <h4 className="font-display text-lg font-bold text-foreground mb-4">Distance from Cities</h4>
              <div className="space-y-2">
                {directions.map((dir, index) => (
                  <motion.div
                    key={dir.from}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Navigation className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{dir.from}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-foreground">{dir.time}</span>
                      <span className="text-xs text-muted-foreground ml-2">({dir.distance})</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <MagneticButton>
                <Button className="btn-glass-navy text-white flex-1">
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  variant="outline"
                  className="flex-1 border-secondary/30 hover:border-secondary/50 bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Book Site Visit
                </Button>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
