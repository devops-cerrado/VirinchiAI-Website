import Platform from "@/components/sections/Platform";
import BoltSection from "@/components/sections/BoltSection";
import AgentStudio from "@/components/sections/AgentStudio";
import DataIntegration from "@/components/sections/DataIntegration";
import Governance from "@/components/sections/Governance";

const PlatformPage = () => (
  <div className="pt-20">
    <Platform />
    <BoltSection />
    <AgentStudio />
    <DataIntegration />
    <Governance />
  </div>
);

export default PlatformPage;
