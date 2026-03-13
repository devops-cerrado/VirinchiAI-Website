import { TrendingUp, Users, FileSearch, HeartHandshake, DollarSign, Scale } from "lucide-react";

export type Solution = {
  name: string;
  description: string;
  detail: string[];
  icon: any;
};

export const solutions: Solution[] = [
  {
    name: "Virinchi PA",
    description: "Predictive analytics for risk management. Predict, don't react.",
    detail: [
      "Our AI models, built on Virinchi AI, analyze years of historical data, control outcomes, and key risk indicators to forecast potential threats before they surface — giving you the foresight to act, not react.",
    ],
    icon: TrendingUp,
  },
  {
    name: "Virinchi HR",
    description: "Intelligent automation for the modern workforce lifecycle.",
    detail: [
      "Welcome to Virinchi HR. Powered by Agentic AI, our platform doesn't just host your JD — it orchestrates your entire recruitment strategy.",
      "Forget manual posting. Virinchi's custom agents autonomously crawl job portals, internal databases, and social networks to find the exact talent you need.",
    ],
    icon: Users,
  },
  {
    name: "Virinchi OCR",
    description: "High-precision data extraction for complex document digitization.",
    detail: [
      "The bridge between static documents and instant action. We don't just \"read\" text; we transform it into a seamless Document-to-Action workflow. Accuracy is our priority — every piece of extracted data is linked back to its exact coordinates on the original file.",
      "If the AI is ever unsure, it intelligently highlights the specific box for instant human verification — ensuring 100% data integrity every time.",
    ],
    icon: FileSearch,
  },
  {
    name: "Virinchi CSM",
    description: "AI-driven insights to power proactive customer success.",
    detail: [
      "The one-stop solution for every customer interaction. Whether it's Voice, Chat, or Email — we've unified the experience.",
      "Our GenAI and Agentic AI workflows make it effortless to build and deploy intelligent bots that don't just talk — they solve customer concerns.",
    ],
    icon: HeartHandshake,
  },
  {
    name: "Virinchi Finance",
    description: "Financial commentary and AI-driven insights from balance sheets.",
    detail: [
      "Financial commentary and AI-driven insights from balance sheets — turning raw financial data into actionable narratives for faster, smarter decision-making.",
    ],
    icon: DollarSign,
  },
  {
    name: "Virinchi Legal & Document Review",
    description: "Effortless management of contracts and MSAs. Track all contract documents in one place.",
    detail: [
      "An AI-powered legal technology solution designed to modernize the management of massive contract portfolios. It moves beyond traditional storage systems by leveraging Generative AI to turn static documents into interactive data.",
    ],
    icon: Scale,
  },
];

export const industries = [
  { name: "Manufacturing", comingSoon: false },
  { name: "GRC", comingSoon: false },
  { name: "Pharma", comingSoon: false },
  { name: "Banking, Financial Services & Insurance", comingSoon: false },
  { name: "Retail", comingSoon: false },
  { name: "SMEs", comingSoon: false },
  { name: "Public Sector", comingSoon: true },
];
