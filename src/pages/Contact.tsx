
import { useState } from "react";
import { Mail, Linkedin, Github, Download, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 30) {
      newErrors.message = "Message must be at least 30 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const contactLinks = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "navaajayshankar333a@gmail.com",
      href: "mailto:navaajayshankar333a@gmail.com"
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/ajay-shankar-a-4b0b121a1/"
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/ajay333a"
    },
    {
      icon: <Download size={20} />,
      label: "Resume",
      value: "Download PDF",
      href: "/assets/ajay_resume.pdf"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="section-container">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl lg:text-5xl font-inter font-bold text-charcoal mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss data analytics opportunities, collaborations, or just connect!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-up">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-inter font-semibold text-charcoal mb-6">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal transition-colors ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal transition-colors ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal transition-colors resize-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Tell me about your project, opportunity, or just say hello... (minimum 30 characters)"
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message}</p>
                    )}
                    <p className="text-sm text-gray-500 ml-auto">
                      {formData.message.length}/30 minimum
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  🚀 Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-up" style={{animationDelay: "0.1s"}}>
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-inter font-semibold text-charcoal mb-6">
                  Connect With Me
                </h2>
                
                <div className="space-y-4">
                  {contactLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-teal hover:bg-teal-50 transition-all duration-200 group"
                    >
                      <div className="text-teal group-hover:scale-110 transition-transform">
                        {link.icon}
                      </div>
                      <div>
                        <div className="font-medium text-charcoal">{link.label}</div>
                        <div className="text-gray-600 text-sm">{link.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-teal-50 rounded-xl p-8">
                <h3 className="text-xl font-inter font-semibold text-charcoal mb-4">
                  Looking for collaboration?
                </h3>
                <p className="text-gray-700 mb-4">
                  I'm always interested in discussing data analytics projects, 
                  research opportunities, and potential collaborations.
                </p>
                <p className="text-gray-700">
                  <strong>Response time:</strong> I typically respond within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
