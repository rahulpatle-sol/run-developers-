"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

/* ---------------- CONTACT CARDS DATA ---------------- */
const cards = [
  {
    icon: Mail,
    title: "Email Us",
    value: "contact@rundevelopers.in",
    desc: "Reach us anytime for enquiries",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 93001 60966",
    desc: "Mon–Sat, 10 AM – 7 PM",
  },
  {
    icon: MapPin,
    title: "Site Location",
    value: "AK Nagar, Mandla Road",
    desc: "Book a site visit today",
  },
];

/* ---------------- PAGE ---------------- */
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#faf8f3] to-[#f2ede4] px-6 py-20">
      
      {/* HERO */}
      <section className="max-w-6xl mx-auto mb-24 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[4px] text-neutral-500 mb-6">
            CONTACT RUN DEVELOPERS
          </p>

          <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6 leading-tight">
            Let’s Build <br /> Something Valuable
          </h1>

          <p className="text-neutral-600 max-w-lg text-sm leading-relaxed">
            Whether you are planning to purchase a residential plot, book a site
            visit, or discuss an upcoming project — our team is here to guide you
            with transparency and trust.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            className="rounded-3xl shadow-2xl"
            alt="Contact Run Developers"
          />
        </motion.div>
      </section>

      {/* CONTACT CARDS */}
      <section className="max-w-6xl mx-auto mb-28 grid gap-6 md:grid-cols-3">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group rounded-2xl bg-white p-8 shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#f5efe6] to-[#e9dfcf] mb-6 group-hover:scale-110 transition">
              <card.icon className="w-6 h-6 text-neutral-800" />
            </div>

            <h3 className="text-xl font-semibold text-neutral-900 mb-1">
              {card.title}
            </h3>

            <p className="text-neutral-700 font-medium mb-2">
              {card.value}
            </p>

            <p className="text-sm text-neutral-500">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </section>

      {/* CONTACT FORM */}
      <section className="max-w-3xl mx-auto mb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-10"
        >
          <h2 className="text-2xl font-serif text-neutral-900 mb-8">
            Send Us a Message
          </h2>

          <form className="grid gap-5">
            <input
              className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-300"
              placeholder="Your Name"
            />
            <input
              className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-300"
              placeholder="Your Email"
            />
            <textarea
              className="border rounded-xl px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-neutral-300"
              placeholder="Your Message"
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 text-white py-3 text-sm hover:bg-neutral-800 transition"
            >
              <Send size={16} /> Send Message
            </button>
          </form>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-serif text-neutral-900 mb-4"
        >
          Visit the Site. Experience the Vision.
        </motion.h3>

        <p className="text-neutral-600 mb-8 text-sm">
          Schedule a site visit today and explore AK Nagar firsthand.
        </p>

        <button className="rounded-full px-10 py-4 bg-neutral-900 text-white text-sm hover:bg-neutral-800 transition">
          Book a Site Visit
        </button>
      </section>
    </div>
  );
}
