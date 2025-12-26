"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    step: "01",
    title: "Land Identification",
    desc: "We identify land parcels based on location growth and legal feasibility to ensure long-term value."
  },
  {
    step: "02",
    title: "Legal Due Diligence",
    desc: "Title clarity, zoning approvals, and compliance with local authorities for complete security."
  },
  {
    step: "03",
    title: "Master Planning",
    desc: "Designing colonies with wide roads, drainage systems, and optimized green zone layouts."
  },
  {
    step: "04",
    title: "Infrastructure",
    desc: "Execution of roads, water lines, and electricity—built for future urban expansion."
  },
  {
    step: "05",
    title: "Delivery & Trust",
    desc: "Delivering transparency and appreciation, ensuring trust far beyond possession."
  }
];

export default function PremiumProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-reveal", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#ebeae6] py-32 px-6 lg:px-20 font-sans text-[#1a1a1a]"
    >
      <div className="max-w-[1500px] mx-auto">
        
        {/* --- HEADER: GIANT TYPOGRAPHY --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24 items-end">
          <div className="lg:col-span-8">
            <p className="process-reveal text-[10px] tracking-[5px] font-bold text-zinc-400 uppercase mb-6 italic">
              Our Methodology
            </p>
            <h2 className="process-reveal text-5xl md:text-7xl lg:text-[100px] font-serif font-bold leading-[0.85] tracking-tighter text-zinc-900">
              Structured <br /> 
              <span className="text-zinc-400 italic font-light font-sans tracking-tight">Approach</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="process-reveal text-sm text-zinc-500 leading-relaxed max-w-sm italic font-medium">
              Every project follows a transparent process—balancing planning, 
              compliance, and execution to deliver reliable developments.
            </p>
          </div>
        </div>

        {/* --- PROCESS GRID: MOLDED BENTO CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((item, idx) => (
            <div
              key={item.step}
              className={`process-reveal group relative bg-[#dedede] rounded-[50px] p-1 shadow-inner border border-white/20 transition-transform duration-500 hover:-translate-y-2 ${
                idx === 3 ? "lg:col-span-2" : "" // Making step 4 wider for layout variety
              }`}
            >
              {/* Internal Molded Card */}
              <div className="bg-[#f9f9f9] rounded-[46px] p-10 h-full border-[6px] border-white shadow-xl flex flex-col justify-between overflow-hidden relative">
                
                {/* Huge Background Number */}
                <span className="absolute -right-4 -top-4 text-[150px] font-bold text-black/[0.03] leading-none pointer-events-none select-none">
                  {item.step}
                </span>

                <div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md mb-8 border border-zinc-100">
                    <span className="text-xs font-bold text-zinc-900">{item.step}</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold tracking-tight text-zinc-900 mb-6">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-zinc-500 leading-relaxed font-medium relative z-10">
                  {item.desc}
                </p>

                {/* Decorative Bottom Line */}
                <div className="mt-8 h-[2px] w-12 bg-zinc-200 group-hover:w-full group-hover:bg-zinc-900 transition-all duration-700" />
              </div>
            </div>
          ))}
          
          {/* EXTRA CTA CARD (Optional) */}
          {/* <div className="process-reveal bg-black rounded-[50px] p-10 flex flex-col justify-center items-center text-center text-white shadow-2xl">
             <p className="text-[10px] tracking-[4px] uppercase opacity-50 mb-4">Ready to start?</p>
             <h4 className="text-2xl font-serif italic mb-6">Build Your Legacy With Us</h4>
             <button className="bg-[#f15a24] text-white w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
               
             </button>
          </div> */}
        </div>

      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </section>
  );
}