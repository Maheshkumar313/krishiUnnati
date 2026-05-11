import HeroSection from "@/components/HeroSection";
import TrustCards from "@/components/TrustCards";
import FeaturedCollections from "@/components/FeaturedCollections";
import BestSellers from "@/components/BestSellers";
import TerraceGardeningSection from "@/components/TerraceGardeningSection";
import Testimonials from "@/components/Testimonials";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      
      <TrustCards />
      
      <FeaturedCollections />

      {/* Story Snippet Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <img src="/images/process.png" className="w-full h-full object-cover grayscale" alt="Farm backdrop" />
        </div>
        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="text-accent text-xs font-body font-bold uppercase tracking-[0.4em]">Our Roots</span>
            </div>
            <h2 className="text-beige text-5xl lg:text-7xl font-heading mb-10 leading-[1.1]">
              A Tradition of <br />
              <span className="text-accent italic">Purity and Love</span>
            </h2>
            <p className="text-beige/60 text-lg lg:text-xl font-body leading-relaxed mb-12 max-w-2xl">
              At KrishiUnnati, we believe that the earth is a living being. Our journey began with a simple dream: to bring back the authentic, chemical-free food that our ancestors once enjoyed.
            </p>
            <Link 
              href="/our-farm" 
              className="inline-block px-12 py-5 bg-white text-primary font-body font-bold text-xs uppercase tracking-widest rounded-full hover:bg-accent hover:text-white transition-all shadow-premium"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </section>
      
      <BestSellers />
      
      <div className="bg-white">
        <TerraceGardeningSection />
      </div>
      
      <Testimonials />
    </div>
  );
}
