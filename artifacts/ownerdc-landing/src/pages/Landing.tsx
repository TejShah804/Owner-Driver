import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlatformIntro from "@/components/PlatformIntro";
import HowItWorks from "@/components/HowItWorks";
import AppDashboard from "@/components/AppDashboard";
import WhoItsFor from "@/components/WhoItsFor";
import ThePlatform from "@/components/ThePlatform";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Landing() {
  return (
    <div className="bg-brand-sand min-h-screen">
      <Navbar />
      <Hero />
      <PlatformIntro />
      <HowItWorks />
      <AppDashboard />
      <WhoItsFor />
      <ThePlatform />
      <About />
      <Footer />
    </div>
  );
}
