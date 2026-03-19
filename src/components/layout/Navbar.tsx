import { useState, useEffect, useCallback } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/virinchi_full_logo_bg_removed.png";
import { navLinks } from "@/constants/navLinks";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
      if (path.startsWith("/#")) {
        e.preventDefault();
        const hash = path.slice(1); // e.g. "#why-virinchi"
        if (location.pathname === "/") {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          history.replaceState(null, "", "/");
        } else {
          navigate("/");
          setTimeout(() => {
            document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
            history.replaceState(null, "", "/");
          }, 100);
        }
      }
    },
    [location.pathname, navigate]
  );

  const isHashActive = (path: string) => {
    if (!path.startsWith("/#")) return false;
    return location.pathname === "/" && location.hash === path.slice(1);
  };

  return (
    <>
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-[60] bg-primary/90 backdrop-blur-sm"
          >
            <div className="flex items-center justify-center gap-2 py-2 px-4 text-sm text-primary-foreground">
              <Zap className="w-4 h-4" />
              <span className="font-medium">Virinchi AI — Now Generally Available</span>
              <button
                onClick={() => setShowAnnouncement(false)}
                className="ml-4 p-0.5 rounded hover:bg-primary-foreground/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${showAnnouncement ? "top-[38px]" : "top-0"
          } ${scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
            <img src={logo} alt="Virinchi AI" className="h-14 w-auto" />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.path.startsWith("/#") ? (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isHashActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <NavLink to="/request-demo" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
              Request Demo
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) =>
                  link.path.startsWith("/#") ? (
                    <a
                      key={link.path}
                      href={link.path}
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileOpen(false);
                        const hash = link.path.slice(1);
                        setTimeout(() => {
                          document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
                          history.replaceState(null, "", "/");
                        }, 350);
                      }}
                      className="block px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => { setMobileOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-lg text-sm font-medium ${isActive
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  )
                )}
                <div className="pt-4 space-y-2 border-t border-border">
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="flex items-center gap-2 w-full text-left px-4 py-3 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  </button>
                  <NavLink to="/request-demo" onClick={() => setMobileOpen(false)} className="block w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg text-sm font-semibold text-center">
                    Request Demo
                  </NavLink>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
