import { motion } from "framer-motion";
import { useState } from "react";

const pillars = [
  { num: "01", title: "Independence", desc: "Built on a standalone stack, giving you a unique, high-performance alternative to traditional frameworks." },
  { num: "02", title: "Speed to Value", desc: "Reduce development cycles from months to days with pre-built templates and a streamlined deployment pipeline." },
  { num: "03", title: "Scalable Intelligence", desc: "As your business grows, your agent workforce scales with you, handling increased volume without increasing headcount." },
];

const steps = [
  { step: 1, title: "Choose your use case" },
  { step: 2, title: "Select your model" },
  { step: 3, title: "Connect your data" },
  { step: 4, title: "Deploy & monitor" },
];

const AgentStudio = () => {
  const [userType, setUserType] = useState<"developer" | "business">("developer");

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">VIRINCHI AGENT STUDIO</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            No-Code for Business Users. Low-Code for Developers. No Compromises.
          </h2>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-card border-l-4 border-primary rounded-r-xl p-6 md:p-8 mb-16 max-w-4xl mx-auto"
        >
          <p className="text-muted-foreground italic leading-relaxed">
            "Virinchi Agent Studio provides the ease of No-Code for business users and Low-Code for developers — without forcing you to hand over your data or your model choice to a Big Tech gatekeeper."
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl p-8 relative overflow-hidden"
            >
              <span className="absolute -top-4 -left-2 text-[120px] font-heading font-bold text-primary/[0.07] leading-none select-none">
                {p.num}
              </span>
              <div className="relative">
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* User Type Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-card border border-border rounded-lg p-1 flex">
            {(["developer", "business"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setUserType(type)}
                className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-colors ${
                  userType === type
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {type === "developer" ? "Developer/Engineering" : "Business User"}
              </button>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl p-6 text-center relative"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-heading font-bold">{s.step}</span>
              </div>
              <p className="text-foreground font-medium text-sm">{s.title}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentStudio;
