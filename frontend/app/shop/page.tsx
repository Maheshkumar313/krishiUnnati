"use client";

import React, { useState } from 'react';
import ProductCard from "@/components/ProductCard";
import { Filter, ChevronDown, SlidersHorizontal, Search } from 'lucide-react';

const categories = [
  "All Products", "Rice", "Millets", "Spices", "Seeds", "Groceries", "Fruits", "Vegetables"
];

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
  },
  {
    id: "5",
    name: "Organic Cold Pressed Groundnut Oil",
    price: 450,
    category: "Groceries",
    rating: 5,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "6",
    name: "Dried Red Chilies (Guntur)",
    price: 120,
    category: "Spices",
    rating: 4,
    image: "https://images.unsplash.com/photo-1588165171080-c89acfa5ee83?auto=format&fit=crop&q=80&w=800"
  }
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  return (
    <div className="flex flex-col">
      {/* Shop Header */}
      <div className="bg-primary py-16 lg:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold text-accent mb-4">Our <span className="text-white italic">Organic Collection</span></h1>
          <p className="text-beige/70 max-w-2xl mx-auto font-medium">Pure, natural, and traditional products sourced directly from our farmers to your home.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* Left Filters - Desktop */}
        <aside className="hidden lg:block w-72 shrink-0 space-y-10">
          <div>
            <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
              <Filter size={18} /> Categories
            </h3>
            <div className="flex flex-col gap-3">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left py-2 px-4 rounded-xl transition-all font-medium ${
                    selectedCategory === cat 
                      ? "bg-primary text-beige shadow-md" 
                      : "text-primary/70 hover:bg-beige"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
              <SlidersHorizontal size={18} /> Price Range
            </h3>
            <div className="px-2">
              <input type="range" className="w-full accent-primary" />
              <div className="flex justify-between mt-2 text-sm text-primary/60 font-bold">
                <span>₹0</span>
                <span>₹5000+</span>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-[32px] border border-primary/10">
            <h4 className="font-bold text-primary mb-4">Need Help?</h4>
            <p className="text-sm text-primary/60 mb-6">Talk to our farming experts for product guidance.</p>
            <button className="w-full py-3 bg-white text-primary font-bold rounded-xl border border-primary/10 hover:bg-primary hover:text-beige transition-all">
              Contact Expert
            </button>
          </div>
        </aside>

        {/* Product Grid Area */}
        <section className="flex-grow">
          {/* Mobile Filters Toggle */}
          <div className="lg:hidden flex items-center justify-between mb-8">
            <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full font-bold text-primary shadow-sm">
              <Filter size={18} /> Filters
            </button>
            <select className="bg-white border-none px-6 py-3 rounded-full font-bold text-primary shadow-sm focus:ring-0">
              <option>Sort by: Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* Grid Header */}
          <div className="hidden lg:flex items-center justify-between mb-10 bg-white p-6 rounded-3xl shadow-sm border border-beige/50">
            <p className="text-primary/60 font-medium">Showing <span className="text-primary font-bold">{mockProducts.length}</span> organic products</p>
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-primary/40 uppercase tracking-widest">Sort by:</span>
              <select className="bg-transparent border-none font-bold text-primary focus:ring-0 cursor-pointer">
                <option>Newest Arrivals</option>
                <option>Best Selling</option>
                <option>Price: Low to High</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {mockProducts
              .filter(product => selectedCategory === "All Products" || product.category === selectedCategory)
              .map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-center gap-2">
            {[1, 2, 3].map((n) => (
              <button 
                key={n} 
                className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold transition-all ${
                  n === 1 ? "bg-primary text-beige" : "bg-white text-primary hover:bg-beige"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
