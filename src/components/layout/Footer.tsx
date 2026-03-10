import { NavLink } from "react-router-dom";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/virinchi_full_logo_bg_removed.png";

const footerLinks = {
  Platform: [
    { label: "Virinchi Bolt", path: "/platform" },
    { label: "Agent Studio", path: "/platform" },
    { label: "App Builder", path: "/platform" },
    { label: "Control Tower", path: "/platform" },
    { label: "Pricing", path: "/platform" },
  ],
  Solutions: [
    { label: "Virinchi PA", path: "/solutions" },
    { label: "Virinchi HR", path: "/solutions" },
    { label: "Virinchi OCR", path: "/solutions" },
    { label: "Virinchi CSM", path: "/solutions" },
    { label: "Virinchi Finance", path: "/solutions" },
  ],
  Company: [
    { label: "Why Virinchi AI", path: "/why-virinchi" },
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "/about" },
    { label: "Blog", path: "/about" },
    { label: "Contact", path: "/about" },
  ],
  Legal: [
    { label: "Privacy Policy", path: "#" },
    { label: "Terms of Service", path: "#" },
    { label: "Security", path: "#" },
    { label: "Cookie Policy", path: "#" },
  ],
};

const Footer = () => (
  <footer className="bg-background border-t border-border">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-sm">V</span>
            </div>
            <span className="font-heading font-bold text-lg text-foreground">Virinchi AI</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Enterprise AI. Sovereign. Scalable. Secure.
          </p>
        </div>

        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-4">{category}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© 2025 Virinchi AI. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
