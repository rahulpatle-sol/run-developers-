"use client"

import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Play, MapPin, Phone, BadgeCheck } from "lucide-react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { MagneticButton } from "./magnetic-button"
import type * as THREE from "three"

function BuildingModel() {
  const buildingRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!buildingRef.current) return
    // Gentle rotation animation
    buildingRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    buildingRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
  })

  return (
    <group ref={buildingRef} position={[0, -1, 0]}>
      {/* Modern Building Structure */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2, 4, 2]} />
        <meshStandardMaterial color="#2d3748" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Glass Windows */}
      {[...Array(5)].map((_, floor) => (
        <group key={floor} position={[0, -1.5 + floor * 0.8, 0]}>
          {[...Array(3)].map((_, i) => (
            <mesh key={i} position={[(-1 + i) * 0.6, 0, 1.01]}>
              <planeGeometry args={[0.4, 0.6]} />
              <meshStandardMaterial color="#60a5fa" transparent opacity={0.7} metalness={0.9} roughness={0.1} />
            </mesh>
          ))}
        </group>
      ))}

      {/* Entrance */}
      <mesh position={[0, -2.8, 1.01]}>
        <boxGeometry args={[1, 0.8, 0.1]} />
        <meshStandardMaterial color="#92400e" />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 2.2, 0]}>
        <boxGeometry args={[2.2, 0.2, 2.2]} />
        <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.5} />
      </mesh>
    </group>
  )
}

export function HeroSection3D() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  const contentY = useTransform(scrollY, [0, 500], [0, 150])
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0])

  const smoothContentY = useSpring(contentY, { stiffness: 50, damping: 20 })

  const certifications = [
    { label: "T&CP Approved", color: "bg-green-500" },
    { label: "RERA: P-SNI-24-5050", color: "bg-primary" },
    { label: "Bank Loan Available", color: "bg-secondary" },
  ]

  const stats = [
    { value: 72, suffix: "+", label: "Premium Plots" },
    { value: 2024, suffix: "", label: "RERA Approved" },
    { value: 500, suffix: "+", label: "Happy Families" },
  ]

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[5, 2, 5]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <spotLight position={[-10, 10, -5]} intensity={0.5} angle={0.3} penumbra={1} castShadow />
            <BuildingModel />
            <Environment preset="city" />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
          </Suspense>
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 lg:px-6 text-center"
        style={{ y: smoothContentY, opacity: contentOpacity }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card"
              >
                <BadgeCheck className={`w-4 h-4 text-white ${cert.color} rounded-full p-0.5`} />
                <span className="text-xs font-semibold text-foreground">{cert.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-6"
          >
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-foreground">Bithli, Seoni, Madhya Pradesh</span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-2">
              Welcome to A.K. Nagar
            </h1>
            <div className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              by <span className="text-gradient-red">Run</span> <span className="text-gradient-navy">Developers</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Premium RERA approved residential plots at Bypass Chowk, Seoni. Your dream home awaits with verified land
            titles, wide roads, beautiful landscaping, and all modern amenities.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <MagneticButton>
              <Button size="lg" className="btn-glass-navy text-white px-8 py-6 text-base group neon-glow-navy">
                View Plot Layout
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-secondary/40 hover:border-secondary/60 px-8 py-6 text-base bg-card/50 backdrop-blur-sm"
              >
                <Play className="mr-2 w-4 h-4 text-secondary" />
                Watch Site Tour
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Phone CTA */}
          <motion.a
            href="tel:9300160966"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="inline-flex items-center gap-3 text-lg font-bold text-foreground hover:text-primary transition-colors"
          >
            <motion.div
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Phone className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-2xl">9300 160 966</span>
          </motion.a>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 pt-12 border-t border-border/30"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  )
}
