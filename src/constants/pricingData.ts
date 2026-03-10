export type PricingTier = {
  name: string;
  price: number | null;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

export const pricingData: PricingTier[] = [
  {
    name: "STARTER",
    price: 299,
    description: "For teams getting started",
    features: [
      "Up to 5 agents",
      "5 data connectors",
      "10K queries/month",
      "Enterprise Search",
      "Basic monitoring",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "PROFESSIONAL",
    price: 799,
    description: "For growing organizations",
    features: [
      "Unlimited agents",
      "20+ data connectors",
      "100K queries/month",
      "Build Studio + Marketplace",
      "Smart Intelligence Control Tower",
      "Fine-tuning engine",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "ENTERPRISE",
    price: null,
    description: "Custom requirements",
    features: [
      "Everything in Professional",
      "On-premise / hybrid deploy",
      "Unlimited queries",
      "Custom LLM Integration",
      "SSO, SCIM & compliance",
      "Dedicated success manager",
      "99.9% SLA",
    ],
    cta: "Contact Sales",
  },
];
