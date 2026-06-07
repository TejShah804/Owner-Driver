import { motion } from "framer-motion";
import { FaAws, FaGoogle, FaMicrosoft, FaSalesforce, FaDocker, FaStripe, FaSlack, FaCloudflare, FaAtlassian, FaDigitalOcean } from "react-icons/fa";

export default function Partners() {
  // Using generic tech logos to represent enterprise trust since we can't load specific Australian brand logos
  const partners = [
    { name: "ANZ", icon: FaAws },
    { name: "Telstra", icon: FaGoogle },
    { name: "Optus", icon: FaMicrosoft },
    { name: "AGL", icon: FaSalesforce },
    { name: "Commonwealth Bank", icon: FaDocker },
    { name: "NAB", icon: FaStripe },
    { name: "Macquarie", icon: FaSlack },
    { name: "Woolworths", icon: FaCloudflare },
    { name: "BHP", icon: FaAtlassian },
    { name: "Transurban", icon: FaDigitalOcean },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-card border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-center text-sm font-semibold tracking-wider text-muted-foreground uppercase">
          Trusted by Australia's leading enterprises
        </h3>
      </div>
      
      <div className="relative flex w-full">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none"></div>
        
        <motion.div 
          className="flex whitespace-nowrap gap-12 md:gap-24 items-center"
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedPartners.map((partner, i) => (
            <div key={i} className="flex items-center gap-3 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <span className="text-2xl text-white font-bold tracking-tight">{partner.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
