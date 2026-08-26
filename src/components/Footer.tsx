import { Link } from "react-router-dom";
import { Mail, Linkedin, Github, FileText, Heart, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/skills", label: "Skills" },
    { href: "/certifications", label: "Certifications" },
    { href: "/education", label: "Education" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-border/70 bg-card/40 dark:bg-card/20 backdrop-blur-md mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-rose-600 via-red-500 to-amber-500 flex items-center justify-center text-white font-bold text-base shadow-md">
                AS
              </span>
              <span className="font-bold text-xl tracking-tight text-foreground">
                Ajay Shankar A
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              Data Analyst passionate about transforming massive datasets into clear, actionable,
              and visually compelling narratives that empower strategic decision making.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border/80 bg-card/60 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border/80 bg-card/60 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg border border-border/80 bg-card/60 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={personalInfo.resumeUrl.startsWith("http") ? personalInfo.resumeUrl : `${import.meta.env.BASE_URL}${personalInfo.resumeUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                download="Ajay_Shankar_Resume.pdf"
                className="p-2.5 rounded-lg border border-border/80 bg-card/60 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
                aria-label="Resume"
              >
                <FileText size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground text-sm tracking-wider uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-semibold text-foreground text-sm tracking-wider uppercase mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={personalInfo.rBlogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-150 flex items-center gap-1"
                >
                  R Quarto Blog
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.pythonBlogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-150 flex items-center gap-1"
                >
                  Python Quarto Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Ajay Shankar A. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, Vite & Tailwind CSS <Sparkles size={14} className="text-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
