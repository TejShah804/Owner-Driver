import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlatformIntro from "@/components/PlatformIntro";
import ThePlatform from "@/components/ThePlatform";
import IndustryReality from "@/components/IndustryReality";
import About from "@/components/About";
import ForDrivers from "@/components/ForDrivers";
import UpstreamApproach from "@/components/UpstreamApproach";
import HowItWorks from "@/components/HowItWorks";
import WhoItsFor from "@/components/WhoItsFor";
import BetterWayCTA from "@/components/BetterWayCTA";
import Footer from "@/components/Footer";
import RegisterModal from "@/components/RegisterModal";

export default function Landing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-sand">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <PlatformIntro />
      <ForDrivers />
      <IndustryReality />
      <ThePlatform />
      <About />
      <HowItWorks />
      <UpstreamApproach />
      
      <WhoItsFor />
      <BetterWayCTA onOpenModal={() => setIsModalOpen(true)} />
      <Footer />

      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}