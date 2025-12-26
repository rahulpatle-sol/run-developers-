"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Info, Phone, MapPin, Ruler, LayoutGrid } from "lucide-react";
import PremiumPlotShowcase from  "./view"
export default function AKNagarPremiumLayout() {
  const [hoveredPlot, setHoveredPlot] = useState(null);
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [filterType, setFilterType] = useState("all");

  // Plots Data (keeping your original data structure but cleaner)
const plots = [   

    // Row 1-2 (North Side)
    { id: "1", width: 30, length: 31, area: 3080.5, status: "available", type: "residential", location: "North Side" },
    { id: "2", width: 30, length: 31, area: 2828.9, status: "sold", type: "residential", location: "North Side" },
    
    // Row 3 (Multiple plots - Series)
    { id: "3", width: 30, length: 30, area: 1800, status: "available", type: "residential", location: "North Side" },
    { id: "5", width: 30, length: 30, area: 1800, status: "available", type: "residential", location: "North Side" },
    { id: "6", width: 30, length: 30, area: 1800, status: "sold", type: "residential", location: "North Side" },
    { id: "7", width: 30, length: 30, area: 1800, status: "available", type: "residential", location: "North Side" },
    { id: "8", width: 30, length: 30, area: 1800, status: "available", type: "residential", location: "North Side" },
    { id: "9", width: 30, length: 30, area: 1800, status: "sold", type: "residential", location: "North Side" },
    { id: "10", width: 30, length: 30, area: 1800, status: "available", type: "residential", location: "North Side" },
    { id: "11", width: 30, length: 30, area: 1800, status: "available", type: "residential", location: "North Side" },
    { id: "12", width: 30, length: 30, area: 1800, status: "available", type: "residential", location: "North Side" },
    { id: "13", width: 30, length: 30, area: 1800, status: "sold", type: "residential", location: "North Side" },
    { id: "14", width: 30, length: 30, area: 1800, status: "available", type: "residential", location: "North Side" },
    { id: "15", width: 30, length: 30, area: 1800, status: "available", type: "residential", location: "North Side" },
    { id: "16", width: 30, length: 30, area: 1800, status: "available", type: "residential", location: "North Side" },
    { id: "17", width: 30, length: 30, area: 1800, status: "available", type: "residential", location: "North Side" },
    { id: "18", width: 30, length: 30, area: 1800, status: "sold", type: "residential", location: "North Side" },
    { id: "19", width: 30, length: 30, area: 1800, status: "available", type: "residential", location: "North Side" },
    { id: "20", width: 30, length: 30, area: 1800, status: "available", type: "residential", location: "North Side" },
    { id: "21", width: 30, length: 30, area: 1800, status: "available", type: "residential", location: "North Side" },
    { id: "22", width: 30, length: 30, area: 1800, status: "available", type: "residential", location: "North Side" },
    
    // Row 4 (Commercial plots)
    { id: "4", width: 25, length: 25, area: 1500, status: "available", type: "commercial", location: "North Side" },
    { id: "23", width: 25, length: 25, area: 1500, status: "sold", type: "commercial", location: "East Side" },
    { id: "24", width: 25, length: 25, area: 1380, status: "available", type: "commercial", location: "East Side" },
    { id: "25", width: 25, length: 25, area: 1500, status: "available", type: "commercial", location: "East Side" },
    { id: "26", width: 25, length: 25, area: 1500, status: "sold", type: "commercial", location: "East Side" },
    { id: "27", width: 25, length: 25, area: 1500, status: "available", type: "commercial", location: "East Side" },
    { id: "28", width: 25, length: 25, area: 1500, status: "available", type: "commercial", location: "East Side" },
    { id: "29", width: 25, length: 25, area: 1500, status: "available", type: "commercial", location: "East Side" },
    { id: "30", width: 25, length: 25, area: 1500, status: "sold", type: "commercial", location: "East Side" },
    { id: "31", width: 25, length: 25, area: 1500, status: "available", type: "commercial", location: "East Side" },
    
    // Right side vertical plots (East)
    { id: "32", width: 23, length: 23, area: 1380, status: "available", type: "residential", location: "East Side" },
    { id: "33", width: 30, length: 30, area: 1560, status: "available", type: "residential", location: "East Side" },
    { id: "34", width: 38, length: 38, area: 1976, status: "sold", type: "corner", location: "East Side" },
    { id: "35", width: 38, length: 38, area: 1900, status: "available", type: "corner", location: "East Side" },
    { id: "36", width: 30, length: 30, area: 1500, status: "available", type: "residential", location: "East Side" },
    { id: "37", width: 25, length: 25, area: 1463.8, status: "available", type: "residential", location: "East Side" },
    { id: "38", width: 25, length: 25, area: 1453.1, status: "sold", type: "residential", location: "East Side" },
    { id: "39", width: 25, length: 25, area: 1431.5, status: "available", type: "residential", location: "East Side" },
    { id: "40", width: 25, length: 25, area: 1413.3, status: "available", type: "residential", location: "East Side" },
    { id: "41", width: 25, length: 25, area: 1410, status: "sold", type: "residential", location: "East Side" },
    
    // Inner ring plots
    { id: "42", width: 25, length: 25, area: 1409.4, status: "available", type: "residential", location: "Inner Ring" },
    { id: "43", width: 25, length: 25, area: 1459.4, status: "available", type: "residential", location: "Inner Ring" },
    { id: "44", width: 25, length: 25, area: 1487.5, status: "available", type: "residential", location: "Inner Ring" },
    { id: "45", width: 25, length: 25, area: 1515.6, status: "sold", type: "residential", location: "Inner Ring" },
    { id: "46", width: 25, length: 25, area: 1546.9, status: "available", type: "residential", location: "Inner Ring" },
    { id: "47", width: 25, length: 25, area: 1575, status: "available", type: "residential", location: "Inner Ring" },
    { id: "48", width: 25, length: 25, area: 1587.5, status: "sold", type: "residential", location: "Inner Ring" },
    { id: "49", width: 25, length: 25, area: 1631.3, status: "available", type: "residential", location: "Inner Ring" },
    
    // Bottom row (South Side)
    { id: "50", width: 25, length: 25.2, area: 1719.4, status: "available", type: "residential", location: "South Side" },
    { id: "51", width: 25.2, length: 25.2, area: 1805, status: "sold", type: "residential", location: "South Side" },
    { id: "52", width: 30, length: 30.25, area: 2263.1, status: "available", type: "residential", location: "South Side" },
    { id: "53", width: 30, length: 30.25, area: 2375.4, status: "available", type: "residential", location: "South Side" },
    { id: "54", width: 30, length: 30, area: 2456.3, status: "sold", type: "residential", location: "South Side" },
    { id: "55", width: 30, length: 30, area: 2520, status: "available", type: "residential", location: "South Side" },
    { id: "56", width: 30, length: 30, area: 2583.8, status: "available", type: "residential", location: "South Side" },
    { id: "57", width: 30, length: 30, area: 2651.3, status: "sold", type: "residential", location: "South Side" },
    { id: "58", width: 30, length: 30, area: 2711.3, status: "available", type: "residential", location: "South Side" },
    { id: "59", width: 30, length: 30, area: 2763.8, status: "available", type: "residential", location: "South Side" },
    
    // Left side vertical plots (West)
    { id: "60", width: 30, length: 30, area: 2820, status: "available", type: "residential", location: "West Side" },
    { id: "61", width: 30, length: 30, area: 3360, status: "available", type: "residential", location: "West Side" },
    { id: "62", width: 35, length: 35, area: 1312.5, status: "sold", type: "corner", location: "West Side" },
    { id: "63", width: 35, length: 35, area: 962.5, status: "available", type: "corner", location: "West Side" },
    { id: "64", width: 35, length: 35, area: 1225, status: "available", type: "corner", location: "West Side" },
    
    // Premium plots (Inner Premium)
    { id: "65", width: 30, length: 30, area: 3030, status: "available", type: "premium", location: "Premium Block" },
    { id: "66", width: 40, length: 40, area: 2400, status: "available", type: "premium", location: "Premium Block" },
    { id: "67", width: 40, length: 40, area: 2400, status: "sold", type: "premium", location: "Premium Block" },
    { id: "68", width: 31.5, length: 33, area: 1935, status: "available", type: "residential", location: "Premium Block" },
    { id: "69", width: 34.25, length: 36.75, area: 2595.9, status: "available", type: "residential", location: "Premium Block" },
    { id: "70", width: 30, length: 30.5, area: 2408.7, status: "available", type: "residential", location: "Premium Block" },
    { id: "71", width: 40, length: 62.75, area: 6601.7, status: "available", type: "premium", location: "Premium Block" },
  ];

  const filteredPlots = filterType === "all" ? plots : plots.filter(p => p.type === filterType);

  return (
    <main className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-zinc-100">
      
      {/* --- HERO HEADER --- */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="text-[10px] font-bold tracking-[5px] uppercase text-zinc-400 mb-4 block">Project Inventory</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter mb-6">
            A.K. <span className="text-zinc-300 italic font-light">Nagar</span>
          </h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed italic">
            "A thoughtfully planned residential colony near Podar School, Seoni. 
            Legally secure, infrastructure-first."
          </p>
        </motion.div>

        {/* --- QUICK STATS --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
          {[
            { label: "Available", value: "48", color: "text-green-600" },
            { label: "Booked", value: "23", color: "text-zinc-400" },
            { label: "Approvals", value: "T&CP/RERA", color: "text-zinc-900" },
            { label: "Roads", value: "30-40ft", color: "text-zinc-900" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 border-r border-zinc-100 last:border-0">
              <p className={`text-2xl font-bold tracking-tight ${stat.color}`}>{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FILTER NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-y border-zinc-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto no-scrollbar justify-center">
          {["all", "residential", "commercial", "premium", "corner"].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                filterType === type 
                ? "bg-zinc-900 text-white shadow-xl scale-105" 
                : "bg-zinc-50 text-zinc-500 hover:bg-zinc-100"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </nav>

      {/* --- INVENTORY TABLE --- */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-[40px] overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-[10px] uppercase tracking-[3px] text-zinc-400 border-b border-zinc-50">
                <th className="px-8 py-6 text-left font-bold">Plot ID</th>
                <th className="px-8 py-6 text-left font-bold">Category</th>
                <th className="px-8 py-6 text-left font-bold">Dimensions</th>
                <th className="px-8 py-6 text-left font-bold">Sq. Ft Area</th>
                <th className="px-8 py-6 text-left font-bold">Status</th>
                <th className="px-8 py-6 text-right font-bold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {filteredPlots.map((plot) => (
                <motion.tr
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ x: 10, backgroundColor: "rgba(250,250,250,1)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  key={plot.id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedPlot(plot)}
                >
                  <td className="px-8 py-8">
                    <span className="text-xl font-bold tracking-tighter">#{plot.id.padStart(2, '0')}</span>
                  </td>
                  <td className="px-8 py-8">
                    <span className="text-[10px] font-bold uppercase px-3 py-1 rounded-full bg-zinc-100 text-zinc-500 group-hover:bg-zinc-900 group-hover:text-white transition-colors tracking-widest">
                      {plot.type}
                    </span>
                  </td>
                  <td className="px-8 py-8 font-medium text-zinc-400">
                    <span className="text-zinc-900 font-bold">{plot.width} × {plot.length}</span> ft
                  </td>
                  <td className="px-8 py-8">
                    <span className="text-lg font-bold tracking-tight">{plot.area.toLocaleString()}</span>
                  </td>
                  <td className="px-8 py-8">
                    <div className="flex items-center gap-2">
                      {plot.status === "sold" ? (
                        <div className="flex items-center gap-2 text-zinc-300">
                          <XCircle className="w-4 h-4" />
                          <span className="text-[10px] font-bold uppercase tracking-widest line-through">Sold Out</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">Available</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-8 py-8 text-right">
                    <button className="p-3 rounded-full bg-zinc-50 text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* --- SELECTED PLOT MODAL (Slide-up Chill Animation) --- */}
      <AnimatePresence>
        {selectedPlot && (
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[60]  bg-gray-400 text-white p-8 md:p-12 rounded-t-[50px] shadow-[0_-20px_80px_rgba(0,0,0,0.3)]"
          >
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-8">
                <div className="w-24 h-24 bg-white/10 rounded-[30px] flex items-center justify-center text-4xl font-bold border border-white/10">
                  {selectedPlot.id}
                </div>
                <div>
                  <h3 className="text-4xl font-bold tracking-tight mb-2 italic">A.K. Nagar Bypass</h3>
                  <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
                    <span className="flex items-center gap-1"><Ruler className="w-3 h-3" /> {selectedPlot.area} Sq. Ft</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {selectedPlot.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 w-full md:w-auto">
                <a href="tel:9300160966" className="flex-1 md:flex-none bg-red-500 text-white px-10 py-5 rounded-full font-bold text-center flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" /> Call for Booking
                </a>
                <button 
                  onClick={() => setSelectedPlot(null)}
                  className="px-8 py-5 rounded-full border border-white/20 font-bold hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

<PremiumPlotShowcase/>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </main>
  );
}

function ArrowUpRight(props: any) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}