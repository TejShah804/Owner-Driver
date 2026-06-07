import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-secondary" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />

      {/* Animated particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-white text-sm font-medium mb-8"
          >
            <Calendar className="h-4 w-4" />
            Facility tours available Monday – Friday
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Ready to Own Your Infrastructure?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-12 leading-relaxed">
            Join 500+ Australian enterprises that have chosen OwnerDC as their trusted infrastructure partner. Let's talk about your requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              data-testid="cta-get-quote"
              className="w-full sm:w-auto h-14 px-8 text-base bg-white text-primary hover:bg-white/90 font-bold group"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              data-testid="cta-book-tour"
              className="w-full sm:w-auto h-14 px-8 text-base border-white/40 text-white hover:bg-white/10 hover:border-white/60 bg-transparent font-semibold"
            >
              Book a Facility Tour
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              { value: "48hrs", label: "Typical Quote Turnaround" },
              { value: "No Lock-in", label: "Month-to-Month Contracts Available" },
              { value: "Free", label: "Proof of Concept Testing" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl font-extrabold text-white mb-1">{item.value}</div>
                <div className="text-sm text-white/60">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
