import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlatformIntro from "@/components/PlatformIntro";
import ThePlatform from "@/components/ThePlatform";
import About from "@/components/About";
import ForDrivers from "@/components/ForDrivers";
import UpstreamApproach from "@/components/UpstreamApproach";
import PracticalPillars from "@/components/PracticalPillars";
import HowItWorks from "@/components/HowItWorks";
import WhoItsFor from "@/components/WhoItsFor";
import Footer from "@/components/Footer";

export default function Landing() {
  return (
    <div className="bg-brand-sand min-h-screen">
      <Navbar />
      <Hero />
      <PlatformIntro />
      <ThePlatform />
      <About />
      <ForDrivers />
      <UpstreamApproach />
      <PracticalPillars />
      <HowItWorks />
      <WhoItsFor />
      <Footer />
    </div>
  );
}
