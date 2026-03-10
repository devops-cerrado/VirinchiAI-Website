import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { domains, agentData } from "@/constants/agentData";

const PreBuiltAgents = () => {
  const [activeTab, setActiveTab] = useState<string>("BANKING");

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">Agents</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            50+ Pre-Built Agents Across 6 Domains
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're in banking, insurance, HR, marketing, sales or support — we have purpose-built agents ready to deploy.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {domains.map((domain) => (
            <button
              key={domain}
              onClick={() => setActiveTab(domain)}
              className={`relative px-5 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                activeTab === domain
                  ? "text-primary-foreground bg-primary"
                  : "text-muted-foreground hover:text-foreground bg-secondary"
              }`}
            >
              {domain}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {agentData[activeTab]?.map((agent, i) => {
              const Icon = agent.icon;
              return (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer relative"
                >
                  <div className="absolute top-4 right-4 text-muted-foreground group-hover:text-primary transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-heading font-semibold text-foreground mb-2">{agent.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{agent.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PreBuiltAgents;
