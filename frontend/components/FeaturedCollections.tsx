import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    title: "Rice & Grains",
    desc: "Heirloom varieties of rice, hand-harvested and sun-dried for purity.",
    image: "/images/rice.png",
    link: "/shop/rice",
  },
  {
    title: "Traditional Spices",
    desc: "Whole spices stone-ground to preserve essential oils and aroma.",
    image: "/images/spices.png",
    link: "/shop/spices",
  },
  {
    title: "Hand-pounded Oils",
    desc: "Cold-pressed oils extracted using traditional wooden ghani methods.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800",
    link: "/shop/oils",
  },
  {
    title: "Natural Groceries",
    desc: "Everyday essentials from pulses to sweeteners, all 100% organic.",
    image: "https://images.unsplash.com/photo-1590401567362-9e99c3620857?auto=format&fit=crop&q=80&w=800",
    link: "/shop/groceries",
  }
];

const FeaturedCollections = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[1px] bg-accent" />
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">Curation</span>
            </div>
            <h2 className="text-primary text-5xl lg:text-6xl font-heading mb-6 leading-tight">
              Our Organic <span className="text-accent italic">Heirlooms</span>
            </h2>
            <p className="text-primary/60 font-body leading-relaxed max-w-lg">
              Explore our curated collections of 100% natural and chemical-free products, harvested with care for your health.
            </p>
          </div>
          <Link href="/shop" className="group flex items-center gap-3 text-primary font-bold text-xs uppercase tracking-widest pb-2 border-b border-primary/10 hover:border-accent transition-all">
            View All Harvests
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {collections.map((item, index) => (
            <Link 
              key={index} 
              href={item.link}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] mb-6 shadow-soft group-hover:shadow-premium transition-all duration-700">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-500" />
              </div>
              
              <h3 className="text-2xl font-heading text-primary mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-sm text-primary/50 font-body leading-relaxed line-clamp-2">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
