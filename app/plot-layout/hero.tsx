"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import * as THREE from "three";

/* ---------------- DATA ---------------- */

const plots = [
  { id: 1, w: 30, l: 40, status: "available" },
  { id: 2, w: 30, l: 40, status: "sold" },
  { id: 3, w: 25, l: 40, status: "available" },
  { id: 4, w: 35, l: 45, status: "available" },
];

/* ---------------- CAMERA ANIMATION ---------------- */

function CameraIntro() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 20, 0);
    camera.lookAt(0, 0, 0);

    gsap.from(camera.position, {
      y: 40,
      duration: 1.6,
      ease: "power3.out",
    });
  }, [camera]);

  return null;
}

/* ---------------- PLOT ---------------- */

function Plot({ plot, position, onSelect }: any) {
  return (
    <mesh position={position} onClick={() => onSelect(plot)}>
      <boxGeometry args={[plot.w / 10, 0.4, plot.l / 10]} />
      <meshStandardMaterial
        color={plot.status === "sold" ? "#ef4444" : "#84cc16"}
      />

      <Html center>
        <div className="rounded bg-white px-2 py-1 text-xs font-medium shadow">
          Plot {plot.id}
        </div>
      </Html>
    </mesh>
  );
}

/* ---------------- PAGE ---------------- */

export default function PlotLayout() {
  const [active, setActive] = useState<any>(null);

  return (
    <main className="min-h-screen bg-[#f9f7f2] px-10 py-20">
      {/* HEADER */}
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <h1 className="font-serif text-4xl">
          A.K. Nagar Plot Layout
        </h1>
        <p className="mt-3 text-gray-600">
          Thoughtfully planned residential plots with clear access roads,
          vastu-friendly orientation, and premium surroundings.
        </p>
      </div>

      {/* CONTENT */}
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10">
        {/* 3D */}
        <div className="col-span-2 rounded-3xl bg-white p-4 shadow-lg">
          <Canvas
            orthographic
            camera={{ zoom: 40, position: [0, 20, 0] }}
          >
            <CameraIntro />
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 10, 5]} />

            {/* ROAD */}
            <mesh position={[0, -0.1, 0]}>
              <boxGeometry args={[20, 0.1, 6]} />
              <meshStandardMaterial color="#d1d5db" />
            </mesh>

            {/* PLOTS */}
            {plots.map((p, i) => (
              <Plot
                key={p.id}
                plot={p}
                position={[-6 + i * 4, 0.2, 0]}
                onSelect={setActive}
              />
            ))}

            <OrbitControls enableRotate={false} />
          </Canvas>
        </div>

        {/* INFO PANEL */}
        <div className="rounded-3xl bg-white p-6 shadow-lg">
          {active ? (
            <>
              <h3 className="text-xl font-semibold">
                Plot {active.id}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {active.w} × {active.l} ft
              </p>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Area</span>
                  <span>{active.w * active.l} sq.ft</span>
                </div>
                <div className="flex justify-between">
                  <span>Status</span>
                  <span
                    className={
                      active.status === "sold"
                        ? "text-red-500"
                        : "text-green-600"
                    }
                  >
                    {active.status}
                  </span>
                </div>
              </div>

              <button className="mt-6 w-full rounded-lg bg-black py-2 text-white">
                Book Site Visit
              </button>
            </>
          ) : (
            <p className="text-sm text-gray-500">
              Select a plot to view details
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
