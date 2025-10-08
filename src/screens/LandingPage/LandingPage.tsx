import React from "react";
import { BlogSection } from "./sections/BlogSection";
import { FacilitiesSection } from "./sections/FacilitiesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { RatingSection } from "./sections/RatingSection";
import Marquee from "./sections/Marquee/Marquee";

export const LandingPage = (): JSX.Element => {
  // Partner logos data for the logo section
 

  return (
    <div className="flex flex-col w-full">
      <HeaderSection />
      <Marquee/>
      <section id="home">
        <HeroSection />
      </section>
      <section id="rating">
        <RatingSection />
      </section>
      <section id="facilities">
        <FacilitiesSection />
      </section>
      <section id="blog">
        <BlogSection />
      </section>
      <FooterSection />
    </div>
  );
};
