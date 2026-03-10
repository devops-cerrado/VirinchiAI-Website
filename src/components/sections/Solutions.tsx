import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { solutions, industries } from "@/constants/solutionsData";

const Solutions = () => (
  <section id="solutions" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      {/* Solutions */}
      <div className="text-center mb-12">
        <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">SOLUTIONS</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
          Purpose-Built Solutions
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Beyond our core platform, we offer a suite of specialized AI Applications which you can easily integrate into your application workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {solutions.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-colors group"
            >
              <Icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.description}</p>
              <button className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Industries */}
      <div className="text-center mb-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Built for Your Industry</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {industries.map((ind) => (
          <div
            key={ind.name}
            className={`px-6 py-3 rounded-lg border text-sm font-medium ${
              ind.comingSoon
                ? "border-border text-muted-foreground opacity-60"
                : "border-border text-foreground hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer"
            }`}
          >
            {ind.name}
            {ind.comingSoon && <span className="ml-2 text-xs text-primary">Coming Soon</span>}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Solutions;
