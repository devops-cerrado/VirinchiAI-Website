import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Zap, Shield, Users } from "lucide-react";

type FormData = Record<string, string>;

const sizeOptions = ["1–10", "11–50", "51–200", "201–500", "500+"];

const highlights = [
  { icon: Zap,    text: "Live platform walkthrough tailored to your industry" },
  { icon: Shield, text: "See data sovereignty & governance controls in action" },
  { icon: Users,  text: "Meet the team — no sales pressure" },
];

const RequestDemo = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (id: string, value: string) =>
    setForm((prev) => ({ ...prev, [id]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: wire up API submission
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="font-heading text-3xl font-bold text-foreground mb-3">Request Received</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Thank you! Our team will be in touch within one business day.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center pt-20">
      <div className="max-w-5xl mx-auto w-full px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">REQUEST DEMO</span>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              See Virinchi AI<br />in Action
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Get a personalised walkthrough of Bolt OS — built around your industry, your data, and your team's workflows.
            </p>
            <div className="space-y-4">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-6 space-y-4"
          >
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">Full Name <span className="text-primary">*</span></label>
                <input required type="text" placeholder="Jane Smith" value={form.name ?? ""}
                  onChange={(e) => set("name", e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">Work Email <span className="text-primary">*</span></label>
                <input required type="email" placeholder="jane@company.com" value={form.email ?? ""}
                  onChange={(e) => set("email", e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">Company <span className="text-primary">*</span></label>
                <input required type="text" placeholder="Your company name" value={form.company ?? ""}
                  onChange={(e) => set("company", e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">Your Role</label>
                <input type="text" placeholder="CTO, Head of Ops…" value={form.role ?? ""}
                  onChange={(e) => set("role", e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">Company Size</label>
                <select value={form.size ?? ""} onChange={(e) => set("size", e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 appearance-none"
                  style={{ colorScheme: "dark" }}>
                  <option value="" className="bg-background text-muted-foreground">Select…</option>
                  {sizeOptions.map((o) => <option key={o} value={o} className="bg-background text-foreground">{o} employees</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">Phone</label>
                <input type="tel" placeholder="+1 555 000 0000" value={form.phone ?? ""}
                  onChange={(e) => set("phone", e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-medium text-foreground mb-1">What are you looking to solve?</label>
              <textarea rows={3} placeholder="Tell us about your use case or challenge…" value={form.message ?? ""}
                onChange={(e) => set("message", e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
            </div>

            <button type="submit" disabled={loading}
              className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60">
              {loading ? "Submitting…" : "Request Demo"}
            </button>

            <p className="text-xs text-muted-foreground/50 text-center">
              We respect your privacy. Your information is never shared with third parties.
            </p>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default RequestDemo;
