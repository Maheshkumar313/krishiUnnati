import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] lg:h-[90vh] w-full overflow-hidden flex items-center">
      {/* Background Image with Parallax-like effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[20s] hover:scale-100"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="text-accent text-xs font-body font-bold uppercase tracking-[0.4em]">
              Established Organic Tradition
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-heading text-white mb-8 leading-[1.1]">
            The Purest <br />
            <span className="text-accent italic">Harvest of Nature</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-beige/80 mb-12 leading-relaxed font-body max-w-xl">
            Experience the soulful essence of traditional Indian farming. Hand-nurtured, chemical-free, and delivered with love from our farms to your home.
          </p>
          
          <div className="flex flex-wrap gap-6 items-center">
            <Link 
              href="/shop" 
              className="px-10 py-5 bg-accent text-white font-body font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white hover:text-primary transition-all shadow-premium"
            >
              Explore Collection
            </Link>
            <Link 
              href="/our-farm" 
              className="group flex items-center gap-3 text-white font-body font-bold text-sm uppercase tracking-widest hover:text-accent transition-all"
            >
              Our Farm Story
              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-accent transition-all">
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative side element */}
      <div className="absolute bottom-12 right-12 hidden xl:block animate-fade-in [animation-delay:400ms]">
        <div className="flex flex-col items-end gap-2">
          <span className="text-white/40 text-[10px] uppercase tracking-[0.5em] vertical-text transform rotate-180">Pure Organic</span>
          <div className="w-[1px] h-32 bg-white/20" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
