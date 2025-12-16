import { Hero } from "@/components/home/Hero";
import { LogoStrip } from "@/components/home/LogoStrip";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Stats } from "@/components/home/Stats";
import { Compliance } from "@/components/home/Compliance";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <ServicesGrid />
      <Stats />
      <Compliance />
      <CTA />
    </>
  );
}
