"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

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

export default function ContactCards() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#fffdf9] to-[#f6f1e9]">
      <div className="max-w-6xl mx-auto px-6 grid gap-6 md:grid-cols-3">
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
      </div>
    </section>
  );
}
