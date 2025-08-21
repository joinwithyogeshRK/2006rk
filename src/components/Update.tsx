import React from 'react';
import { cn } from "@/lib/utils";

const Update = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-300 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-secondary-300 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo with animation */}
          <div className="w-full max-w-[700px] transform transition-all duration-700 hover:scale-[1.02]">
            <div className="relative">
              {/* Shadow effect for depth */}
              <div className="absolute inset-0 blur-md bg-white/50 rounded-xl transform translate-y-2 scale-[0.98] opacity-30"></div>
              
              {/* Main logo */}
              <img 
                src="/assets/images/og-1755006237352.webp"
                alt="Codepup.ai - AI eCommerce Engine"
                className={cn(
                  "w-full h-auto rounded-xl shadow-xl",
                  "object-cover object-center",
                  "transition-all duration-500"
                )}
                loading="eager"
              />
            </div>
          </div>
          
          {/* Tagline with animation */}
          <div className="mt-8 space-y-6 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-800 tracking-tight">
              The AI-Powered <span className="text-secondary-600">eCommerce Engine</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Transform your online business with intelligent automation, personalized shopping experiences, and data-driven insights.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:shadow-md">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white hover:bg-gray-50 text-primary-700 border border-primary-200 rounded-lg font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 active:translate-y-0">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Update;