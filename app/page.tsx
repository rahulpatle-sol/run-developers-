"use client"

import { Navbar } from "@/components/navbar"
import { HeroSectionCity } from "@/components/hero-section-city"
import { AboutSection } from "@/components/about-section"
import { AmenitiesSection } from "@/components/amenities-section"
import { FeaturedProject } from "@/components/featured-project"
import { InteractivePlotGrid } from "@/components/interactive-plot-grid"
import { CertificationsSection } from "@/components/certifications-section"
import { WhyUsSection } from "@/components/why-us-section"
import { VideoTourSection } from "@/components/video-tour-section"
import { LocationSection } from "@/components/location-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { PageLoader } from "@/components/page-loader"

export default function Home() {
  return (
    <>
      <PageLoader />
      <main className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        <HeroSectionCity />
        <AboutSection />
        <AmenitiesSection />
        <FeaturedProject />
        <InteractivePlotGrid />
        <CertificationsSection />
        <WhyUsSection />
        <VideoTourSection />
        <LocationSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
