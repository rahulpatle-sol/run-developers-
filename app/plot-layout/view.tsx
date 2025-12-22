"use client";

import { motion } from "framer-motion";
import { MapPin, CheckCircle, PhoneCall } from "lucide-react";

export default function PlotShowcasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f6f3ef] to-white">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            A.K. Nagar <span className="text-emerald-600">Premium Plots</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            T&CP Approved • RERA Approved Residential Colony at Bypass Chowk,
            Seoni. Designed for modern living with wide roads, greenery and
            premium planning.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#plots"
              className="px-6 py-3 rounded-full bg-emerald-600 text-white font-medium shadow hover:bg-emerald-700 transition"
            >
              View Plots
            </a>
            <a
              href="#location"
              className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
            >
              View Location
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <img
            src="/plots-render.jpg"
            alt="A.K. Nagar Layout"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8">
        {["Wide Internal Roads", "Garden & Park Area", "Gated Entry"].map(
          (item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-md"
            >
              <CheckCircle className="text-emerald-600 mb-4" />
              <h3 className="font-semibold text-lg text-slate-900">{item}</h3>
              <p className="text-slate-600 mt-2">
                Carefully planned infrastructure ensuring comfort, safety and
                long-term value.
              </p>
            </motion.div>
          )
        )}
      </section>

      {/* LOCATION */}
      <section
        id="location"
        className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-slate-900">Prime Location</h2>
          <p className="mt-4 text-slate-600">
            A.K. Nagar, Khasra No. 218/2, 214/1, Village Bithli, Near Bypass Chowk,
            Seoni, Madhya Pradesh – 480661.
          </p>
          <div className="mt-6 flex items-center gap-3 text-slate-700">
            <MapPin className="text-emerald-600" />
            <span>Excellent road connectivity & peaceful surroundings</span>
          </div>
        </motion.div>

        <motion.iframe
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src="https://www.openstreetmap.org/export/embed.html?bbox=79.540%2C22.080%2C79.560%2C22.100&layer=mapnik"
          className="w-full h-[360px] rounded-2xl border"
        />
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Book Your Plot at A.K. Nagar
          </h2>
          <p className="mt-4 text-emerald-100">
            Limited plots available. Secure your future investment today.
          </p>
          <a
            href="tel:9300160966"
            className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-white text-emerald-700 rounded-full font-semibold shadow"
          >
            <PhoneCall /> Call Now: 9300 160 966
          </a>
        </div>
      </section>
    </div>
  );
}
