import { motion } from "framer-motion";
import { Shield, Zap, Globe, Award, Users, TrendingUp } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Intelligence Sovereign", desc: "Your data stays yours. No vendor lock-in, no Big Tech gatekeeping." },
  { icon: Zap, title: "Days, Not Months", desc: "Go from concept to production AI agents in days with pre-built templates." },
  { icon: Globe, title: "Global Scale", desc: "Deploy across geographies with multi-region, multi-language support." },
  { icon: Award, title: "Enterprise Grade", desc: "SOC2, HIPAA-ready with built-in compliance and governance frameworks." },
  { icon: Users, title: "50+ Pre-Built Agents", desc: "Purpose-built agents across 6 industry domains ready to deploy." },
  { icon: TrendingUp, title: "Proven ROI", desc: "Customers see 60% reduction in processing time within 30 days." },
];

const WhyVirinchiPage = () => (
  <div className="pt-32 pb-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">WHY VIRINCHI AI</span>
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
          The Enterprise AI Platform That Puts You in Control
        </h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          We believe enterprises should own their AI — not rent it from Big Tech. Virinchi AI gives you sovereign, scalable, secure AI agents.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => {
          const Icon = r.icon;
          return (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-colors"
            >
              <Icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
);

export default WhyVirinchiPage;
