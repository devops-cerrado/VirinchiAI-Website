import { NavLink } from "react-router-dom";
import { Linkedin, Youtube, MapPin } from "lucide-react";
import logo from "@/assets/virinchi_full_logo_bg_removed.png";

const footerLinks = {
  Platform: [
    { label: "Virinchi Bolt", path: "/platform" },
    { label: "Agent Studio", path: "/platform" },
    { label: "App Builder", path: "/platform" },
    { label: "Control Tower", path: "/platform" },
    // { label: "Pricing", path: "/platform" },
  ],
  Solutions: [
    { label: "Virinchi PA", path: "/#solutions" },
    { label: "Virinchi HR", path: "/#solutions" },
    { label: "Virinchi OCR", path: "/#solutions" },
    { label: "Virinchi CSM", path: "/#solutions" },
    { label: "Virinchi Finance", path: "/#solutions" },
  ],
  Company: [
    { label: "Why Virinchi AI", path: "/why-virinchi" },
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "/about" },
    { label: "Blog", path: "/about" },
    { label: "Contact", path: "/about" },
  ],
  // Legal: [
  //   { label: "Privacy Policy", path: "#" },
  //   { label: "Terms of Service", path: "#" },
  //   { label: "Security", path: "#" },
  //   { label: "Cookie Policy", path: "#" },
  // ],
};

const offices = [
  {
    entity: "Virinchi AI Inc",
    lines: ["Delaware, USA"],
    flag: "🇺🇸",
  },
  {
    entity: "Virinchi AI Pvt Ltd",
    lines: [
      "WellWork, 5th Floor",
      "MPM Corporate House",
      "Plot No. 44, Jayabheri Pine Valley",
      "Gachibowli, Hyderabad",
      "Telangana 500032, India",
    ],
    flag: "🇮🇳",
  },
];

const categoryCount = Object.keys(footerLinks).length; // brand col + N category cols + offices col

const Footer = () => (
  <footer className="bg-background border-t border-border">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div
        className="grid grid-cols-2 gap-8"
        style={{ gridTemplateColumns: `repeat(${1 + categoryCount + 1}, minmax(0, 1fr))` }}
      >
        {/* Brand */}
        <div>
          <img src={logo} alt="Virinchi AI" className="h-10 w-auto mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Engineering Intelligence
          </p>
        </div>

        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-4">{category}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  {link.path.startsWith("/#") ? (
                    <a
                      href={link.path}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <NavLink
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Offices */}
        <div>
          <h4 className="font-heading font-semibold text-sm text-foreground mb-4 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> Offices
          </h4>
          <div className="space-y-5">
            {offices.map((office) => (
              <div key={office.entity}>
                <p className="text-sm font-semibold text-foreground mb-1">
                  {office.flag} {office.entity}
                </p>
                {office.lines.map((line) => (
                  <p key={line} className="text-sm text-muted-foreground leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© 2025 Virinchi AI. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/company/virinchi-ai/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://x.com/VirinchiAi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            {/* X (formerly Twitter) */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L2.25 2.25h6.918l4.26 5.638L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
            </svg>
          </a>
          <a href="https://www.youtube.com/@VirinchiAI" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
