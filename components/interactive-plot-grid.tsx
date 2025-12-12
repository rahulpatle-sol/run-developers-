"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"
import { Phone, Mail, MapPin, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type Plot = {
  id: string
  plotNo: string
  width: number
  length: number
  widthFt: number
  lengthFt: number
  area: number
  status: "available" | "sold"
}

const plotsData: Plot[] = [
  // Plot 1
  { id: "1", plotNo: "1", width: 30, length: 31, widthFt: 105, lengthFt: 97, area: 3080.5, status: "available" },
  // Plot 2
  { id: "2", plotNo: "2", width: 30, length: 31, widthFt: 97, lengthFt: 88.5, area: 2828.9, status: "available" },
  // Plots 3-22 (rows of similar plots)
  {
    id: "3",
    plotNo: "3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22",
    width: 30,
    length: 30,
    widthFt: 60,
    lengthFt: 60,
    area: 1800,
    status: "available",
  },
  // Plots 4,23-31
  {
    id: "4",
    plotNo: "4,23,24,25,26,27,28,29,30,31",
    width: 25,
    length: 25,
    widthFt: 60,
    lengthFt: 60,
    area: 1500,
    status: "available",
  },
  // Plot 32
  { id: "32", plotNo: "32", width: 23, length: 23, widthFt: 60, lengthFt: 60, area: 1380, status: "sold" },
  // Plot 33
  { id: "33", plotNo: "33", width: 30, length: 30, widthFt: 52, lengthFt: 52, area: 1560, status: "available" },
  // Plot 34
  { id: "34", plotNo: "34", width: 38, length: 38, widthFt: 52, lengthFt: 52, area: 1976, status: "available" },
  // Plot 35
  { id: "35", plotNo: "35", width: 38, length: 38, widthFt: 50, lengthFt: 50, area: 1900, status: "available" },
  // Plot 36
  { id: "36", plotNo: "36", width: 30, length: 30, widthFt: 50, lengthFt: 50, area: 1500, status: "sold" },
  // Plot 37
  { id: "37", plotNo: "37", width: 25, length: 25, widthFt: 58.8, lengthFt: 58.3, area: 1463.8, status: "available" },
  // Plot 38
  { id: "38", plotNo: "38", width: 25, length: 25, widthFt: 58, lengthFt: 58, area: 1453.1, status: "available" },
  // Plot 39
  { id: "39", plotNo: "39", width: 25, length: 25, widthFt: 58, lengthFt: 57.5, area: 1443.5, status: "available" },
  // Plot 40
  { id: "40", plotNo: "40", width: 25, length: 25, widthFt: 57, lengthFt: 57, area: 1431.3, status: "sold" },
  // Plot 41
  { id: "41", plotNo: "41", width: 25, length: 25, widthFt: 57.5, lengthFt: 57.5, area: 1410.5, status: "available" },
  // Plot 42
  { id: "42", plotNo: "42", width: 25, length: 25, widthFt: 55, lengthFt: 57.75, area: 1409.4, status: "available" },
  // Plot 43
  { id: "43", plotNo: "43", width: 25, length: 25, widthFt: 57.75, lengthFt: 59, area: 1459.4, status: "sold" },
  // Plot 44
  { id: "44", plotNo: "44", width: 25, length: 25, widthFt: 59, lengthFt: 60, area: 1487.5, status: "available" },
  // Plot 45
  { id: "45", plotNo: "45", width: 25, length: 25, widthFt: 60, lengthFt: 61.25, area: 1515.6, status: "available" },
  // Plot 46
  { id: "46", plotNo: "46", width: 25, length: 25, widthFt: 61.25, lengthFt: 62.5, area: 1546.9, status: "available" },
  // Plot 47
  { id: "47", plotNo: "47", width: 25, length: 25, widthFt: 62.5, lengthFt: 63.5, area: 1575, status: "sold" },
  // Plot 48
  { id: "48", plotNo: "48", width: 25, length: 25, widthFt: 63.5, lengthFt: 63.5, area: 1587.5, status: "available" },
  // Plot 49
  { id: "49", plotNo: "49", width: 25, length: 25.2, widthFt: 63.5, lengthFt: 67, area: 1631.3, status: "available" },
  // Plot 50
  { id: "50", plotNo: "50", width: 25, length: 25.2, widthFt: 67, lengthFt: 70, area: 1719.4, status: "available" },
  // Plot 51
  { id: "51", plotNo: "51", width: 25.2, length: 25.2, widthFt: 70, lengthFt: 73.25, area: 1805, status: "sold" },
  // Plot 52
  { id: "52", plotNo: "52", width: 30, length: 30.25, widthFt: 73.25, lengthFt: 77, area: 2263.1, status: "available" },
  // Plot 53
  { id: "53", plotNo: "53", width: 30, length: 30.25, widthFt: 77, lengthFt: 80.7, area: 2375.4, status: "available" },
  // Plot 54
  { id: "54", plotNo: "54", width: 30, length: 30, widthFt: 80.75, lengthFt: 83, area: 2456.3, status: "available" },
  // Plot 55
  { id: "55", plotNo: "55", width: 30, length: 30, widthFt: 83, lengthFt: 85, area: 2520, status: "sold" },
  // Plot 56
  { id: "56", plotNo: "56", width: 30, length: 30, widthFt: 85, lengthFt: 87.25, area: 2583.8, status: "available" },
  // Plot 57
  { id: "57", plotNo: "57", width: 30, length: 30, widthFt: 87.25, lengthFt: 89.5, area: 2651.3, status: "available" },
  // Plot 58
  { id: "58", plotNo: "58", width: 30, length: 30, widthFt: 89.5, lengthFt: 91.25, area: 2711.3, status: "available" },
  // Plot 59
  { id: "59", plotNo: "59", width: 30, length: 30, widthFt: 91.25, lengthFt: 93, area: 2763.8, status: "sold" },
  // Plot 60
  { id: "60", plotNo: "60", width: 30, length: 30, widthFt: 93, lengthFt: 95, area: 2820, status: "available" },
  // Plot 61
  { id: "61", plotNo: "61", width: 35, length: 35, widthFt: 95, lengthFt: 97, area: 3360, status: "available" },
  // Plot 62
  { id: "62", plotNo: "62", width: 35, length: 35, widthFt: 37.5, lengthFt: 37.5, area: 1312.5, status: "available" },
  // Plot 63
  { id: "63", plotNo: "63", width: 35, length: 35, widthFt: 27.5, lengthFt: 27.5, area: 962.5, status: "sold" },
  // Plot 64
  { id: "64", plotNo: "64", width: 35, length: 35, widthFt: 37.5, lengthFt: 37.5, area: 1312.5, status: "available" },
  // Plot 65
  { id: "65", plotNo: "65", width: 30, length: 30, widthFt: 100.5, lengthFt: 101.5, area: 3030, status: "available" },
  // Plots 66-67
  { id: "66", plotNo: "66,67", width: 40, length: 40, widthFt: 60, lengthFt: 60, area: 2400, status: "available" },
  // Plot 68
  { id: "68", plotNo: "68", width: 31.5, length: 33, widthFt: 60, lengthFt: 60, area: 1935, status: "sold" },
  // Plot 69
  {
    id: "69",
    plotNo: "69",
    width: 34.25,
    length: 36.75,
    widthFt: 69.75,
    lengthFt: 76.5,
    area: 2595.9,
    status: "available",
  },
  // Plot 70
  {
    id: "70",
    plotNo: "70",
    width: 30,
    length: 30.5,
    widthFt: 76.5,
    lengthFt: 82.75,
    area: 2408.7,
    status: "available",
  },
  // Plot 72
  { id: "72", plotNo: "72", width: 40, length: 62.75, widthFt: 92, lengthFt: 165, area: 6601.7, status: "available" },
  // Plots L1-L16 (Multiple small plots)
  {
    id: "L1",
    plotNo: "L1,L2,L3,L4,L5,L6",
    width: 15,
    length: 15,
    widthFt: 50,
    lengthFt: 50,
    area: 750,
    status: "available",
  },
  // Plots L1-L10,E11 (Group)
  {
    id: "E1",
    plotNo: "E1,E2,E3,E4,E5,E6,E7,E8,E9,E10,E11",
    width: 12,
    length: 12,
    widthFt: 35,
    lengthFt: 35,
    area: 420,
    status: "available",
  },
]

export function InteractivePlotGrid() {
  const gridRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(gridRef, { once: true, margin: "-100px" })
  const [selectedPlot, setSelectedPlot] = useState<Plot | null>(null)
  const [hoveredPlot, setHoveredPlot] = useState<string | null>(null)

  useEffect(() => {
    if (!gridRef.current || !isInView) return

    const ctx = gsap.context(() => {
      gsap.from(".plot-item", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: {
          amount: 1.2,
          from: "start",
          grid: "auto",
        },
        ease: "back.out(1.4)",
      })
    }, gridRef)

    return () => ctx.revert()
  }, [isInView])

  const stats = {
    total: plotsData.length,
    available: plotsData.filter((p) => p.status === "available").length,
    sold: plotsData.filter((p) => p.status === "sold").length,
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-card/20 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 bg-blue-500/10 text-blue-600 border-blue-500/20">
            Interactive Plot Selection
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Select Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Dream Plot</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
            Explore our premium plots at A.K. Nagar. Click any plot to view detailed specifications.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div className="glass-card p-8 rounded-2xl text-center border border-border/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="font-display text-5xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              {stats.total}
            </div>
            <div className="text-sm text-muted-foreground font-medium">Total Plots</div>
          </div>
          <div className="glass-card p-8 rounded-2xl text-center border-l-4 border-green-500 bg-green-500/5 hover:bg-green-500/10 transition-all duration-300">
            <div className="font-display text-5xl font-bold text-green-600 mb-2">{stats.available}</div>
            <div className="text-sm text-muted-foreground font-medium">Available Now</div>
          </div>
          <div className="glass-card p-8 rounded-2xl text-center border-l-4 border-red-500 bg-red-500/5 hover:bg-red-500/10 transition-all duration-300">
            <div className="font-display text-5xl font-bold text-red-600 mb-2">{stats.sold}</div>
            <div className="text-sm text-muted-foreground font-medium">Already Sold</div>
          </div>
        </motion.div>

        <div ref={gridRef} className="relative max-w-7xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-border/50">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-3">
              {plotsData.map((plot, idx) => (
                <motion.div
                  key={plot.id}
                  className={`plot-item aspect-square rounded-lg cursor-pointer relative overflow-hidden group transition-all duration-300 ${
                    plot.status === "available"
                      ? "bg-gradient-to-br from-green-500/20 to-green-600/10 border-2 border-green-500 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/30"
                      : "bg-gradient-to-br from-red-500/20 to-red-600/10 border-2 border-red-500 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/30"
                  }`}
                  onClick={() => setSelectedPlot(plot)}
                  onMouseEnter={() => setHoveredPlot(plot.id)}
                  onMouseLeave={() => setHoveredPlot(null)}
                  whileHover={{ scale: 1.15, zIndex: 20 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: idx * 0.015 }}
                >
                  {/* Plot Number */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-bold text-xs md:text-sm text-foreground drop-shadow-sm">
                      {plot.plotNo.length > 5 ? plot.plotNo.split(",")[0] + "+" : plot.plotNo}
                    </span>
                    {plot.status === "sold" && (
                      <span className="text-[8px] md:text-[10px] font-semibold text-red-600 mt-0.5">SOLD</span>
                    )}
                  </div>

                  {/* Hover Glow Effect */}
                  {plot.status === "available" && (
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 via-green-400/20 to-green-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}

                  {/* Sold Overlay */}
                  {plot.status === "sold" && <div className="absolute inset-0 bg-red-500/10 backdrop-blur-[1px]" />}
                </motion.div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/10 border-2 border-green-500" />
                <span className="text-sm font-medium text-muted-foreground">Available for Sale</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/10 border-2 border-red-500" />
                <span className="text-sm font-medium text-muted-foreground">Already Sold</span>
              </div>
            </div>
          </div>

          {/* Helper Text */}
          <motion.p
            className="text-center text-sm text-muted-foreground mt-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
          >
            Click on any plot to view complete details and contact information
          </motion.p>
        </div>

        {selectedPlot && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedPlot(null)}
          >
            <motion.div
              className="glass-card p-8 md:p-10 rounded-3xl max-w-2xl w-full border-2 border-blue-500/30 shadow-2xl"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="font-display text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                    Plot No. {selectedPlot.plotNo}
                  </h3>
                  <Badge
                    className={`text-sm px-4 py-1.5 ${
                      selectedPlot.status === "available"
                        ? "bg-green-500/20 text-green-600 border-green-500/40"
                        : "bg-red-500/20 text-red-600 border-red-500/40"
                    }`}
                  >
                    {selectedPlot.status === "available" ? "✓ Available for Sale" : "✗ Sold Out"}
                  </Badge>
                </div>
                <button
                  onClick={() => setSelectedPlot(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted/50 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Specifications Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-5 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-xl border border-blue-500/20">
                  <div className="text-sm text-muted-foreground mb-2">Total Area</div>
                  <div className="font-display text-3xl font-bold text-blue-600">
                    {selectedPlot.area.toLocaleString()}
                    <span className="text-base text-muted-foreground ml-2">sq.ft</span>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-xl border border-cyan-500/20">
                  <div className="text-sm text-muted-foreground mb-2">Dimensions (m)</div>
                  <div className="font-bold text-2xl text-foreground">
                    {selectedPlot.width} × {selectedPlot.length}
                  </div>
                </div>
                <div className="p-5 bg-muted/30 rounded-xl">
                  <div className="text-sm text-muted-foreground mb-2">Width (feet)</div>
                  <div className="font-bold text-xl text-foreground">{selectedPlot.widthFt} ft</div>
                </div>
                <div className="p-5 bg-muted/30 rounded-xl">
                  <div className="text-sm text-muted-foreground mb-2">Length (feet)</div>
                  <div className="font-bold text-xl text-foreground">{selectedPlot.lengthFt} ft</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl mb-8">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-muted-foreground">
                  <strong className="text-foreground">A.K. Nagar</strong>, Bithli, Seoni, Madhya Pradesh - 480661
                </span>
              </div>

              {/* Action Buttons */}
              {selectedPlot.status === "available" && (
                <div className="grid grid-cols-2 gap-4">
                  <Button asChild className="btn-glass-navy text-white h-14 text-base font-semibold">
                    <a href="tel:9300160966" className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      Call: 9300 160 966
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-14 text-base font-semibold border-2 border-blue-500/30 hover:border-blue-500/50 bg-transparent hover:bg-blue-500/10"
                  >
                    <a
                      href={`mailto:info@rundevelopers.com?subject=Inquiry about Plot ${selectedPlot.plotNo}&body=Hi, I am interested in Plot No. ${selectedPlot.plotNo} at A.K. Nagar.`}
                      className="flex items-center justify-center gap-2"
                    >
                      <Mail className="w-5 h-5" />
                      Send Email
                    </a>
                  </Button>
                </div>
              )}

              {selectedPlot.status === "sold" && (
                <div className="text-center p-6 bg-red-500/10 rounded-xl border-2 border-red-500/30">
                  <p className="text-red-600 font-bold text-lg mb-2">This plot has been sold</p>
                  <p className="text-sm text-muted-foreground">
                    Contact us at{" "}
                    <a href="tel:9300160966" className="text-blue-600 hover:underline">
                      9300 160 966
                    </a>{" "}
                    to check other available plots
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
