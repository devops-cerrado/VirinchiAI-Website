import { motion } from "framer-motion";
import { Rocket, Globe } from "lucide-react";
import srikanthPhoto from "@/assets/srikanth_porika.png";

const founder = {
  name: "Srikanth Porika",
  designation: "Founder & CEO",
  linkedin: "https://www.linkedin.com/in/porikasrikanth",
  bio: "Award-winning business leader with 20+ years driving digital transformations at Kyndryl and IBM. Executive MBA from ISB, with specializations from Wharton (M&A) and LBS (Business Model Innovation). Founder & CEO of Cerrado Consulting Services. Visiting Professor at Mahindra University Hyderabad and NIT Warangal.",
};

const teamMembers = [
  {
    name: "Jyothirmai Khethavath",
    designation: "Vice President, Program Management",
    linkedin: "https://www.linkedin.com/in/jyothirmai-k-3850bb28",
    bio: "Technology leader with 14+ years in product ownership, software engineering, and enterprise program leadership. MBA from San Francisco Bay University with Executive Education in Product Management from ISB. Leads strategic AI and enterprise technology initiatives at Virinchi AI.",
  },
  {
    name: "Purushotham P",
    designation: "Product Architect",
    linkedin: "#",
    bio: "Product architect with 10+ years of experience in full-stack development, cloud-native architectures, and enterprise platform design. Drives end-to-end product engineering at Virinchi AI, translating complex business requirements into scalable, production-ready solutions.",
  },
];

const stats = [
  { label: "Founded", value: "2026" },
  { label: "Enterprise Clients", value: "50+" },
  { label: "Countries", value: "2" },
];

const About = () => (
  <section id="about" className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">ABOUT US</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
          Building the Future of Enterprise AI
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Virinchi AI is on a mission to democratise enterprise AI — making it sovereign, scalable, and accessible to organisations of every size.
        </p>
      </div>

      <div
        className="grid gap-4 mb-16"
        style={{ gridTemplateColumns: `repeat(auto-fit, minmax(160px, 1fr))` }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 text-center"
          >
            <div className="font-heading text-3xl font-bold text-foreground mb-1">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="bg-card border border-border rounded-xl p-8">
          <Rocket className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-heading font-bold text-xl text-foreground mb-3">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To empower enterprises with AI that they own and control — enabling digital workforces that scale with business needs while maintaining complete data sovereignty.
          </p>
        </div>
        <div className="bg-card border border-border rounded-xl p-8">
          <Globe className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-heading font-bold text-xl text-foreground mb-3">Global Presence</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Incorporated in Delaware, USA (Virinchi AI Inc) with R&amp;D and engineering operations in Hyderabad, India (Virinchi AI Pvt Ltd).
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2 text-muted-foreground">
              <span className="text-base leading-none mt-0.5">🇺🇸</span>
              <span>Delaware, USA — Parent entity</span>
            </div>
            <div className="flex items-start gap-2 text-muted-foreground">
              <span className="text-base leading-none mt-0.5">🇮🇳</span>
              <span>Gachibowli, Hyderabad, India — R&amp;D &amp; Engineering</span>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="text-center mb-10">
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">Meet the Team</h3>
        <p className="text-muted-foreground text-sm">The people building the future of enterprise AI</p>
      </div>

      {/* Founder — featured card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card border border-primary/30 rounded-2xl p-8 mb-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 max-w-2xl mx-auto"
      >
        <img
          src={srikanthPhoto}
          alt={founder.name}
          className="w-24 rounded-xl object-contain shrink-0"
        />
        <div className="text-center sm:text-left">
          <p className="font-heading text-xl font-bold text-foreground">{founder.name}</p>
          <p className="text-sm text-primary font-medium mt-0.5 inline-flex items-center gap-2">
            {founder.designation}
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </p>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{founder.bio}</p>
        </div>
      </motion.div>

      {/* Team members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {teamMembers.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card border border-border rounded-xl p-6 text-center flex flex-col items-center gap-3"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
              {member.name.charAt(0)}
            </div>
            <div>
              <p className="font-heading text-base font-bold text-foreground">{member.name}</p>
              <p className="text-sm text-primary font-medium mt-0.5 inline-flex items-center gap-2">
                {member.designation}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                )}
              </p>
              {member.bio && (
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{member.bio}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
