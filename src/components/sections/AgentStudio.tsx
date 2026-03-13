import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FileText, Database, Cloud, CheckCircle2 } from "lucide-react";

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

const STEP_DURATION = 3500;

// ── Developer: Code panels ────────────────────────────────────

interface CL { text: string; color: string; bg?: string }

const devLines: CL[][] = [
  [
    { text: "# Select agent template", color: "#4a4060" },
    { text: "", color: "#4a4060" },
    { text: "agent:", color: "#9b7fd4" },
    { text: "  template: customer_support", color: "#4bbfbf", bg: "#4bbfbf15" },
    { text: "           hr_assistant", color: "#3a3050" },
    { text: "           finance_analyst", color: "#3a3050" },
    { text: "           custom_workflow", color: "#3a3050" },
    { text: "", color: "#4a4060" },
    { text: '  description: "Handle Tier-1 support"', color: "#4aaa80" },
  ],
  [
    { text: "# Configure LLM", color: "#4a4060" },
    { text: "", color: "#4a4060" },
    { text: "llm:", color: "#9b7fd4" },
    { text: '  provider:    "anthropic"', color: "#4aaa80" },
    { text: '  model:       "claude-3-5-sonnet"', color: "#4aaa80" },
    { text: "  temperature: 0.7", color: "#e09060" },
    { text: "  max_tokens:  2048", color: "#e09060" },
    { text: "", color: "#4a4060" },
    { text: '  fallback: "gpt-4o"', color: "#4aaa80" },
  ],
  [
    { text: "# Data sources", color: "#4a4060" },
    { text: "", color: "#4a4060" },
    { text: "datasources:", color: "#9b7fd4" },
    { text: "  - name: postgres", color: "#4bbfbf" },
    { text: "    url:  ${DATABASE_URL}", color: "#4aaa80" },
    { text: "", color: "#4a4060" },
    { text: "  - name: confluence", color: "#4bbfbf" },
    { text: "    workspace: acme-corp", color: "#4aaa80" },
    { text: "", color: "#4a4060" },
    { text: "  - name: s3", color: "#4bbfbf" },
    { text: "    bucket: company-docs", color: "#4aaa80" },
  ],
  [
    { text: "$ virinchi deploy --env=production", color: "#f0edf8" },
    { text: "", color: "#4a4060" },
    { text: "✓  Dependencies resolved  (1.2s)", color: "#4aaa80" },
    { text: "✓  Image built            (8.4s)", color: "#4aaa80" },
    { text: "✓  47/47 tests passed", color: "#4aaa80" },
    { text: "✓  Deployed → prod.bolt.virinchi.ai", color: "#4aaa80" },
    { text: "", color: "#4a4060" },
    { text: "●  Monitoring active", color: "#4bbfbf" },
  ],
];

const DevPanel = ({ stepIdx, animKey }: { stepIdx: number; animKey: string }) => (
  <motion.div
    key={animKey}
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -6 }}
    transition={{ duration: 0.3 }}
    className="bg-[#0d0b14] rounded-xl p-5 font-mono text-xs leading-relaxed h-full"
  >
    <div className="flex items-center gap-1.5 mb-4">
      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      <span className="ml-2 text-[#3a3050] text-[10px]">agent.yaml</span>
    </div>
    {devLines[stepIdx].map((line, i) => (
      <motion.div
        key={`${animKey}-${i}`}
        initial={{ opacity: 0, x: -6 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.07, duration: 0.2 }}
        style={{
          color: line.color,
          backgroundColor: line.bg ?? "transparent",
          borderRadius: line.bg ? 4 : 0,
          paddingLeft: line.bg ? 6 : 0,
          paddingRight: line.bg ? 6 : 0,
        }}
        className="py-[3px] whitespace-pre"
      >
        {line.text}
      </motion.div>
    ))}
  </motion.div>
);

// ── Business User: Visual panels ──────────────────────────────

const templates = [
  { label: "Customer Support", emoji: "🤝", active: true },
  { label: "HR Assistant", emoji: "👥", active: false },
  { label: "Finance Agent", emoji: "💰", active: false },
  { label: "+ Custom", emoji: "⚡", active: false },
];

const models = [
  { name: "Claude 3.5 Sonnet", vendor: "Anthropic", selected: true },
  { name: "GPT-4o", vendor: "OpenAI", selected: false },
  { name: "Gemini Pro", vendor: "Google", selected: false },
  { name: "Llama 3", vendor: "Meta", selected: false },
];

const dataSources = [
  { icon: FileText, name: "Confluence", color: "#6b8fd4" },
  { icon: Database, name: "Postgres", color: "#4aaa80" },
  { icon: Cloud, name: "S3", color: "#e09060" },
];

const metrics = [
  { label: "Requests", value: "1,247", sub: "last 24h" },
  { label: "Avg Latency", value: "1.2s", sub: "p50" },
  { label: "Success", value: "94.3%", sub: "uptime" },
];

