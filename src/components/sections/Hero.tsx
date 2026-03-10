import { motion } from "framer-motion";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: 50, suffix: "+", label: "PRE-BUILT AGENTS" },
  { value: 6, suffix: "", label: "INDUSTRY DOMAINS" },
  { value: 20, suffix: "+", label: "DATA CONNECTORS" },
  { value: 4, prefix: "<", suffix: "min", label: "SELF-HEAL MTTR" },
];

const StatCard = ({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) => {
  const count = useCounterAnimation(stat.value, 2000, 0, isVisible);
  return (
    <div className="glass-card p-6 text-center">
      <div className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-1">
        {stat.prefix || ""}{count}{stat.suffix}
      </div>
      <div className="text-xs text-muted-foreground tracking-wider font-medium">{stat.label}</div>
    </div>
  );
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient mesh bg */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Floating hexagons */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 right-[15%] w-16 h-16 border border-primary/20 rounded-xl opacity-30"
        style={{ transform: "rotate(45deg)" }}
      />
      <motion.div
        animate={{ y: [10, -15, 10] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/3 left-[10%] w-10 h-10 border border-primary/15 rounded-lg opacity-20"
        style={{ transform: "rotate(30deg)" }}
      />

      {/* Glowing orb */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-primary/20 blur-[60px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="relative z-10 max-w-5xl mx-auto text-center px-4 pt-32 pb-20"
      >
        <motion.h1 variants={item} className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-[1.1] mb-6">
          Build Your <span className="gradient-text-brand">Digital Workforce</span> in Days, Not Months
        </motion.h1>

        <motion.p variants={item} className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Virinchi AI's Bolt OS is the enterprise AI agent operating system — build, orchestrate and govern AI agents across every department, domain and geography from a single control plane.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity w-full sm:w-auto">
            Start Free Trial
          </button>
          <button className="border border-border text-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-secondary transition-colors w-full sm:w-auto">
            Watch 3-Min Demo →
          </button>
        </motion.div>

        <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
