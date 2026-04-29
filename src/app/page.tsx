import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Services } from "@/components/sections/Services";
import { Calculator } from "@/components/sections/Calculator";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-theme-green selection:text-white">
      <Navbar />
      
      <div className="flex-grow">
        <Hero />
        <ProblemSection />
        <Calculator />
        <HowItWorks />
        <Services />
        <FinalCTA />
      </div>
      
      <Footer />
    </main>
  );
}