const BizStep1 = ({ animKey }: { animKey: string }) => (
  <motion.div key={animKey} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3 }} className="p-2">
    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">Select a template</p>
    <div className="grid grid-cols-2 gap-3">
      {templates.map((t, i) => (
        <motion.div
          key={t.label}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className={`flex items-center gap-2.5 rounded-xl border p-3 cursor-pointer transition-colors ${t.active
            ? "border-primary bg-primary/10 shadow-sm"
            : "border-border bg-card"
            }`}
        >
          <span className="text-lg">{t.emoji}</span>
          <span className={`text-xs font-medium ${t.active ? "text-primary" : "text-muted-foreground"}`}>{t.label}</span>
          {t.active && <CheckCircle2 className="w-3.5 h-3.5 text-primary ml-auto shrink-0" />}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const BizStep2 = ({ animKey }: { animKey: string }) => (
  <motion.div key={animKey} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3 }} className="p-2">
    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">Choose your model</p>
    <div className="space-y-2">
      {models.map((m, i) => (
        <motion.div
          key={m.name}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${m.selected ? "border-primary bg-primary/10" : "border-border bg-card"
            }`}
        >
          <div className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center shrink-0 ${m.selected ? "border-primary" : "border-border"
            }`}>
            {m.selected && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
          </div>
          <div>
            <p className={`text-xs font-semibold ${m.selected ? "text-primary" : "text-foreground"}`}>{m.name}</p>
            <p className="text-[10px] text-muted-foreground">{m.vendor}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const BizStep3 = ({ animKey }: { animKey: string }) => (
  <motion.div key={animKey} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3 }} className="p-2 flex items-center justify-center h-full">
    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground absolute top-2 left-2">Connect data sources</p>
    <div className="flex items-center gap-4 mt-4">
      {/* Source nodes */}
      <div className="space-y-4">
        {dataSources.map((src, i) => {
          const Icon = src.icon;
          return (
            <motion.div
              key={src.name}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2"
            >
              <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: src.color }} />
              <span className="text-xs font-medium text-foreground">{src.name}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Animated lines */}
      <div className="flex flex-col gap-[22px]">
        {dataSources.map((src, i) => (
          <motion.div
            key={src.name}
            className="h-px rounded-full"
            style={{ backgroundColor: src.color, width: 48, transformOrigin: "left center" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.35 + i * 0.15, duration: 0.35 }}
          />
        ))}
      </div>

      {/* Agent node */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.85, duration: 0.3 }}
        className="bg-primary/10 border-2 border-primary/40 rounded-2xl px-6 py-5 text-center"
      >
        <div className="text-2xl mb-1">🤖</div>
        <div className="text-xs font-semibold text-primary">Agent</div>
      </motion.div>
    </div>
  </motion.div>
);

const BizStep4 = ({ animKey }: { animKey: string }) => (
  <motion.div key={animKey} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3 }} className="p-2">
    <div className="flex items-center gap-2 mb-4">
      <motion.div className="w-2 h-2 rounded-full bg-green-500" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
      <span className="text-xs font-semibold text-green-600 dark:text-green-400">Agent Active — Production</span>
    </div>
    <div className="grid grid-cols-3 gap-3 mb-4">
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.12 }}
          className="bg-card border border-border rounded-xl p-3 text-center"
        >
          <p className="text-base font-bold text-foreground">{m.value}</p>
          <p className="text-[10px] text-muted-foreground">{m.label}</p>
          <p className="text-[9px] text-muted-foreground/60">{m.sub}</p>
        </motion.div>
      ))}
    </div>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="bg-card border border-border rounded-xl p-3">
      <div className="flex justify-between text-[10px] text-muted-foreground mb-1.5">
        <span>Success rate</span><span>94.3%</span>
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <motion.div className="h-full bg-primary rounded-full" initial={{ width: 0 }} animate={{ width: "94.3%" }} transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }} />
      </div>
    </motion.div>
  </motion.div>
);

const bizPanels = [BizStep1, BizStep2, BizStep3, BizStep4];

// ── Main Section ──────────────────────────────────────────────

const AgentStudio = () => {
  const [userType, setUserType] = useState<"business" | "developer">("business");
  const [activeStep, setActiveStep] = useState(0);

  // Auto-advance steps
  useEffect(() => {
    const id = setInterval(() => {
      setActiveStep((s) => (s + 1) % steps.length);
    }, STEP_DURATION);
    return () => clearInterval(id);
  }, [userType]);

  // Reset to step 0 on tab change
  const handleTabChange = (tab: "developer" | "business") => {
    setUserType(tab);
    setActiveStep(0);
  };

  const animKey = `${userType}-${activeStep}`;
  const BizPanel = bizPanels[activeStep];

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

        {/* Tab Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-card border border-border rounded-lg p-1 flex">
            {(["developer", "business"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-colors ${userType === tab
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {tab === "developer" ? "Developer / Engineering" : "Business User"}
              </button>
            ))}
          </div>
        </div>

        {/* Steps + Animation */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          {/* Step indicators */}
          <div className="grid grid-cols-4 border-b border-border">
            {steps.map((s, i) => (
              <button
                key={s.step}
                onClick={() => setActiveStep(i)}
                className={`relative px-4 py-5 text-left transition-colors border-r last:border-r-0 border-border ${activeStep === i ? "bg-primary/5" : "hover:bg-secondary/50"
                  }`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${activeStep === i
                    ? "bg-primary text-primary-foreground"
                    : i < activeStep
                      ? "bg-primary/20 text-primary"
                      : "bg-secondary text-muted-foreground"
                    }`}>
                    {i < activeStep ? "✓" : s.step}
                  </div>
                  <span className={`text-xs font-medium leading-tight ${activeStep === i ? "text-foreground" : "text-muted-foreground"}`}>
                    {s.title}
                  </span>
                </div>
                {/* Progress bar */}
                {activeStep === i && (
                  <motion.div
                    key={animKey}
                    className="absolute bottom-0 left-0 h-0.5 bg-primary rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: STEP_DURATION / 1000, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Animation panel */}
          <div className="p-6 min-h-[280px] relative">
            <AnimatePresence mode="wait">
              {userType === "developer" ? (
                <DevPanel key={animKey} stepIdx={activeStep} animKey={animKey} />
              ) : (
                <BizPanel key={animKey} animKey={animKey} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentStudio;
