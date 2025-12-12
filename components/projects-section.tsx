"use client"

import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules"
import { TiltCard } from "./parallax-section"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"

const projects = [
  {
    id: 1,
    title: "Eco Green Villas",
    location: "Seoni, Madhya Pradesh",
    description: "Premium 3BHK villas with modern amenities and lush green surroundings",
    image: "/modern-villa-india-green-garden.jpg",
    type: "Villas",
    price: "₹45 Lakh+",
  },
  {
    id: 2,
    title: "Nakshatra Township",
    location: "NH-7, Seoni",
    description: "Integrated township with plots, villas, and commercial spaces",
    image: "/indian-township-aerial-view-modern.jpg",
    type: "Township",
    price: "₹15 Lakh+",
  },
  {
    id: 3,
    title: "Pench View Residency",
    location: "Near Pench Tiger Reserve",
    description: "Eco-friendly homes with stunning views of the Pench forest",
    image: "/eco-home-near-forest-india.jpg",
    type: "Residential",
    price: "₹35 Lakh+",
  },
  {
    id: 4,
    title: "Kanha Gateway Plots",
    location: "Seoni-Kanha Road",
    description: "RERA registered plots on the route to Kanha National Park",
    image: "/residential-plots-india-landscape.jpg",
    type: "Plots",
    price: "₹8 Lakh+",
  },
  {
    id: 5,
    title: "City Centre Commercial",
    location: "Seoni City",
    description: "Premium commercial spaces in the heart of Seoni",
    image: "/modern-commercial-building-india.jpg",
    type: "Commercial",
    price: "₹25 Lakh+",
  },
  {
    id: 6,
    title: "Mandla Road Enclave",
    location: "Mandla Road, Seoni",
    description: "Affordable plots with excellent connectivity to Jabalpur",
    image: "/residential-enclave-india-road.jpg",
    type: "Plots",
    price: "₹5 Lakh+",
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4 px-4 py-1 glass-blue text-primary">
                Our Projects
              </Badge>
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-balance">
              Premium
              <br />
              <span className="text-gradient-animate">Developments</span>
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="projects-swiper !pb-16"
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id} className="!w-[350px] md:!w-[450px]">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                >
                  <TiltCard className="h-full">
                    <div className="group relative rounded-2xl overflow-hidden bg-background border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
                      <div className="relative h-80 overflow-hidden">
                        <motion.img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <motion.div
                          className="absolute top-4 left-4"
                          initial={{ opacity: 0, y: -10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Badge className="bg-primary/90 text-white backdrop-blur-sm border-0">{project.type}</Badge>
                        </motion.div>

                        <motion.div
                          className="absolute top-4 right-4"
                          initial={{ opacity: 0, y: -10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Badge className="bg-white/90 text-foreground backdrop-blur-sm border-0 font-bold">
                            {project.price}
                          </Badge>
                        </motion.div>

                        <motion.div
                          className="absolute bottom-0 left-0 right-0 p-6"
                          initial={{ y: "100%" }}
                          whileHover={{ y: 0 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                          <Button
                            variant="secondary"
                            size="sm"
                            className="w-full btn-glass text-white hover:bg-primary/90"
                          >
                            View Project
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </motion.div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          {project.location}
                        </div>
                        <h3 className="font-display text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm">{project.description}</p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-8"
        >
          <Button variant="outline" size="lg" className="group bg-transparent glass-blue hover:bg-primary/10">
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
