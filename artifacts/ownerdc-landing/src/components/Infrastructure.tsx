import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Zap, Square, Award, Thermometer, ShieldCheck } from "lucide-react";

const locations = [
  {
    city: "Sydney",
    region: "St Leonards, NSW",
    floorSpace: "12,000 m²",
    power: "30 MW",
    racks: "4,200+",
    tier: "Tier III",
    certs: ["ISO 27001", "PCI-DSS", "SOC 2"],
    cooling: "Precision air + chilled water",
    density: "Up to 30 kW/rack",
    security: "Biometric + CCTV + mantrap",
    fire: "FM200 gas suppression",
    primary: true,
  },
  {
    city: "Melbourne",
    region: "Port Melbourne, VIC",
    floorSpace: "9,500 m²",
    power: "22 MW",
    racks: "3,100+",
    tier: "Tier III",
    certs: ["ISO 27001", "PCI-DSS", "Uptime Institute"],
    cooling: "Precision air + free cooling",
    density: "Up to 25 kW/rack",
    security: "Biometric + CCTV + security guards",
    fire: "FM200 gas suppression",
    primary: false,
  },
  {
    city: "Brisbane",
    region: "Woolloongabba, QLD",
    floorSpace: "6,200 m²",
    power: "15 MW",
    racks: "2,000+",
    tier: "Tier III",
    certs: ["ISO 27001", "PCI-DSS"],
    cooling: "Row-based precision cooling",
    density: "Up to 20 kW/rack",
    security: "Biometric + CCTV + mantrap",
    fire: "FM200 gas suppression",
    primary: false,
  },
];

export default function Infrastructure() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const location = locations[activeTab];

  return (
    <section id="infrastructure" className="py-24 bg-card/40 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            Our Facilities
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Data Centre Infrastructure
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three purpose-built facilities strategically positioned across Australia's major business hubs.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex bg-background border border-white/10 rounded-xl p-1 gap-1">
            {locations.map((loc, i) => (
              <button
                key={loc.city}
                onClick={() => setActiveTab(i)}
                data-testid={`tab-${loc.city.toLowerCase()}`}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === i
                    ? "bg-primary text-white shadow-lg"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {loc.city}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Location Overview */}
          <div className="bg-background border border-white/8 rounded-2xl p-8 relative overflow-hidden"
            style={{ boxShadow: "0 4px 40px rgba(0,174,239,0.06)" }}>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-t-2xl" />

            <div className="flex items-start gap-4 mb-8">
              <div className="bg-primary/10 p-3 rounded-xl">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{location.city}</h3>
                <p className="text-muted-foreground text-sm">{location.region}</p>
                {location.primary && (
                  <span className="mt-2 inline-block px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-wider uppercase">
                    Primary Hub
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: Square, label: "Floor Space", value: location.floorSpace },
                { icon: Zap, label: "Power Capacity", value: location.power },
                { icon: Award, label: "Total Racks", value: location.racks },
              ].map((item) => (
                <div key={item.label} className="bg-card/80 border border-white/6 rounded-xl p-4 text-center">
                  <item.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">{item.value}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Certifications</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                  {location.tier}
                </span>
                {location.certs.map((cert) => (
                  <span key={cert} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Facility Specs */}
          <div className="bg-background border border-white/8 rounded-2xl p-8"
            style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.2)" }}>
            <h4 className="text-lg font-bold text-white mb-6">Facility Specifications</h4>
            <div className="space-y-5">
              {[
                { icon: Thermometer, label: "Cooling System", value: location.cooling },
                { icon: Zap, label: "Power Density", value: location.density },
                { icon: ShieldCheck, label: "Physical Security", value: location.security },
                { icon: Award, label: "Fire Suppression", value: location.fire },
              ].map((spec) => (
                <div key={spec.label} className="flex items-start gap-4 pb-5 border-b border-white/6 last:border-0 last:pb-0">
                  <div className="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                    <spec.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-medium mb-0.5">{spec.label}</div>
                    <div className="text-sm text-white font-medium">{spec.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-primary/5 border border-primary/15 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">All Systems Operational</div>
                  <div className="text-xs text-muted-foreground">Power, cooling, and network nominal</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
