"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const projects = [
  {
    title: "AK Nagar",
    tag: "Ongoing Project",
    desc:
      "AK Nagar is our flagship residential development designed for modern families. The project focuses on well-planned internal roads, green open spaces, drainage systems, and legally approved plots to ensure long-term value and peace of mind.",
    image: "/ak-nagar.jpg",
    highlight: true,
  },
  {
    title: "Green Valley Phase 2",
    tag: "Upcoming Project",
    desc:
      "An upcoming plotted development focused on nature-friendly planning, wide roads, and essential infrastructure for future-ready living.",
    image: "/project-2.jpg",
  },
  {
    title: "Sunrise Enclave",
    tag: "Upcoming Project",
    desc:
      "A thoughtfully planned residential colony aimed at affordable living without compromising on quality and legal transparency.",
    image: "/project-3.jpg",
  },
  {
    title: "Urban Nest",
    tag: "Upcoming Project",
    desc:
      "A compact residential project designed for young families and first-time buyers, offering smart layouts and essential amenities.",
    image: "/project-4.jpg",
  },
];

export default function ProjectsCarousel() {
  return (
    <section className="bg-white py-24 px-6 lg:px-20">
      {/* HEADER */}
      <div className="max-w-3xl mb-14">
        <p className="text-3xl mt-4   text-center tracking-[3px] text-gray-400 mb-3">
          OUR DEVELOPMENTS
        </p>
        <h2 className="text-2xl lg:text-5xl font-serif text-center text-gray-900 mb-4">
          Projects Built on <br /> Trust & Planning
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          We develop legally compliant, well-planned residential colonies with
          a long-term vision. Each project is designed to support growth,
          connectivity, and comfortable living.
        </p>
      </div>

      {/* CAROUSEL */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={24}
        slidesPerView={1.1}
        breakpoints={{
          768: {
            slidesPerView: 2.3,
          },
          1280: {
            slidesPerView: 3.2,
          },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div
              className={`h-full rounded-2xl border border-gray-200 bg-white overflow-hidden transition-shadow duration-300 ${
                project.highlight
                  ? "shadow-xl"
                  : "shadow-md hover:shadow-lg"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[260px] object-cover"
              />

              <div className="p-6">
                <span
                  className={`text-xs font-medium tracking-wide ${
                    project.highlight
                      ? "text-green-700"
                      : "text-gray-500"
                  }`}
                >
                  {project.tag}
                </span>

                <h3 className="mt-2 mb-3 text-xl font-serif text-gray-900">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
