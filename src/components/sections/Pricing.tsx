import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { pricingData } from "@/constants/pricingData";

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">PRICING</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Scale as You Grow
          </h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className={`text-sm ${!annual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "bg-primary" : "bg-border"}`}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-foreground transition-transform ${annual ? "left-7" : "left-1"}`} />
            </button>
            <span className={`text-sm ${annual ? "text-foreground" : "text-muted-foreground"}`}>
              Annual
              <span className="ml-1 text-xs text-primary font-semibold">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingData.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`bg-card border rounded-xl p-8 relative transition-transform hover:scale-[1.02] ${
                tier.popular
                  ? "border-primary glow-brand scale-[1.02] md:scale-105"
                  : "border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold">
                  Popular
                </div>
              )}
              <h3 className="font-heading font-bold text-sm tracking-wider text-muted-foreground mb-2">{tier.name}</h3>
              <div className="mb-2">
                {tier.price !== null ? (
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={annual ? "annual" : "monthly"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="font-heading text-4xl font-bold text-foreground"
                    >
                      ${annual ? Math.round(tier.price * 0.8) : tier.price}
                    </motion.span>
                  </AnimatePresence>
                ) : (
                  <span className="font-heading text-4xl font-bold text-foreground">Custom</span>
                )}
                {tier.price !== null && <span className="text-muted-foreground text-sm">/mo</span>}
              </div>
              <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90 ${
                tier.popular
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground"
              }`}>
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
