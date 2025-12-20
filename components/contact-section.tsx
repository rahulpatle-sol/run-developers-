"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Yahan aap apna backend logic ya Formspree/Resend add kar sakte hain
    console.log("Sending Data:", formData)
    
    setIsSubmitted(true)
    setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 px-4 py-1.5 uppercase tracking-widest text-xs">
              Contact Us
            </Badge>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Let’s Craft Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Dream Space.</span>
            </h2>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
              Whether you have a question about properties, pricing, or anything else, our team is ready to answer all your questions.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email us at", value: "hello@luxuryestates.com" },
                { icon: Phone, label: "Call us directly", value: "+1 (555) 000-0000" },
                { icon: MapPin, label: "Visit our studio", value: "123 Design Street, New York, NY" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-lg font-medium text-slate-200">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Premium Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 to-primary/50 rounded-[2rem] blur opacity-20" />
            
            <form 
              onSubmit={handleSubmit} 
              className="relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 border border-white/10 shadow-2xl"
            >
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-slate-400 ml-1">First Name</label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John" 
                      className="h-12 bg-white/5 border-white/10 focus:border-accent/50 transition-all rounded-xl" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-slate-400 ml-1">Last Name</label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe" 
                      className="h-12 bg-white/5 border-white/10 focus:border-accent/50 transition-all rounded-xl" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <Input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    className="h-12 bg-white/5 border-white/10 focus:border-accent/50 transition-all rounded-xl" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-400 ml-1">Message</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?" 
                    rows={4}
                    className="bg-white/5 border-white/10 focus:border-accent/50 transition-all rounded-xl resize-none" 
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitted}
                  className="w-full bg-accent hover:bg-accent/90 text-white h-14 text-lg font-semibold rounded-xl shadow-lg shadow-accent/20 transition-all active:scale-[0.98]"
                >
                  {isSubmitted ? (
                    <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="flex items-center">
                      <CheckCircle className="mr-2 w-5 h-5" /> Sent Successfully
                    </motion.div>
                  ) : (
                    <div className="flex items-center">
                      Send Message <Send className="ml-2 w-4 h-4" />
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}