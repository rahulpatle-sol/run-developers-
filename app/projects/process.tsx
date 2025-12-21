"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const processSteps = [
  {
    step: "01",
    title: "Land Identification & Feasibility",
    desc: "We carefully identify land parcels based on location growth, connectivity, and legal feasibility to ensure long-term value and sustainability."
  },
  {
    step: "02",
    title: "Legal Due Diligence",
    desc: "All projects undergo strict legal verification including title clarity, zoning approvals, and compliance with local development authorities."
  },
  {
    step: "03",
    title: "Master Planning & Design",
    desc: "Our team designs well-planned colonies with wide roads, drainage systems, green zones, and optimized plot layouts."
  },
  {
    step: "04",
    title: "Infrastructure Development",
    desc: "Execution includes roads, water lines, electricity, sewage, and street lighting—built to support future urban expansion."
  },
  {
    step: "05",
    title: "Delivery & Long-Term Value",
    desc: "We deliver projects focused on livability, appreciation, and transparency—ensuring trust beyond possession."
  }
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current?.querySelectorAll(".process-card"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 lg:px-20 bg-gradient-to-b from-white via-[#faf7f2] to-[#f3efe7]"
    >
      {/* HEADER */}
      <div className="max-w-3xl mb-20">
        <p className="text-xs tracking-[3px] text-gray-500 mb-4">
          OUR PROCESS
        </p>
        <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6">
          A Structured Approach to <br /> Trusted Development
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          At Run Developers, every project follows a transparent and
          well-defined process—balancing planning, compliance, and execution to
          deliver reliable residential developments.
        </p>
      </div>

      {/* PROCESS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {processSteps.map((item) => (
          <div
            key={item.step}
            className="process-card bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <span className="text-sm font-medium text-gray-400">
              {item.step}
            </span>
            <h3 className="mt-4 text-xl font-serif text-gray-900">
              {item.title}
            </h3>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
