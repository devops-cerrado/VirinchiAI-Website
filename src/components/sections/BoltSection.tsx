import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Cloud, Lock, Search, MessageCircle, BarChart3, ArrowRight, Sparkles } from "lucide-react";

const boltFeatures = [
  { icon: Server, label: "Single platform - Open Source or Proprietary Models of your choice" },
  { icon: Cloud, label: "Flexible — Deployed locally or private cloud" },
  { icon: Lock, label: "Sovereignty — Layered decoupling of Infra and Model" },
  { icon: Search, label: "Search — Unified AI-powered search across all enterprise data" },
  { icon: MessageCircle, label: "Q&A — Natural language questions with instant cited answers" },
  { icon: BarChart3, label: "Analytics — Deep actionable insights with built-in charts" },
];

const conversations = [
  {
    q: "What were our Q3 revenue trends?",
    a: "Q3 revenue grew 23% YoY, driven by enterprise segment expansion and 3 new key accounts.",
  },
  {
    q: "Show top customers by deal size",
    a: "Top 5 accounts generated $4.2M combined. Acme Corp leads at $1.1M, up 40% QoQ.",
  },
  {
    q: "Which regions are underperforming?",
    a: "EMEA is trailing targets by 12%. Delayed onboarding in 3 accounts is the key factor.",
  },
];

type BotState = "idle" | "typing" | "answered";

const ChatAnimation = () => {
  const [convIndex, setConvIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showQuestion, setShowQuestion] = useState(false);
  const [botState, setBotState] = useState<BotState>("idle");

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const delay = (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms);
      timeouts.push(id);
    };

    const q = conversations[convIndex].q;

    setTypedText("");
    setShowQuestion(false);
    setBotState("idle");

    for (let i = 1; i <= q.length; i++) {
      delay(() => setTypedText(q.slice(0, i)), 400 + i * 45);
    }

    const typingDone = 400 + q.length * 45;
    delay(() => { setTypedText(""); setShowQuestion(true); }, typingDone + 350);
    delay(() => setBotState("typing"), typingDone + 650);
    delay(() => setBotState("answered"), typingDone + 2400);
    delay(() => setConvIndex((i) => (i + 1) % conversations.length), typingDone + 5400);

    return () => timeouts.forEach(clearTimeout);
  }, [convIndex]);

  const conv = conversations[convIndex];

  return (
    <div className="flex flex-col h-72">
      <div className="flex-1 space-y-5 overflow-hidden mb-4">

        {/* User message */}
        <AnimatePresence>
          {showQuestion && (
            <motion.div
              key={`q-${convIndex}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-end gap-1"
            >
              <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">You</span>
              <div className="bg-secondary rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                <p className="text-sm leading-relaxed text-foreground">{conv.q}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bot message — single container that stays mounted, content transitions inside */}
        <AnimatePresence>
          {botState !== "idle" && (
            <motion.div
              key={`bot-${convIndex}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-1"
            >
              <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Virinchi AI</span>
              <div className="max-w-[85%]">
                <AnimatePresence mode="wait">
                  {botState === "typing" && (
                    <motion.div
                      key="dots"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-3 inline-flex gap-1.5 items-center"
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-primary"
                          animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1, 0.8] }}
                          transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </motion.div>
                  )}
                  {botState === "answered" && (
                    <motion.div
                      key={`text-${convIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="rounded-2xl rounded-tl-sm px-4 py-3"
                    >
                      <p className="text-sm leading-relaxed text-foreground">{conv.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Input bar */}
      <div className="flex items-center gap-3 border border-border rounded-xl px-4 py-3 bg-card">
        <Sparkles className="h-4 w-4 text-muted-foreground shrink-0" />
        <span className="text-sm text-muted-foreground flex-1 min-h-[1.25rem]">
          {typedText ? (
            <>
              {typedText}
              <span className="opacity-70 animate-pulse">|</span>
            </>
          ) : (
            <span className="opacity-40">Ask anything about your data...</span>
          )}
        </span>
        <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center shrink-0">
          <ArrowRight className="h-4 w-4 text-primary-foreground" />
        </div>
      </div>
    </div>
  );
};

const BoltSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-center">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">VIRINCHI BOLT PLATFORM</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              Your Private GPT for Enterprise
            </h2>
          </div>
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

        {/* Animated chat UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 relative"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-primary/60" />
            <div className="w-3 h-3 rounded-full bg-muted" />
            <div className="w-3 h-3 rounded-full bg-muted" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Talk to your data.</h3>
          <ChatAnimation />
          <button className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all mt-6">
            Contact Sales <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BoltSection;
