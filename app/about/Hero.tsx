"use client";

import React from "react";
import { MoveRight, ArrowUpRight, Building2 } from "lucide-react";

export default function RunDevelopersConstructionUI() {
  return (
    <main className="min-h-screen flex items-center  mt-12 justify-center p-6 md:p-12 font-sans text-[#1a1a1a]">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SECTION: THE IMAGE CARD (Molded Style) */}
        <div className="relative group flex justify-center lg:justify-start">
          {/* Main Molded Container */}
          <div className="w-full max-w-[450px] bg-white rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 p-3">
            <div className="rounded-[32px] overflow-hidden h-[500px] relative">
              <img 
                src="/images/rundeveloper.png" 
                alt="Construction Expert"
                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Image Overlay Label */}
              <div className="absolute top-6 left-6 bg-white/30 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/20">
                On-Site Excellence
              </div>
            </div>

            {/* Card Content Area */}
            <div className="p-8">
              <h4 className="text-xl font-bold tracking-tight mb-2 italic">Modern Luxury Property</h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                Premium residential and commercial developments designed with modern planning and long-term value.
              </p>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-gray-400">Run Developers</span>
                <ArrowUpRight className="w-5 h-5 text-zinc-300" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION: CONTENT & TYPOGRAPHY */}
        <div className="flex flex-col space-y-10">
          <div>
            <h1 className="text-6xl md:text-7xl lg:text-[85px] font-bold leading-[0.9] tracking-tighter text-zinc-900">
              Make Your <br />
              <span className="text-gray-300 italic font-medium">Modern Property</span>
            </h1>
          </div>

          <div className="flex flex-col gap-8">
           
            <p className="text-sm text-gray-500 max-w-md leading-relaxed font-medium">
              <strong className="text-zinc-900">Run Developers</strong> is a professional real-estate company specializing in property selling, residential colony development, and urban planning. We deliver transparency, strategic locations, and future-ready infrastructure.
            </p>
          </div>

          {/* Trusted Investors Section */}
          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i} 
                  src={`https://i.pravatar.cc/100?u=${i+20}`} 
                  className="w-10 h-10 rounded-full border-4 border-[#f8f8f8] shadow-sm"
                  alt="Investor"
                />
              ))}
            </div>
            <div>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                Trusted by 150+ investors
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}