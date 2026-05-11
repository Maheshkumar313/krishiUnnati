"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import ProductCard from "@/components/ProductCard";
import { Filter, SlidersHorizontal, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

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

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = React.use(params);
  const { category } = resolvedParams;
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  
  // Filter products based on category (case-insensitive)
  const filteredProducts = mockProducts.filter(p => 
    p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <main className="flex flex-col min-h-screen bg-white">

      {/* Category Header */}
      <div className="bg-cream py-16 lg:py-24 border-b border-beige">
        <div className="container mx-auto px-4 lg:px-8">
          <Link href="/shop" className="inline-flex items-center gap-2 text-primary/40 font-bold text-xs uppercase tracking-widest mb-8 hover:text-primary transition-colors">
            <ArrowLeft size={14} /> Back to Shop
          </Link>
          <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-4">
            Organic <span className="text-secondary italic">{categoryName}</span>
          </h1>
          <p className="text-primary/60 max-w-2xl font-medium">
            Discover our curated selection of sustainably grown {category} from our heritage farms.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Filters Sidebar */}
          <aside className="lg:w-64 shrink-0 space-y-10">
            <div>
              <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                <SlidersHorizontal size={18} /> Refine By
              </h3>
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Price Range</p>
                  <input type="range" className="w-full accent-primary" />
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Availability</p>
                  <label className="flex items-center gap-3 font-medium text-primary">
                    <input type="checkbox" className="rounded border-beige text-primary focus:ring-primary" checked />
                    In Stock
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <section className="flex-grow">
            <div className="flex items-center justify-between mb-10">
              <p className="text-primary/60 font-medium">Showing <span className="text-primary font-bold">{filteredProducts.length}</span> results</p>
              <button className="lg:hidden flex items-center gap-2 bg-beige px-6 py-3 rounded-full font-bold text-primary">
                <Filter size={18} /> Filters
              </button>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center bg-beige/10 rounded-[40px] border border-dashed border-beige">
                <h3 className="text-2xl font-bold text-primary mb-2">No products found</h3>
                <p className="text-primary/60 font-medium mb-8">We're currently harvesting more {category}. Check back soon!</p>
                <Link href="/shop" className="px-8 py-4 bg-primary text-beige font-bold rounded-full">
                  Browse All Products
                </Link>
              </div>
            )}
          </section>

        </div>
      </div>


    </main>
  );
}
