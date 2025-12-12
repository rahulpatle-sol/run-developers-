"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column - Content */}
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <Badge variant="secondary" className="mb-4 px-4 py-1">
              Get In Touch
            </Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Ready to Start
              <br />
              <span className="text-accent">Your Journey?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Let's discuss your dream project. Our team of experts is ready to help you find the perfect property or
              design your ideal space.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {[
                "Free consultation with our experts",
                "Personalized property recommendations",
                "Virtual site tours available",
                "Flexible payment options",
              ].map((feature, index) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <form onSubmit={handleSubmit} className="bg-background rounded-3xl p-8 shadow-xl border border-border/50">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                    <Input placeholder="John" className="bg-secondary/50 border-border/50 focus:border-accent" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                    <Input placeholder="Doe" className="bg-secondary/50 border-border/50 focus:border-accent" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-secondary/50 border-border/50 focus:border-accent"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="bg-secondary/50 border-border/50 focus:border-accent"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell us about your dream property..."
                    rows={4}
                    className="bg-secondary/50 border-border/50 focus:border-accent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 group"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
