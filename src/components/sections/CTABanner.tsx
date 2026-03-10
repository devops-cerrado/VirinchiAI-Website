import { motion } from "framer-motion";

const CTABanner = () => (
  <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(270 70% 55%), hsl(270 70% 35%))" }}>
    {/* Dot pattern */}
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: "radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
    }} />
    <div className="relative max-w-4xl mx-auto text-center section-padding">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4"
      >
        Ready to Build Your Digital Workforce?
      </motion.h2>
      <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
        Join leading enterprises already running on Virinchi AI
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="bg-foreground text-background px-8 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
          Start Free Trial
        </button>
        <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-primary-foreground/10 transition-colors">
          Book a Demo
        </button>
      </div>
    </div>
  </section>
);

export default CTABanner;
