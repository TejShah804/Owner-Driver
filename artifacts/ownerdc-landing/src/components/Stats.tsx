import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 99.999, suffix: "%", label: "Uptime SLA", description: "Contractual guarantee" },
  { value: 20, suffix: "+", label: "Carriers", description: "Network providers" },
  { value: 3, suffix: "", label: "Data Centres", description: "Australian locations" },
  { value: 15, suffix: "+", label: "Years Experience", description: "Industry expertise" },
  { value: 500, suffix: "+", label: "Enterprise Clients", description: "Across Australia" },
  { value: 100, suffix: "%", label: "Renewable Energy", description: "Sustainable power" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (value - start) * eased;
      setDisplayed(current);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  const formatted = value === 99.999
    ? displayed >= 99.999 ? "99.999" : displayed.toFixed(3)
    : Math.round(displayed).toString();

  return (
    <span ref={ref}>
      {formatted}{suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            By The Numbers
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Infrastructure at Scale
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center group"
            >
              <div className="relative bg-card border border-white/8 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/3 rounded-xl transition-colors duration-300" />
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 tabular-nums">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-primary mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
