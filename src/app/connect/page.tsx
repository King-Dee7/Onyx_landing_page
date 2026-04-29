import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConnectForm } from "@/components/forms/ConnectForm";

export const metadata = {
  title: "Connect | Onyx Automation Agency",
  description: "Book a strategy call to see what AI automation can do for your business.",
};

export default function ConnectPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white selection:bg-[#00BF63] selection:text-white">
      <Navbar />
      <div className="flex-grow pt-24">
        <ConnectForm />
      </div>
      <Footer />
    </main>
  );
}
