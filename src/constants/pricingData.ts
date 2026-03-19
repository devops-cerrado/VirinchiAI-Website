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
    name: "PROFESSIONAL",
    price: null,
    description: "For growing organizations",
    features: [
      "Unlimited agents",
      "20+ data connectors",
      "100K queries/month",
      "Build Studio + Marketplace",
      "Smart Intelligence Control Tower",
      "Fine-tuning engine",
    ],
    cta: "Contact Sales",
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
