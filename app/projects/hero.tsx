"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ProjectsHeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".hero-title",
          {
            y: 40,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.2"
        )
        .from(
          ".hero-desc",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ".hero-scroll",
          {
            opacity: 0,
            x: -20,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".project-card",
          {
            y: 60,
            opacity: 0,
            duration: 1,
          },
          "-=0.2"
        )
        .from(
          ".upcoming-item",
          {
            y: 20,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
          },
          "-=0.6"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#f7f5f0] via-[#fdfdfc] to-white px-6 lg:px-20 py-28"
    >
      {/* subtle background grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
        {/* LEFT */}
        <div className="lg:col-span-7">
          <p className="hero-eyebrow text-xs tracking-[4px] text-gray-500 mb-6">
            RUN DEVELOPERS
          </p>

          <h1 className="hero-title text-4xl lg:text-6xl font-serif text-gray-900 leading-[1.1] mb-8">
            Developing Spaces <br />
            That Define <span className="italic">Future Living</span>
          </h1>

          <p className="hero-desc text-gray-600 text-sm leading-relaxed max-w-xl">
            Run Developers focuses on legally secure, infrastructure-first
            residential developments. Every project is planned with clarity,
            longevity, and community growth at its core.
          </p>

          <div className="hero-scroll mt-14 flex items-center gap-4 text-xs text-gray-700 tracking-wide uppercase">
            <span className="inline-block w-12 h-[1px] bg-gray-400" />
            Scroll to explore projects
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5 space-y-14">
          {/* MAIN PROJECT */}
          <div className="project-card group bg-white rounded-3xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] overflow-hidden transition-transform duration-500 hover:-translate-y-2">
            <div className="relative">
              <img
                src="/images/main-gate.png"
                alt="AK Nagar"
                className="w-full h-[660px] object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />

              {/* image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <span className="absolute bottom-6 left-6 text-xs tracking-widest uppercase text-white/90">
                Ongoing Project
              </span>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-serif text-gray-900">
                AK Nagar
              </h3>

              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                AK Nagar is a thoughtfully planned residential colony offering
                wide internal roads, structured drainage, green open zones, and
                transparent legal documentation—crafted for families seeking
                secure, long-term living.
              </p>
            </div>
          </div>

          {/* UPCOMING */}
          <div>
            <p className="text-xs tracking-[3px] text-gray-500 mb-6">
              UPCOMING DEVELOPMENTS
            </p>

            <ul className="space-y-5 text-sm text-gray-700">
              {[
                "Green Valley Extension",
                "Sunrise Enclave",
                "Urban Nest",
              ].map((name, i) => (
                <li
                  key={i}
                  className="upcoming-item group flex justify-between border-b pb-3"
                >
                  <span className="relative">
                    {name}
                    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
                  </span>
                  <span className="text-gray-400">
                    {i === 2 ? "Planning Stage" : "Upcoming"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
