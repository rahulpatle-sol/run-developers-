"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeBuild() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".build-anim", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
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
      className="bg-[#f6f6f6] px-6 lg:px-24 py-28 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-20 max-w-2xl">
          <p className="build-anim text-xs tracking-[3px] text-gray-500 mb-4">
            WHAT WE BUILD
          </p>

          <h2 className="build-anim font-serif text-4xl lg:text-5xl leading-tight text-gray-900">
            Spaces Designed for{" "}
            <span className="italic">Modern Living</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* CARD 1 */}
          <div className="build-anim">
            <img
              src="/colony.jpg"
              alt="Residential Colony"
              className="w-full h-[260px] object-cover grayscale mb-6"
            />
            <h3 className="font-serif text-xl mb-3">
              Residential Colonies
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Well-planned, government-approved residential colonies with
              modern infrastructure, open spaces, and long-term investment
              value.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="build-anim">
            <img
              src="/home.jpg"
              alt="Premium Homes"
              className="w-full h-[260px] object-cover grayscale mb-6"
            />
            <h3 className="font-serif text-xl mb-3">
              Premium Homes & Villas
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Thoughtfully designed modern homes that balance aesthetics,
              comfort, and durability for everyday living.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="build-anim">
            <img
              src="/commercial.jpg"
              alt="Commercial Property"
              className="w-full h-[260px] object-cover grayscale mb-6"
            />
            <h3 className="font-serif text-xl mb-3">
              Commercial Properties
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Strategically located commercial spaces designed for businesses,
              investors, and long-term growth opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
