"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

/* ---------------- CONSTANTS ---------------- */
const EMAIL_TO = "abdulahadk104@gmail.com";
const WHATSAPP_NUMBER = "919300160966";

/* ---------------- CONTACT CARDS ---------------- */
const cards = [
  {
    icon: Mail,
    title: "Email Us",
    value: EMAIL_TO,
    desc: "Reach us anytime for enquiries",
    href: `mailto:${EMAIL_TO}`,
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 93001 60966",
    desc: "Mon–Sat, 10 AM – 7 PM",
    href: "tel:+919300160966",
  },
  {
    icon: MapPin,
    title: "Site Location",
    value: "AK Nagar, Mandla Road",
    desc: "Book a site visit today",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
];

/* ---------------- PAGE ---------------- */
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `New Enquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    /* ---------- EMAIL ---------- */
    window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;

    /* ---------- WHATSAPP ---------- */
    const whatsappMessage = encodeURIComponent(
      `Hello Run Developers,\n\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen  mt-8 bg-gradient-to-br from-white via-[#faf8f3] to-[#f2ede4] px-6 py-20">

      {/* HERO */}
      <section className="max-w-6xl mx-auto mb-24 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-xs tracking-[4px] text-neutral-500 mb-6">
            CONTACT RUN DEVELOPERS
          </p>

          <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
            Let’s Build Something Valuable
          </h1>

          <p className="text-neutral-600 max-w-lg text-sm">
            Whether you are planning to purchase a plot, book a site visit,
            or discuss a project — we are here to help.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Contact Run Developers"
          className="rounded-3xl shadow-2xl"
        />
      </section>

      {/* CONTACT CARDS */}
      <section className="max-w-6xl mx-auto mb-28 grid gap-6 md:grid-cols-3">
        {cards.map((card, i) => (
          <motion.a
            key={i}
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition block"
          >
            <card.icon className="w-6 h-6 mb-4 text-neutral-800" />
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-neutral-700">{card.value}</p>
            <p className="text-sm text-neutral-500">{card.desc}</p>
          </motion.a>
        ))}
      </section>

      {/* CONTACT FORM */}
      <section className="max-w-3xl mx-auto mb-28">
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-2xl p-10 grid gap-5"
        >
          <h2 className="text-2xl font-serif mb-4">
            Send Us a Message
          </h2>

          <input
            required
            placeholder="Your Name"
            className="border rounded-xl px-4 py-3"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            required
            type="email"
            placeholder="Your Email"
            className="border rounded-xl px-4 py-3"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            required
            placeholder="Your Message"
            className="border rounded-xl px-4 py-3 h-32"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 text-white py-3 hover:bg-neutral-800"
          >
            <Send size={16} /> Send Message
          </button>
        </motion.form>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h3 className="text-3xl font-serif mb-4">
          Visit the Site. Experience the Vision.
        </h3>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          className="inline-block rounded-full px-10 py-4 bg-neutral-900 text-white"
        >
          Book a Site Visit
        </a>
      </section>
    </div>
  );
}
