"use client"

import { useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, Volume2, VolumeX, Maximize, X } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"

const videoTours = [
  {
    id: 1,
    title: "Eco Green Villas - Seoni",
    description: "Walk through our premium villa project in the heart of Seoni",
    thumbnail: "/colony.jpg",
    duration: "3:45",
    views: "2.5K",
  },
  {
    id: 2,
    title: "Nakshatra Township Tour",
    description: "Experience the amenities and lifestyle at Nakshatra",
    thumbnail: "/indian-township-aerial-view-modern-homes.jpg",
    duration: "5:20",
    views: "4.1K",
  },
  {
    id: 3,
    title: "Plot Development Process",
    description: "See how we develop land with proper documentation",
    thumbnail: "/land-development-construction-india.jpg",
    duration: "4:10",
    views: "3.2K",
  },
]

export function VideoTourSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  const handlePlayVideo = (id: number) => {
    setActiveVideo(id)
    setShowModal(true)
  }

  return (
    <section id="video-tour" ref={sectionRef} className="py-24 md:py-32 bg-white text-black relative overflow-hidden">
      {/* Cinematic grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96  rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/30 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />

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
            transition={{ delay: 0.2 }}
          >
            <Badge className="mb-4 px-4 py-1 bg-primary/20 text-black border-primary/30">
              Video Tours
            </Badge>
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl font-bold  mb-6 text-balance">
            Experience Our
            <br />
            <span className="text-primary">Projects Virtually</span>
          </h2>
          <p className="text-background/70 text-lg">
            Take a cinematic virtual tour of our developments across Madhya Pradesh
          </p>
        </motion.div>

        {/* Main Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative mb-12 rounded-3xl overflow-hidden group"
        >
          <div className="aspect-video relative">
            <img src="/images/main-gate.png" alt="Featured project tour" className="w-full h-full object- p4" />
            <div className="absolute inset-0 video-overlay" />

            {/* Play button overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.button
                className="w-24 h-24 rounded-full btn-glass flex items-center justify-center group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePlayVideo(0)}
              >
                <Play className="w-10 h-10 text-white ml-1" />
              </motion.button>
            </motion.div>

            {/* Video info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                  Run Developers  - A Journey of Excellence
                </h3>
                <p className="text-white/80 mb-4">
                  Watch our complete documentary showcasing 12+ years of building dreams in Madhya Pradesh
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-white/60 text-sm">12:30 mins</span>
                  <span className="text-white/60 text-sm">15K+ views</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {videoTours.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
              onClick={() => handlePlayVideo(video.id)}
            >
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <motion.img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-video object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                {/* Play button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-6 h-6 text-white ml-0.5" />
                  </motion.div>
                </motion.div>

                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/70 text-white text-xs">
                  {video.duration}
                </div>
              </div>

              <h4 className="font-display text-lg font-semibold text-background group-hover:text-primary transition-colors">
                {video.title}
              </h4>
              <p className="text-background/60 text-sm mt-1">{video.description}</p>
              <span className="text-background/40 text-xs mt-2 block">{video.views} views</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-foreground rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <video src="/video/mainvid.mp4"  loop muted autoPlay className="w-full h-full object-cover" />

              {/* Video controls */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 text-white" />
                      ) : (
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      )}
                    </button>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-white" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-white" />
                      )}
                    </button>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Maximize className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
