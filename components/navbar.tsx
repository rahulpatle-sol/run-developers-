"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { MagneticButton } from "./magnetic-button"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Plot Layout", href: "/plot-layout" },
  { name: "Location", href: "/location" },
  { name: "Contact", href: "/contact" },
]

const whatsappLink =
  "https://wa.me/919300160966?text=Hello%20Run%20Developers,%20I%20want%20details%20about%20A.K.%20Nagar%20plots"

function GlitchLink({
  children,
  href,
  isActive,
  onClick,
}: {
  children: string
  href: string
  isActive: boolean
  onClick: () => void
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      data-text={children}
      className={cn(
        "glitch-link text-sm font-medium transition-colors relative py-2",
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
      )}
    >
      {children}
      <motion.span
        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-secondary to-primary"
        initial={{ width: 0 }}
        animate={{ width: isActive ? "100%" : 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </a>
  )
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")

  const { scrollY } = useScroll()
  const navBgOpacity = useTransform(scrollY, [0, 100], [0, 1])
  const navBlur = useTransform(scrollY, [0, 100], [0, 20])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        className="absolute inset-0 border-b border-border/50"
        style={{
          opacity: navBgOpacity,
          backdropFilter: `blur(${navBlur}px)`,
          backgroundColor: "rgba(255,255,255,0.9)",
        }}
      />

      <div
        className={cn(
          "container mx-auto px-4 lg:px-6 flex items-center justify-between relative z-10 transition-all",
          isScrolled ? "py-2" : "py-4",
        )}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img src="/images/mainlogo.png" alt="Run Developers" className="h-12 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <MagneticButton key={link.name} strength={0.15}>
              <GlitchLink
                href={link.href}
                isActive={activeLink === link.name}
                onClick={() => setActiveLink(link.name)}
              >
                {link.name}
              </GlitchLink>
            </MagneticButton>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:9300160966"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <Phone className="w-4 h-4" />
            9300 160 966
          </a>

          <MagneticButton strength={0.2}>
            <a
              href={whatsappLink}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-400 text-white text-sm font-semibold hover:bg-green-700 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </MagneticButton>

          <MagneticButton>
            <Button className="bg-red-500 text-white px-6">
              Book Site Visit
            </Button>
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="xl:hidden glass border-b border-border/50"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-muted-foreground hover:text-foreground py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-border/50">
                <a
                  href="tel:9300160966"
                  className="flex items-center gap-2 text-lg font-bold text-primary mb-4"
                >
                  <Phone className="w-5 h-5" />
                  9300 160 966
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-600 text-white font-semibold mb-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>

                <Button className="bg-red-500 text-white w-full">
                  Book Site Visit
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
