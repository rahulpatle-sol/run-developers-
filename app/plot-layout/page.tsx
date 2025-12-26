"use client";
import { useState } from "react";

export default function AKNagarLayout() {
  const [hoveredPlot, setHoveredPlot] = useState(null);
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [filterType, setFilterType] = useState("all");

  // Complete 71 plots data from your brochure
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
  
  const totalPlots = plots.length;
  const soldPlots = plots.filter(p => p.status === "sold").length;
  const availablePlots = totalPlots - soldPlots;
  const totalArea = plots.reduce((sum, p) => sum + p.area, 0);

  const getPlotSuggestion = (plot:any) => {
    if (plot.type === "commercial") return "Perfect for shops, offices & businesses";
    if (plot.type === "premium") return "Luxury villa with spacious gardens";
    if (plot.type === "corner") return "Corner plot - Two side road access";
    if (plot.area > 3000) return "Large villa with parking & lawn";
    if (plot.area > 2000) return "3-4 BHK house with garden";
    if (plot.area > 1500) return "2-3 BHK independent house";
    return "Modern 2 BHK home";
  };

  const filteredPlots = filterType === "all" 
    ? plots 
    : plots.filter(p => p.type === filterType);

  return (
    <main className="min-h-screen bg-gray-50">
   
      <section className="relative bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Top badges */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            <div className="bg-blue-50 border border-blue-200 px-5 py-2 rounded-full hover:shadow-md transition-shadow">
              <span className="text-blue-700 font-bold text-sm">✓ T&C.P APPROVED</span>
            </div>
            <div className="bg-pink-50 border border-pink-200 px-5 py-2 rounded-full hover:shadow-md transition-shadow">
              <span className="text-pink-700 font-bold text-sm">✓ RERA APPROVED</span>
            </div>
            <div className="bg-green-50 border border-green-200 px-5 py-2 rounded-full hover:shadow-md transition-shadow">
              <span className="text-green-700 font-bold text-sm">🏦 BANK LOAN</span>
            </div>
          </div>

          {/* Main title */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-8xl  text-gray-900 mb-4 tracking-tight">
              A.K. NAGAR
            </h1>
            <div className="h-1 w-24 bg-gray-900 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-700 font-medium mb-3">
              Premium Residential Plotting Project
            </p>
            <p className="text-base text-gray-600">
              📍 Village Bithli Seoni | Near Podar School, Mandla Road
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { label: "Total Plots", value: totalPlots, color: "blue" },
              { label: "Available", value: availablePlots, color: "green" },
              { label: "Sold", value: soldPlots, color: "red" },
              { label: "Total Acres", value: (totalArea / 43560).toFixed(1), color: "orange" },
            ].map((stat, i) => (
              <div key={i} className={`bg-${stat.color}-50 border border-${stat.color}-200 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                <div className={`text-4xl font-black text-${stat.color}-600 mb-1`}>{stat.value}</div>
                <div className={`text-${stat.color}-700 font-semibold text-xs uppercase tracking-wider`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-40 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { type: "all", label: "All Plots", count: plots.length, color: "gray" },
              { type: "residential", label: "Residential", count: plots.filter(p => p.type === "residential").length, color: "green" },
              { type: "commercial", label: "Commercial", count: plots.filter(p => p.type === "commercial").length, color: "orange" },
              { type: "premium", label: "Premium", count: plots.filter(p => p.type === "premium").length, color: "purple" },
              { type: "corner", label: "Corner", count: plots.filter(p => p.type === "corner").length, color: "blue" },
            ].map((filter) => (
              <button
                key={filter.type}
                onClick={() => setFilterType(filter.type)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 ${
                  filterType === filter.type
                    ? `bg-${filter.color}-600 text-white shadow-lg`
                    : `bg-${filter.color}-50 text-${filter.color}-700 border border-${filter.color}-200 hover:bg-${filter.color}-100`
                }`}
              >
                {filter.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  filterType === filter.type ? "bg-white/20" : `bg-${filter.color}-100`
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300">
                  <th className="px-6 py-4 text-left text-xs font-black text-gray-700 uppercase">Plot</th>
                  <th className="px-6 py-4 text-left text-xs font-black text-gray-700 uppercase">Type</th>
                  <th className="px-6 py-4 text-left text-xs font-black text-gray-700 uppercase">Dimensions</th>
                  <th className="px-6 py-4 text-left text-xs font-black text-gray-700 uppercase">Area (Sq Ft)</th>
                  <th className="px-6 py-4 text-left text-xs font-black text-gray-700 uppercase">Acres</th>
                  <th className="px-6 py-4 text-left text-xs font-black text-gray-700 uppercase">Location</th>
                  <th className="px-6 py-4 text-left text-xs font-black text-gray-700 uppercase">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-black text-gray-700 uppercase">Best For</th>
                </tr>
              </thead>
              <tbody>
                {filteredPlots.map((plot, index) => {
                  const isHovered = hoveredPlot?.id === plot.id;
                  const isSelected = selectedPlot?.id === plot.id;

                  const typeConfig = {
                    commercial: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-300", badge: "bg-orange-600" },
                    premium: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-300", badge: "bg-purple-600" },
                    corner: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-300", badge: "bg-blue-600" },
                    residential: { bg: "bg-green-50", text: "text-green-700", border: "border-green-300", badge: "bg-green-600" }
                  };

                  const config = typeConfig[plot.type];

                  return (
                    <tr
                      key={plot.id}
                      className={`border-b cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? "bg-blue-50 shadow-md"
                          : isHovered
                          ? "bg-gray-50 shadow-sm"
                          : "bg-white hover:bg-gray-50"
                      }`}
                      onMouseEnter={() => setHoveredPlot(plot)}
                      onMouseLeave={() => setHoveredPlot(null)}
                      onClick={() => setSelectedPlot(plot)}
                      style={{
                        transform: isHovered || isSelected ? "translateX(4px)" : "translateX(0)",
                      }}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 ${config.badge} rounded-lg flex items-center justify-center text-white font-black shadow-md`}>
                            {plot.id}
                          </div>
                          <span className="text-base font-bold text-gray-900">Plot {plot.id}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-block px-3 py-1.5 rounded-lg border ${config.border} ${config.bg} ${config.text} font-bold text-xs uppercase`}>
                          {plot.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-gray-900">
                          {plot.width} × {plot.length} ft
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-lg font-black text-gray-900">
                          {plot.area.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-gray-700">
                          {(plot.area / 43560).toFixed(4)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-gray-600">{plot.location}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-bold text-sm text-white shadow-md ${
                          plot.status === "sold" ? "bg-red-600" : "bg-green-600"
                        }`}>
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          {plot.status === "sold" ? "SOLD" : "AVAILABLE"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-gray-700">
                          {getPlotSuggestion(plot)}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Selected Plot Details */}
          {selectedPlot && (
            <div className="bg-gray-900 text-white border-t-4 border-blue-600">
              <div className="px-6 py-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-black mb-1">Selected: Plot {selectedPlot.id}</h3>
                    <p className="text-gray-400 text-sm">Complete plot information below</p>
                  </div>
                  <button
                    onClick={() => setSelectedPlot(null)}
                    className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-xl transition-colors"
                  >
                    ×
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {[
                    { label: "Total Area", value: `${selectedPlot.area.toLocaleString()} sq ft` },
                    { label: "Dimensions", value: `${selectedPlot.width} × ${selectedPlot.length} ft` },
                    { label: "In Acres", value: (selectedPlot.area / 43560).toFixed(4) },
                    { label: "Location", value: selectedPlot.location },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/10 rounded-lg p-3 border border-white/20">
                      <p className="text-xs text-gray-400 mb-1 font-medium">{item.label}</p>
                      <p className="text-lg font-bold">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-600 rounded-lg p-4">
                  <p className="text-sm font-bold mb-1">💡 Perfect For:</p>
                  <p className="text-white/90">{getPlotSuggestion(selectedPlot)}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className=" text-balck py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-black mb-6">Why Choose AK Nagar?</h3>
              <div className="space-y-3">
                {[
                  "T&C.P Approved - Legal & Safe Investment",
                  "RERA Registered Project",
                  "Prime Location - Near Schools & Highways",
                  "Bank Loan Facility Available"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-600 rounded-md flex items-center justify-center font-bold text-sm flex-shrink-0">✓</div>
                    <span className=" pt-0.5">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-6">Premium Amenities</h3>
              <div className="space-y-3">
                {[
                  "Wide Concrete Roads with Drainage",
                  "Street Lights & Tree Plantation",
                  "Central Garden & Play Area",
                  "24/7 Water & Electricity"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg rounded-md flex items-center justify-center font-bold text-sm flex-shrink-0">★</div>
                    <span className=" pt-0.5">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className=" rounded-2xl  overflow-hidden">
          <div className="px-6 py-12 text-center">
            <h3 className="text-4xl font-black   mb-3">Book Your Dream Plot Today</h3>
            <p className="text-lg text-gray-400 mb-8">Contact Run Developers for site visits & booking</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="tel:9300160966" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-black text-lg shadow-lg hover:scale-105 transition-transform">
                📞 9300 160 966
              </a>
              <button className="bg-white hover:bg-gray-100  px-8 py-4 rounded-lg font-black text-lg shadow-lg hover:scale-105 transition-transform">
                Schedule Site Visit
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}