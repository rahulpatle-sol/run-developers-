"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `New Inquiry: A.K. Nagar - ${formData.firstName} ${formData.lastName}`
    const body = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    
    const mailtoLink = `mailto:abdulahadk104@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink

    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" })
    }, 4000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FAFAFA] dark:bg-zinc-950 relative overflow-hidden">
      {/* Premium Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-zinc-200/50 dark:bg-zinc-800/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-emerald-100/40 dark:bg-emerald-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          
          {/* Left Side: Brand Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-6 border-zinc-200 text-zinc-500 font-semibold px-4 py-1.5 uppercase tracking-widest text-[10px] bg-white">
              Get In Touch
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100 leading-[1.1] mb-8 tracking-tighter">
              Ready to claim your <br />
              <span className="text-zinc-400 font-light italic">piece of paradise?</span>
            </h2>
            
            <p className="text-zinc-500 text-lg leading-relaxed mb-12 max-w-md">
              Our sales experts are available for site visits and detailed walkthroughs of A.K. Nagar.
            </p>

            <div className="space-y-10">
              {[
                { 
                  icon: Phone, 
                  label: "Direct Line", 
                  value: "+91 9300 160 966", 
                  href: "tel:9300160966" 
                },
                { 
                  icon: Mail, 
                  label: "Official Correspondence", 
                  value: "abdulahadk104@gmail.com", 
                  href: "mailto:abdulahadk104@gmail.com" 
                },
                { 
                  icon: MapPin, 
                  label: "Site Location", 
                  value: "Bypass Chowk, Mandla Road, Seoni, MP", 
                  href: "#" 
                },
              ].map((item, i) => (
                <motion.a 
                  key={i}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-white border border-zinc-100 flex items-center justify-center shadow-sm group-hover:border-emerald-200 group-hover:bg-emerald-50 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-zinc-900 group-hover:text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest mb-1">{item.label}</p>
                    <p className="text-xl font-bold text-zinc-800 dark:text-zinc-200 tracking-tight">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Modern Form Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-zinc-100 dark:border-zinc-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest ml-1">First Name</label>
                    <Input 
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter name" 
                      className="h-14 bg-zinc-50 border-transparent focus:bg-white focus:border-zinc-200 transition-all rounded-2xl px-6" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest ml-1">Phone Number</label>
                    <Input 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000" 
                      className="h-14 bg-zinc-50 border-transparent focus:bg-white focus:border-zinc-200 transition-all rounded-2xl px-6" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest ml-1">Email Address</label>
                  <Input 
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@mail.com" 
                    className="h-14 bg-zinc-50 border-transparent focus:bg-white focus:border-zinc-200 transition-all rounded-2xl px-6" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest ml-1">Inquiry Details</label>
                  <Textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the plot you're interested in..." 
                    rows={4}
                    className="bg-zinc-50 border-transparent focus:bg-white focus:border-zinc-200 transition-all rounded-2xl px-6 py-4 resize-none" 
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitted}
                  className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 h-16 text-base font-bold rounded-2xl transition-all active:scale-[0.98] group overflow-hidden relative"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div 
                        key="success"
                        initial={{ y: 20, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        className="flex items-center text-emerald-500"
                      >
                        <CheckCircle className="mr-2 w-5 h-5" /> Request Sent
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="default"
                        initial={{ y: -20, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        className="flex items-center"
                      >
                        Submit Inquiry <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </form>
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}