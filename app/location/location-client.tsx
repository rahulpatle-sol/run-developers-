"use client";

import dynamic from "next/dynamic";

const LocationView = dynamic(() => import("./mapview"), {
  ssr: false,
});

export default function LocationClient() {
  return <LocationView />;
}
