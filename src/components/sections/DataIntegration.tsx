import { motion } from "framer-motion";

const connectors = [
  "Amazon S3", "Amazon RDS", "Databricks", "Google Drive", "PostgreSQL",
  "Snowflake", "Salesforce", "SAP", "Oracle Database", "ServiceNow",
];

const DataIntegration = () => (
  <section className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">DATA INTEGRATION PLATFORM</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
          Integrate Your Data With Confidence
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 text-muted-foreground text-sm">
          <span>✓ Ring-fence your data sources with confidence</span>
          <span>✓ On-Prem Solution — No data leakage worry</span>
          <span>✓ 20+ data connectors ready to plug in</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
        {connectors.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/40 hover:glow-red transition-all cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <span className="text-primary font-bold text-xs">{name.charAt(0)}</span>
            </div>
            <span className="text-xs text-muted-foreground font-medium">{name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DataIntegration;
