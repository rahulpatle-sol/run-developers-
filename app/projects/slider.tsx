"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { MoveRight, ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    title: "AK Nagar",
    tag: "Ongoing",
    desc: "Our flagship development designed for modern families with wide roads and green zones.",
    image: "images/main-gate.png",
    highlight: true,
  },
  {
    title: "Green Valley Phase 2",
    tag: "Upcoming",
    desc: "Nature-friendly planning with essential infrastructure for future-ready living.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000",
  },
  {
    title: "Sunrise Enclave",
    tag: "Upcoming",
    desc: "Thoughtfully planned residential colony aimed at quality and legal transparency.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1000",
  },
  {
    title: "Urban Nest",
    tag: "Upcoming",
    desc: "Smart layouts designed for young families and first-time buyers in Seoni.",
    image: "/eco-home-near-forest-india.jpg",
  },
];

export default function PremiumProjectsCarousel() {
  return (
    <section className="bg-[#ebeae6] py-32 px-6 lg:px-20 font-sans text-[#1a1a1a]">
      <div className="max-w-[1500px] mx-auto">
        
        {/* --- HEADER: GIANT TYPOGRAPHY --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-end">
          <div className="lg:col-span-8">
            <p className="text-[10px] tracking-[5px] font-bold text-zinc-400 uppercase mb-6 italic">
              Portfolio
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-[100px] font-serif font-bold leading-[0.85] tracking-tighter text-zinc-900">
              Ongoing <br /> 
              <span className="text-zinc-400 italic font-light font-sans tracking-tight">& Future</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs lg:text-right italic font-medium mb-6">
              Legally compliant, well-planned residential colonies designed for growth and connectivity.
            </p>
            <div className="flex gap-4">
               <button className="p-4 rounded-full border border-zinc-300 hover:bg-black hover:text-white transition-all">
                  <MoveRight className="w-5 h-5 rotate-180" />
               </button>
               <button className="p-4 rounded-full bg-black text-white hover:bg-[#f15a24] transition-all">
                  <MoveRight className="w-5 h-5" />
               </button>
            </div>
          </div>
        </div>

        {/* --- CAROUSEL: MOLDED SLIDES --- */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500 }}
          loop
          spaceBetween={30}
          slidesPerView={1.2}
          pagination={{ clickable: true, el: '.custom-pag' }}
          breakpoints={{
            768: { slidesPerView: 2.2 },
            1280: { slidesPerView: 3 },
          }}
          className="pb-20"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#dedede] rounded-[50px] p-1 shadow-inner border border-white/20 group">
                <div className="bg-white rounded-[46px] overflow-hidden border-[6px] border-white shadow-xl h-full">
                  
                  {/* Image Container */}
                  <div className="h-[300px] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur shadow-md px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest">
                      {project.tag}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-serif font-bold tracking-tight text-zinc-900">
                        {project.title}
                      </h3>
                      <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                      {project.desc}
                    </p>
                    
                    {/* Decorative hover bar */}
                    <div className="mt-8 h-[2px] w-0 bg-[#f15a24] group-hover:w-full transition-all duration-700" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Pagination Dot */}
        <div className="custom-pag flex justify-center mt-4 gap-2"></div>

      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .swiper-pagination-bullet { background: #d1d1d1 !important; opacity: 1 !important; width: 8px; height: 8px; }
        .swiper-pagination-bullet-active { background: #1a1a1a !important; width: 24px !important; border-radius: 4px !important; }
      `}</style>
    </section>
  );
}