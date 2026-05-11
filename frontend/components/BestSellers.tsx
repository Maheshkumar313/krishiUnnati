import React from 'react';
import ProductCard from './ProductCard';

const mockProducts = [
  {
    id: "1",
    name: "Organic Black Rice (Kala Namak)",
    price: 245,
    category: "Rice",
    rating: 5,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    name: "Hand-pounded Turmeric Powder",
    price: 180,
    category: "Spices",
    rating: 4,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    name: "A2 Desi Cow Ghee",
    price: 850,
    category: "Groceries",
    rating: 5,
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "4",
    name: "Foxtail Millet (Kangni)",
    price: 120,
    category: "Millets",
    rating: 4,
    image: "https://images.unsplash.com/photo-1590401567362-9e99c3620857?auto=format&fit=crop&q=80&w=800"
  }
];

const BestSellers = () => {
  return (
    <section className="py-32 bg-cream/30">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em]">Choice</span>
            <div className="w-8 h-[1px] bg-accent" />
          </div>
          <h2 className="text-primary text-5xl lg:text-6xl font-heading mb-6">Our Best <span className="text-accent italic">Sellers</span></h2>
          <p className="text-primary/60 font-body text-sm leading-relaxed">
            Discover the most loved products by our community. These harvests have consistently brought joy and health to families across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
