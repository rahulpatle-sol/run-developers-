"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MoveRight, ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";

export default function PremiumProjectsHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple and elegant entrance
      gsap.from(".reveal", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#ebeae6] min-h-screen py-20 px-6 lg:px-16 font-sans text-[#1a1a1a]"
    >
      <div className="max-w-[1500px] mx-auto">
        
        {/* --- TOP BRANDING HEADER --- */}
        <div className="reveal flex justify-between items-center mb-20">
          <div className="flex items-center gap-3 font-bold text-2xl tracking-tighter">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white shadow-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span>RUN Developers</span>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[4px] text-gray-400">
            Est. 2010 • Seoni, MP
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* --- LEFT: GIANT TYPOGRAPHY & DESC --- */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full">
            <h1 className="reveal text-7xl md:text-[100px] lg:text-[130px] font-serif font-bold leading-[0.85] tracking-tighter mb-12 text-zinc-900">
              Developing <br />
              Spaces <span className="text-zinc-400 italic font-light font-sans tracking-tight">Future</span>
            </h1>

            <div className="reveal space-y-8 max-w-xl">
              <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-medium italic">
                "Run Developers focuses on legally secure, infrastructure-first
                residential developments. Every project is planned with clarity."
              </p>
              
              <div className="flex gap-6 items-center">
                {/* <button className="bg-black text-white px-10 py-5 rounded-full flex items-center gap-4 hover:bg-zinc-800 transition-all font-bold text-lg shadow-2xl group">
                  View All Projects <MoveRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button> */}
                <div className="hidden sm:block h-[1px] w-20 bg-zinc-300" />
              </div>
            </div>

            {/* UPCOMING MINI LIST (Molded Style) */}
            <div className="reveal mt-20 bg-white/50 backdrop-blur-md rounded-[40px] p-8 border border-white/60 shadow-xl max-w-md">
              <p className="text-[10px] font-bold uppercase tracking-[4px] text-zinc-400 mb-6 italic">Upcoming Developments</p>
              <ul className="space-y-4">
                {["Green Valley Extension", "Sunrise Enclave", "Urban Nest"].map((item, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-zinc-200/50 pb-3 group cursor-pointer">
                    <span className="text-sm font-bold tracking-tight group-hover:text-orange-600 transition-colors">{item}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-300" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* --- RIGHT: THE MOLDED PROJECT CARD --- */}
          <div className="lg:col-span-5">
            <div className="reveal relative bg-[#dedede] rounded-[65px] p-4 shadow-inner border border-white/20">
              
              {/* Internal Molded Card */}
              <div className="bg-white rounded-[55px] overflow-hidden shadow-2xl border-[8px] border-white relative">
                <div className="h-[650px] relative group">
                  <img
                    src="/images/main-gate.png"
                    alt="AK Nagar"
                    className="w-full h-full  grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                  
                  {/* Floating Status Badge */}
                  <div className="absolute top-8 left-8 bg-black/80 backdrop-blur-xl text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[3px]">
                    Ongoing Project
                  </div>

                  {/* Property Info Overlay */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] bg-white/95 backdrop-blur-md p-8 rounded-[40px] shadow-2xl">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-3xl font-serif font-bold tracking-tighter">AK Nagar</h3>
                        <p className="text-[10px] font-bold text-orange-600 uppercase tracking-[2px] mt-1 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> Bypass Road, Seoni
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center">
                        <ArrowUpRight className="w-6 h-6 text-zinc-900" />
                      </div>
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                      A thoughtfully planned residential colony offering wide internal roads, 
                      structured drainage, and green open zones for families.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Font Styling */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </section>
  );
}