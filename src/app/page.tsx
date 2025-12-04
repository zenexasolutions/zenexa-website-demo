import { Hero } from "@/components/home/Hero";
import { LogoStrip } from "@/components/home/LogoStrip";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Stats } from "@/components/home/Stats";
import { Compliance } from "@/components/home/Compliance";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <ProblemSolution />
      <ServicesGrid />
      <Stats />
      <Compliance />
      <Testimonials />
      <CTA />
    </>
  );
}
