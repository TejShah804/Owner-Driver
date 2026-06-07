import { motion } from "framer-motion";
import { ArrowRight, Activity, MapPin, Headphones, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const headline = "Own Your Infrastructure. Own Your Future.";
  const words = headline.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden bg-background">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Australia's Premier Data Centre
          </motion.div>

          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-[80px] font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            {words.map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block mr-3 lg:mr-4">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Carrier-neutral colocation, cloud connectivity, and managed services built for Australian enterprises that refuse to compromise on uptime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-primary hover:bg-primary/90 text-white group">
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-white/20 hover:border-white/40 bg-transparent text-white">
              Book a Facility Tour
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8 border-t border-white/10"
          >
            {[
              { icon: Activity, text: "99.999% Uptime" },
              { icon: MapPin, text: "3 Australian Locations" },
              { icon: Headphones, text: "24/7 NOC Support" },
              { icon: ShieldCheck, text: "ISO 27001 Certified" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-2">
                <stat.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-white/80">{stat.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
