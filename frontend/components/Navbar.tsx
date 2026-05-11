"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X, Leaf, Heart, ChevronDown, PhoneCall } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { name: "Organic Rice", href: "/shop/rice", icon: "🌾" },
  { name: "Stone-ground Spices", href: "/shop/spices", icon: "🌶️" },
  { name: "Heritage Millets", href: "/shop/millets", icon: "🌿" },
  { name: "Wooden Ghani Oils", href: "/shop/oils", icon: "🏺" },
  { name: "Natural Groceries", href: "/shop/groceries", icon: "🍯" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Search Overlay */}
      <div className={cn(
        "fixed inset-0 z-[60] bg-primary/95 backdrop-blur-2xl transition-all duration-700 ease-in-out flex flex-col items-center justify-center p-6",
        isSearchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <button 
          onClick={() => setIsSearchOpen(false)}
          className="absolute top-10 right-10 text-white/50 hover:text-accent transition-colors"
        >
          <X size={40} strokeWidth={1} />
        </button>
        <div className="w-full max-w-4xl">
          <div className="relative group border-b border-white/20 pb-4 mb-8">
            <Search size={32} className="absolute left-0 top-1/2 -translate-y-1/2 text-accent" />
            <input 
              type="text" 
              autoFocus={isSearchOpen}
              placeholder="What are you looking for?" 
              className="w-full bg-transparent border-none pl-12 text-3xl lg:text-5xl font-heading text-white placeholder:text-white/20 focus:ring-0"
            />
          </div>
          <div className="flex flex-wrap gap-4 text-white/40 font-body font-bold text-xs uppercase tracking-widest">
            <span>Popular:</span>
            <Link href="/shop/rice" className="hover:text-accent transition-colors">Black Rice</Link>
            <Link href="/shop/oils" className="hover:text-accent transition-colors">Cold Pressed Oils</Link>
            <Link href="/shop/spices" className="hover:text-accent transition-colors">Turmeric</Link>
          </div>
        </div>
      </div>

      <nav className={cn(
        "sticky top-0 z-50 transition-all duration-700",
        isScrolled ? "bg-white/95 backdrop-blur-xl py-3 shadow-premium border-b border-primary/5" : "bg-cream py-6"
      )}>
        <div className="container mx-auto px-4 lg:px-12">
          <div className="flex items-center justify-between">
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-primary p-2 hover:bg-beige/50 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation Left */}
            <div className="hidden lg:flex items-center gap-10 font-body font-bold text-[10px] uppercase tracking-[0.25em] text-primary/60">
              <div 
                className="relative group"
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                <button className="flex items-center gap-1.5 hover:text-accent transition-all duration-300">
                  Collections <ChevronDown size={12} className={cn("transition-transform duration-500", isCategoriesOpen && "rotate-180")} />
                </button>
                
                {/* Categories Dropdown */}
                <div className={cn(
                  "absolute top-full left-0 pt-6 transition-all duration-500",
                  isCategoriesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
                )}>
                  <div className="bg-white/95 backdrop-blur-xl rounded-[28px] shadow-premium border border-primary/5 p-8 w-72">
                    <div className="flex flex-col gap-1">
                      {categories.map((cat) => (
                        <Link 
                          key={cat.name} 
                          href={cat.href}
                          className="flex items-center gap-4 p-3.5 rounded-2xl hover:bg-cream transition-all group/item"
                        >
                          <span className="text-xl transform group-hover/item:scale-110 transition-transform">{cat.icon}</span>
                          <span className="text-primary font-body font-bold text-[10px] uppercase tracking-[0.15em] group-hover/item:text-accent transition-colors">
                            {cat.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-primary/5">
                      <Link href="/shop" className="text-accent text-[9px] font-bold uppercase tracking-[0.3em] hover:opacity-70 transition-opacity">
                        View Entire Harvest →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link href="/our-farm" className="hover:text-accent transition-all duration-300">Story</Link>
              <Link href="/bulk-orders" className="flex items-center gap-2 hover:text-accent transition-all duration-300">
                Bulk & Gifting
              </Link>
            </div>

            {/* Logo Section - Centered on Desktop */}
            <Link href="/" className="flex flex-col items-center group lg:absolute lg:left-1/2 lg:-translate-x-1/2">
              <div className="flex items-center gap-2.5">
                <Leaf className="text-accent group-hover:rotate-[15deg] transition-transform duration-700 ease-out" size={26} />
                <span className="text-3xl lg:text-4xl font-heading text-primary tracking-tighter leading-none">
                  Krishi<span className="text-accent italic">Unnati</span>
                </span>
              </div>
              <span className="text-[8.5px] font-body font-bold text-earth/40 uppercase tracking-[0.5em] mt-2 translate-x-[1px]">
                Tradition of Purity
              </span>
            </Link>

            {/* Icons Right */}
            <div className="flex items-center gap-1 lg:gap-3 text-primary/80">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 hover:bg-accent/10 hover:text-accent rounded-full transition-all duration-300"
              >
                <Search size={19} />
              </button>
              <Link href="/account" className="p-2.5 hover:bg-accent/10 hover:text-accent rounded-full transition-all duration-300">
                <User size={19} />
              </Link>
              <Link href="/wishlist" className="p-2.5 hover:bg-accent/10 hover:text-accent rounded-full transition-all duration-300 hidden sm:flex relative">
                <Heart size={19} />
                <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-accent rounded-full border border-white" />
              </Link>
              <Link href="/cart" className="flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-full transition-all hover:bg-accent hover:shadow-premium group">
                <div className="relative">
                  <ShoppingCart size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-primary">
                    0
                  </span>
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] hidden lg:block uppercase">Boutique</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden fixed inset-0 top-[72px] bg-white z-40 transition-all duration-500 ease-in-out",
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}>
          <div className="p-10 flex flex-col h-full">
            <div className="flex flex-col gap-6 text-3xl font-heading text-primary">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/shop" onClick={() => setIsMenuOpen(false)}>Shop All</Link>
              <Link href="/our-farm" onClick={() => setIsMenuOpen(false)}>Our Farm Story</Link>
              <Link href="/bulk-orders" onClick={() => setIsMenuOpen(false)}>Bulk & Gifting</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            </div>
            
            <div className="mt-auto pt-10 border-t border-primary/5">
              <div className="flex items-center gap-4 text-primary/40 font-body font-bold text-[10px] uppercase tracking-widest">
                <Link href="/account">Account</Link>
                <span className="w-1 h-1 bg-primary/10 rounded-full" />
                <Link href="/cart">Cart (0)</Link>
                <span className="w-1 h-1 bg-primary/10 rounded-full" />
                <Link href="/wishlist">Wishlist</Link>
              </div>
              <div className="mt-8 flex items-center gap-4 text-primary">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">
                  <PhoneCall size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Need Help?</p>
                  <p className="text-sm font-bold tracking-wide">+91 40 2355 9999</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
