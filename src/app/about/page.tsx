import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";

export const metadata = {
  title: "About | Onyx Automation Agency",
  description:
    "The vision behind Onyx - scaling businesses through lean, high-efficiency AI orchestration. Meet the mission and learn how we work.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white selection:bg-[#00BF63] selection:text-white">
      <Navbar />
      <div className="flex-grow">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}
