"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RunDevelopersHero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".img-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".text-anim", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-[#f6f6f6] min-h-screen flex items-center px-6 lg:px-24 font-sans"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT IMAGE CARD */}
        <div className="img-card">
          <div className="bg-white shadow-xl rounded-sm overflow-hidden max-w-md">
            <img
              src="/images/image.png"
              alt="Modern Property"
              className="w-full h-[420px] object-cover "
            />

            <div className="p-6">
              <h4 className="font-serif text-lg mb-1">
                Modern Luxury Property
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Premium residential and commercial developments designed with
                modern planning and long-term value.
              </p>

              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Run Developers</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h1 className="text-anim font-serif text-5xl lg:text-6xl leading-tight mb-8 text-gray-900">
            Make Your <br />
            <span className="italic font-medium">Modern Property</span>
          </h1>

          <button className="text-anim border border-gray-900 px-6 py-3 text-sm tracking-wide hover:bg-gray-900 hover:text-white transition mb-10">
            Explore Now
          </button>

          <p className="text-anim text-sm text-gray-600 max-w-md leading-relaxed mb-8">
            <strong>Run Developers</strong> is a professional real-estate company
            specializing in property selling, residential colony development,
            and urban planning. We deliver transparency, strategic locations,
            and future-ready infrastructure.
          </p>

          <div className="text-anim flex items-center gap-6 text-xs text-gray-500">
            <div className="flex -space-x-2">
              <img
                src="/user1.jpg"
                className="w-8 h-8 rounded-full border"
              />
              <img
                src="/user2.jpg"
                className="w-8 h-8 rounded-full border"
              />
              <img
                src="/user3.jpg"
                className="w-8 h-8 rounded-full border"
              />
            </div>
            <span>Trusted by 150+ investors</span>
          </div>
        </div>
      </div>
    </section>
  );
}
