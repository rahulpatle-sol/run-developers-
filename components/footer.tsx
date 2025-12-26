"use client";

import { useRef } from "react";
import { Facebook, Instagram, MessageCircle, ArrowUp, Mail, Phone, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "A.K. Nagar", href: "/projects" },
    { name: "Our Process", href: "/process" },
    { name: "Amenities", href: "/projects" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Book Site Visit", href: "/contact" },
    { name: "Location Map", href: "/location" },
    { name: "Inventory", href: "/plot-layout" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "RERA Details", href: "#" },
  ],
};

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className="bg-[#ebeae6] pt-20 overflow-hidden font-sans text-zinc-900">
      
      {/* --- GIANT BACKGROUND TEXT --- */}
      <div className="absolute left-0 right-0 pointer-events-none select-none overflow-hidden h-[300px] flex items-center opacity-[0.03]">
        <h2 className="text-[250px] font-bold tracking-tighter whitespace-nowrap leading-none">
          RUN DEVELOPERS • RUN DEVELOPERS • RUN DEVELOPERS
        </h2>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* TOP SECTION: MOLDED CTA */}
        <div className="bg-[#dedede] rounded-[60px] p-1 shadow-inner border border-white/20 mb-20">
          <div className="bg-white rounded-[56px] p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-10 shadow-2xl border-[6px] border-white">
            <div className="text-center md:text-left">
              <h3 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter mb-4">
                Ready to build <br /> 
                <span className="text-zinc-400 italic font-light font-sans tracking-tight">your legacy?</span>
              </h3>
              <p className="text-zinc-500 font-medium italic">Join 200+ families at A.K. Nagar, Seoni.</p>
            </div>
            <button className="bg-black text-white px-12 py-6 rounded-full flex items-center gap-4 font-bold text-lg hover:bg-[#f15a24] transition-all group shadow-xl">
              Get in Touch <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        {/* MAIN LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-20 border-b border-zinc-200">
          
          {/* BRAND INFO */}
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <img src="/images/mainlogo.png" alt="Logo" className="h-14 w-auto grayscale" />
              <div>
                 <p className="text-sm font-bold tracking-[4px]">RUN</p>
                 <p className="text-[10px] font-bold text-zinc-400 tracking-[1px] uppercase">Developers</p>
              </div>
            </div>
            <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed italic font-medium">
              We focus on legal transparency, modern infrastructure, and long-term value for every home-buyer in Seoni.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-zinc-400 hover:text-black">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* DYNAMIC COLUMNS */}
          {[
            { title: "Project", links: footerLinks.company },
            { title: "Navigation", links: footerLinks.support },
            { title: "Legal", links: footerLinks.legal },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] font-bold uppercase tracking-[4px] text-zinc-400 mb-8 italic">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm font-bold text-zinc-600 hover:text-black hover:pl-2 transition-all block">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM BAR */}
        <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-zinc-400">
            <p>© 2025 Run Developers</p>
            <span className="hidden md:block w-1 h-1 bg-zinc-300 rounded-full" />
            <p className="text-zinc-300">RERA: MP/SEONI/XXXXX</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-[3px] text-zinc-900"
          >
            Back to Top 
            <div className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </footer>
  );
}