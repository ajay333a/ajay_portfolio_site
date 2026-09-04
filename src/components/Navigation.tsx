import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Sparkles, FileText } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { personalInfo } from "@/data/portfolioData";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/skills", label: "Skills" },
    { href: "/certifications", label: "Certifications" },
    { href: "/education", label: "Education" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 dark:bg-background/85 backdrop-blur-xl border-b border-border/80 shadow-sm"
          : "bg-background/60 dark:bg-background/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo / Name */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Ajay Shankar Homepage"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 via-red-500 to-amber-500 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform duration-200">
              AS
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
                Ajay Shankar A
              </span>
              <span className="text-[11px] font-medium text-muted-foreground hidden sm:block">
                Data Analyst & Storyteller
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-card/60 dark:bg-card/40 border border-border/60 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    active
                      ? "text-primary dark:text-primary-foreground bg-accent/80 dark:bg-primary shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Resume Button */}
            <a
              href={personalInfo.resumeUrl.startsWith("http") ? personalInfo.resumeUrl : `${import.meta.env.BASE_URL}${personalInfo.resumeUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              download="Ajay_Shankar_Resume.pdf"
              className="btn-secondary !py-2 !px-3.5 !text-xs !rounded-lg"
              aria-label="Download Resume"
            >
              <FileText size={14} className="text-primary" />
              <span>Resume</span>
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border/80 bg-card/60 text-muted-foreground hover:text-foreground hover:bg-accent/40 transition-all duration-200 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? (
                <Moon size={18} className="text-slate-700" />
              ) : (
                <Sun size={18} className="text-amber-400" />
              )}
            </button>
          </div>

          {/* Mobile Actions & Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border/80 bg-card/60 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? (
                <Moon size={18} className="text-slate-700" />
              ) : (
                <Sun size={18} className="text-amber-400" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-border/80 bg-card/60 text-foreground hover:bg-accent/40 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden pb-6 pt-2 animate-fade-in border-t border-border/60">
            <div className="grid grid-cols-2 gap-2 mb-4 pt-2">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      active
                        ? "bg-accent text-accent-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <a
              href={personalInfo.resumeUrl.startsWith("http") ? personalInfo.resumeUrl : `${import.meta.env.BASE_URL}${personalInfo.resumeUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              download="Ajay_Shankar_Resume.pdf"
              className="w-full btn-primary !py-2.5 text-xs flex items-center justify-center gap-2"
            >
              <FileText size={15} />
              View Resume (PDF)
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
