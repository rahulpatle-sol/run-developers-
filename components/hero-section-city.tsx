"use client"

import { useRef, useEffect, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, MapPin, Phone } from "lucide-react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { MagneticButton } from "./magnetic-button"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import * as THREE from "three"

gsap.registerPlugin(ScrollTrigger)

function CityCluster() {
  const group = useRef<THREE.Group>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  useFrame(() => {
    if (!group.current) return
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, springX.get() * 0.3, 0.05)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -springY.get() * 0.15, 0.05)
  })

  const buildings = [
    { pos: [0, 20, 0], w: 2.8, h: 40, d: 2.8, color: "#8B5CF6", metalness: 0.9 },
    { pos: [8, 18, 0], w: 2, h: 36, d: 2, color: "#A78BFA", metalness: 0.85 },
    { pos: [8, 18, 3], w: 2, h: 36, d: 2, color: "#7C3AED", metalness: 0.85 },
    { pos: [8, 18, -3], w: 2, h: 36, d: 2, color: "#9333EA", metalness: 0.85 },
    { pos: [-4, 14, 2], w: 2, h: 28, d: 2, color: "#6D28D9", metalness: 0.8 },
    { pos: [4, 15, -2], w: 2, h: 30, d: 2, color: "#5B21B6", metalness: 0.8 },
    { pos: [-3, 12, -4], w: 2, h: 24, d: 2, color: "#7E22CE", metalness: 0.8 },
    { pos: [3, 13, 4], w: 2, h: 26, d: 2, color: "#6B21A8", metalness: 0.8 },
  ]

  useEffect(() => {
    if (!group.current) return

    gsap.from(group.current.position, { y: -5, duration: 1.2, ease: "power3.out" })
    gsap.from(group.current.scale, { x: 0.5, y: 0.5, z: 0.5, duration: 1.2, ease: "power3.out" })
  }, [])

  return (
    <group ref={group} scale={0.45} position={[0, -3, 0]}>
      {/* Ground with texture */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[80, 80]} />
        <meshStandardMaterial color="#FFF9F0" roughness={0.8} />
      </mesh>

      {/* Buildings with glass windows */}
      {buildings.map((b, i) => (
        <group key={i} position={b.pos as [number, number, number]}>
          {/* Main building structure */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[b.w, b.h, b.d]} />
            <meshStandardMaterial color={b.color} metalness={b.metalness} roughness={0.15} transparent opacity={0.95} />
          </mesh>

          {/* Glass windows pattern */}
          {Array.from({ length: Math.floor(b.h / 2) }).map((_, floor) => (
            <group key={floor} position={[0, -b.h / 2 + floor * 2 + 1, 0]}>
              {Array.from({ length: 3 }).map((_, col) => (
                <mesh key={col} position={[(-1 + col) * (b.w / 3), 0, b.d / 2 + 0.01]}>
                  <planeGeometry args={[b.w / 4, 1.5]} />
                  <meshStandardMaterial
                    color="#E0F2FE"
                    transparent
                    opacity={0.85}
                    emissive="#BAE6FD"
                    emissiveIntensity={0.3}
                  />
                </mesh>
              ))}
            </group>
          ))}
        </group>
      ))}

      {/* Low-rise city blocks (background) */}
      {Array.from({ length: 40 }).map((_, i) => {
        const x = (i % 8) * 2.5 - 10
        const z = Math.floor(i / 8) * 2.5 + 15
        const h = 2 + Math.random() * 4
        return (
          <mesh key={`bg-${i}`} position={[x, h / 2 - 2, z]} castShadow>
            <boxGeometry args={[1.8, h, 1.8]} />
            <meshStandardMaterial color="#F5F3FF" metalness={0.3} roughness={0.7} />
          </mesh>
        )
      })}
    </group>
  )
}

export function HeroSectionCity() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.from(titleRef.current.children, {
          y: 100,
          opacity: 0,
          rotationX: -45,
          stagger: 0.15,
          duration: 1.2,
          ease: "power4.out",
          delay: 0.3,
        })
      }

      // Subtitle animation
      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.8,
        })
      }

      // Scroll-based parallax
      if (heroRef.current) {
        gsap.to(heroRef.current.querySelector(".hero-content"), {
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
          y: 200,
          opacity: 0,
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream-50 to-white"
    >
      {/* 3D City Background */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows camera={{ position: [25, 18, 40], fov: 45 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[20, 30, 10]} intensity={1.3} castShadow />
          <fog attach="fog" args={["#F5F3FF", 30, 100]} />
          <Suspense fallback={null}>
            <CityCluster />
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white" />
      </div>

      <div className="hero-content relative z-10 container mx-auto px-4 lg:px-6 text-center pt-32">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-8"
          >
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-foreground">Seoni, Madhya Pradesh</span>
          </motion.div>

          <div ref={titleRef} className="mb-6 perspective-1000">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <div className="text-foreground mb-2">Build Your Dreams With</div>
              <div className="text-gradient-red mb-2">Run Developers</div>
              <div className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Premium RERA Approved Land & Construction
              </div>
            </h1>
          </div>

          <motion.p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Building tomorrow's communities today. From plotted developments to complete construction solutions, we
            deliver excellence in every project across Madhya Pradesh.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            <MagneticButton>
              <Button size="lg" className="btn-glass-navy text-white px-8 py-6 text-base group neon-glow-navy">
                View Our Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-secondary/40 hover:border-secondary/60 px-8 py-6 text-base bg-card/50 backdrop-blur-sm"
              >
                <Phone className="mr-2 w-4 h-4 text-secondary" />
                Call Now: 9300 160 966
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.a
            href="tel:9300160966"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
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
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
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
          <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  )
}
