"use client"

import { useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"
import { TiltCard } from "./parallax-section"

const plans = [
  {
    name: "Budget Plots",
    description: "Perfect for first-time buyers",
    price: "5,00,000",
    period: "onwards",
    features: [
      "1,000 - 2,000 sq ft plots",
      "Clear land titles",
      "NA/NOC available",
      "12-month EMI option",
      "Documentation support",
      "Free site visit",
    ],
    popular: false,
  },
  {
    name: "Premium Plots",
    description: "Best value for families",
    price: "15,00,000",
    period: "onwards",
    features: [
      "2,000 - 5,000 sq ft plots",
      "Prime locations",
      "RERA registered",
      "24-month EMI option",
      "Legal assistance included",
      "Priority support",
      "Free architectural consultation",
      "Landscaping assistance",
    ],
    popular: true,
  },
  {
    name: "Luxury Villas",
    description: "Premium living experience",
    price: "45,00,000",
    period: "onwards",
    features: [
      "3BHK - 4BHK options",
      "Gated community",
      "Turnkey solution",
      "36-month EMI option",
      "Dedicated project manager",
      "Custom interiors",
      "Smart home ready",
      "5-year warranty",
    ],
    popular: false,
  },
]

export function PricingSection() {
  const [billingType, setBillingType] = useState<"emi" | "onetime">("onetime")
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="pricing" ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      <motion.div
        className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-1 glass-blue text-primary">
              Investment Plans
            </Badge>
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Transparent Pricing,
            <br />
            <span className="text-gradient-animate">Exceptional Value</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the perfect investment that fits your budget. All prices include complete documentation and legal
            support.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-secondary border border-border">
            {["emi", "onetime"].map((type) => (
              <motion.button
                key={type}
                onClick={() => setBillingType(type as typeof billingType)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative",
                  billingType === type ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
                whileTap={{ scale: 0.95 }}
              >
                {billingType === type && (
                  <motion.div
                    layoutId="billingBg"
                    className="absolute inset-0 bg-card rounded-full shadow-md"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{type === "emi" ? "EMI Options" : "Full Payment"}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                delay: 0.4 + index * 0.15,
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              }}
              className={cn(plan.popular && "lg:-mt-4 lg:mb-4")}
            >
              <TiltCard>
                <motion.div
                  className={cn(
                    "relative p-8 rounded-2xl border transition-all duration-500 h-full",
                    plan.popular
                      ? "bg-primary text-primary-foreground border-primary shadow-2xl neon-glow"
                      : "bg-card border-border/50 hover:border-primary/30",
                  )}
                  whileHover={{
                    y: -10,
                    boxShadow: plan.popular
                      ? "0 30px 60px -15px rgba(59, 130, 246, 0.4)"
                      : "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  {plan.popular && (
                    <motion.div
                      className="absolute -top-4 left-1/2 -translate-x-1/2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Badge className="bg-white text-primary px-4 py-1 shadow-lg">
                        <motion.div
                          animate={{ rotate: [0, 15, -15, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Sparkles className="w-3 h-3 mr-1 inline" />
                        </motion.div>
                        Most Popular
                      </Badge>
                    </motion.div>
                  )}

                  <div className="mb-6">
                    <h3
                      className={cn(
                        "font-display text-xl font-semibold mb-2",
                        plan.popular ? "text-primary-foreground" : "text-foreground",
                      )}
                    >
                      {plan.name}
                    </h3>
                    <p className={cn("text-sm", plan.popular ? "text-primary-foreground/80" : "text-muted-foreground")}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span
                        className={cn("text-sm", plan.popular ? "text-primary-foreground/80" : "text-muted-foreground")}
                      >
                        ₹
                      </span>
                      <motion.span
                        className={cn(
                          "font-display text-4xl font-bold",
                          plan.popular ? "text-primary-foreground" : "text-foreground",
                        )}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                      >
                        {plan.price}
                      </motion.span>
                    </div>
                    <span
                      className={cn("text-sm", plan.popular ? "text-primary-foreground/80" : "text-muted-foreground")}
                    >
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.7 + index * 0.1 + featureIndex * 0.05 }}
                      >
                        <div
                          className={cn(
                            "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                            plan.popular ? "bg-primary-foreground/20" : "bg-primary/10",
                          )}
                        >
                          <Check className={cn("w-3 h-3", plan.popular ? "text-primary-foreground" : "text-primary")} />
                        </div>
                        <span
                          className={cn(
                            "text-sm",
                            plan.popular ? "text-primary-foreground/90" : "text-muted-foreground",
                          )}
                        >
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      className={cn(
                        "w-full transition-all duration-300 relative overflow-hidden",
                        plan.popular ? "bg-white text-primary hover:bg-white/90" : "btn-glass text-white",
                      )}
                    >
                      Book Site Visit
                    </Button>
                  </motion.div>
                </motion.div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-muted-foreground text-sm mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          All plans include RERA registration and complete documentation. Custom plans available for NRIs and bulk
          bookings.
        </motion.p>
      </div>
    </section>
  )
}
