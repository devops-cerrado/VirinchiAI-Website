import { Users, FileText, CreditCard, Shield, Bell, RotateCcw, Building, PiggyBank, Heart, FileCheck, UserCheck, ClipboardList, Megaphone, BarChart3, Target, Mail, Headphones, MessageSquare, Bot, Search, UserPlus, BriefcaseBusiness, Calendar, Award } from "lucide-react";

export type Agent = {
  name: string;
  description: string;
  icon: any;
};

export type DomainAgents = {
  [key: string]: Agent[];
};

export const domains = ["BANKING", "INSURANCE", "HR", "MARKETING", "SALES", "SUPPORT"] as const;

export const agentData: DomainAgents = {
  BANKING: [
    { name: "Customer Onboarding", description: "Streamlined digital onboarding for new banking customers", icon: Users },
    { name: "AI Loan Servicing", description: "Automated loan account management and payment handling", icon: CreditCard },
    { name: "AI Loan Origination", description: "End-to-end loan application processing and decisioning", icon: FileText },
    { name: "KYC Processing", description: "Identity verification and compliance documentation", icon: Shield },
    { name: "Regulatory Monitoring", description: "Real-time regulatory change tracking and alerts", icon: Bell },
    { name: "Refund Processing", description: "Automated dispute resolution and refund workflows", icon: RotateCcw },
    { name: "Teller Assistance", description: "AI-powered support for branch teller operations", icon: Building },
    { name: "Retirement Planning", description: "Personalized retirement strategy and planning", icon: PiggyBank },
  ],
  INSURANCE: [
    { name: "Claims Processing", description: "Automated end-to-end claims assessment and settlement", icon: FileCheck },
    { name: "Policy Underwriting", description: "AI-assisted risk evaluation and policy pricing", icon: Shield },
    { name: "Customer Retention", description: "Proactive churn prediction and retention campaigns", icon: Heart },
    { name: "Fraud Detection", description: "Real-time anomaly detection across claims data", icon: Search },
    { name: "Compliance Audit", description: "Automated regulatory compliance tracking and reporting", icon: ClipboardList },
  ],
  HR: [
    { name: "Talent Acquisition", description: "AI-powered candidate sourcing and screening", icon: UserPlus },
    { name: "Employee Onboarding", description: "Automated onboarding workflows and document collection", icon: Users },
    { name: "Performance Review", description: "Data-driven performance evaluation and feedback", icon: Award },
    { name: "Benefits Administration", description: "Intelligent benefits enrollment and management", icon: BriefcaseBusiness },
    { name: "Leave Management", description: "Automated leave tracking and approval workflows", icon: Calendar },
  ],
  MARKETING: [
    { name: "Content Generation", description: "AI-driven content creation across channels", icon: Megaphone },
    { name: "Campaign Analytics", description: "Real-time campaign performance analysis and optimization", icon: BarChart3 },
    { name: "Lead Scoring", description: "Predictive lead qualification and prioritization", icon: Target },
    { name: "Email Automation", description: "Personalized email sequences at scale", icon: Mail },
  ],
  SALES: [
    { name: "Deal Intelligence", description: "AI-powered deal insights and win probability", icon: Target },
    { name: "Proposal Generator", description: "Automated proposal creation from templates", icon: FileText },
    { name: "Pipeline Forecasting", description: "Predictive revenue forecasting and pipeline analysis", icon: BarChart3 },
    { name: "CRM Enrichment", description: "Automatic contact and account data enrichment", icon: Users },
  ],
  SUPPORT: [
    { name: "Ticket Routing", description: "Intelligent ticket classification and assignment", icon: Headphones },
    { name: "Knowledge Assistant", description: "AI-powered knowledge base search and suggestions", icon: Search },
    { name: "Chatbot Builder", description: "No-code conversational AI for customer support", icon: MessageSquare },
    { name: "Sentiment Analysis", description: "Real-time customer sentiment tracking", icon: Bot },
  ],
};
