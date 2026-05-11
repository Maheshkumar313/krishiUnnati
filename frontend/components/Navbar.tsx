"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X, Leaf, Heart, ChevronDown, PhoneCall, ArrowRight } from 'lucide-react';
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when search or menu is open
  useEffect(() => {
    if (isSearchOpen || isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSearchOpen, isMenuOpen]);

  return (
    <>
      {/* Cinematic Search Overlay */}
      <div className={cn(
        "fixed inset-0 z-[70] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isSearchOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        <div className="absolute inset-0 bg-primary/95 backdrop-blur-3xl" />
        <div className="relative h-full flex flex-col items-center justify-center p-6 lg:p-20">
          <button 
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-8 right-8 lg:top-12 lg:right-12 text-white/30 hover:text-accent hover:rotate-90 transition-all duration-500 p-2"
          >
            <X size={32} strokeWidth={1.5} />
          </button>
          
          <div className="w-full max-w-5xl animate-fade-in">
            <div className="relative group border-b border-white/10 pb-6 mb-12">
              <Search size={28} className="absolute left-0 top-1/2 -translate-y-1/2 text-accent/60 group-focus-within:text-accent transition-colors" />
              <input 
                type="text" 
                autoFocus={isSearchOpen}
                placeholder="Search our harvest..." 
                className="w-full bg-transparent border-none pl-12 text-4xl lg:text-7xl font-heading text-white placeholder:text-white/10 focus:ring-0 tracking-tight"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-white/60">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6">Trending Now</h4>
                <div className="flex flex-col gap-4 font-body font-bold text-xs uppercase tracking-widest">
                  <Link href="/shop/rice" className="hover:text-white transition-colors flex items-center gap-2 group/link">
                    <span className="w-0 group-hover/link:w-4 h-px bg-accent transition-all duration-300" />
                    Black Heritage Rice
                  </Link>
                  <Link href="/shop/oils" className="hover:text-white transition-colors flex items-center gap-2 group/link">
                    <span className="w-0 group-hover/link:w-4 h-px bg-accent transition-all duration-300" />
                    Cold Pressed Mustard Oil
                  </Link>
                  <Link href="/shop/spices" className="hover:text-white transition-colors flex items-center gap-2 group/link">
                    <span className="w-0 group-hover/link:w-4 h-px bg-accent transition-all duration-300" />
                    Lakadong Turmeric
                  </Link>
                </div>
              </div>
              
              <div className="hidden md:block">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6">Latest Harvest</h4>
                <div className="flex flex-col gap-4 font-body font-bold text-xs uppercase tracking-widest text-white/40">
                  <span>Wild Forest Honey</span>
                  <span>A2 Bilona Ghee</span>
                  <span>Makar Dhwaj Tea</span>
                </div>
              </div>

              <div className="hidden lg:block bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-md">
                <Leaf className="text-accent mb-4" size={24} />
                <p className="text-sm italic font-heading text-white/80 leading-relaxed">
                  "Each product tells a story of the soil, the season, and the farmer's devotion."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className={cn(
        "sticky top-0 left-0 right-0 z-60 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isScrolled 
          ? "bg-white/90 backdrop-blur-2xl py-3 shadow-premium border-b border-primary/5" 
          : "bg-cream py-8"
      )}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            
            {/* Desktop Navigation Left */}
            <div className="hidden lg:flex items-center gap-12 font-body font-bold text-[10px] uppercase tracking-[0.3em] text-primary/70">
              <div 
                className="relative"
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                <button className="flex items-center gap-2 hover:text-accent transition-all duration-500 group">
                  <span className="relative">
                    Collections
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-500" />
                  </span>
                  <ChevronDown size={10} className={cn("transition-transform duration-500", isCategoriesOpen && "rotate-180 text-accent")} />
                </button>
                
                {/* Categories Dropdown */}
                <div className={cn(
                  "absolute top-full left-0 pt-6 transition-all duration-500 ease-out",
                  isCategoriesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
                )}>
                  <div className="bg-white/95 backdrop-blur-2xl rounded-[32px] shadow-premium border border-primary/5 p-8 w-[320px] overflow-hidden">
                    <div className="flex flex-col gap-1">
                      {categories.map((cat) => (
                        <Link 
                          key={cat.name} 
                          href={cat.href}
                          className="flex items-center justify-between p-4 rounded-2xl hover:bg-cream transition-all group/item"
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-xl transform group-hover/item:scale-125 transition-transform duration-500">{cat.icon}</span>
                            <span className="text-primary font-body font-bold text-[10px] uppercase tracking-[0.15em] group-hover/item:text-accent transition-colors">
                              {cat.name}
                            </span>
                          </div>
                          <ArrowRight size={12} className="text-accent opacity-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-500" />
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-primary/5">
                      <Link href="/shop" className="group flex items-center justify-center gap-2 py-3 bg-primary text-white text-[9px] font-bold uppercase tracking-[0.3em] rounded-xl hover:bg-accent transition-all duration-500">
                        View Full Harvest
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link href="/our-farm" className="hover:text-accent transition-all duration-500 group relative">
                <span>Story</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-500" />
              </Link>
              <Link href="/bulk-orders" className="hover:text-accent transition-all duration-500 group relative">
                <span>Bespoke Gifting</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-500" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-primary p-2.5 hover:bg-beige/50 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>

            {/* Logo Section - Centered */}
            <Link href="/" className="flex flex-col items-center group lg:absolute lg:left-1/2 lg:-translate-x-1/2">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Leaf className="text-accent group-hover:rotate-[15deg] transition-transform duration-1000 ease-out" size={28} />
                  <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-1000" />
                </div>
                <span className="text-3xl lg:text-4xl font-heading text-primary tracking-tighter leading-none">
                  Krishi<span className="text-accent italic font-light">Unnati</span>
                </span>
              </div>
              <div className="overflow-hidden mt-1.5 h-3 flex items-center">
                <span className="text-[8.5px] font-body font-bold text-earth/40 uppercase tracking-[0.5em] translate-y-0 group-hover:-translate-y-full transition-transform duration-500">
                  Tradition of Purity
                </span>
                <span className="text-[8.5px] font-body font-bold text-accent uppercase tracking-[0.5em] absolute translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  Organic Excellence
                </span>
              </div>
            </Link>

            {/* Icons Right */}
            <div className="flex items-center gap-1.5 lg:gap-4 text-primary/80">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-3 hover:text-accent transition-all duration-500"
                aria-label="Search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              
              <Link href="/account" className="p-3 hover:text-accent transition-all duration-500 hidden sm:flex" aria-label="Account">
                <User size={20} strokeWidth={1.5} />
              </Link>
              
              <Link href="/cart" className="relative ml-2 flex items-center group">
                <div className="flex items-center gap-3 pl-5 pr-2 py-2 bg-primary/5 rounded-full border border-primary/5 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary/60 group-hover:text-white/60 transition-colors hidden lg:block">Boutique</span>
                  <div className="relative bg-white group-hover:bg-accent w-9 h-9 flex items-center justify-center rounded-full shadow-soft group-hover:shadow-premium transition-all duration-500">
                    <ShoppingCart size={16} className="text-primary group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                    <span className="absolute -top-1 -right-1 bg-accent group-hover:bg-white group-hover:text-accent text-white text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white group-hover:border-accent transition-all duration-500">
                      0
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Full Screen Reveal */}
        <div className={cn(
          "lg:hidden fixed inset-0 top-0 bg-white z-[80] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="h-full flex flex-col p-8 pt-24 bg-cream">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-primary/40 hover:text-primary p-2"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <div className="flex flex-col gap-8 text-4xl font-heading text-primary">
              {['Home', 'Shop All', 'Our Farm Story', 'Bespoke Gifting', 'Contact Us'].map((item, idx) => (
                <Link 
                  key={item} 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between group"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <span className="group-hover:text-accent group-hover:translate-x-2 transition-all duration-500">{item}</span>
                  <ArrowRight size={20} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
            
            <div className="mt-auto space-y-12 pb-8">
              <div className="grid grid-cols-2 gap-4">
                {categories.slice(0, 4).map((cat) => (
                  <Link 
                    key={cat.name} 
                    href={cat.href}
                    className="p-4 rounded-2xl bg-white border border-primary/5 flex flex-col gap-2"
                  >
                    <span className="text-2xl">{cat.icon}</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-primary/60">{cat.name}</span>
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-5 p-6 bg-primary rounded-3xl text-white">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                  <PhoneCall size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Personal Assistance</p>
                  <p className="text-lg font-heading tracking-wide">+91 40 2355 9999</p>
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
