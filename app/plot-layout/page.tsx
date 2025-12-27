"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Phone, MapPin, Search, ArrowUpRight, Ruler } from "lucide-react";

export default function AKNagarInventory() {
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [filterType, setFilterType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // --- FULL ACCURATE DATA (72 PLOTS) ---
  // const plots = [
  //   { id: "1", w1: 30, w2: 31, l1: 105, l2: 97, area: 3080.5, status: "sold", type: "residential", location: "North Side" },
  //   { id: "2", w1: 30, w2: 31, l1: 97, l2: 88.5, area: 2828.9, status: "sold", type: "residential", location: "North Side" },
  //   { id: "3", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  //   { id: "4", w1: 25, w2: 25, l1: 60, l2: 60, area: 1500, status: "sold", type: "commercial", location: "North Side" },
  //   { id: "5", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "available", type: "residential", location: "North Side" },
  //   { id: "6", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  //   { id: "7", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  //   { id: "8", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  //   { id: "9", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  //   { id: "10", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  //   { id: "11", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  //   { id: "12", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  //   { id: "13", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  //   { id: "14", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  //   { id: "15", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  //   { id: "16", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  //   { id: "17", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  //   { id: "18", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  //   { id: "19", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  //   { id: "20", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "residential", location: "North Side" },
  //   { id: "21", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "available", type: "residential", location: "North Side" },
  //   { id: "22", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "available", type: "residential", location: "North Side" },
  //   { id: "23", w1: 25, w2: 25, l1: 60, l2: 60, area: 1500, status: "sold", type: "commercial", location: "East Side" },
  //   { id: "24", w1: 25, w2: 25, l1: 60, l2: 60, area: 1500, status: "sold", type: "commercial", location: "East Side" },
  //   { id: "25", w1: 25, w2: 25, l1: 60, l2: 60, area: 1500, status: "available", type: "commercial", location: "East Side" },
  //   { id: "26", w1: 25, w2: 25, l1: 60, l2: 60, area: 1500, status: "sold", type: "commercial", location: "East Side" },
  //   { id: "27", w1: 25, w2: 25, l1: 60, l2: 60, area: 1500, status: "available", type: "commercial", location: "East Side" },
  //   { id: "28", w1: 25, w2: 25, l1: 60, l2: 60, area: 1500, status: "available", type: "commercial", location: "East Side" },
  //   { id: "29", w1: 25, w2: 25, l1: 60, l2: 60, area: 1500, status: "available", type: "commercial", location: "East Side" },
  //   { id: "30", w1: 25, w2: 25, l1: 60, l2: 60, area: 1500, status: "sold", type: "commercial", location: "East Side" },
  //   { id: "31", w1: 25, w2: 25, l1: 60, l2: 60, area: 1500, status: "available", type: "commercial", location: "East Side" },
  //   { id: "32", w1: 23, w2: 23, l1: 60, l2: 60, area: 1380, status: "available", type: "residential", location: "East Side" },
  //   { id: "33", w1: 30, w2: 30, l1: 52, l2: 52, area: 1560, status: "sold", type: "residential", location: "East Side" },
  //   { id: "34", w1: 38, w2: 38, l1: 52, l2: 52, area: 1976, status: "sold", type: "corner", location: "East Side" },
  //   { id: "35", w1: 38, w2: 38, l1: 50, l2: 50, area: 1900, status: "sold", type: "corner", location: "East Side" },
  //   { id: "36", w1: 30, w2: 30, l1: 50, l2: 50, area: 1500, status: "sold", type: "residential", location: "East Side" },
  //   { id: "37", w1: 25, w2: 25, l1: 58.8, l2: 58.3, area: 1463.8, status: "available", type: "residential", location: "East Side" },
  //   { id: "38", w1: 25, w2: 25, l1: 58.25, l2: 58, area: 1453.1, status: "sold", type: "residential", location: "East Side" },
  //   { id: "39", w1: 25, w2: 25, l1: 58, l2: 57.5, area: 1443.8, status: "available", type: "residential", location: "East Side" },
  //   { id: "40", w1: 25, w2: 25, l1: 57.5, l2: 57, area: 1431.3, status: "available", type: "residential", location: "East Side" },
  //   { id: "41", w1: 25, w2: 25, l1: 57, l2: 55, area: 1400, status: "available", type: "residential", location: "East Side" },
  //   { id: "42", w1: 25, w2: 25, l1: 55, l2: 57.75, area: 1409.4, status: "available", type: "residential", location: "Inner Ring" },
  //   { id: "43", w1: 25, w2: 25, l1: 57.75, l2: 59, area: 1459.4, status: "available", type: "residential", location: "Inner Ring" },
  //   { id: "44", w1: 25, w2: 25, l1: 59, l2: 60, area: 1487.5, status: "available", type: "residential", location: "Inner Ring" },
  //   { id: "45", w1: 25, w2: 25, l1: 60, l2: 61.25, area: 1515.6, status: "sold", type: "residential", location: "Inner Ring" },
  //   { id: "46", w1: 25, w2: 25, l1: 61.25, l2: 62.5, area: 1546.9, status: "available", type: "residential", location: "Inner Ring" },
  //   { id: "47", w1: 25, w2: 25, l1: 62.5, l2: 63.5, area: 1575, status: "available", type: "residential", location: "Inner Ring" },
  //   { id: "48", w1: 25, w2: 25, l1: 63.5, l2: 63.5, area: 1587.5, status: "sold", type: "residential", location: "Inner Ring" },
  //   { id: "49", w1: 25, w2: 25, l1: 63.5, l2: 67, area: 1631.3, status: "available", type: "residential", location: "Inner Ring" },
  //   { id: "50", w1: 25, w2: 25.2, l1: 67, l2: 70, area: 1719.4, status: "available", type: "residential", location: "South Side" },
  //   { id: "51", w1: 25.2, w2: 25.2, l1: 70, l2: 73.25, area: 1805.0, status: "sold", type: "residential", location: "South Side" },
  //   { id: "52", w1: 30, w2: 30.25, l1: 73.25, l2: 77, area: 2263.1, status: "available", type: "residential", location: "South Side" },
  //   { id: "53", w1: 30, w2: 30.25, l1: 77, l2: 80.7, area: 2375.4, status: "available", type: "residential", location: "South Side" },
  //   { id: "54", w1: 30, w2: 30, l1: 80.75, l2: 83, area: 2456.3, status: "sold", type: "residential", location: "South Side" },
  //   { id: "55", w1: 30, w2: 30, l1: 83, l2: 85, area: 2520, status: "available", type: "residential", location: "South Side" },
  //   { id: "56", w1: 30, w2: 30, l1: 85, l2: 87.25, area: 2583.8, status: "available", type: "residential", location: "South Side" },
  //   { id: "57", w1: 30, w2: 30, l1: 87.25, l2: 89.5, area: 2651.3, status: "sold", type: "residential", location: "South Side" },
  //   { id: "58", w1: 30, w2: 30, l1: 89.5, l2: 91.25, area: 2711.3, status: "available", type: "residential", location: "South Side" },
  //   { id: "59", w1: 30, w2: 30, l1: 91.25, l2: 93, area: 2763.8, status: "available", type: "residential", location: "South Side" },
  //   { id: "60", w1: 30, w2: 30, l1: 93, l2: 95, area: 2820, status: "available", type: "residential", location: "South Side" },
  //   { id: "61", w1: 35, w2: 35, l1: 95, l2: 97, area: 3360, status: "available", type: "residential", location: "West Side" },
  //   { id: "62", w1: 35, w2: 35, l1: 37.5, l2: 37.5, area: 1312.5, status: "sold", type: "corner", location: "West Side" },
  //   { id: "63", w1: 35, w2: 35, l1: 27.5, l2: 27.5, area: 962.5, status: "sold", type: "corner", location: "West Side" },
  //   { id: "64", w1: 35, w2: 35, l1: 99.5, l2: 100.5, area: 3500, status: "available", type: "premium", location: "West Side" },
  //   { id: "65", w1: 30, w2: 30, l1: 100.5, l2: 101.5, area: 3030, status: "sold", type: "premium", location: "Premium Block" },
  //   { id: "66", w1: 40, w2: 40, l1: 60, l2: 60, area: 2400, status: "sold", type: "premium", location: "Premium Block" },
  //   { id: "67", w1: 30, w2: 30, l1: 60, l2: 60, area: 1800, status: "sold", type: "premium", location: "Premium Block" },
  //   { id: "68", w1: 31.5, w2: 33, l1: 60, l2: 60, area: 1935, status: "available", type: "residential", location: "Premium Block" },
  //   { id: "69", w1: 34.25, w2: 36.75, l1: 69.75, l2: 76.5, area: 2595.9, status: "available", type: "residential", location: "Premium Block" },
  //   { id: "70", w1: 30, w2: 30.5, l1: 76.5, l2: 82.75, area: 2408.7, status: "available", type: "residential", location: "Premium Block" },
  //   { id: "71", w1: 40, w2: 40, l1: 60, l2: 60, area: 2400, status: "sold", type: "premium", location: "Premium Block" },
  //   { id: "72", w1: 40, w2: 62.75, l1: 92, l2: 165, area: 6601.7, status: "available", type: "premium", location: "Premium Block" }
  // ];

//  old data 
// __________ new data 
const plots = [
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

  const filteredPlots = plots
    .filter(p => (filterType === "all" || p.type === filterType))
    .filter(p => p.id.includes(searchTerm));

  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans p-4 md:p-8">
      
      {/* --- HEADER --- */}
      <section className="max-w-7xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-zinc-100 pb-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[5px] text-zinc-300">Seoni, Bypass</span>
            <h1 className="text-5xl font-black tracking-tighter text-zinc-900 mt-2">A.K. NAGAR</h1>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search Plot No. (e.g. 72)" 
              className="w-full pl-12 pr-4 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl outline-none focus:ring-2 ring-zinc-100"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* --- FILTERS --- */}
      <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto no-scrollbar mb-8">
        {["all", "residential", "commercial", "premium", "corner"].map((t) => (
          <button 
            key={t}
            onClick={() => setFilterType(t)}
            className={`px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
              filterType === t ? "bg-red-500 text-white shadow-xl" : "bg-zinc-100 text-zinc-400 hover:bg-zinc-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* --- 4-DIMENSION TABLE --- */}
      <section className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[32px] border border-zinc-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-zinc-50/50 text-[10px] uppercase tracking-widest text-zinc-400">
                  <th className="px-6 py-6 text-left font-bold">Plot</th>
                  <th className="px-6 py-6 text-left font-bold">Category</th>
                  <th className="px-6 py-6 text-left font-bold border-l border-zinc-100">Widths (F/B)</th>
                  <th className="px-6 py-6 text-left font-bold border-l border-zinc-100">Lengths (L/R)</th>
                  <th className="px-6 py-6 text-left font-bold border-l border-zinc-100">Total Area</th>
                  <th className="px-6 py-6 text-left font-bold">Status</th>
                  <th className="px-6 py-6 text-right font-bold">Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50">
                {filteredPlots.map((plot) => (
                  <motion.tr 
                    key={plot.id}
                    whileHover={{ backgroundColor: "#fafafa" }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedPlot(plot)}
                  >
                    <td className="px-6 py-7">
                      <span className="text-2xl font-black text-zinc-900">#{plot.id}</span>
                    </td>
                    <td className="px-6 py-7">
                      <span className="text-[10px] font-bold uppercase px-2 py-1 bg-zinc-100 rounded text-zinc-500 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                        {plot.type}
                      </span>
                    </td>
                    
                    {/* WIDTH 4-DIMENSION */}
                    <td className="px-6 py-7 border-l border-zinc-50">
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-[9px] font-bold text-zinc-300 uppercase">Front</span>
                          <span className="text-sm font-bold text-zinc-800">{plot.w1} ft</span>
                        </div>
                        <div className="flex items-center justify-between gap-4 border-t border-zinc-50 mt-1 pt-1">
                          <span className="text-[9px] font-bold text-zinc-300 uppercase">Back</span>
                          <span className="text-sm font-bold text-zinc-800">{plot.w2} ft</span>
                        </div>
                      </div>
                    </td>

                    {/* LENGTH 4-DIMENSION */}
                    <td className="px-6 py-7 border-l border-zinc-50">
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-[9px] font-bold text-zinc-300 uppercase">Left</span>
                          <span className="text-sm font-bold text-zinc-800">{plot.l1} ft</span>
                        </div>
                        <div className="flex items-center justify-between gap-4 border-t border-zinc-50 mt-1 pt-1">
                          <span className="text-[9px] font-bold text-zinc-300 uppercase">Right</span>
                          <span className="text-sm font-bold text-zinc-800">{plot.l2} ft</span>
                        </div>
                      </div>
                    </td>

                    {/* AREA */}
                    <td className="px-6 py-7 border-l border-zinc-50">
                      <div className="flex flex-col">
                        <span className="text-xl font-black text-zinc-900">{plot.area.toLocaleString()}</span>
                        <span className="text-[9px] font-bold text-zinc-300 uppercase tracking-widest">Sq. Ft</span>
                      </div>
                    </td>

                    <td className="px-6 py-7">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${
                        plot.status === 'sold' ? 'bg-red-50 text-red-400' : 'bg-green-50 text-green-600'
                      }`}>
                        {plot.status === 'sold' ? <XCircle size={12}/> : <CheckCircle2 size={12}/>}
                        <span className="text-[10px] font-black uppercase">{plot.status}</span>
                      </div>
                    </td>

                    <td className="px-6 py-7 text-right">
                       <ArrowUpRight className="ml-auto w-5 h-5 text-zinc-200 group-hover:text-zinc-900" />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- SELECTED PLOT DRAWER --- */}
      <AnimatePresence>
        {selectedPlot && (
          <motion.div 
            initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-zinc-200 p-8 md:p-12 rounded-t-[50px] shadow-[0_-20px_80px_rgba(0,0,0,0.1)]"
          >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex items-center gap-8">
                <div className="w-24 h-24 bg-red-500 text-white rounded-[32px] flex items-center justify-center text-4xl font-black">
                  {selectedPlot.id}
                </div>
                <div>
                  <h2 className="text-3xl font-black tracking-tighter">Plot Boundary Details</h2>
                  <div className="flex gap-4 mt-2">
                    <span className="flex items-center gap-1 text-xs font-bold text-zinc-400 uppercase"><MapPin size={14}/> {selectedPlot.location}</span>
                    <span className="flex items-center gap-1 text-xs font-bold text-zinc-400 uppercase"><MapPin size={14}/> {selectedPlot.w1}--{selectedPlot.w2}</span>
                     <span className="flex items-center gap-1 text-xs font-bold text-zinc-400 uppercase"><MapPin size={14}/> {selectedPlot.l1}--{selectedPlot.l2}</span>
                    <span className="flex items-center gap-1 text-xs font-bold text-zinc-400 uppercase"><Ruler size={14}/> {selectedPlot.area} Sq. Ft</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 w-full md:w-auto">
                <a href="tel:9300160966" className="flex-1 md:flex-none bg-green-600 text-white px-10 py-5 rounded-3xl font-bold flex items-center justify-center gap-3 hover:bg-green-700 transition-all">
                  <Phone size={20} /> Call for Booking
                </a>
                <button 
                  onClick={() => setSelectedPlot(null)}
                  className="px-10 py-5 bg-zinc-100 text-zinc-500 rounded-3xl font-bold hover:bg-zinc-200"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; background: #fff; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </main>
  );
}