"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ProjectsHeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current?.querySelectorAll(".fade-up"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f6f4ef] px-6 lg:px-20 py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-7">
          <p className="fade-up text-xs tracking-[3px] text-gray-500 mb-6">
            RUN DEVELOPERS
          </p>

          <h1 className="fade-up text-4xl lg:text-6xl font-serif text-gray-900 leading-tight mb-8">
            Developing Spaces <br />
            That Define Future Living
          </h1>

          <p className="fade-up text-gray-600 text-sm leading-relaxed max-w-xl">
            Run Developers is committed to building legally compliant,
            thoughtfully planned residential projects. Our developments focus
            on infrastructure, connectivity, and long-term value—ensuring a
            secure investment and a better lifestyle.
          </p>

          <div className="fade-up mt-12 flex items-center gap-4 text-sm text-gray-700">
            <span className="inline-block w-10 h-[1px] bg-gray-400" />
            Scroll to explore projects
          </div>
        </div>

        {/* RIGHT PROJECT SHOWCASE */}
        <div className="lg:col-span-5 space-y-10">
          {/* MAIN PROJECT */}
          <div className="fade-up bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src="/ak-nagar.jpg"
              alt="AK Nagar"
              className="w-full h-[260px] object-cover"
            />
            <div className="p-6">
              <span className="text-xs tracking-wide text-green-700">
                Ongoing Project
              </span>
              <h3 className="mt-2 text-2xl font-serif text-gray-900">
                AK Nagar
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                AK Nagar is a strategically planned residential colony featuring
                wide internal roads, proper drainage systems, green open spaces,
                and clear legal documentation—designed for families seeking
                long-term stability and growth.
              </p>
            </div>
          </div>

          {/* UPCOMING PROJECTS */}
          <div className="fade-up">
            <p className="text-xs tracking-[2px] text-gray-500 mb-4">
              UPCOMING DEVELOPMENTS
            </p>

            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex justify-between border-b pb-2">
                <span>Green Valley Extension</span>
                <span className="text-gray-400">Upcoming</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Sunrise Enclave</span>
                <span className="text-gray-400">Upcoming</span>
              </li>
              <li className="flex justify-between">
                <span>Urban Nest</span>
                <span className="text-gray-400">Planning Stage</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
