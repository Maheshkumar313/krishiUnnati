"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import ProductCard from "@/components/ProductCard";
import { Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WishlistPage() {
  const wishlistItems = [
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

  return (
    <main className="flex flex-col min-h-screen bg-white">

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">Your <span className="text-secondary italic">Favorites</span></h1>
          <span className="bg-beige px-6 py-2 rounded-full text-primary font-bold text-sm">{wishlistItems.length} Saved</span>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlistItems.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center space-y-8 border-2 border-dashed border-beige rounded-[60px]">
            <div className="w-24 h-24 bg-beige/30 rounded-full flex items-center justify-center mx-auto text-primary/20">
              <Heart size={48} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">Your wishlist is empty</h2>
              <p className="text-primary/60 font-medium">Keep track of the harvests you love the most.</p>
            </div>
            <Link href="/shop" className="inline-block px-10 py-5 bg-primary text-beige font-bold rounded-full hover:bg-secondary transition-all">
              Go to Shop
            </Link>
          </div>
        )}

        <div className="mt-20 p-12 bg-cream rounded-[40px] flex flex-col lg:flex-row items-center justify-between gap-8 border border-beige">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-primary">Share Your Favorites</h3>
            <p className="text-primary/60 font-medium">Let your family and friends know what you're craving from the farm.</p>
          </div>
          <button className="px-10 py-5 bg-white text-primary font-bold rounded-full border border-primary/10 shadow-sm hover:shadow-premium transition-all flex items-center gap-2">
            Share Wishlist <ArrowRight size={18} />
          </button>
        </div>
      </div>


    </main>
  );
}
