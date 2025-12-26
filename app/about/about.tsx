"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { MoveRight, ShieldCheck, MapPin, ArrowUpRight, BarChart3, Users, Building2 } from "lucide-react";

// Swiper Styles
import "swiper/css";
import "swiper/css/effect-fade";

export default function RunDevelopersPremium() {
  return (
    <main className="bg-[#ebebeb] min-h-screen p-4 md:p-10 font-sans text-[#1a1a1a]">
      <div className="max-w-[1440px] mx-auto space-y-6">
        
        {/* TOP HERO SECTION - Molded Design */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[550px]">
          
          {/* Left Side: Content (8 Columns) */}
          <div className="lg:col-span-8 bg-[#f9f9f9] rounded-[50px] p-10 md:p-20 flex flex-col justify-center relative overflow-hidden border border-white shadow-sm">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <span className="text-xs tracking-[5px] uppercase font-bold text-red-600 mb-6 block">
                Run Developers & Colonizers
              </span>
              <h1 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter mb-10">
                Crafting <br />
                <span className="italic text-gray-400">Modern Legacies.</span>
              </h1>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-black text-white px-10 py-5 rounded-full flex items-center gap-3 hover:scale-105 transition-all font-bold text-lg shadow-xl">
                  Explore Projects <MoveRight className="w-5 h-5" />
                </button>
                <button className="bg-white border border-black/10 text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all">
                  Contact Us
                </button>
              </div>
            </motion.div>

            {/* Background Decorative Element */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-100 rounded-full blur-[100px] opacity-50" />
          </div>

          {/* Right Side: The "Molded" Image Card (4 Columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-4 bg-[#e0e0e0] rounded-[50px] relative flex items-center justify-center overflow-hidden border border-white/50 shadow-inner group"
          >
            {/* Swiper for the Molded Image */}
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              autoplay={{ delay: 3000 }}
              className="w-full h-full"
            >
              <SwiperSlide className="flex items-center justify-center p-10">
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <img 
                    src="/images/main-gate.png" 
                    alt="Luxury Villa"
                    className="w-full aspect-[3/4]  p-4 object-cover rounded-[30px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-white transform -rotate-3 group-hover:rotate-0 transition-transform duration-700"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-red-500 text-white p-6 rounded-3xl shadow-2xl">
                    <Building2 className="w-8 h-8" />
                  </div>
                </motion.div>
              </SwiperSlide>
              
              <SwiperSlide className="flex items-center justify-center p-10">
                <motion.div 
                   animate={{ y: [0, -20, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop" 
                    alt="Premium Colony"
                    className="w-full aspect-[3/4] object-cover rounded-[30px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-white transform rotate-3 group-hover:rotate-0 transition-transform duration-700"
                  />
                </motion.div>
              </SwiperSlide>
            </Swiper>

            {/* Subtle Label */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-md px-4 py-1 rounded-full text-[10px] uppercase tracking-[3px] font-bold">
              Featured Property
            </div>
          </motion.div>
        </section>

        {/* BOTTOM BENTO GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Trust/Security */}
          <div className="bg-[#d9d9d9] rounded-[45px] p-8 flex flex-col justify-between aspect-square border border-white/20">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-7 h-7 text-orange-600" />
            </div>
            <div>
              <h3 className="text-2xl font-serif italic mb-2">100% TNCP Approved</h3>
              <p className="text-sm text-gray-600">Secure investments with verified government documentation for every plot.</p>
            </div>
          </div>

          {/* Card 2: Run Developers Journey */}
          <div className="bg-white rounded-[45px] p-8 flex flex-col justify-between border border-black/5 shadow-sm">
            <h3 className="text-3xl font-serif leading-tight">
              A Legacy of <br /> <span className="text-orange-600 italic">15+ Years</span> in Seoni.
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="client" />
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-bold uppercase text-gray-400">Trusted by 2k+ Families</p>
            </div>
          </div>

          {/* Card 3: Inventory/Dark Stats */}
          <div className="bg-[#111] rounded-[45px] p-8 text-white flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[10px] tracking-[4px] uppercase text-gray-500">Active Inventory</span>
              <ArrowUpRight className="w-5 h-5 text-red-600" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/10 pb-2 italic font-serif">
                <span>A.K. Nagar</span>
                <span className="text-red-500 text-xs">Phase 1 Sold</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2 italic font-serif">
                <span>Bypass Greens</span>
                <span className="text-gray-500 text-xs tracking-widest">New Launch</span>
              </div>
            </div>
            <div className="text-4xl font-serif mt-4">12% <span className="text-[10px] uppercase font-sans text-gray-500 block">Avg. Annual Appreciation</span></div>
          </div>

          {/* Card 4: Detailed Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-[35px] p-6 flex flex-col items-center justify-center text-center border border-black/5">
              <BarChart3 className="w-6 h-6 mb-2 text-orange-600" />
              <div className="text-2xl font-bold">4.9</div>
              <div className="text-[9px] font-bold uppercase text-gray-400 tracking-tighter">Google Rating</div>
            </div>
            <div className="bg-red-600 text-white rounded-[35px] p-6 flex flex-col items-center justify-center text-center shadow-lg shadow-orange-600/20">
              <Users className="w-6 h-6 mb-2" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-[9px] font-bold uppercase text-white/70">Plots Delivered</div>
            </div>
            <div className="bg-white rounded-[35px] p-6 flex flex-col items-center justify-center col-span-2 border border-black/5">
               <div className="text-3xl font-serif tracking-tighter">Since 2010</div>
               <div className="text-[9px] font-bold uppercase text-gray-400 tracking-[4px] mt-1">Founding Year</div>
            </div>
          </div>

        </section>
      </div>

      {/* Global Swiper Customization */}
      <style jsx global>{`
        .swiper-slide-active {
          z-index: 20;
        }
      `}</style>
    </main>
  );
}