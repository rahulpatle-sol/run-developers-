// "use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";

export default function LocationView() {
  useEffect(() => {
    const map = L.map("map", {
      zoomControl: false,
      scrollWheelZoom: false,
    }).setView([22.0873, 79.5435], 15); // Seoni approx

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "Run developers  contributors",
    }).addTo(map);

    const customIcon = L.divIcon({
      html: `
        <div class="w-6 h-6 bg-black rounded-full flex items-center justify-center shadow-lg">
          <div class="w-3 h-3 bg-white rounded-full"></div>
        </div>
      `,
      className: "",
      iconSize: [34, 34],
      iconAnchor: [12, 12],
    });

    L.marker([22.0873, 79.5435], { icon: customIcon })
      .addTo(map)
      .bindPopup(
        `<strong>A.K. Nagar, Seoni</strong><br/>Village Bithli, Bypass Chowk`
      );

    return () => {
      map.remove();
    };
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#fffdf9] to-[#f4efe6] px-6 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="text-neutral-800" />
            <span className="uppercase tracking-widest text-sm text-neutral-600">
              Site Location
            </span>
          </div>

          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            A.K. Nagar, Seoni
          </h1>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Kh No. 218/2, 214/1, Village Bithli,  
            Bypass Chowk, Seoni, Madhya Pradesh – 480661
          </p>

          <div className="bg-white rounded-2xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <p className="font-semibold text-neutral-900 mb-2">
              Why this location?
            </p>
            <ul className="text-neutral-600 text-sm space-y-2">
              <li>• Prime bypass connectivity</li>
              <li>• Peaceful residential surroundings</li>
              <li>• Ideal for modern plotting projects</li>
            </ul>
          </div>
        </motion.div>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-[#f1e9db] to-[#e8dcc6] rounded-3xl blur-2xl opacity-60" />
          <div
            id="map"
            className="relative h-[420px] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
