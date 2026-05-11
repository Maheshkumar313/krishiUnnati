import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sprout } from 'lucide-react';

const TerraceGardeningSection = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <Sprout size={400} className="text-accent absolute -top-20 -right-20 rotate-12" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-[40px] overflow-hidden flex flex-col lg:flex-row items-center shadow-2xl">
          <div className="lg:w-1/2 h-[400px] lg:h-[600px] w-full">
            <img 
              src="/images/gardening.png" 
              alt="Terrace Gardening" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="lg:w-1/2 p-10 lg:p-20">
            <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 inline-block">Services</span>
            <h2 className="text-primary text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Grow Your Own <br />
              <span className="text-secondary italic">Organic Food</span>
            </h2>
            <p className="text-primary/70 text-lg mb-10 leading-relaxed">
              Transform your terrace or balcony into a lush organic garden. We provide end-to-end setup, high-quality materials, and expert guidance to help you start your gardening journey.
            </p>
            
            <div className="space-y-4 mb-12">
              {[
                "Custom Terrace Garden Setup",
                "High-quality Organic Seeds & Soil",
                "Expert Consultation & Guidance"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-primary font-bold">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <Link 
              href="/services" 
              className="inline-flex items-center gap-3 bg-primary text-beige px-10 py-5 rounded-full font-bold hover:bg-secondary transition-all shadow-xl group"
            >
              Get Started
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerraceGardeningSection;
