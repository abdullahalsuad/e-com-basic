import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-700 via-gray-900 to-indigo-950">
      {/* Animated Cool Gradient Background */}

      {/* Subtle grid texture */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Trust Badge (Glassmorphic) */}
          <div
            className="inline-flex items-center px-5 py-2.5 rounded-full 
                         bg-white/20 backdrop-blur-sm border border-white/30 
                         text-white text-sm md:text-base font-medium mb-8
                         hover:bg-white/30 transition-all duration-300"
          >
            <span className="w-2 h-2 bg-teal-300 rounded-full mr-3 animate-pulse"></span>
            Trusted by 10,000+ happy customers
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Amazing{" "}
            <span
              className="bg-gradient-to-r from-teal-200 via-cyan-100 to-blue-200
                            bg-clip-text text-transparent animate-pulse-slow"
            >
              Products
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore our curated collection of premium digital tools designed to
            enhance your workflow, creativity, and productivity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            {/* Primary Button - Cyan Glow */}
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-cyan-400 to-teal-400 
                         hover:from-cyan-300 hover:to-teal-300
                         text-lg px-8 py-6 rounded-xl shadow-lg shadow-cyan-500/30
                         hover:shadow-cyan-500/50 transform hover:scale-105
                         transition-all duration-200 font-medium flex items-center text-black"
            >
              <Link href="/products">
                Browse Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 pt-10 md:pt-16 border-t border-white/20">
            {[
              { number: "500+", label: "Products" },
              { number: "10K+", label: "Happy Customers" },
              { number: "99%", label: "Satisfaction" },
              { number: "24/7", label: "Support" },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div
                  className="text-3xl md:text-4xl font-bold text-white mb-1.5
                             opacity-0 animate-fadeInUp"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm md:text-base group-hover:text-cyan-100 transition-colors duration-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
