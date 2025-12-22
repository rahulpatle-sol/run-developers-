import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-neutral-50 to-neutral-100 px-6 py-16">
      {/* HERO */}
      <section className="max-w-6xl mx-auto mb-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Let’s Build Something Valuable</h1>
          <p className="text-neutral-600 max-w-lg">
            Whether you want to discuss a project, explore collaboration, or just say hello — I’m always open to meaningful conversations.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            className="rounded-3xl shadow-xl"
            alt="Contact"
          />
        </motion.div>
      </section>

      {/* CONTACT CARDS */}
      <section className="max-w-6xl mx-auto mb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[{ icon: Mail, title: "Email", value: "hello@yourdomain.com" },
          { icon: Phone, title: "Phone", value: "+91 9XXX XXX XXX" },
          { icon: MapPin, title: "Location", value: "India" }].map((item, i) => (
          <Card key={i} className="rounded-3xl shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <item.icon className="w-8 h-8 text-neutral-700" />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-neutral-600 text-sm">{item.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* CONTACT FORM */}
      <section className="max-w-3xl mx-auto mb-24">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="rounded-3xl shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <form className="grid gap-4">
                <input className="border rounded-xl px-4 py-3" placeholder="Your Name" />
                <input className="border rounded-xl px-4 py-3" placeholder="Your Email" />
                <textarea className="border rounded-xl px-4 py-3 h-32" placeholder="Your Message" />
                <Button className="rounded-xl gap-2 mt-2"><Send size={16} /> Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto text-center">
        <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-4">
          Open For Freelance & Product Work
        </motion.h3>
        <p className="text-neutral-600 mb-6">Let’s turn ideas into scalable, production-ready systems.</p>
        <Button size="lg" className="rounded-full px-8">Start a Conversation</Button>
      </section>
    </div>
  );
}
