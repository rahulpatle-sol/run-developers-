"use client";

import { motion } from "framer-motion";
import { MapPin, ShieldCheck, PhoneCall, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function PremiumPlotShowcase() {
  return (
    <div className="min-h-screen  font-sans text-[#1a1a1a] selection:bg-zinc-200">
      
      {/* --- HERO SECTION: MOLDED DEPTH --- */}
      <section className="max-w-[1500px] mx-auto px-6 lg:px-20 pt-28 pb-20">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-2 mb-8">
               <span className="px-4 py-1.5 rounded-full bg-white text-[10px] font-bold uppercase tracking-widest shadow-sm border border-zinc-200">
                 T&CP Approved
               </span>
               <span className="px-4 py-1.5 rounded-full bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg">
                 RERA Approved
               </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif font-bold leading-[0.85] tracking-tighter mb-10">
              A.K. Nagar <br />
              <span className="text-zinc-400 italic font-light font-sans tracking-tight">Premium Plots</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-500 max-w-xl leading-relaxed italic font-medium mb-12">
              "Experience the gold standard of residential planning at Bypass Chowk, Seoni. 
              Designed for longevity, value, and future-ready infrastructure."
            </p>

            <div className="flex flex-wrap gap-6">
              {/* <button className="bg-black text-white px-12 py-6 rounded-full flex items-center gap-4 font-bold text-lg shadow-2xl hover:bg-zinc-800 transition-all group">
                Reserve Plot <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button> */}
              <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-zinc-400">
         
              </div>
            </div>
          </motion.div>

          {/* Right Molded Image Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="lg:col-span-5 relative bg-[#dedede] rounded-[65px] p-4 shadow-inner border border-white/20"
          >
            <div className="bg-white rounded-[55px] overflow-hidden shadow-2xl border-[10px] border-white relative aspect-[4/5]">
              <img
                src="/images/main-gate.png"
                alt="A.K. Nagar Layout"
                className="w-full h-full  grayscale-[10%] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-md p-8 rounded-[40px] shadow-2xl">
                 <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-2 italic">Ongoing Project</p>
                 <h3 className="text-3xl font-serif font-bold tracking-tight">Mandla Road, Seoni</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURES: BENTO GRID STYLE --- */}
      <section className="max-w-[1500px] mx-auto px-6 lg:px-20 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {["Wide Internal Roads", "Garden & Park Area", "Gated Entry"].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[45px] p-10 border border-white shadow-xl flex flex-col justify-between h-72"
            >
              <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center">
                <CheckCircle2 className="text-zinc-900 w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-3">{item}</h3>
                <p className="text-sm text-zinc-500 font-medium leading-relaxed italic">
                  Infrastructure ensuring comfort, safety and long-term value appreciation.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- LOCATION SECTION: MINIMALIST --- */}
      <section id="location" className="max-w-[1500px] mx-auto px-6 lg:px-20 py-24">
        <div className="bg-[#dedede] rounded-[70px] p-4 shadow-inner">
          <div className="bg-white rounded-[60px] p-10 lg:p-20 flex flex-col lg:flex-row gap-16 items-center shadow-2xl border-[8px] border-white">
            <div className="flex-1">
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[5px] mb-6">Coordinates</p>
              <h2 className="text-5xl lg:text-7xl font-serif font-bold tracking-tighter mb-8 leading-none">
                Prime <br /> 
                <span className="text-zinc-400 italic font-light">Connectivity</span>
              </h2>
              <p className="text-zinc-500 font-medium italic mb-8 max-w-sm">
                Khasra No. 218/2, Near Bypass Chowk, Seoni, MP. Excellent road access and peaceful surroundings.
              </p>
              <div className="flex items-center gap-4 text-zinc-900 font-bold">
                 <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center">
                   <MapPin className="w-5 h-5" />
                 </div>
                 <span>Mandla Road Bypass</span>
              </div>
            </div>
            
            <div className="flex-1 w-full overflow-hidden rounded-[50px] shadow-2xl border-4 border-zinc-50 h-[450px]">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=79.540%2C22.080%2C79.560%2C22.100&layer=mapnik"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION: PREMIUM BLACK --- */}
      <section className="px-6 pb-20">
        <div className="max-w-[1500px] mx-auto rounded-[70px] py-24 px-10 text-center relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif font-bold  tracking-tighter mb-6">
              Book Your Legacy <br /> 
              <span className="text-zinc-500 italic font-light">at A.K. Nagar</span>
            </h2>
            <p className="text-zinc-400 mb-12 max-w-lg mx-auto italic font-medium">
              Limited inventory available. Secure your future investment with Run Developers today.
            </p>
            <a
              href="tel:9300160966"
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-transform"
            >
              <PhoneCall className="w-6 h-6" /> Call: 9300 160 966
            </a>
          </div>
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
      </section>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </div>
  );
}