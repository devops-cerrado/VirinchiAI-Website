import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Cloud, HardDrive, MessageSquare, Database, FileText, CheckCircle2, Loader2, Folder, ChevronRight } from "lucide-react";

// ── Types & Data ──────────────────────────────────────────────

type Phase = "catalog" | "form" | "connecting" | "connected";

const PHASE_ORDER: Phase[] = ["catalog", "form", "connecting", "connected"];
const PHASE_DURATIONS: Record<Phase, number> = {
  catalog:    3200,
  form:       3600,
  connecting: 2400,
  connected:  3800,
};

const sources = [
  { id: "ms365",  name: "Microsoft 365",    desc: "SharePoint, OneDrive, Outlook, Teams", Icon: Cloud,         available: true,  color: "#0078d4" },
  { id: "odoo",   name: "Odoo CRM",          desc: "Contacts, leads, invoices, inventory", Icon: HardDrive,     available: false, color: "#714b67" },
  { id: "google", name: "Google Workspace",  desc: "Drive, Gmail, Calendar, Docs",         Icon: HardDrive,     available: false, color: "#4285f4" },
  { id: "slack",  name: "Slack",             desc: "Messages, files and channels",         Icon: MessageSquare, available: false, color: "#e01e5a" },
  { id: "db",     name: "Database",          desc: "PostgreSQL, MySQL, MongoDB",           Icon: Database,      available: false, color: "#4aaa80" },
];

const formFields = [
  { label: "Connection Name", value: "Microsoft 365 — Production", masked: false },
  { label: "Client ID",       value: "••••••••••••••••••••••••••", masked: true  },
  { label: "Client Secret",   value: "••••••••••••••••••••••••••", masked: true  },
  { label: "Tenant ID",       value: "••••••••••••••••••••••••••", masked: true  },
];

const connectingSteps = [
  "Verifying credentials",
  "Establishing connection",
  "Fetching organization data",
];

const spSites = [
  { name: "HR Team Site",      files: "4,231 files" },
  { name: "Engineering Docs",  files: "7,892 files" },
  { name: "Company Wiki",      files: "724 files"   },
];

const connectorPills = [
  "Amazon S3", "Google Drive", "PostgreSQL", "Snowflake",
  "Salesforce", "SAP", "Oracle", "ServiceNow", "Confluence",
];

// ── Phase Components ──────────────────────────────────────────

const CatalogPhase = ({ highlighted }: { highlighted: boolean }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
    className="space-y-2"
  >
    <p className="text-[10px] font-semibold uppercase tracking-wider mb-3" style={{ color: "#6b5f8a" }}>
      Select a data source to connect
    </p>
    {sources.map((src, i) => {
      const { Icon } = src;
      const isMs = src.id === "ms365";
      return (
        <motion.div
          key={src.id}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08 }}
          className="flex items-center gap-4 rounded-xl border px-4 py-3 transition-all"
          style={{
            borderColor: isMs && highlighted ? src.color + "80" : "#2a2240",
            background: isMs && highlighted ? src.color + "12" : "transparent",
            opacity: src.available ? 1 : 0.45,
          }}
        >
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg shrink-0"
            style={{ background: "#1c1828" }}
          >
            <Icon className="h-5 w-5" style={{ color: isMs ? src.color : "#6b5f8a" }} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium" style={{ color: isMs && highlighted ? "#f0edf8" : "#9b8fb8" }}>{src.name}</p>
            <p className="text-[11px] truncate" style={{ color: "#4a4060" }}>{src.desc}</p>
          </div>
          {src.available ? (
            <div
              className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-lg"
              style={{ color: highlighted && isMs ? "#f0edf8" : "#6b5f8a", background: highlighted && isMs ? src.color + "30" : "transparent" }}
            >
              Connect <ChevronRight className="h-3.5 w-3.5" />
            </div>
          ) : (
            <span className="text-[10px] px-2 py-1 rounded-md" style={{ color: "#4a4060", background: "#1c1828" }}>Soon</span>
          )}
        </motion.div>
      );
    })}
  </motion.div>
);

