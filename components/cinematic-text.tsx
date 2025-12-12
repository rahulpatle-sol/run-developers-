"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(SplitText)

interface CinematicTextProps {
  children: string
  className?: string
  delay?: number
  type?: "chars" | "words" | "lines"
}

export function CinematicText({ children, className = "", delay = 0, type = "chars" }: CinematicTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!ref.current || !isInView) return

    const split = new SplitText(ref.current, { type: type })
    const elements = type === "chars" ? split.chars : type === "words" ? split.words : split.lines

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 50,
        rotateX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: "power3.out",
        delay: delay,
      },
    )

    return () => split.revert()
  }, [isInView, delay, type])

  return (
    <div ref={ref} className={className} style={{ perspective: 1000 }}>
      {children}
    </div>
  )
}

// Reveal text animation with mask
export function RevealText({
  children,
  className = "",
  delay = 0,
}: { children: string; className?: string; delay?: number }) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        variants={{
          hidden: { y: "100%" },
          visible: { y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// Stagger text animation for paragraphs
export function StaggerText({
  children,
  className = "",
  delay = 0,
}: { children: string; className?: string; delay?: number }) {
  const words = children.split(" ")
  const ref = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              ease: [0.76, 0, 0.24, 1],
              delay: delay + i * 0.03,
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </p>
  )
}
