"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LocationHero() {
  const router = useRouter();

  const whatsappNumber = "919300160966"; // country code + number
  const whatsappMessage = encodeURIComponent(
    "Hello Run Developers, I would like to book a site visit for A.K. Nagar, Seoni."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative overflow-hidden bg-[#fffaf3]">
      {/* subtle background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#e8dcc6_1px,transparent_1px)] [background-size:22px_22px] opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-28 text-center">
        {/* badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm text-sm text-neutral-700 mb-6"
        >
          <MapPin size={14} />
          Prime Project Location
        </motion.div>

        {/* heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight"
        >
          Discover premium living at{" "}
          <span className="relative inline-block">
            <span className="relative z-10">A.K. Nagar</span>
            <span className="absolute left-0 bottom-1 w-full h-3 bg-[#e8dcc6] rounded-full -z-0" />
          </span>
          , Seoni
        </motion.h1>

        {/* subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-6 max-w-3xl mx-auto text-lg text-neutral-700"
        >
          A thoughtfully planned plotting project by{" "}
          <strong>Run Developers</strong>, located near Bypass Chowk, Village
          Bithli — designed for peaceful living with excellent connectivity.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* View Site Location → /projects */}
          <button
            onClick={() => router.push("/projects")}
            className="rounded-full bg-neutral-900 text-white px-8 py-4 font-medium shadow-lg hover:shadow-xl transition"
          >
            View Site Location
          </button>

          {/* Book a Site Visit → WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-8 py-4 font-medium text-neutral-900 shadow-md hover:shadow-lg transition text-center"
          >
            Book a Site Visit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
