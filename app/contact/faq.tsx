"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Is the land legally approved and registered?",
    a: "Yes. All Run Developers projects are legally verified with clear title ownership, approved layouts (T&CP), and RERA registered plots ensuring complete transparency.",
  },
  {
    q: "Do you provide registry and documentation support?",
    a: "Absolutely. Our dedicated legal team assists buyers through the entire process, including stamp duty guidance and hassle-free documentation.",
  },
  {
    q: "Are basic infrastructure facilities included?",
    a: "Every project includes premium 30-40ft wide internal roads, specialized drainage systems, electricity connectivity, and dedicated green park areas.",
  },
  {
    q: "Can plots be purchased through EMI plans?",
    a: "Yes. We offer flexible payment options and have tie-ups with leading banks for easy loan facilities and structured installment plans.",
  },
];

export default function PremiumFAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-head", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".faq-card", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".faq-container",
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#ebeae6] px-6 lg:px-20 py-32 overflow-hidden font-sans text-zinc-900"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/30 blur-[120px] rounded-full -mr-64 -mt-64" />

      <div className="relative max-w-5xl mx-auto">
        
        {/* --- HEADER: GIANT SERIF --- */}
        <div className="faq-head text-center mb-24">
          <p className="text-[10px] font-bold tracking-[5px] text-zinc-400 mb-6 uppercase italic">
            Common Inquiries
          </p>

          <h2 className="text-5xl md:text-8xl font-serif font-bold leading-[0.85] tracking-tighter text-zinc-900">
            Clear Answers <br />
            <span className="text-zinc-400 italic font-light font-sans tracking-tight">For Your Peace</span>
          </h2>
          
          <div className="mt-10 h-1 w-20 bg-zinc-900 mx-auto rounded-full" />
        </div>

        {/* --- FAQ LIST: MOLDED CARDS --- */}
        <div className="faq-container space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="faq-card bg-[#dedede] rounded-[40px] p-1 shadow-inner border border-white/20 transition-all duration-500"
            >
              <div 
                className={cn(
                  "rounded-[36px] transition-all duration-500 overflow-hidden border-[4px] border-white",
                  active === i ? "bg-zinc-900 text-white shadow-2xl scale-[1.02]" : "bg-white text-zinc-900 shadow-lg"
                )}
              >
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  className="w-full flex justify-between items-center px-8 py-7 text-left group"
                >
                  <span className="text-lg md:text-xl font-bold tracking-tight">
                    {item.q}
                  </span>

                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                    active === i ? "bg-white text-black rotate-45" : "bg-zinc-100 text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white"
                  )}>
                    <Plus size={20} />
                  </div>
                </button>

                <div
                  className={cn(
                    "px-8 transition-all duration-500 ease-in-out overflow-hidden",
                    active === i ? "max-h-[300px] pb-10 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className={cn(
                    "text-base leading-relaxed italic font-medium max-w-2xl",
                    active === i ? "text-zinc-400" : "text-zinc-500"
                  )}>
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-20 text-center">
          <p className="text-sm font-medium text-zinc-500 italic mb-6">Still have questions?</p>
          <a 
            href="tel:9300160966"
            className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full font-bold shadow-xl border border-zinc-100 hover:scale-105 transition-transform"
          >
            Ask Our Experts 
            <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center">
               <Plus size={14} className="rotate-45" />
            </div>
          </a>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </section>
  );
}