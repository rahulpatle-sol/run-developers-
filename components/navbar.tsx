"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { MagneticButton } from "./magnetic-button"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Plot Layout", href: "/plot-layout" },
  { name: "Location", href: "/location" },
  { name: "Contact", href: "/contact" },
]

function GlitchLink({
  children,
  href,
  isActive,
  onClick,
}: { children: string; href: string; isActive: boolean; onClick: () => void }) {
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
        transition={{ duration: 0.3, ease: "easeInOut" }}
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  }

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        className="absolute inset-0 border-b border-border/50"
        style={{
          opacity: navBgOpacity,
          backdropFilter: `blur(${navBlur}px)`,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
      />

      <div
        className={cn(
          "container mx-auto px-4 lg:px-6 flex items-center justify-between relative z-10 transition-all duration-500",
          isScrolled ? "py-2" : "py-4",
        )}
      >
        <motion.a
          href="#home"
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div className="relative" whileHover={{ rotate: [0, -3, 3, 0] }} transition={{ duration: 0.4 }}>
            <img src="/images/mainlogo.png" alt="Run Developers" className="h-12 w-auto object-contain" />
          </motion.div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.div key={link.name} custom={i} initial="hidden" animate="visible" variants={menuVariants}>
              <MagneticButton strength={0.15}>
                <GlitchLink
                  href={link.href}
                  isActive={activeLink === link.name}
                  onClick={() => setActiveLink(link.name)}
                >
                  {link.name}
                </GlitchLink>
              </MagneticButton>
            </motion.div>
          ))}
        </nav>

        {/* CTA Button with Phone */}
        <motion.div
          className="hidden lg:flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a
            href="tel:9300160966"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>9300 160 966</span>
          </a>
          <MagneticButton>
            <Button className="btn-glass-navy text-white px-6 shadow-lg hover:shadow-xl transition-all duration-300">
              Book Site Visit
            </Button>
          </MagneticButton>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="xl:hidden p-2 text-foreground relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="xl:hidden absolute top-full left-0 right-0 glass border-b border-border/50 overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2 glitch-link"
                  data-text={link.name}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4 border-t border-border/50"
              >
                <a href="tel:9300160966" className="flex items-center gap-2 text-lg font-bold text-primary mb-4">
                  <Phone className="w-5 h-5" />
                  <span>9300 160 966</span>
                </a>
                <Button className="btn-glass-navy text-white w-full">Book Site Visit</Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
