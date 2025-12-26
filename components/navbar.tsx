"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Layout", href: "/plot-layout" },
  { name: "Location", href: "/location" },
  { name: "Contact", href: "/contact" },
];

// WhatsApp URL Constant
const whatsappUrl = `https://wa.me/919300160966?text=${encodeURIComponent(
  "Hello Run Developers, I am interested in A.K. Nagar plots. Please share more details."
)}`;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const navWidth = useTransform(scrollY, [0, 100], ["100%", "90%"]);
  const navTop = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsMobileMenuOpen(false);
    router.push(href);
  };

  return (
    <motion.header
      style={{ width: navWidth, top: navTop }}
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500",
        isScrolled 
          ? "bg-white/80 backdrop-blur-2xl rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/20 px-4 py-2" 
          : "bg-transparent px-6 py-6"
      )}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* LOGO */}
        <div 
          onClick={() => handleNav("/")} 
          className="cursor-pointer flex items-center gap-2 group"
        >
          <img src="/images/mainlogo.png" alt="Run" className="h-10 md:h-12 w-auto object-contain" />
          <div className="hidden sm:block text-zinc-900">
             <p className="text-xs font-bold tracking-[3px] leading-none">RUN</p>
             <p className="text-[10px] font-bold text-zinc-400 tracking-[1px]">DEVELOPERS</p>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden xl:flex items-center gap-2 bg-zinc-100/50 p-1 rounded-full border border-zinc-200/50">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNav(link.href)}
              className={cn(
                "px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all",
                pathname === link.href 
                  ? "bg-white text-black shadow-sm" 
                  : "text-zinc-500 hover:text-black hover:bg-white/50"
              )}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* CTA SECTION */}
        <div className="flex items-center gap-3">
          {/* Desktop WhatsApp Icon */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-green-600 hover:bg-green-500 hover:text-white transition-all shadow-sm"
          >
            <MessageCircle size={18} />
          </a>

          {/* Phone Icon */}
          <a
            href="tel:9300160966"
            className="hidden md:flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 hover:bg-black hover:text-white transition-all shadow-sm"
          >
            <Phone size={18} />
          </a>

          <button
            onClick={() => handleNav("/contact")}
            className="hidden lg:flex items-center gap-3 bg-zinc-900 text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#f15a24] transition-all shadow-xl active:scale-95"
          >
            Book Visit <ArrowUpRight size={16} />
          </button>

          {/* MOBILE TOGGLE */}
          <button
            className="xl:hidden h-11 w-11 flex items-center justify-center rounded-full bg-zinc-100 text-black shadow-inner"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 bg-white rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.15)] border border-zinc-100 p-8 xl:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-2">
            
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.href)}
                  className={cn(
                    "flex items-center justify-between w-full text-2xl font-serif font-bold py-4 border-b border-zinc-50 text-left transition-all active:pl-4",
                    pathname === link.href ? "text-[#ff0000]" : "text-zinc-900"
                  )}
                >
                  {link.name}
                  <ArrowUpRight className="opacity-20" />
                </button>
              ))}
            </div>

            <div className="mt-8 pt-8 flex flex-col gap-4">
              {/* FIXED WHATSAPP LINK FOR MOBILE */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-5 rounded-[25px] bg-[#25D366] text-white font-bold shadow-lg hover:shadow-green-200 transition-all active:scale-95"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
              
              <button 
                 onClick={() => handleNav("/contact")}
                 className="w-full py-5 rounded-[25px] bg-black text-white font-bold shadow-xl active:scale-95"
              >
                Schedule Site Visit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}