import { motion } from "framer-motion";
import { DollarSign, Heart, Truck, BarChart3, ClipboardList, Shield, Package } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Finance & Accounting",
    description: "Automated commentary, reconciliation, variance analysis and regulatory reporting powered by multi-agent pipelines.",
    items: ["Balance Sheet Commentary", "GL Reconciliation Automation", "Regulatory Reporting Engine", "Spend Analysis Dashboard"],
  },
  {
    icon: Heart,
    title: "Healthcare & Insurance",
    description: "Claims processing, underwriting support, patient intake and compliance monitoring with built-in PHI/PII safeguards.",
    items: ["Claims Processing Automation", "Policy Underwriting Assistant", "Patient Intake & Triage", "Compliance Audit Engine"],
  },
  {
    icon: Truck,
    title: "Operations & Supply Chain",
    description: "Demand forecasting, inventory optimization, supplier management and quality control all orchestrated by AI agents.",
    items: ["Demand Forecasting System", "Supplier Risk Monitoring", "Quality Inspection Automation", "Logistics Route Optimisation"],
  },
];

const Platform = () => (
  <section id="platform" className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">VIRINCHI AGENT STUDIO - PLATFORM</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
          Build Complex Enterprise Apps in Days
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Beyond Agents - Agent Studio enables organizations to build full featured AI applications delivered in Days.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-colors"
            >
              <Icon className="w-10 h-10 text-primary mb-5" />
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{feature.description}</p>
              <ul className="space-y-2">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
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

export default Platform;
