import { motion } from "framer-motion";
import { Server, Cloud, Lock, Search, MessageCircle, BarChart3, ArrowRight } from "lucide-react";

const boltFeatures = [
  { icon: Server, label: "Single platform — Open-Source or Proprietary Models of your choice" },
  { icon: Cloud, label: "Flexible — Deployed locally or private cloud" },
  { icon: Lock, label: "Sovereignty — Layered decoupling of Infra and Model" },
  { icon: Search, label: "Search — Unified AI-powered search across all enterprise data" },
  { icon: MessageCircle, label: "Q&A — Natural language questions with instant cited answers" },
  { icon: BarChart3, label: "Analytics — Deep actionable insights with built-in charts" },
];

const BoltSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">VIRINCHI BOLT</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Your Private GPT for Enterprise
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            The Bolt Platform enables users to talk to their enterprise data
          </p>
          <div className="space-y-4">
            {boltFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{f.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mock chat UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 relative"
        >
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <div className="w-3 h-3 rounded-full bg-muted" />
              <div className="w-3 h-3 rounded-full bg-muted" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground">Talk to your data.</h3>
            <div className="space-y-3">
              <div className="bg-secondary rounded-lg p-3 max-w-[80%]">
                <p className="text-sm text-muted-foreground">What were our Q3 revenue trends?</p>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 max-w-[85%] ml-auto">
                <p className="text-sm text-foreground">Q3 revenue grew 23% YoY, driven primarily by enterprise segment expansion...</p>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
            Contact Sales <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BoltSection;
