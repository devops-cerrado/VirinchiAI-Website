import { motion } from "framer-motion";
import { Shield, BookOpen, Store } from "lucide-react";

const sections = [
  {
    icon: Shield,
    title: "Anti-Hallucination Engine",
    color: "border-t-primary",
    items: [
      "Deterministic responses",
      "Keep responses accurate and on trusted data sources",
      "Multiple checkpoints to ensure responses are trusted",
    ],
  },
  {
    icon: BookOpen,
    title: "Responsible AI",
    color: "border-t-blue-500",
    items: [
      "Knowledge Base — Train agents on trusted data sources",
      "Guardrails to ensure responses are Deterministic",
      "Deliver enterprise-grade security, fairness, and transparency",
    ],
  },
  {
    icon: Store,
    title: "Virinchi Store",
    color: "border-t-emerald-500",
    items: [
      "No more shadow AI",
      "Publish all your AI assets onto your own marketplace",
      "Host all AI assets whether bought or built on your store",
    ],
  },
];

const Governance = () => (
  <section className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">GOVERNANCE & RESPONSIBLE AI</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
          Enterprise-Grade Trust & Safety
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`bg-card border border-border ${s.color} border-t-2 rounded-xl p-8`}
            >
              <Icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-heading font-bold text-lg text-foreground mb-4">{s.title}</h3>
              <ul className="space-y-3">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Governance;
