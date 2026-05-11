"use client";

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import { ShoppingBag, ArrowRight, Trash2, Minus, Plus, ShieldCheck, Leaf, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const [items, setItems] = useState([
    {
      id: "1",
      name: "Organic Black Rice (Kala Namak)",
      price: 245,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800",
      weight: "1kg"
    },
    {
      id: "2",
      name: "Hand-pounded Turmeric Powder",
      price: 180,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
      weight: "250g"
    }
  ]);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 50;
  const total = subtotal + shipping;

  const updateQuantity = (id: string, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <main className="flex flex-col min-h-screen bg-beige/10">

      {/* Unified Checkout Header */}
      <header className="bg-white border-b border-beige/50 pt-8 pb-12 lg:pt-12 lg:pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -mr-32 -mt-32" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            
            {/* Logo & Navigation Back */}
            <div className="flex flex-col gap-6">
              <Link href="/" className="flex flex-col group w-fit">
                <div className="flex items-center gap-2.5">
                  <Leaf className="text-accent group-hover:rotate-[15deg] transition-transform duration-700 ease-out" size={28} />
                  <span className="text-3xl lg:text-4xl font-heading text-primary tracking-tighter leading-none">
                    Krishi<span className="text-accent italic">Unnati</span>
                  </span>
                </div>
                <span className="text-[8.5px] font-body font-bold text-earth/40 uppercase tracking-[0.5em] mt-2 ml-1">
                  Tradition of Purity
                </span>
              </Link>
              
              <Link href="/shop" className="flex items-center gap-2 text-primary/40 font-bold text-[10px] uppercase tracking-[0.2em] hover:text-accent transition-colors w-fit">
                <ArrowLeft size={14} /> Back to the Harvest
              </Link>
            </div>

            {/* Cart Status & Progress */}
            <div className="flex flex-col lg:items-end gap-6">
              <div className="flex items-center gap-4 lg:gap-8">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-beige flex items-center justify-center font-bold text-sm shadow-xl shadow-primary/20">01</div>
                  <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Selection</span>
                </div>
                <div className="w-8 h-[1px] bg-beige mb-6" />
                <div className="flex flex-col items-center gap-3 opacity-30">
                  <div className="w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center font-bold text-sm">02</div>
                  <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Address</span>
                </div>
                <div className="w-8 h-[1px] bg-beige mb-6" />
                <div className="flex flex-col items-center gap-3 opacity-30">
                  <div className="w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center font-bold text-sm">03</div>
                  <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Secure</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-20">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-2">Your <span className="text-secondary italic">Selection</span></h1>
            <p className="text-primary/60 font-medium max-w-lg">Review your hand-picked organic staples before we pack them with love.</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">

        {items.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Cart Items */}
            <div className="lg:w-2/3 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="bg-white p-6 lg:p-8 rounded-[32px] shadow-sm flex flex-col sm:flex-row items-center gap-8 border border-primary/5">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden bg-beige/30 shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-grow space-y-2">
                    <h3 className="text-xl font-bold text-primary">{item.name}</h3>
                    <p className="text-sm font-bold text-primary/40 uppercase tracking-widest">{item.weight}</p>
                    <p className="text-lg font-bold text-primary">₹{item.price}</p>
                  </div>

                  <div className="flex items-center bg-beige/50 p-1 rounded-xl">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white transition-all text-primary"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-10 text-center font-bold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white transition-all text-primary"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <button 
                    onClick={() => removeItem(item.id)}
                    className="p-3 text-primary/30 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}

              <div className="pt-8">
                <Link href="/shop" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
                  ← Continue Harvesting
                </Link>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:w-1/3">
              <div className="bg-primary text-beige p-10 rounded-[40px] shadow-2xl sticky top-32">
                <h3 className="text-2xl font-bold mb-8">Harvest Summary</h3>
                
                <div className="space-y-4 mb-8 border-b border-white/10 pb-8">
                  <div className="flex justify-between font-medium">
                    <span className="opacity-60">Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span className="opacity-60">Shipping</span>
                    <span>₹{shipping}</span>
                  </div>
                  <div className="flex justify-between font-medium text-accent">
                    <span className="opacity-60">Discount</span>
                    <span>-₹0</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-10">
                  <span className="text-xl font-bold">Total</span>
                  <span className="text-3xl font-bold text-accent">₹{total}</span>
                </div>

                <button className="w-full py-5 bg-accent text-primary font-bold rounded-2xl hover:bg-white transition-all shadow-xl flex items-center justify-center gap-3 group">
                  Proceed to Checkout
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="mt-8 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-40">
                  <ShieldCheck size={14} />
                  Secure Checkout Guaranteed
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-24 lg:py-32 text-center space-y-10 bg-white rounded-[60px] border border-primary/5 shadow-premium relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-beige rounded-full blur-[120px] opacity-20" />
            
            <div className="relative z-10">
              <div className="w-32 h-32 bg-beige/50 rounded-full flex items-center justify-center mx-auto text-primary/20 mb-8 border border-white">
                <ShoppingBag size={56} strokeWidth={1} />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-primary mb-4">Your basket is <span className="text-secondary italic">waiting</span></h2>
                <p className="text-primary/60 font-medium max-w-sm mx-auto leading-relaxed">
                  It seems you haven't added any of our farm-fresh harvests to your selection yet.
                </p>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <Link href="/shop" className="inline-flex items-center gap-3 px-12 py-5 bg-primary text-beige font-bold rounded-full hover:bg-secondary transition-all shadow-xl hover:shadow-secondary/20 group">
                Discover Our Harvest
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}
      </div>


    </main>
  );
}
