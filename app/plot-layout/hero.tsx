"use client";

const plots = [
  { id: "P1", status: "available" },
  { id: "P2", status: "sold" },
  { id: "P3", status: "available" },
  { id: "P4", status: "available" },
  { id: "P5", status: "sold" },
  { id: "P6", status: "available" },
  { id: "P7", status: "available" },
  { id: "P8", status: "sold" },
];

export default function PlotLayoutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fffdf8] to-[#f4efe7] px-6 py-16">
      {/* Header */}
      <section className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900">
          AK Nagar – Master Plot Plan
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A thoughtfully planned residential layout with wide roads,
          green spaces, and premium plots.
        </p>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {[
          { label: "Total Plots", value: "45" },
          { label: "Available", value: "35", color: "text-green-600" },
          { label: "Sold", value: "10", color: "text-red-500" },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white shadow-lg py-6 text-center"
          >
            <div className={`text-4xl font-bold ${item.color || ""}`}>
              {item.value}
            </div>
            <div className="mt-1 text-gray-500">{item.label}</div>
          </div>
        ))}
      </section>

      {/* Layout */}
      <section className="max-w-6xl mx-auto relative">
        <div className="rounded-3xl bg-white shadow-2xl p-10">

          {/* Road */}
          <div className="absolute inset-x-0 top-1/2 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
            <div className="w-full border-t-4 border-dashed border-yellow-400" />
          </div>

          {/* Green Zone */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                          w-64 h-40 rounded-2xl bg-green-100 border border-green-300
                          flex items-center justify-center text-green-700 font-semibold">
            Central Garden
          </div>

          {/* Plots */}
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {plots.map((plot) => (
              <div
                key={plot.id}
                className={`
                  h-28 rounded-xl border-2 flex items-center justify-center
                  font-semibold cursor-pointer transition-all duration-300
                  ${
                    plot.status === "available"
                      ? "bg-green-50 border-green-500 text-green-700 hover:scale-105"
                      : "bg-red-50 border-red-400 text-red-600 opacity-80"
                  }
                `}
              >
                {plot.id}
                {plot.status === "sold" && (
                  <span className="absolute bottom-2 text-xs font-medium">
                    SOLD
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="mt-10 flex justify-center gap-8 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-green-400 rounded-sm" />
          Available
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-red-400 rounded-sm" />
          Sold
        </div>
      </section>
    </main>
  );
}
