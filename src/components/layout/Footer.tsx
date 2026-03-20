import { NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";
import logo from "@/assets/virinchi_full_logo_bg_removed.png";
import flagUs from "@/assets/flag-us.svg";
import flagIn from "@/assets/flag-in.svg";

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
    { label: "Why Virinchi AI", path: "/#why-virinchi" },
    { label: "About Us", path: "/#about" },
    // { label: "Careers", path: "/about" },
    // { label: "Blog", path: "/about" },
    // { label: "Contact", path: "/about" },
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
    flag: flagUs,
    flagAlt: "US",
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
    flag: flagIn,
    flagAlt: "India",
  },
];


const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
  e.preventDefault();
  const id = path.replace("/#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", "/");
};

const Footer = () => (
  <footer className="bg-background border-t border-border">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
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
                      onClick={(e) => scrollTo(e, link.path)}
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
                <p className="text-sm font-semibold text-foreground mb-1 flex items-center gap-1.5">
                  <img src={office.flag} alt={office.flagAlt} className="w-5 h-auto shrink-0" />
                  {office.entity}
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
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Virinchi AI. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/company/virinchi-ai/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://x.com/VirinchiAi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            {/* X (formerly Twitter) */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L2.25 2.25h6.918l4.26 5.638L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
            </svg>
          </a>
          <a href="https://www.youtube.com/@VirinchiAI" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
