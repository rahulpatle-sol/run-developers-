"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const faqs = [
  {
    q: "Is the land legally approved and registered?",
    a: "Yes. All Run Developers projects are legally verified with clear title ownership, approved layouts, and registry-ready plots. We ensure complete transparency before any booking.",
  },
  {
    q: "Do you provide registry and documentation support?",
    a: "Absolutely. Our team assists buyers through the entire registry process, including documentation, stamp duty guidance, and legal verification.",
  },
  {
    q: "Are basic infrastructure facilities included?",
    a: "Yes. Every project includes well-planned internal roads, drainage systems, electricity connectivity, water supply provisions, and open green spaces.",
  },
  {
    q: "Can plots be purchased through EMI or installment plans?",
    a: "Yes. Selected projects offer flexible payment options and installment plans. Our sales team can guide you through available financing options.",
  },
  {
    q: "When will possession be given?",
    a: "Possession timelines depend on the project phase. For ongoing projects like AK Nagar, possession is aligned with infrastructure completion and registry milestones.",
  },
  {
    q: "Is the investment suitable for long-term growth?",
    a: "Run Developers focuses on strategically located projects with future connectivity and development potential, making them ideal for both residential use and long-term appreciation.",
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-head", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".faq-item", {
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-white via-[#faf8f3] to-white px-6 lg:px-20 py-28"
    >
      {/* subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="faq-head text-center mb-16">
          <p className="text-xs tracking-[4px] text-gray-500 mb-5">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2 className="text-3xl lg:text-5xl font-serif text-gray-900 leading-tight">
            Clear Answers for <br />
            <span className="italic">Confident Decisions</span>
          </h2>

          <p className="mt-6 text-sm text-gray-600 max-w-xl mx-auto">
            We believe trust starts with clarity. Here are answers to the most
            common questions our customers ask before investing.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-5">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="faq-item border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="text-sm lg:text-base font-medium text-gray-900">
                  {item.q}
                </span>

                <span
                  className={`ml-6 transition-transform duration-300 ${
                    active === i ? "rotate-45" : ""
                  }`}
                >
                  <span className="block w-4 h-[2px] bg-gray-800 mb-[6px]" />
                  <span className="block w-4 h-[2px] bg-gray-800" />
                </span>
              </button>

              <div
                className={`px-6 transition-all duration-500 ease-in-out ${
                  active === i
                    ? "max-h-40 pb-6 opacity-100"
                    : "max-h-0 pb-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
