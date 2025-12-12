"use client"

import { useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { ZoomIn, ZoomOut, RotateCcw, Download, Info, Phone, Mail } from "lucide-react"

const plotData = [
  { no: 1, width: 30, length: 31, widthFeet: 105, lengthFeet: 97, area: 3080.5, status: "available" },
  { no: 2, width: 30, length: 31, widthFeet: 97, lengthFeet: 88.5, area: 2828.9, status: "sold" },
  {
    no: 3,
    width: 30,
    length: 30,
    widthFeet: 60,
    lengthFeet: 60,
    area: 1800,
    status: "available",
    plotNos: "3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22",
  },
  {
    no: 4,
    width: 25,
    length: 25,
    widthFeet: 60,
    lengthFeet: 60,
    area: 1500,
    status: "available",
    plotNos: "4,23,24,25,26,27,28,29,30,31",
  },
  { no: 5, width: 23, length: 23, widthFeet: 60, lengthFeet: 60, area: 1380, status: "sold" },
  { no: 32, width: 23, length: 23, widthFeet: 60, lengthFeet: 60, area: 1380, status: "available" },
  { no: 33, width: 30, length: 30, widthFeet: 52, lengthFeet: 52, area: 1560, status: "sold" },
  { no: 34, width: 38, length: 38, widthFeet: 52, lengthFeet: 52, area: 1976, status: "available" },
  { no: 35, width: 38, length: 38, widthFeet: 50, lengthFeet: 50, area: 1900, status: "available" },
  { no: 36, width: 30, length: 30, widthFeet: 50, lengthFeet: 50, area: 1500, status: "sold" },
  { no: 37, width: 25, length: 25, widthFeet: 58.8, lengthFeet: 58.3, area: 1463.8, status: "available" },
  { no: 38, width: 25, length: 25, widthFeet: 58.4, lengthFeet: 58, area: 1453.1, status: "available" },
  { no: 39, width: 25, length: 25, widthFeet: 58, lengthFeet: 57.5, area: 1443.5, status: "sold" },
  { no: 40, width: 25, length: 25, widthFeet: 57.6, lengthFeet: 57, area: 1431.3, status: "available" },
  { no: 41, width: 25, length: 25, widthFeet: 57, lengthFeet: 57, area: 1400, status: "available" },
  { no: 42, width: 25, length: 25, widthFeet: 55, lengthFeet: 57.75, area: 1409.4, status: "sold" },
  { no: 43, width: 25, length: 25, widthFeet: 57.75, lengthFeet: 59, area: 1459.4, status: "available" },
  { no: 44, width: 25, length: 25, widthFeet: 59, lengthFeet: 60, area: 1487.5, status: "available" },
  { no: 45, width: 25, length: 25, widthFeet: 60, lengthFeet: 61.25, area: 1515.6, status: "sold" },
  { no: 46, width: 25, length: 25, widthFeet: 61.25, lengthFeet: 62.5, area: 1546.9, status: "available" },
  { no: 47, width: 25, length: 25, widthFeet: 62.5, lengthFeet: 63.5, area: 1575, status: "available" },
  { no: 48, width: 25, length: 25, widthFeet: 63.5, lengthFeet: 63.5, area: 1587.5, status: "sold" },
  { no: 49, width: 25, length: 25, widthFeet: 63.5, lengthFeet: 67, area: 1631.3, status: "available" },
  { no: 50, width: 25, length: 25.2, widthFeet: 67, lengthFeet: 70, area: 1719.4, status: "available" },
  { no: 51, width: 25.2, length: 25.2, widthFeet: 70, lengthFeet: 73.25, area: 1805.0, status: "sold" },
  { no: 52, width: 30, length: 30.25, widthFeet: 73.25, lengthFeet: 77, area: 2263.1, status: "available" },
  { no: 53, width: 30, length: 30.25, widthFeet: 77, lengthFeet: 80.7, area: 2375.4, status: "available" },
  { no: 54, width: 30, length: 30, widthFeet: 80.75, lengthFeet: 83, area: 2456.3, status: "sold" },
  { no: 55, width: 30, length: 30, widthFeet: 83, lengthFeet: 85, area: 2520, status: "available" },
  { no: 56, width: 30, length: 30, widthFeet: 85, lengthFeet: 87.25, area: 2583.8, status: "available" },
  { no: 57, width: 30, length: 30, widthFeet: 87.25, lengthFeet: 89.5, area: 2651.3, status: "sold" },
  { no: 58, width: 30, length: 30, widthFeet: 89.5, lengthFeet: 91.25, area: 2711.3, status: "available" },
  { no: 59, width: 30, length: 30, widthFeet: 91.25, lengthFeet: 93, area: 2763.8, status: "available" },
  { no: 60, width: 30, length: 30, widthFeet: 93, lengthFeet: 95, area: 2820, status: "sold" },
  { no: 61, width: 35, length: 35, widthFeet: 95, lengthFeet: 97, area: 3360, status: "available" },
  { no: 62, width: 35, length: 35, widthFeet: 37.5, lengthFeet: 37.5, area: 1312.5, status: "sold" },
  { no: 63, width: 35, length: 35, widthFeet: 37.5, lengthFeet: 27.5, area: 962.5, status: "available" },
  { no: 64, width: 35, length: 35, widthFeet: 27.5, lengthFeet: 27.5, area: 843.8, status: "available" },
  { no: 65, width: 30, length: 30, widthFeet: 100.5, lengthFeet: 101.5, area: 3030, status: "sold" },
  { no: 66, width: 40, length: 40, widthFeet: 60, lengthFeet: 60, area: 2400, status: "available", plotNos: "66,71" },
  { no: 68, width: 31.5, length: 33, widthFeet: 60, lengthFeet: 60, area: 1935, status: "available" },
  { no: 69, width: 34.25, length: 36.75, widthFeet: 60.75, lengthFeet: 76.5, area: 2595.9, status: "sold" },
  { no: 70, width: 30, length: 30.5, widthFeet: 76.5, lengthFeet: 82.75, area: 2408.7, status: "available" },
  { no: 72, width: 40, length: 62.75, widthFeet: 92, lengthFeet: 165, area: 6601.7, status: "available" },
  {
    no: 42,
    width: 15,
    length: 15,
    widthFeet: 50,
    lengthFeet: 50,
    area: 750,
    status: "sold",
    plotNos: "L1,L2,L3,L4,L5,L6",
  },
  {
    no: 43,
    width: 12,
    length: 12,
    widthFeet: 35,
    lengthFeet: 35,
    area: 420,
    status: "available",
    plotNos: "E1,E2,E3,E4,E5,E6,E7,E8,E9,E10,E11",
  },
]

const plotStats = {
  total: 72,
  available: 45,
  sold: 27,
  corner: 12,
}

export function PlotLayoutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [zoom, setZoom] = useState(1)
  const [selectedPlot, setSelectedPlot] = useState<(typeof plotData)[0] | null>(null)
  const [hoveredPlot, setHoveredPlot] = useState<number | null>(null)

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 2))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.5))
  const handleReset = () => {
    setZoom(1)
    setSelectedPlot(null)
  }

  return (
    <section id="plot-layout" ref={sectionRef} className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
            Interactive Site Plan
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            A.K. Nagar <span className="text-gradient-red">Plot Layout</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            72 premium residential plots with complete infrastructure. Hover over plots to see dimensions and
            availability.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="glass-card p-4 rounded-xl text-center">
            <div className="font-display text-2xl font-bold text-foreground">{plotStats.total}</div>
            <div className="text-xs text-muted-foreground">Total Plots</div>
          </div>
          <div className="glass-card p-4 rounded-xl text-center border-l-4 border-green-500">
            <div className="font-display text-2xl font-bold text-green-600">{plotStats.available}</div>
            <div className="text-xs text-muted-foreground">Available</div>
          </div>
          <div className="glass-card p-4 rounded-xl text-center border-l-4 border-red-500">
            <div className="font-display text-2xl font-bold text-red-600">{plotStats.sold}</div>
            <div className="text-xs text-muted-foreground">Sold</div>
          </div>
          <div className="glass-card p-4 rounded-xl text-center border-l-4 border-primary">
            <div className="font-display text-2xl font-bold text-primary">{plotStats.corner}</div>
            <div className="text-xs text-muted-foreground">Corner Plots</div>
          </div>
        </motion.div>

        {/* Layout Map Container */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl bg-card border border-border"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Controls */}
          <div className="absolute top-4 right-4 z-20 flex gap-2">
            <Button size="icon" variant="secondary" className="glass-card" onClick={handleZoomIn}>
              <ZoomIn className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="secondary" className="glass-card" onClick={handleZoomOut}>
              <ZoomOut className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="secondary" className="glass-card" onClick={handleReset}>
              <RotateCcw className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="secondary" className="glass-card">
              <Download className="w-4 h-4" />
            </Button>
          </div>

          {/* Legend */}
          <div className="absolute top-4 left-4 z-20 glass-card p-3 rounded-xl">
            <div className="text-xs font-bold mb-2">Legend</div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-500/30 border-2 border-green-500" />
                <span className="text-xs">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-red-500/30 border-2 border-red-500" />
                <span className="text-xs">Sold</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-primary/30 border-2 border-primary" />
                <span className="text-xs">Corner</span>
              </div>
            </div>
          </div>

          {/* Map Image with 3D Effect */}
          <div className="overflow-auto max-h-[600px] md:max-h-[700px] bg-slate-50">
            <motion.div
              className="relative min-w-[900px]"
              style={{ transform: `scale(${zoom})`, transformOrigin: "top left", transition: "transform 0.3s" }}
            >
              <img src="/images/image.png" alt="A.K. Nagar Plot Layout" className="w-full h-auto" />

              {hoveredPlot && (
                <motion.div
                  className="absolute top-4 left-1/2 transform -translate-x-1/2 glass-card p-3 rounded-xl shadow-xl z-30 pointer-events-none"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {(() => {
                    const plot = plotData.find((p) => p.no === hoveredPlot)
                    if (!plot) return null
                    return (
                      <div className="text-center min-w-[200px]">
                        <div className="font-display text-lg font-bold text-foreground mb-1">Plot No. {plot.no}</div>
                        <div className="text-xs text-muted-foreground mb-2">
                          {plot.width}' × {plot.length}' • {plot.area.toLocaleString()} sq.ft
                        </div>
                        <Badge
                          className={
                            plot.status === "available"
                              ? "bg-green-500/20 text-green-600 border-green-500/30"
                              : "bg-red-500/20 text-red-600 border-red-500/30"
                          }
                        >
                          {plot.status === "available" ? "Available" : "Sold"}
                        </Badge>
                      </div>
                    )
                  })()}
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Selected Plot Info Panel */}
          {selectedPlot && (
            <motion.div
              className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 glass-card p-5 rounded-xl z-20 border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-display text-xl font-bold text-foreground">Plot No. {selectedPlot.no}</h4>
                  <Badge
                    className={
                      selectedPlot.status === "available"
                        ? "mt-1.5 bg-green-500/20 text-green-600 border-green-500/30"
                        : "mt-1.5 bg-red-500/20 text-red-600 border-red-500/30"
                    }
                  >
                    {selectedPlot.status === "available" ? "Available for Sale" : "Sold Out"}
                  </Badge>
                </div>
                <button
                  onClick={() => setSelectedPlot(null)}
                  className="text-muted-foreground hover:text-foreground text-2xl leading-none"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="p-2 bg-muted/50 rounded-lg">
                  <span className="text-muted-foreground block text-xs">Dimensions</span>
                  <span className="font-bold text-foreground">
                    {selectedPlot.width}' × {selectedPlot.length}'
                  </span>
                </div>
                <div className="p-2 bg-muted/50 rounded-lg">
                  <span className="text-muted-foreground block text-xs">Total Area</span>
                  <span className="font-bold text-foreground">{selectedPlot.area.toLocaleString()} sq.ft</span>
                </div>
                <div className="p-2 bg-muted/50 rounded-lg">
                  <span className="text-muted-foreground block text-xs">Width (Feet)</span>
                  <span className="font-bold text-foreground">{selectedPlot.widthFeet} ft</span>
                </div>
                <div className="p-2 bg-muted/50 rounded-lg">
                  <span className="text-muted-foreground block text-xs">Length (Feet)</span>
                  <span className="font-bold text-foreground">{selectedPlot.lengthFeet} ft</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button asChild className="btn-glass-navy text-white flex-1 text-sm">
                  <a href="tel:9300160966">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 text-sm border-primary/30 hover:border-primary/50 bg-transparent"
                >
                  <a href={`mailto:info@rundevelopers.com?subject=Inquiry about Plot No. ${selectedPlot.no}`}>
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Enhanced Plot Details Table */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
            Complete Plot Details - A.K. Nagar
          </h3>
          <p className="text-muted-foreground mb-6">
            Kh No. 218/2, 214/1 Village Bithli, Seoni • Total Area: 2.040 HAC
          </p>
          <div className="overflow-x-auto rounded-xl border border-border shadow-lg">
            <table className="w-full text-sm">
              <thead className="bg-primary/10 border-b-2 border-primary/20">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-foreground">S.No.</th>
                  <th className="px-4 py-3 text-left font-bold text-foreground">Plot No.</th>
                  <th className="px-4 py-3 text-left font-bold text-foreground">Width (m)</th>
                  <th className="px-4 py-3 text-left font-bold text-foreground">Length (m)</th>
                  <th className="px-4 py-3 text-left font-bold text-foreground">Width (ft)</th>
                  <th className="px-4 py-3 text-left font-bold text-foreground">Length (ft)</th>
                  <th className="px-4 py-3 text-left font-bold text-foreground">Area (sq.ft)</th>
                  <th className="px-4 py-3 text-left font-bold text-foreground">Status</th>
                  <th className="px-4 py-3 text-left font-bold text-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {plotData.slice(0, 20).map((plot, index) => (
                  <tr
                    key={plot.no}
                    className="border-t border-border hover:bg-primary/5 transition-colors cursor-pointer"
                    onClick={() => setSelectedPlot(plot)}
                  >
                    <td className="px-4 py-3 text-muted-foreground">{index + 1}</td>
                    <td className="px-4 py-3 font-bold text-foreground">{plot.no}</td>
                    <td className="px-4 py-3">{plot.width}</td>
                    <td className="px-4 py-3">{plot.length}</td>
                    <td className="px-4 py-3 font-medium">{plot.widthFeet}</td>
                    <td className="px-4 py-3 font-medium">{plot.lengthFeet}</td>
                    <td className="px-4 py-3 font-semibold text-primary">{plot.area.toLocaleString()}</td>
                    <td className="px-4 py-3">
                      <Badge
                        className={
                          plot.status === "available"
                            ? "bg-green-500/20 text-green-600 border-green-500/30"
                            : "bg-red-500/20 text-red-600 border-red-500/30"
                        }
                      >
                        {plot.status === "available" ? "Available" : "Sold"}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 text-xs bg-transparent"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedPlot(plot)
                        }}
                      >
                        <Info className="w-3 h-3 mr-1" />
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground mb-3">
              Showing 20 of {plotData.length} plots •{" "}
              <a href="tel:9300160966" className="text-primary hover:underline font-medium">
                Call 9300 160 966
              </a>{" "}
              for complete details
            </p>
            <Button variant="outline" className="border-primary/30 hover:border-primary/50 bg-transparent">
              Download Complete Plot List (PDF)
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