const FormPhase = ({ visibleFields }: { visibleFields: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
  >
    {/* Step indicator */}
    <div className="flex items-center gap-3 text-[11px] mb-5" style={{ color: "#4a4060" }}>
      <span style={{ color: "#4a4060" }}>1. Select Source</span>
      <ChevronRight className="h-3 w-3" />
      <span style={{ color: "#9b7fd4" }} className="font-semibold">2. Authenticate</span>
      <ChevronRight className="h-3 w-3" />
      <span style={{ color: "#4a4060" }}>3. Configure</span>
    </div>

    {/* MS365 identity */}
    <div className="flex items-center gap-3 rounded-xl border p-4 mb-4" style={{ borderColor: "#0078d430", background: "#0078d410" }}>
      <div className="h-10 w-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#1c1828" }}>
        <Cloud className="h-5 w-5" style={{ color: "#0078d4" }} />
      </div>
      <div>
        <p className="text-sm font-semibold" style={{ color: "#f0edf8" }}>Sign in to Microsoft 365</p>
        <p className="text-[11px]" style={{ color: "#6b5f8a" }}>BOLT OS needs permission to access your org's files</p>
      </div>
    </div>

    {/* Form fields */}
    <div className="space-y-3">
      {formFields.map((f, i) => (
        <AnimatePresence key={f.label}>
          {visibleFields > i && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#6b5f8a" }}>{f.label}</p>
              <div
                className="w-full rounded-lg border px-3 py-2 text-xs font-mono"
                style={{ borderColor: "#2a2240", background: "#1c1828", color: f.masked ? "#4a4060" : "#9b8fb8" }}
              >
                {f.value}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </div>
  </motion.div>
);

const ConnectingPhase = ({ step }: { step: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
    className="flex flex-col items-center justify-center py-8 gap-6"
  >
    {/* Pulsing MS365 icon */}
    <div className="relative">
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: "#0078d420" }}
        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />
      <div className="relative h-16 w-16 rounded-full flex items-center justify-center" style={{ background: "#0078d420", border: "2px solid #0078d450" }}>
        <Cloud className="h-8 w-8" style={{ color: "#0078d4" }} />
      </div>
    </div>

    <div className="space-y-3 w-full max-w-xs">
      {connectingSteps.map((s, i) => {
        const isDone   = step > i + 1;
        const isActive = step === i + 1;
        return (
          <motion.div
            key={s}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: step > i ? 1 : 0.25, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="h-5 w-5 shrink-0 flex items-center justify-center">
              {isDone ? (
                <CheckCircle2 className="h-4 w-4" style={{ color: "#4aaa80" }} />
              ) : isActive ? (
                <Loader2 className="h-4 w-4 animate-spin" style={{ color: "#9b7fd4" }} />
              ) : (
                <div className="h-4 w-4 rounded-full border" style={{ borderColor: "#2a2240" }} />
              )}
            </div>
            <span className="text-sm" style={{ color: isDone ? "#4aaa80" : isActive ? "#f0edf8" : "#3a3050" }}>{s}</span>
          </motion.div>
        );
      })}
    </div>
  </motion.div>
);

const ConnectedPhase = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
  >
    {/* Success banner */}
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-3 rounded-xl border p-4 mb-4"
      style={{ borderColor: "#4aaa8040", background: "#4aaa8015" }}
    >
      <CheckCircle2 className="h-5 w-5 shrink-0" style={{ color: "#4aaa80" }} />
      <div>
        <p className="text-sm font-semibold" style={{ color: "#f0edf8" }}>
          Connected — Microsoft 365
        </p>
        <p className="text-[11px]" style={{ color: "#6b5f8a" }}>
          Found 3 SharePoint sites · 12,847 files · OneDrive active
        </p>
      </div>
      <div className="ml-auto flex items-center gap-1.5">
        <motion.div
          className="w-2 h-2 rounded-full"
          style={{ background: "#4aaa80" }}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <span className="text-[10px] font-semibold" style={{ color: "#4aaa80" }}>Active</span>
      </div>
    </motion.div>

    {/* SharePoint sites */}
    <p className="text-[10px] font-semibold uppercase tracking-wider mb-2" style={{ color: "#4a4060" }}>SharePoint Sites</p>
    <div className="space-y-2 mb-3">
      {spSites.map((site, i) => (
        <motion.div
          key={site.name}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + i * 0.12 }}
          className="flex items-center justify-between rounded-lg px-3 py-2.5"
          style={{ background: "#1c1828", border: "1px solid #2a2240" }}
        >
          <div className="flex items-center gap-2.5">
            <Folder className="h-4 w-4" style={{ color: "#0078d4" }} />
            <span className="text-xs font-medium" style={{ color: "#9b8fb8" }}>{site.name}</span>
          </div>
          <span className="text-[10px]" style={{ color: "#4a4060" }}>{site.files}</span>
        </motion.div>
      ))}
    </div>

    {/* OneDrive row */}
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
      className="flex items-center justify-between rounded-lg px-3 py-2.5"
      style={{ background: "#1c1828", border: "1px solid #2a2240" }}
    >
      <div className="flex items-center gap-2.5">
        <HardDrive className="h-4 w-4" style={{ color: "#0078d4" }} />
        <span className="text-xs font-medium" style={{ color: "#9b8fb8" }}>OneDrive</span>
      </div>
      <span className="text-[10px]" style={{ color: "#4a4060" }}>~3,500 files</span>
    </motion.div>
  </motion.div>
);

