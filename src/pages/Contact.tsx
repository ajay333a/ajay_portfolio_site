import { useState, useEffect } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Download,
  Send,
  Check,
  Copy,
  Clock,
  Sparkles,
  MessageSquare,
  FileText
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { personalInfo } from "@/data/portfolioData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    toast({
      title: "Email Copied!",
      description: `${personalInfo.email} copied to clipboard.`
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Your full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Please enter at least 20 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate sending action
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out, Ajay will get back to you shortly."
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      }, 600);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const contactChannels = [
    {
      icon: <Mail className="text-rose-500" size={20} />,
      label: "Email Address",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      actionLabel: "Send Email"
    },
    {
      icon: <Linkedin className="text-blue-500" size={20} />,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/ajay-shankar-a-4b0b121a1",
      href: personalInfo.linkedin,
      actionLabel: "Connect"
    },
    {
      icon: <Github className="text-slate-600 dark:text-slate-300" size={20} />,
      label: "GitHub Profile",
      value: "github.com/ajay333a",
      href: personalInfo.github,
      actionLabel: "View Code"
    },
    {
      icon: <FileText className="text-rose-500" size={20} />,
      label: "Resume (Curriculum Vitae)",
      value: "Ajay_Shankar_Resume.pdf",
      href: personalInfo.resumeUrl.startsWith("http") ? personalInfo.resumeUrl : `${import.meta.env.BASE_URL}${personalInfo.resumeUrl}`,
      actionLabel: "Download"
    }
  ];

  return (
    <div className="min-h-screen glow-mesh pb-20">
      <section className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="badge-glow mb-3">
            <MessageSquare size={14} />
            <span>Direct Communication</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Let's Start a Conversation
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Interested in data analytics collaboration, biostatistical consulting, or discussing opportunities? Reach out anytime.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 animate-fade-up">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Send a Direct Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Jenkins"
                  className={`w-full px-4 py-2.5 text-sm rounded-xl bg-card/70 border backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                    errors.name ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className={`w-full px-4 py-2.5 text-sm rounded-xl bg-card/70 border backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                    errors.email ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5"
                >
                  Subject / Topic
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Data Analytics Project / Opportunity"
                  className="w-full px-4 py-2.5 text-sm rounded-xl bg-card/70 border border-border backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, query, or opportunity..."
                  className={`w-full px-4 py-2.5 text-sm rounded-xl bg-card/70 border backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-colors ${
                    errors.message ? "border-red-500" : "border-border"
                  }`}
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.message && (
                    <p className="text-xs text-red-500">{errors.message}</p>
                  )}
                  <p className="text-[11px] text-muted-foreground ml-auto">
                    {formData.message.length}/20 characters min
                  </p>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center !py-3"
              >
                <Send size={16} />
                <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
              </button>
            </form>
          </div>

          {/* Social Channels & Info */}
          <div className="lg:col-span-5 space-y-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {/* Quick Email Copy Banner */}
            <div className="glass-panel p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                Quick Contact
              </span>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Copy Email Address
              </h3>
              <div className="flex items-center justify-between p-3 rounded-xl bg-muted/60 border border-border/80 text-xs sm:text-sm font-mono text-foreground">
                <span className="truncate mr-2">{personalInfo.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-card text-foreground hover:text-primary transition-colors flex-shrink-0"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? <Check size={16} className="text-rose-500" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Channels List */}
            <div className="glass-panel p-6 space-y-3">
              <h3 className="text-lg font-bold text-foreground mb-3">
                Connect Across Platforms
              </h3>
              {contactChannels.map((channel, idx) => (
                <a
                  key={idx}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-border/70 bg-card/50 hover:border-primary/50 hover:bg-accent/30 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-card border border-border group-hover:scale-105 transition-transform">
                      {channel.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground">
                        {channel.label}
                      </div>
                      <div className="text-xs text-muted-foreground truncate max-w-[180px] sm:max-w-[220px]">
                        {channel.value}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    {channel.actionLabel} &rarr;
                  </span>
                </a>
              ))}
            </div>

            {/* Response Time Guarantee */}
            <div className="glass-panel p-6 bg-gradient-to-tr from-rose-500/10 to-transparent border-rose-500/20">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm mb-1">
                <Clock size={16} />
                <span>Response Time</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                I typically respond to inquiries and emails within <strong>24 to 48 hours</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
