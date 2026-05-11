"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

const messages = [
  { label: "Purity", text: "100% Certified Organic Harvests" },
  { label: "Boutique", text: "Complimentary Shipping over ₹999" },
  { label: "Direct", text: "Farm-to-Doorstep in 24-48 Hours" },
  { label: "Traditional", text: "Stone-ground & Hand-pounded" }
];

const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setIsVisible(true);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-primary text-beige py-2 px-4 overflow-hidden border-b border-white/5 relative z-[100]">
      <div className="container mx-auto flex justify-center items-center h-6">
        <div 
          className={cn(
            "flex items-center gap-4 transition-all duration-700 ease-in-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
        >
          <Sparkles size={10} className="text-accent animate-pulse" />
          <div className="flex items-center gap-3">
            <span className="text-[8px] font-body font-bold uppercase tracking-[0.4em] text-accent/80 border-r border-white/10 pr-3 leading-none">
              {messages[index].label}
            </span>
            <span className="text-[9px] lg:text-[10px] font-body font-medium uppercase tracking-[0.25em] opacity-90 whitespace-nowrap">
              {messages[index].text}
            </span>
          </div>
          <Sparkles size={10} className="text-accent animate-pulse" />
        </div>
      </div>
      
      {/* Subtle decorative lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-30" />
    </div>
  );
};

export default AnnouncementBar;
