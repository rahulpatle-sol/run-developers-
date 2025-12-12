"use client"

import { useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Shield, FileCheck, Building, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    id: 1,
    title: "RERA Approved",
    subtitle: "P-SNI-24-5050",
    description: "Registered under Madhya Pradesh Real Estate Regulatory Authority",
    icon: Shield,
    image: "/images/rera-certificate.png",
    validFrom: "20-05-2024",
    validTo: "20-05-2027",
    color: "bg-primary",
  },
  {
    id: 2,
    title: "T&CP Approved",
    subtitle: "SEILP210223482",
    description: "Town & Country Planning approval for residential development",
    icon: FileCheck,
    image: "/images/location-map-img.png",
    validFrom: "29/03/2023",
    validTo: "Permanent",
    color: "bg-green-600",
  },
  {
    id: 3,
    title: "Bank Loan Available",
    subtitle: "All Major Banks",
    description: "Easy EMI options available from SBI, HDFC, ICICI & other banks",
    icon: Building,
    image: "/images/main-gate.png",
    validFrom: "Active",
    validTo: "Ongoing",
    color: "bg-secondary",
  },
]

const tabs = ["All Certifications", "RERA", "T&CP", "Bank Approval"]

export function CertificationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState(0)
  const [currentCert, setCurrentCert] = useState(0)

  const nextCert = () => setCurrentCert((prev) => (prev + 1) % certifications.length)
  const prevCert = () => setCurrentCert((prev) => (prev - 1 + certifications.length) % certifications.length)

  return (
    <section id="certifications" ref={sectionRef} className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cert-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cert-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
            Trust & Transparency
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-navy">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Throughout our professional journey, legal compliance and transparency have been our top priorities. All our
            projects are fully approved and verified.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === index
                  ? "bg-foreground text-background"
                  : "bg-background border border-border hover:border-primary/30"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Certification Cards Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div className="glass-card rounded-2xl p-6 md:p-10 max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCert}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Certificate Image */}
                <div className="relative">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-white">
                    <img
                      src={certifications[currentCert].image || "/placeholder.svg"}
                      alt={certifications[currentCert].title}
                      className="w-full h-64 md:h-80 object-contain p-4"
                    />
                  </div>
                  <div
                    className={`absolute -top-3 -right-3 w-16 h-16 ${certifications[currentCert].color} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    {(() => {
                      const Icon = certifications[currentCert].icon
                      return <Icon className="w-8 h-8 text-white" />
                    })()}
                  </div>
                </div>

                {/* Certificate Info */}
                <div>
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${certifications[currentCert].color}/10 mb-4`}
                  >
                    <div className={`w-2 h-2 rounded-full ${certifications[currentCert].color}`} />
                    <span className="text-xs font-semibold">Verified Document</span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {certifications[currentCert].title}
                  </h3>
                  <p className="text-primary font-semibold mb-4">{certifications[currentCert].subtitle}</p>
                  <p className="text-muted-foreground mb-6">{certifications[currentCert].description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-muted/50">
                      <div className="text-xs text-muted-foreground mb-1">Valid From</div>
                      <div className="font-semibold">{certifications[currentCert].validFrom}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50">
                      <div className="text-xs text-muted-foreground mb-1">Valid To</div>
                      <div className="font-semibold">{certifications[currentCert].validTo}</div>
                    </div>
                  </div>

                  <Button variant="outline" className="border-primary/30 hover:border-primary/50 bg-transparent">
                    View Certificate
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
              <Button size="icon" variant="ghost" onClick={prevCert} className="hover:bg-muted">
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {certifications.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCert(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentCert === index ? "bg-primary w-8" : "bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              <Button size="icon" variant="ghost" onClick={nextCert} className="hover:bg-muted">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className={`p-4 rounded-xl text-center cursor-pointer transition-all duration-300 ${
                currentCert === index ? "glass-card shadow-lg scale-105" : "bg-transparent hover:bg-muted/50"
              }`}
              onClick={() => setCurrentCert(index)}
              whileHover={{ y: -5 }}
            >
              <div className={`w-12 h-12 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <cert.icon className="w-6 h-6 text-white" />
              </div>
              <div className="font-semibold text-sm">{cert.title}</div>
              <div className="text-xs text-muted-foreground">{cert.subtitle}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
