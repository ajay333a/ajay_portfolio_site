
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-container pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <h1 className="text-5xl lg:text-6xl font-inter font-bold text-charcoal mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-teal">Ajay Shankar A</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Data Analyst passionate about insights, impact & storytelling
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-lg">
              Google-certified analyst with a Master's in Forest Biology, 
              transforming raw data into stories and strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="btn-primary inline-flex items-center gap-2"
              >
                🔍 View My Projects
                <ArrowRight size={20} />
              </Link>
              <a
                href="/assets/ajay_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="relative">
              <img
                src="https://ajay333a.quarto.pub/ajay-shankar-a/images/profile_image_index.jpg"
                alt="Ajay Shankar A"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-teal-300 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-inter font-bold text-charcoal mb-4">
              Quick Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A snapshot of my expertise and achievements in data analytics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover text-center">
              <div className="text-4xl font-bold text-teal mb-2">5M+</div>
              <div className="text-lg font-semibold text-charcoal mb-2">Records Analyzed</div>
              <div className="text-gray-600">In bike share analysis project</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg card-hover text-center">
              <div className="text-4xl font-bold text-teal mb-2">1.2L</div>
              <div className="text-lg font-semibold text-charcoal mb-2">Person-Days Delivered</div>
              <div className="text-gray-600">Through MGNREGA program management</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg card-hover text-center">
              <div className="text-4xl font-bold text-teal mb-2">500+</div>
              <div className="text-lg font-semibold text-charcoal mb-2">Artisans Surveyed</div>
              <div className="text-gray-600">For policy decision analytics</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
