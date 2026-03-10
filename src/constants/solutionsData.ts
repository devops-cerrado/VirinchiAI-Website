import { TrendingUp, Users, FileSearch, HeartHandshake, DollarSign, Scale } from "lucide-react";

export type Solution = {
  name: string;
  description: string;
  icon: any;
};

export const solutions: Solution[] = [
  { name: "Virinchi PA", description: "Predictive analytics for risk management. Predict, don't react.", icon: TrendingUp },
  { name: "Virinchi HR", description: "Intelligent automation for the modern workforce lifecycle.", icon: Users },
  { name: "Virinchi OCR", description: "High-precision data extraction for complex document digitization.", icon: FileSearch },
  { name: "Virinchi CSM", description: "AI-driven insights to power proactive customer success.", icon: HeartHandshake },
  { name: "Virinchi Finance", description: "Financial commentary and AI-driven insights from balance sheets.", icon: DollarSign },
  { name: "Virinchi Legal & Document Review", description: "Effortless management of contracts and MSAs. Track all contract documents in one place.", icon: Scale },
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
