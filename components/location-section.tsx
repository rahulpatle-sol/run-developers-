"use client"

import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { MapPin, Navigation, Phone, Clock, Car, School, Fuel, Building2, Mail, Hospital, Train, ShoppingBag } from "lucide-react"
import { MagneticButton } from "./magnetic-button"

const landmarks = [
  { icon: School, name: "Podar School", distance: "2 min", direction: "Adjacent", color: "text-blue-500" },
  { icon: Fuel, name: "Jain Petrol Pump", distance: "1 min", direction: "Near Seoni Road", color: "text-orange-500" },
  { icon: Building2, name: "Bypass Chowk", distance: "At Location", direction: "Main Intersection", color: "text-emerald-500" },
  { icon: Car, name: "Mandla Road", distance: "Direct Access", direction: "East Side", color: "text-purple-500" },
]

// Categorized for better scanning
const connectivity = [
  { label: "Transport", items: [
    { from: "Railway Station", dist: "5 km", icon: Train },
    { from: "Bus Stand", dist: "6 km", icon: Car },
  ]},
  { label: "Education", items: [
    { from: "Podar International", dist: "600 m", icon: School },
    { from: "Bhagat  Singh Rai Engg. College", dist: "500 m", icon: School },
  ]},
  { label: "Healthcare", items: [
    { from: "Govt. Hospital", dist: "5 km", icon: Hospital },
    { from: "Medical College", dist: "7 km", icon: Hospital },
  ]},
]

export function LocationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="location" ref={sectionRef} className="py-24 relative overflow-hidden ">
      {/* Dynamic Background */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[25%] -right-[10%] w-[50%] h-[50%] rounded-full  blur-[120px]" />
        <div className="absolute -bottom-[25%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px]" />
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4   border-primary/20 hover:bg-primary/20 transition-colors px-6 py-1">
              Location Advantage
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight  mb-6">
              The Heart of <span className="text-gradient-red">New Seoni</span>
            </h2>
            <p className=" max-w-2xl text-lg">
              Connectivity that defines convenience. Strategically positioned at the crossroads of major highways and essential landmarks.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column: Map & Primary Info */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              className="relative group rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Map Placeholder/Image */}
              <div className="aspect-[16/10] md:aspect-video rounded-2xl overflow-hidden relative">
                <img
                  src="/images/location-map-premium.png"
                  alt="Location Map"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                
                {/* Floating Map Pin */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="bg-secondary p-4 rounded-full shadow-[0_0_30px_rgba(var(--secondary),0.5)] border-4 border-white">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Landmarks Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {landmarks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="p-4 rounded-2xlborder border-white/10 hover:border-primary/50 transition-all group"
                >
                  <item.icon className={`w-6 h-6 ${item.color} mb-3 group-hover:scale-110 transition-transform`} />
                  <p className="text-sm font-bold  mb-1">{item.name}</p>
                  <p className="text-[11px]  uppercase tracking-wider font-semibold">{item.distance}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Detailed Connectivity */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <motion.div 
              className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border  backdrop-blur-md"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
            >
              <div className="flex gap-4 items-start mb-6">
                <div className="p-3 bg-primary rounded-2xl">
                  <MapPin className="w-6 h-6 " />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">A.K. Nagar, Seoni</h3>
                  <p className="text-sm mt-1 leading-relaxed">
                    Kh No. 218/2, 214/1, Village Bithli,<br />
                    Bypass Chowk, Seoni, M.P. 480661
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-400/10 w-fit px-3 py-1.5 rounded-full border border-emerald-400/20">
                <Clock className="w-3.5 h-3.5" />
                Site Visits: 9 AM - 6 PM (Open Daily)
              </div>
            </motion.div>

            {/* Connectivity Lists */}
            <div className="space-y-4">
              {connectivity.map((cat, idx) => (
                <motion.div 
                  key={cat.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                >
                  <h4 className="text-xs font-bold  uppercase tracking-[0.2em] mb-3 ml-1">{cat.label}</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {cat.items.map((item) => (
                      <div key={item.from} className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] transition-colors group">
                        <div className="flex items-center gap-3">
                          <item.icon className="w-4 h-4 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                          <span className="text-sm font-medium">{item.from}</span>
                        </div>
                        <span className="text-sm font-mono  px-2 py-0.5 rounded">{item.dist}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <MagneticButton>
                <Button className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90  font-bold gap-2">
                  <Navigation className="w-4 h-4" />
                  Navigate
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="outline" className="w-full h-14 rounded-2xl  gap-2">
                  <Phone className="w-4 h-4" />
                  Call  Now 
                </Button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}