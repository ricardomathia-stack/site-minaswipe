import { Hero } from "@/components/home/Hero";
import { PersonaSelector } from "@/components/PersonaSelector";
import { Authority } from "@/components/home/Authority";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { SolutionsTeaser } from "@/components/home/SolutionsTeaser";
import { SegmentsTeaser } from "@/components/home/SegmentsTeaser";
import { Process } from "@/components/home/Process";
import { Benefits } from "@/components/home/Benefits";
import { Partners } from "@/components/home/Partners";
import { MidCTA } from "@/components/home/MidCTA";
import { FAQ } from "@/components/home/FAQ";
import { ContactTeaser } from "@/components/home/ContactTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PersonaSelector />
      <Authority />
      <SolutionsTeaser />
      <SegmentsTeaser />
      <AboutTeaser />
      <Process />
      <Benefits />
      <Partners />
      <MidCTA />
      <FAQ />
      <ContactTeaser />
    </>
  );
}
