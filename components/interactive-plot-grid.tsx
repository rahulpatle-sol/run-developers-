"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Phone, Mail, MapPin, X, LayoutGrid, CheckCircle2, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Generate 71 plots dynamically
const generatePlots = () => {
  const plots = []
  const soldPlots = [5, 12, 18, 25, 32, 36, 40, 43, 47, 51, 55, 59, 63, 68] // Example sold plots
  
  for (let i = 1; i <= 71; i++) {
    plots.push({
      id: `plot-${i}`,
      plotNo: `${i}`,
      area: 1200 + (i % 5) * 150, // Mock area calculation
      dimensions: "30 x 40",
      status: soldPlots.includes(i) ? "sold" : "available",
    })
  }
  return plots
}

const plotsData = generatePlots()

export function InteractivePlotGrid() {
  const [selectedPlot, setSelectedPlot] = useState<any>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(gridRef, { once: true, margin: "-100px" })

  const stats = {
    total: plotsData.length,
    available: plotsData.filter((p) => p.status === "available").length,
    sold: plotsData.filter((p) => p.status === "sold").length,
  }

  return (
    <section className="py-24 bg-[#FCFCFC] dark:bg-zinc-950 transition-colors duration-500">
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
              Click on a plot number to view specific dimensions, pricing, and availability status.
            </p>
          </div>

          {/* Clean Stats */}
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
                transition={{ delay: idx * 0.01, duration: 0.4 }}
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
                {plot.plotNo}
                {plot.status === 'sold' && (
                  <div className="absolute top-1 right-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  </div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Grid Legend */}
          <div className="mt-12 pt-8 border-t border-zinc-50 flex flex-wrap gap-8 justify-center items-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-md border border-zinc-200 bg-white" />
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Available Plots</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-md bg-zinc-100" />
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Already Sold</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <Info className="w-4 h-4" />
              <span className="text-[10px] font-medium italic">Dimensions are approximate values in sq.ft</span>
            </div>
          </div>
        </div>

        {/* Premium Detail Modal */}
        <AnimatePresence>
          {selectedPlot && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-zinc-900/40 backdrop-blur-sm"
              onClick={() => setSelectedPlot(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white dark:bg-zinc-900 w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl border border-white"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-1">Residential Plot</h4>
                      <h3 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">Plot no. : {selectedPlot.plotNo}</h3>
                    </div>
                    <button onClick={() => setSelectedPlot(null)} className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
                      <X className="w-5 h-5 text-zinc-400" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-2xl">
                      <p className="text-[10px] text-zinc-400 font-bold uppercase mb-1">Total Area</p>
                      <p className="text-xl font-bold">{selectedPlot.area} <span className="text-xs font-normal text-zinc-400">Sq.Ft</span></p>
                    </div>
                    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-2xl">
                      <p className="text-[10px] text-zinc-400 font-bold uppercase mb-1">Dimensions</p>
                      <p className="text-xl font-bold">{selectedPlot.dimensions}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-zinc-500">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm font-medium">T&CP Approved Title</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-500">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm font-medium">Bank Loan Facility Available</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-500">
                      <MapPin className="w-4 h-4 text-zinc-400" />
                      <span className="text-sm font-medium">Bypass Chowk, Seoni</span>
                    </div>
                  </div>

                  {selectedPlot.status === 'available' ? (
                    <div className="flex flex-col gap-3">
                      <Button className="w-full h-14 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold hover:opacity-90 transition-all text-base">
                        <Phone className="w-4 h-4 mr-2" /> Call Sales Expert
                      </Button>
                      <Button variant="outline" className="w-full h-12 border-zinc-200 rounded-2xl text-zinc-500 hover:bg-zinc-50">
                        Download Brochure
                      </Button>
                    </div>
                  ) : (
                    <div className="bg-rose-50 text-rose-500 p-4 rounded-2xl text-center font-bold">
                      This unit is currently reserved.
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}