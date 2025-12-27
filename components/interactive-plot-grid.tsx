"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Phone, MapPin, X, CheckCircle2, Info, Ruler, MoveHorizontal, MoveVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// --- FINAL ACCURATE DATA MERGED ---
const plotsData = [
  { id: "1", w1: 30, w2: 31, l1: 105, l2: 97, area: 3080.5, status: "sold", type: "residential", location: "North Side" },
  { id: "2", w1: 30, w2: 31, l1: 97, l2: 88.5, area: 2828.9, status: "sold", type: "residential", location: "North Side" },
  { id: "3", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  { id: "4", w1: 25, w2: 25, l1: 60, l2: 60, area: 1500, status: "sold", type: "commercial", location: "North Side" },
  { id: "5", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  { id: "6", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  { id: "7", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  { id: "8", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  { id: "9", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  { id: "10", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  { id: "11", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  { id: "12", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  { id: "13", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  { id: "14", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  { id: "15", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  { id: "16", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  { id: "17", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  { id: "18", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  { id: "19", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  { id: "20", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  //  sold  plots 1 -20
 
  { id: "21", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "available", type: "residential", location: "North Side" },
  { id: "22", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "available", type: "residential", location: "North Side" },
  { id: "23", w1: 25, w2: 25, l1: 60, l2: 60, area: 1500, status: "sold", type: "commercial", location: "East Side" },
  { id: "24", w1: 25, w2: 25, l1: 60, l2: 60, area: 1500, status: "sold", type: "commercial", location: "East Side" },
  //   sold only  23 ,24

  { id: "25", w1: 25, w2: 25, l1: 60, l2: 60, area: 1500, status: "available", type: "commercial", location: "East Side" },
  { id: "26", w1: 25, w2: 25, l1: 60, l2: 60, area: 1500, status: "sold", type: "commercial", location: "East Side" },
  { id: "27", w1: 25, w2: 25, l1: 60, l2: 60, area: 1500, status: "available", type: "commercial", location: "East Side" },
  { id: "28", w1: 25, w2: 25, l1: 60, l2: 60, area: 1500, status: "available", type: "commercial", location: "East Side" },
  { id: "29", w1: 25, w2: 25, l1: 60, l2: 60, area: 1500, status: "available", type: "commercial", location: "East Side" },
  { id: "30", w1: 25, w2: 25, l1: 60, l2: 60, area: 1500, status: "sold", type: "commercial", location: "East Side" },
  { id: "31", w1: 25, w2: 25, l1: 60, l2: 60, area: 1500, status: "available", type: "commercial", location: "East Side" },
  { id: "32", w1: 23, w2: 23, l1: 60, l2: 60, area: 1380, status: "available", type: "residential", location: "East Side" },
  //   plot 33 to  36  sold
  { id: "33", w1: 30, w2: 30, l1: 52, l2: 52, area: 1560, status: "sold", type: "residential", location: "East Side" },
  { id: "34", w1: 38, w2: 38, l1: 52, l2: 52, area: 1976, status: "sold", type: "corner", location: "East Side" },
  { id: "35", w1: 38, w2: 38, l1: 50, l2: 50, area: 1900, status: "sold", type: "corner", location: "East Side" },
  //  sold
  { id: "36", w1: 30, w2: 30, l1: 50, l2: 50, area: 1500, status: "sold", type: "residential", location: "East Side" },
  //  36  sold 
  { id: "37", w1: 25, w2: 25, l1: 58.8, l2: 58.3, area: 1463.8, status: "available", type: "residential", location: "East Side" },
  { id: "38", w1: 25, w2: 25, l1: 58.25, l2: 58, area: 1453.1, status: "available", type: "residential", location: "East Side" },
  { id: "39", w1: 25, w2: 25, l1: 58, l2: 57.5, area: 1443.8, status: "available", type: "residential", location: "East Side" },
  { id: "40", w1: 25, w2: 25, l1: 57.5, l2: 57, area: 1431.3, status: "available", type: "residential", location: "East Side" },
  { id: "41", w1: 25, w2: 25, l1: 57, l2: 55, area: 1400, status: "available", type: "residential", location: "East Side" },
  { id: "42", w1: 25, w2: 25, l1: 55, l2: 57.75, area: 1409.4, status: "available", type: "residential", location: "Inner Ring" },
  { id: "43", w1: 25, w2: 25, l1: 57.75, l2: 59, area: 1459.4, status: "available", type: "residential", location: "Inner Ring" },
  { id: "44", w1: 25, w2: 25, l1: 59, l2: 60, area: 1487.5, status: "available", type: "residential", location: "Inner Ring" },
  { id: "45", w1: 25, w2: 25, l1: 60, l2: 61.25, area: 1515.6, status: "available", type: "residential", location: "Inner Ring" },
  { id: "46", w1: 25, w2: 25, l1: 61.25, l2: 62.5, area: 1546.9, status: "available", type: "residential", location: "Inner Ring" },
  { id: "47", w1: 25, w2: 25, l1: 62.5, l2: 63.5, area: 1575, status: "available", type: "residential", location: "Inner Ring" },
  { id: "48", w1: 25, w2: 25, l1: 63.5, l2: 63.5, area: 1587.5, status: "available", type: "residential", location: "Inner Ring" },
  { id: "49", w1: 25, w2: 25, l1: 63.5, l2: 67, area: 1631.3, status: "available", type: "residential", location: "Inner Ring" },
  { id: "50", w1: 25, w2: 25.2, l1: 67, l2: 70, area: 1719.4, status: "available", type: "residential", location: "South Side" },
  { id: "51", w1: 25.2, w2: 25.2, l1: 70, l2: 73.25, area: 1805.0, status: "available", type: "residential", location: "South Side" },
  { id: "52", w1: 30, w2: 30.25, l1: 73.25, l2: 77, area: 2263.1, status: "available", type: "residential", location: "South Side" },
  { id: "53", w1: 30, w2: 30.25, l1: 77, l2: 80.7, area: 2375.4, status: "available", type: "residential", location: "South Side" },
  { id: "54", w1: 30, w2: 30, l1: 80.75, l2: 83, area: 2456.3, status: "available", type: "residential", location: "South Side" },
  { id: "55", w1: 30, w2: 30, l1: 83, l2: 85, area: 2520, status: "available", type: "residential", location: "South Side" },
  { id: "56", w1: 30, w2: 30, l1: 85, l2: 87.25, area: 2583.8, status: "available", type: "residential", location: "South Side" },
  { id: "57", w1: 30, w2: 30, l1: 87.25, l2: 89.5, area: 2651.3, status: "available", type: "residential", location: "South Side" },
  { id: "58", w1: 30, w2: 30, l1: 89.5, l2: 91.25, area: 2711.3, status: "available", type: "residential", location: "South Side" },
  { id: "59", w1: 30, w2: 30, l1: 91.25, l2: 93, area: 2763.8, status: "available", type: "residential", location: "South Side" },
  { id: "60", w1: 30, w2: 30, l1: 93, l2: 95, area: 2820, status: "available", type: "residential", location: "South Side" },
  { id: "61", w1: 35, w2: 35, l1: 95, l2: 97, area: 3360, status: "available", type: "residential", location: "West Side" },
  // ploot 62 to  66 sold
  { id: "62", w1: 35, w2: 35, l1: 37.5, l2: 37.5, area: 1312.5, status: "sold", type: "corner", location: "West Side" },
  { id: "63", w1: 35, w2: 35, l1: 27.5, l2: 27.5, area: 962.5, status: "sold", type: "corner", location: "West Side" },
  { id: "64", w1: 35, w2: 35, l1: 99.5, l2: 100.5, area: 3500, status: "available", type: "premium", location: "West Side" },
  { id: "65", w1: 30, w2: 30, l1: 100.5, l2: 101.5, area: 3030, status: "sold", type: "premium", location: "Premium Block" },
  { id: "66", w1: 40, w2: 40, l1: 60, l2: 60, area: 2400, status: "available", type: "premium", location: "Premium Block" },
  { id: "67", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "available", type: "premium", location: "Premium Block" },
  { id: "68", w1: 31.5, w2: 33, l1: 60, l2: 60, area: 1935, status: "available", type: "residential", location: "Premium Block" },
  { id: "69", w1: 34.25, w2: 36.75, l1: 69.75, l2: 76.5, area: 2595.9, status: "available", type: "residential", location: "Premium Block" },
  { id: "70", w1: 30, w2: 30.5, l1: 76.5, l2: 82.75, area: 2408.7, status: "available", type: "residential", location: "Premium Block" },
  //  plot 71 sold 
  { id: "71", w1: 40, w2: 40, l1: 60, l2: 60, area: 2400, status: "sold", type: "premium", location: "Premium Block" },
  { id: "72", w1: 40, w2: 62.75, l1: 92, l2: 165, area: 6601.7, status: "available", type: "premium", location: "Premium Block" }
];

export function InteractivePlotGrid() {
  const [selectedPlot, setSelectedPlot] = useState(null);
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  const stats = {
    total: plotsData.length,
    available: plotsData.filter((p) => p.status === "available").length,
    sold: plotsData.filter((p) => p.status === "sold").length,
  };

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4 border-zinc-200 text-zinc-500 font-medium px-4 py-1 rounded-full uppercase tracking-widest text-[10px]">
              Master Plan Visualization
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
              Explore A.K. Nagar <span className="text-zinc-400 font-light text-3xl md:text-4xl">Layout</span>
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Click on a plot number to view accurate boundary dimensions ($w_1, w_2, l_1, l_2$) and real-time availability.
            </p>
          </div>

          {/* Stats Display */}
          <div className="flex gap-4">
            <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-4 rounded-2xl shadow-sm min-w-[120px]">
              <p className="text-xs text-zinc-400 uppercase font-bold tracking-tighter mb-1">Available</p>
              <p className="text-2xl font-bold text-emerald-500">{stats.available}</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-4 rounded-2xl shadow-sm min-w-[120px]">
              <p className="text-xs text-zinc-400 uppercase font-bold tracking-tighter mb-1">Reserved</p>
              <p className="text-2xl font-bold text-rose-400">{stats.sold}</p>
            </div>
          </div>
        </div>

        {/* Master Plot Grid */}
        <div ref={gridRef} className="relative bg-white dark:bg-zinc-900/50 p-6 md:p-10 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-3 md:gap-4">
            {plotsData.map((plot, idx) => (
              <motion.button
                key={plot.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.005, duration: 0.3 }}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPlot(plot)}
                className={`
                  relative aspect-square flex items-center justify-center rounded-xl text-sm font-bold transition-all border
                  ${plot.status === 'available' 
                    ? 'bg-white hover:bg-emerald-50 border-zinc-200 text-zinc-700 hover:border-emerald-200 shadow-sm' 
                    : 'bg-zinc-50 dark:bg-zinc-800 border-zinc-100 text-zinc-300 dark:text-zinc-600 cursor-not-allowed'}
                `}
              >
                {plot.id}
                {plot.status === 'sold' && (
                  <div className="absolute top-1 right-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  </div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-12 pt-8 border-t border-zinc-50 flex flex-wrap gap-8 justify-center items-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-md border border-zinc-200 bg-white" />
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Available Plots</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-md bg-zinc-100" />
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Already Sold</span>
            </div>
          </div>
        </div>

        {/* --- MODERN MODAL WITH 4-DIMENSIONS --- */}
        <AnimatePresence>
          {selectedPlot && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-zinc-900/60 backdrop-blur-sm"
              onClick={() => setSelectedPlot(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                className="bg-white dark:bg-zinc-900 w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <Badge className="bg-zinc-100 text-zinc-500 hover:bg-zinc-100 border-none px-3 mb-2 uppercase text-[9px] font-black">
                        {selectedPlot.type} Unit
                      </Badge>
                      <h3 className="text-4xl font-black text-zinc-900 dark:text-zinc-100 tracking-tighter">Plot #{selectedPlot.id}</h3>
                    </div>
                    <button onClick={() => setSelectedPlot(null)} className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
                      <X className="w-5 h-5 text-zinc-400" />
                    </button>
                  </div>

                  {/* 4-DIMENSION GRID DISPLAY */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="col-span-2 bg-zinc-50 dark:bg-zinc-800/50 p-5 rounded-[2rem] flex flex-col items-center">
                       <span className="text-[10px] font-black text-zinc-300 uppercase tracking-[3px] mb-3">Boundary Dimensions</span>
                       <div className="w-full grid grid-cols-2 gap-8 text-center">
                          <div>
                            <p className="text-[10px] text-zinc-400 font-bold uppercase mb-1 flex items-center justify-center gap-1"><MoveHorizontal size={10}/> Widths</p>
                            <p className="text-lg font-bold text-zinc-800 dark:text-zinc-200">{selectedPlot.w1}′ <span className="text-zinc-300">/</span> {selectedPlot.w2}′</p>
                            <span className="text-[9px] text-zinc-400 font-medium">Front / Back</span>
                          </div>
                          <div>
                            <p className="text-[10px] text-zinc-400 font-bold uppercase mb-1 flex items-center justify-center gap-1"><MoveVertical size={10}/> Lengths</p>
                            <p className="text-lg font-bold text-zinc-800 dark:text-zinc-200">{selectedPlot.l1}′ <span className="text-zinc-300">/</span> {selectedPlot.l2}′</p>
                            <span className="text-[9px] text-zinc-400 font-medium">Left / Right</span>
                          </div>
                       </div>
                    </div>
                    
                    <div className="bg-zinc-900 text-white p-5 rounded-[2rem] text-center">
                      <p className="text-[10px] text-zinc-500 font-bold uppercase mb-1">Total Area</p>
                      <p className="text-2xl font-black">{selectedPlot.area.toLocaleString()}</p>
                      <span className="text-[10px] font-bold text-zinc-500">SQ. FEET</span>
                    </div>

                    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-5 rounded-[2rem] flex flex-col justify-center items-center">
                      <p className="text-[10px] text-zinc-400 font-bold uppercase mb-1">Location</p>
                      <p className="text-sm font-bold text-center text-zinc-600 dark:text-zinc-300">{selectedPlot.location}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8 px-2">
                    <div className="flex items-center gap-3 text-zinc-500">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs font-bold uppercase tracking-wider">T&CP Approved</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-500">
                      <MapPin className="w-4 h-4 text-zinc-400" />
                      <span className="text-xs font-bold uppercase tracking-wider">Bypass Road, Seoni</span>
                    </div>
                  </div>

                  {selectedPlot.status === 'available' ? (
                    <Button className="w-full h-16 bg-emerald-500 hover:bg-emerald-600 text-white rounded-3xl font-black text-lg shadow-xl shadow-emerald-200 dark:shadow-none transition-all">
                      <Phone className="w-5 h-5 mr-2" /> CALL 9300160966
                    </Button>
                  ) : (
                    <div className="bg-rose-50 text-rose-500 p-5 rounded-[2rem] text-center font-black uppercase tracking-[2px] text-sm">
                      Plot Reserved
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
      
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}