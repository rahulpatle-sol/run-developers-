"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-anim", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-white px-6 lg:px-24 py-28 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-2xl mb-20">
          <p className="why-anim text-xs tracking-[3px] text-gray-500 mb-4">
            WHY CHOOSE US
          </p>

          <h2 className="why-anim font-serif text-4xl lg:text-5xl leading-tight text-gray-900">
            Built on Trust. <br />
            Designed for{" "}
            <span className="italic">Long-Term Value</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="why-anim">
            <h3 className="font-serif text-lg mb-3">Legal Transparency</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              All projects are legally verified, government-approved, and
              delivered with complete documentation and transparency.
            </p>
          </div>

          <div className="why-anim">
            <h3 className="font-serif text-lg mb-3">Strategic Locations</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our developments are located in high-growth areas with strong
              connectivity and future infrastructure planning.
            </p>
          </div>

          <div className="why-anim">
            <h3 className="font-serif text-lg mb-3">
              Planned Infrastructure
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Roads, drainage, water supply, green spaces, and utilities are
              carefully planned for sustainable living.
            </p>
          </div>

          <div className="why-anim">
            <h3 className="font-serif text-lg mb-3">
              Experienced Team
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              A professional team with deep knowledge of land acquisition,
              approvals, and real-estate execution.
            </p>
          </div>

          <div className="why-anim">
            <h3 className="font-serif text-lg mb-3">
              Investor Confidence
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Trusted by investors and home buyers for consistent delivery and
              long-term asset value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
