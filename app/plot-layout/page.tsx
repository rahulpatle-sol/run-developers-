"use client";
import { useState, useRef, useEffect } from "react";

export default function AKNagarLayout() {
  const [hoveredPlot, setHoveredPlot] = useState(null);
  const [selectedPlot, setSelectedPlot] = useState(null);
  const detailsRef = useRef(null);

  // Real plot data from your image - all measurements in sq feet
  const plots = [
    // Row 1-2
    { id: 1, width: 30, length: 31, area: 930, status: "available", x: 50, y: 80, type: "residential" },
    { id: 2, width: 30, length: 31, area: 930, status: "sold", x: 130, y: 80, type: "residential" },
    
    // Row 3 - Multiple plots
    { id: "3-5", width: 30, length: 30, area: 900, status: "available", x: 210, y: 80, type: "residential" },
    { id: "3-6", width: 30, length: 30, area: 900, status: "available", x: 290, y: 80, type: "residential" },
    { id: "3-7", width: 30, length: 30, area: 900, status: "sold", x: 370, y: 80, type: "residential" },
    { id: "3-8", width: 30, length: 30, area: 900, status: "available", x: 450, y: 80, type: "residential" },
    
    // Row 4 - Commercial plots
    { id: 4, width: 25, length: 25, area: 625, status: "available", x: 530, y: 80, type: "commercial" },
    { id: 23, width: 25, length: 25, area: 625, status: "sold", x: 610, y: 80, type: "commercial" },
    
    // Right side vertical plots
    { id: 32, width: 23, length: 23, area: 529, status: "available", x: 730, y: 160, type: "residential" },
    { id: 33, width: 30, length: 30, area: 900, status: "available", x: 730, y: 230, type: "residential" },
    { id: 34, width: 38, length: 38, area: 1444, status: "sold", x: 730, y: 310, type: "corner" },
    { id: 35, width: 38, length: 38, area: 1444, status: "available", x: 730, y: 400, type: "corner" },
    
    // Bottom row
    { id: 51, width: 25.2, length: 25.2, area: 635, status: "available", x: 610, y: 540, type: "residential" },
    { id: 52, width: 30, length: 30.25, area: 907.5, status: "sold", x: 530, y: 540, type: "residential" },
    { id: 53, width: 30, length: 30.25, area: 907.5, status: "available", x: 450, y: 540, type: "residential" },
    { id: 54, width: 30, length: 30, area: 900, status: "available", x: 370, y: 540, type: "residential" },
    { id: 55, width: 30, length: 30, area: 900, status: "sold", x: 290, y: 540, type: "residential" },
    { id: 56, width: 30, length: 30, area: 900, status: "available", x: 210, y: 540, type: "residential" },
    
    // Left side vertical plots
    { id: 60, width: 30, length: 30, area: 900, status: "available", x: 20, y: 400, type: "residential" },
    { id: 61, width: 30, length: 30, area: 900, status: "available", x: 20, y: 310, type: "residential" },
    { id: 62, width: 35, length: 35, area: 1225, status: "sold", x: 20, y: 230, type: "corner" },
    { id: 63, width: 35, length: 35, area: 1225, status: "available", x: 20, y: 160, type: "corner" },
    
    // Inner premium plots
    { id: "L1", width: 15, length: 15, area: 225, status: "available", x: 200, y: 250, type: "commercial" },
    { id: "L2", width: 15, length: 15, area: 225, status: "sold", x: 280, y: 250, type: "commercial" },
    { id: "L3", width: 15, length: 15, area: 225, status: "available", x: 360, y: 250, type: "commercial" },
    
    { id: 65, width: 30, length: 30, area: 900, status: "available", x: 480, y: 250, type: "residential" },
    { id: 66, width: 40, length: 40, area: 1600, status: "available", x: 560, y: 250, type: "premium" },
    
    { id: 68, width: 31.5, length: 33, area: 1039.5, status: "sold", x: 480, y: 360, type: "residential" },
    { id: 69, width: 34.25, length: 36.75, area: 1258.7, status: "available", x: 560, y: 360, type: "residential" },
    { id: 70, width: 30, length: 30.5, area: 915, status: "available", x: 200, y: 360, type: "residential" },
    { id: 71, width: 40, length: 62.75, area: 2510, status: "available", x: 280, y: 360, type: "premium" },
  ];

  const getPlotColor = (plot) => {
    if (plot.status === "sold") return "#fecaca";
    if (plot.type === "commercial") return "#fef3c7";
    if (plot.type === "premium") return "#ddd6fe";
    if (plot.type === "corner") return "#bfdbfe";
    return "#d1fae5";
  };

  const getPlotBorder = (plot) => {
    if (plot.status === "sold") return "#ef4444";
    if (plot.type === "commercial") return "#f59e0b";
    if (plot.type === "premium") return "#8b5cf6";
    if (plot.type === "corner") return "#3b82f6";
    return "#10b981";
  };

  const totalPlots = plots.length;
  const soldPlots = plots.filter(p => p.status === "sold").length;
  const availablePlots = totalPlots - soldPlots;
  const totalArea = plots.reduce((sum, p) => sum + p.area, 0);

  const getPlotSuggestion = (plot) => {
    if (plot.type === "commercial") return "Ideal for shops, offices, or small businesses";
    if (plot.type === "premium") return "Perfect for luxury villas with large gardens";
    if (plot.type === "corner") return "Excellent corner plot with two-side road access";
    if (plot.area > 1500) return "Spacious plot suitable for large independent houses";
    if (plot.area > 1000) return "Great for medium-sized homes with parking";
    return "Perfect for modern 2-3 BHK independent houses";
  };

  useEffect(() => {
    if (hoveredPlot && detailsRef.current) {
      // GSAP-like animation using CSS
      detailsRef.current.style.transform = "scale(1)";
      detailsRef.current.style.opacity = "1";
    }
  }, [hoveredPlot]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fffef8] via-[#faf8f3] to-[#f5f0e8]">
      {/* Hero Section */}
      {/* <section className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-red-500 to-red-600">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-8 py-16 text-center">
          <div className="inline-block bg-white px-6 py-2 rounded-full mb-4">
            <span className="text-blue-600 font-bold text-sm">T&C.P APPROVED</span>
            <span className="mx-2">•</span>
            <span className="text-pink-600 font-bold text-sm">RERA APPROVED</span>
          </div>
          <h1 className="text-7xl font-black text-white mb-4 tracking-tight drop-shadow-2xl">
            A.K. NAGAR
          </h1>
          <p className="text-2xl text-white font-semibold mb-6 drop-shadow-lg">
            प्रस्तावित | Kh No. 218/2, 214/1 Village Bithli Seoni
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full">
              <span className="text-gray-700 font-bold">📍 Near Podar School, Mandla Road</span>
            </div>
            <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full">
              <span className="text-gray-700 font-bold">🏦 Bank Loan Available</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* Top Info Banner */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 border-y border-amber-200 py-6">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-semibold">Wide Roads with Tree Plantation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-semibold">Underground Drainage System</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-semibold">24/7 Water & Electricity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-all duration-300 border-t-4 border-blue-500">
            <div className="text-5xl font-bold text-blue-600 mb-2">{totalPlots}</div>
            <div className="text-gray-600 font-semibold uppercase text-sm">Total Plots</div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-all duration-300 border-t-4 border-emerald-500">
            <div className="text-5xl font-bold text-emerald-600 mb-2">{availablePlots}</div>
            <div className="text-gray-600 font-semibold uppercase text-sm">Available</div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-all duration-300 border-t-4 border-rose-500">
            <div className="text-5xl font-bold text-rose-600 mb-2">{soldPlots}</div>
            <div className="text-gray-600 font-semibold uppercase text-sm">Sold</div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-all duration-300 border-t-4 border-amber-500">
            <div className="text-5xl font-bold text-amber-600 mb-2">{(totalArea / 43560).toFixed(1)}</div>
            <div className="text-gray-600 font-semibold uppercase text-sm">Acres Total</div>
          </div>
        </div>
      </section>

      {/* Master Plan */}
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Master Plan Layout</h2>
          <p className="text-gray-600 text-lg">Hover over plots to see detailed information • Click to select</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
          
          <div className="relative">
            <svg viewBox="0 0 800 640" className="w-full h-auto">
              <defs>
                <pattern id="road" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="#1f2937"/>
                  <line x1="0" y1="10" x2="20" y2="10" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4,4" opacity="0.8"/>
                </pattern>
                
                <linearGradient id="parkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#86efac"/>
                  <stop offset="100%" stopColor="#22c55e"/>
                </linearGradient>

                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Roads */}
              <rect x="0" y="35" width="800" height="70" fill="url(#road)" rx="6"/>
              <rect x="0" y="515" width="800" height="70" fill="url(#road)" rx="6"/>
              <rect x="0" y="105" width="70" height="410" fill="url(#road)" rx="6"/>
              <rect x="730" y="105" width="70" height="410" fill="url(#road)" rx="6"/>
              
              {/* Mandla Road Label */}
              <text x="400" y="25" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fbbf24">
                Mandla Road
              </text>
              
              {/* Central Park */}
              <ellipse cx="400" cy="310" rx="130" ry="100" fill="url(#parkGradient)" opacity="0.9"/>
              <circle cx="380" cy="290" r="10" fill="#15803d" opacity="0.6"/>
              <circle cx="420" cy="300" r="8" fill="#15803d" opacity="0.6"/>
              <circle cx="400" cy="330" r="9" fill="#15803d" opacity="0.6"/>
              <circle cx="385" cy="320" r="6" fill="#15803d" opacity="0.6"/>
              <circle cx="415" cy="315" r="7" fill="#15803d" opacity="0.6"/>
              
              <text x="400" y="305" textAnchor="middle" fontSize="20" fontWeight="700" fill="#14532d">
                Central Garden
              </text>
              <text x="400" y="325" textAnchor="middle" fontSize="13" fill="#166534">
                & Children's Play Area
              </text>

              {/* Plots */}
              {plots.map((plot) => {
                const isHovered = hoveredPlot?.id === plot.id;
                const isSelected = selectedPlot?.id === plot.id;
                
                return (
                  <g key={plot.id}>
                    <rect
                      x={plot.x}
                      y={plot.y}
                      width="70"
                      height="65"
                      rx="8"
                      fill={getPlotColor(plot)}
                      stroke={getPlotBorder(plot)}
                      strokeWidth={isSelected ? "4" : isHovered ? "3" : "2"}
                      className="cursor-pointer transition-all duration-300"
                      style={{
                        filter: isHovered || isSelected ? "url(#glow)" : "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                        transform: isHovered ? "scale(1.08)" : "scale(1)",
                        transformOrigin: "center",
                      }}
                      onMouseEnter={() => setHoveredPlot(plot)}
                      onMouseLeave={() => setHoveredPlot(null)}
                      onClick={() => setSelectedPlot(plot)}
                    />
                    
                    <text
                      x={plot.x + 35}
                      y={plot.y + 25}
                      textAnchor="middle"
                      fontSize="14"
                      fontWeight="700"
                      fill={plot.status === "sold" ? "#991b1b" : "#065f46"}
                      className="pointer-events-none"
                    >
                      Plot {plot.id}
                    </text>
                    
                    <text
                      x={plot.x + 35}
                      y={plot.y + 42}
                      textAnchor="middle"
                      fontSize="11"
                      fill="#374151"
                      className="pointer-events-none"
                      fontWeight="600"
                    >
                      {plot.area} sq ft
                    </text>
                    
                    <text
                      x={plot.x + 35}
                      y={plot.y + 56}
                      textAnchor="middle"
                      fontSize="9"
                      fill="#6b7280"
                      className="pointer-events-none"
                    >
                      {plot.width}×{plot.length}
                    </text>
                    
                    {plot.status === "sold" && (
                      <text
                        x={plot.x + 35}
                        y={plot.y + 68}
                        textAnchor="middle"
                        fontSize="10"
                        fontWeight="800"
                        fill="#dc2626"
                        className="pointer-events-none"
                      >
                        SOLD
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Entry Gates */}
              <rect x="320" y="0" width="160" height="35" fill="#7c3aed" rx="8"/>
              <text x="400" y="22" textAnchor="middle" fontSize="16" fill="white" fontWeight="700">
                🚪 MAIN GATE
              </text>
            </svg>
          </div>

          {/* Hover Details Panel */}
          {hoveredPlot && (
            <div
              ref={detailsRef}
              className="absolute top-8 right-8 bg-gradient-to-br from-white to-gray-50 border-2 border-amber-300 rounded-2xl p-6 shadow-2xl max-w-sm transform transition-all duration-300"
              style={{
                animation: "slideIn 0.3s ease-out"
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Plot {hoveredPlot.id}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mt-2 ${
                    hoveredPlot.status === "sold" 
                      ? "bg-red-100 text-red-700" 
                      : "bg-emerald-100 text-emerald-700"
                  }`}>
                    {hoveredPlot.status === "sold" ? "SOLD OUT" : "AVAILABLE"}
                  </span>
                </div>
                <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                  hoveredPlot.type === "commercial" ? "bg-amber-100 text-amber-700" :
                  hoveredPlot.type === "premium" ? "bg-purple-100 text-purple-700" :
                  hoveredPlot.type === "corner" ? "bg-blue-100 text-blue-700" :
                  "bg-green-100 text-green-700"
                }`}>
                  {hoveredPlot.type.toUpperCase()}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Area:</span>
                  <span className="text-lg font-bold text-gray-900">{hoveredPlot.area} sq ft</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Dimensions:</span>
                  <span className="text-lg font-bold text-gray-900">{hoveredPlot.width} × {hoveredPlot.length} ft</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">In Acres:</span>
                  <span className="text-lg font-bold text-gray-900">{(hoveredPlot.area / 43560).toFixed(3)}</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">💡 Best Suited For:</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {getPlotSuggestion(hoveredPlot)}
                </p>
              </div>
            </div>
          )}

          {/* Legend */}
          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-300">
              <div className="w-5 h-5 bg-emerald-300 rounded border-2 border-emerald-600"></div>
              <span className="font-semibold text-sm text-gray-700">Residential</span>
            </div>
            <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full border border-amber-300">
              <div className="w-5 h-5 bg-amber-300 rounded border-2 border-amber-600"></div>
              <span className="font-semibold text-sm text-gray-700">Commercial</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full border border-purple-300">
              <div className="w-5 h-5 bg-purple-300 rounded border-2 border-purple-600"></div>
              <span className="font-semibold text-sm text-gray-700">Premium</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-300">
              <div className="w-5 h-5 bg-blue-300 rounded border-2 border-blue-600"></div>
              <span className="font-semibold text-sm text-gray-700">Corner Plot</span>
            </div>
            <div className="flex items-center gap-2 bg-rose-50 px-4 py-2 rounded-full border border-rose-300">
              <div className="w-5 h-5 bg-rose-300 rounded border-2 border-rose-600"></div>
              <span className="font-semibold text-sm text-gray-700">Sold</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Info Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">🏡 Why Choose AK Nagar?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-xl">✓</span>
                  <span>Approved by Town & Country Planning (T&C.P)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-xl">✓</span>
                  <span>RERA Registered & Approved Project</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-xl">✓</span>
                  <span>Prime location near Jain Petrol Pump & Podar School</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-xl">✓</span>
                  <span>Close to Jabalpur Bypass & Mandla Road connectivity</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">🏗️ Premium Amenities</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">★</span>
                  <span>Wide concrete roads with proper drainage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">★</span>
                  <span>Street lights & tree plantation along roads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">★</span>
                  <span>Central garden & children's play area</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">★</span>
                  <span>Bank loan facility available for all plots</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="bg-gradient-to-r from-red-500 via-red-600 to-orange-500 rounded-3xl shadow-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-300 rounded-full blur-3xl"></div>
          </div>
          <div className="relative">
            <h3 className="text-4xl font-bold text-white mb-4">Ready to Book Your Dream Plot?</h3>
            <p className="text-xl text-white/90 mb-8">Contact Ram Developers for site visits & booking</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="tel:9300160966" className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-xl hover:bg-amber-50 transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center gap-2">
                📞 9300 160 966
              </a>
              <button className="bg-amber-400 text-gray-900 px-8 py-4 rounded-full font-bold text-xl hover:bg-amber-300 transition-all duration-300 shadow-lg transform hover:scale-105">
                Schedule Site Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </main>
  );
}