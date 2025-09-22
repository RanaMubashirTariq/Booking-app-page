import React from "react";
import { BlogSection } from "./sections/BlogSection";
import { FacilitiesSection } from "./sections/FacilitiesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { RatingSection } from "./sections/RatingSection";

export const LandingPage = (): JSX.Element => {
  // Partner logos data for the logo section
  const partnerLogos = [
    { id: 1, src: "/logo-1.svg", alt: "Logo" },
    { id: 2, src: "/logo-1.svg", alt: "Logo" },
    { id: 3, src: "/logo-1.svg", alt: "Logo" },
    { id: 4, src: "/logo-1.svg", alt: "Logo" },
    { id: 5, src: "/logo.svg", alt: "Logo" },
  ];

  return (
    <div className="flex flex-col w-full">
      <HeaderSection />
      <HeroSection />
      <RatingSection />
      <FacilitiesSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
};
