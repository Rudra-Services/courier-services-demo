import { AboutUsSection } from "@/components/custom-components/home/AboutUsSection";
import { HeroSection } from "@/components/custom-components/home/HeroSection";
import { OurServicesSection } from "@/components/custom-components/home/OurServicesSection";
import Image from "next/image";

export default function Home() {
  return (
      <>
      <HeroSection/>
      <AboutUsSection/>
      <OurServicesSection/>
      </>
  );
}
