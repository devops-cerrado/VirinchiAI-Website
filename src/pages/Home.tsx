import Hero from "@/components/sections/Hero";
import PreBuiltAgents from "@/components/sections/PreBuiltAgents";
import Platform from "@/components/sections/Platform";
import BoltSection from "@/components/sections/BoltSection";
import AgentStudio from "@/components/sections/AgentStudio";
import DataIntegration from "@/components/sections/DataIntegration";
import Governance from "@/components/sections/Governance";
import Solutions from "@/components/sections/Solutions";
import Pricing from "@/components/sections/Pricing";
import CTABanner from "@/components/sections/CTABanner";

const Home = () => (
  <>
    <Hero />
    <PreBuiltAgents />
    <Platform />
    <BoltSection />
    <AgentStudio />
    <DataIntegration />
    <Governance />
    <Solutions />
    <Pricing />
    <CTABanner />
  </>
);

export default Home;
