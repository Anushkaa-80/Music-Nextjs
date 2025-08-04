import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import React from "react";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructor from "@/components/Instructor";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
   <HeroSection />
   <FeaturedCourses />
   <WhyChooseUs/>
   <TestimonialCards/>
   <UpcomingWebinars/>
   <Instructor/>
   </main>
  );
}