// ── Orchestrator ──────────────────────────────────────────────

const DataSourceAnimation = () => {
  const [phase, setPhase]         = useState<Phase>("catalog");
  const [ms365Highlight, setMs365Highlight] = useState(false);
  const [visibleFields, setVisibleFields]   = useState(0);
  const [connectStep, setConnectStep]       = useState(0);

  useEffect(() => {
    setMs365Highlight(false);
    setVisibleFields(0);
    setConnectStep(0);

    const ts: ReturnType<typeof setTimeout>[] = [];
    const at = (fn: () => void, ms: number) => { const id = setTimeout(fn, ms); ts.push(id); };

    if (phase === "catalog") {
      at(() => setMs365Highlight(true), 1200);
    }
    if (phase === "form") {
      formFields.forEach((_, i) => at(() => setVisibleFields(i + 1), 500 + i * 600));
    }
    if (phase === "connecting") {
      connectingSteps.forEach((_, i) => at(() => setConnectStep(i + 1), 350 + i * 620));
    }

    const next = PHASE_ORDER[(PHASE_ORDER.indexOf(phase) + 1) % PHASE_ORDER.length];
    at(() => setPhase(next), PHASE_DURATIONS[phase]);

    return () => ts.forEach(clearTimeout);
  }, [phase]);

  const phaseLabel: Record<Phase, string> = {
    catalog:    "Add Connection",
    form:       "Authenticate",
    connecting: "Connecting…",
    connected:  "Connected ✓",
  };

  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: "#0d0b14", border: "1px solid #2a2240" }}>
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ background: "#13101e", borderColor: "#2a2240" }}>
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <div className="flex items-center gap-2 ml-3">
          <FileText className="h-3.5 w-3.5" style={{ color: "#6b5f8a" }} />
          <span className="text-xs font-medium" style={{ color: "#6b5f8a" }}>Data Sources — BOLT OS</span>
        </div>
        <div className="ml-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={phase}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.2 }}
              className="px-3 py-1 rounded-md text-xs font-semibold text-white"
              style={{ background: phase === "connected" ? "linear-gradient(135deg, #1e6648, #134430)" : "linear-gradient(135deg, #9b7fd4, #6b4fa0)" }}
            >
              {phaseLabel[phase]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Content */}
      <div className="p-5" style={{ height: 380, overflow: "hidden" }}>
        <AnimatePresence mode="wait">
          {phase === "catalog"    && <CatalogPhase    key="catalog"    highlighted={ms365Highlight} />}
          {phase === "form"       && <FormPhase       key="form"       visibleFields={visibleFields} />}
          {phase === "connecting" && <ConnectingPhase key="connecting" step={connectStep} />}
          {phase === "connected"  && <ConnectedPhase  key="connected" />}
        </AnimatePresence>
      </div>
    </div>
  );
};

// ── Section ───────────────────────────────────────────────────

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

      <div className="max-w-2xl mx-auto mb-8">
        <DataSourceAnimation />
      </div>

      {/* Connector pills */}
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
        {connectorPills.map((c) => (
          <span key={c} className="text-xs bg-secondary text-muted-foreground px-3 py-1.5 rounded-full border border-border">
            {c}
          </span>
        ))}
        <span className="text-xs bg-secondary text-primary px-3 py-1.5 rounded-full border border-primary/30 font-medium">
          +11 more
        </span>
      </div>
    </div>
  </section>
);

export default DataIntegration;
