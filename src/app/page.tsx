import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Authority } from "@/components/Authority";
import { About } from "@/components/About";
import { Solutions } from "@/components/Solutions";
import { Segments } from "@/components/Segments";
import { Partners } from "@/components/Partners";
import { Process } from "@/components/Process";
import { Benefits } from "@/components/Benefits";
import { MidCTA } from "@/components/MidCTA";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Authority />
        <About />
        <Solutions />
        <Segments />
        <Partners />
        <Process />
        <Benefits />
        <MidCTA />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
