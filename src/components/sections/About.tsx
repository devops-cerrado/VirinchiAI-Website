import { motion } from "framer-motion";
import { Rocket, Globe } from "lucide-react";

const stats = [
  { label: "Founded", value: "2020" },
  { label: "Employees", value: "200+" },
  { label: "Enterprise Clients", value: "50+" },
  { label: "Countries", value: "12" },
];

const About = () => (
  <section id="about" className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">ABOUT US</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
          Building the Future of Enterprise AI
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Virinchi AI is on a mission to democratise enterprise AI — making it sovereign, scalable, and accessible to organisations of every size.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 text-center"
          >
            <div className="font-heading text-3xl font-bold text-foreground mb-1">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card border border-border rounded-xl p-8">
          <Rocket className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-heading font-bold text-xl text-foreground mb-3">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To empower enterprises with AI that they own and control — enabling digital workforces that scale with business needs while maintaining complete data sovereignty.
          </p>
        </div>
        <div className="bg-card border border-border rounded-xl p-8">
          <Globe className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-heading font-bold text-xl text-foreground mb-3">Global Presence</h3>
          <p className="text-muted-foreground leading-relaxed">
            Headquartered in the US with offices across Europe and Asia-Pacific, we serve enterprises in banking, insurance, healthcare, and manufacturing worldwide.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
