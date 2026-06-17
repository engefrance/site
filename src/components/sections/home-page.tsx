"use client";

import { HomeHero } from "@/components/sections/home-hero";
import { HomeNumbers } from "@/components/sections/home-numbers";
import { HomeServices } from "@/components/sections/home-services";
import { HomeAbout } from "@/components/sections/home-about";
import { HomeDifferentials } from "@/components/sections/home-differentials";
import { HomePortfolio } from "@/components/sections/home-portfolio";
import { HomeProcess } from "@/components/sections/home-process";
import { HomeCTA } from "@/components/sections/home-cta";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeNumbers />
      <HomeServices />
      <HomeAbout />
      <HomeDifferentials />
      <HomePortfolio />
      <HomeProcess />
      <HomeCTA />
    </>
  );
}
