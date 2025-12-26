"use client"

import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, MapPin, User } from "lucide-react"
import { motion, useInView } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Business Owner",
    location: "Seoni, MP",
    rating: 5,
    text: "Run Developers ne A.K. Nagar mein ek sapna sach kar diya. Documentation bilkul clear tha aur Abdul Ahad ji ki team bahut professional hai. RERA registration se poora confidence mila!",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Software Engineer",
    location: "Bangalore (Originally from Jabalpur)",
    rating: 5,
    text: "Being an NRI, I was worried about investing. But Run Developers made it seamless with video calls and proper legal documentation. A.K. Nagar at Bypass Chowk is perfect location!",
  },
  {
    id: 3,
    name: "Dr. Amit Patel",
    role: "Doctor",
    location: "Nagpur, Maharashtra",
    rating: 5,
    text: "T&CP approved plots with bank loan facility - ye sab bahut important tha mere liye. A.K. Nagar ki planning dekh kar impressed ho gaya. 40 feet road aur proper drainage system!",
  },
  {
    id: 4,
    name: "Sunita Agarwal",
    role: "Retired Teacher",
    location: "Chhindwara, MP",
    rating: 5,
    text: "Retirement ke baad yahan plot liya. Podar School aur Jain Petrol Pump ke paas location bahut acchi hai. Run Developers ki team ne har step mein madad ki. Bahut khush hoon!",
  },
  {
    id: 5,
    name: "Anil Kumar",
    role: "Businessman",
    location: "Seoni, MP",
    rating: 5,
    text: "A.K. Nagar mein corner plot liya hai. Abdul Ahad ji personally involved hain har detail mein. Attractive entrance gate aur 24/7 security - premium feel hai!",
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 md:py-32 bg-card relative overflow-hidden">
      <motion.div
        className="absolute top-10 left-10 text-primary/5"
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <Quote className="w-64 h-64" />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-primary/5 rotate-180"
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <Quote className="w-48 h-48" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-1  text-2xl glass-blue text-white">
              Testimonials
            </Badge>
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Hamare Khush
            <br />
            <span className="text-gradient-animate">Grahak Kehte Hain</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <motion.div
                className="bg-background rounded-2xl p-6 shadow-lg border border-border/50 hover:border-primary/30 h-full relative overflow-hidden group"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute top-4 right-4 text-primary/10">
                  <Quote className="w-16 h-16" />
                </div>

                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-base text-foreground leading-relaxed mb-6 min-h-[120px]">"{testimonial.text}"</p>

                  <div className="flex items-start gap-3 pt-4 border-t border-border/50">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
