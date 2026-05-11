"use client";

import React, { useState } from 'react';
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BestSellers from "@/components/BestSellers";
import { Star, Minus, Plus, ShoppingCart, Heart, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;
  const [quantity, setQuantity] = useState(1);
  
  // Mock data for the product
  const product = {
    id: id,
    name: "Organic Black Rice (Kala Namak)",
    price: 245,
    oldPrice: 299,
    category: "Rice",
    rating: 5,
    reviews: 128,
    description: "Kala Namak rice, also known as the 'scented black pearl of Uttar Pradesh', is one of the finest varieties of aromatic rice in India. It is highly nutritious, rich in iron and zinc, and has a low glycemic index, making it perfect for healthy living.",
    benefits: [
      "Rich in Antioxidants (Anthocyanins)",
      "High Fiber content for better digestion",
      "Traditional heirloom variety (Non-GMO)",
      "Naturally gluten-free and chemical-free"
    ],
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800"
  };

  return (
    <main className="flex flex-col min-h-screen bg-white">

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Image Gallery */}
          <div className="lg:w-1/2 space-y-4">
            <div className="aspect-square rounded-[40px] overflow-hidden bg-beige/30 border border-beige/50">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-beige/30 border border-beige/50 cursor-pointer hover:border-secondary transition-all">
                  <img src={product.image} alt="" className="w-full h-full object-cover opacity-60 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
                <span className="text-primary/40 text-sm font-bold ml-2">({product.reviews} Customer Reviews)</span>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-bold text-primary">₹{product.price}</span>
              <span className="text-xl text-primary/30 line-through">₹{product.oldPrice}</span>
              <span className="bg-accent text-primary text-[10px] font-bold px-2 py-1 rounded uppercase">Save 18%</span>
            </div>

            <p className="text-primary/70 text-lg mb-10 leading-relaxed font-medium">
              {product.description}
            </p>

            <div className="space-y-4 mb-12">
              <h4 className="font-bold text-primary uppercase tracking-widest text-xs">Why You'll Love It:</h4>
              {product.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 text-primary/80 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {benefit}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <div className="flex items-center bg-beige p-1 rounded-2xl">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-white transition-all text-primary"
                >
                  <Minus size={20} />
                </button>
                <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-white transition-all text-primary"
                >
                  <Plus size={20} />
                </button>
              </div>

              <button className="flex-grow lg:flex-grow-0 lg:w-64 py-5 bg-primary text-beige font-bold rounded-2xl hover:bg-secondary transition-all shadow-xl flex items-center justify-center gap-3 group">
                <ShoppingCart size={20} />
                Add to Cart
              </button>

              <button className="p-5 border-2 border-beige rounded-2xl text-primary hover:bg-beige transition-all">
                <Heart size={20} />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 border-t border-beige pt-10">
              <div className="flex flex-col items-center text-center gap-3">
                <ShieldCheck className="text-secondary" size={24} />
                <span className="text-[10px] font-bold text-primary/60 uppercase tracking-wider">100% Organic</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3 border-x border-beige">
                <Truck className="text-secondary" size={24} />
                <span className="text-[10px] font-bold text-primary/60 uppercase tracking-wider">Fast Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <RotateCcw className="text-secondary" size={24} />
                <span className="text-[10px] font-bold text-primary/60 uppercase tracking-wider">Easy Returns</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <BestSellers />

    </main>
  );
}
