"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const messages = [
  { label: "Purity First", text: "100% Organic Certified Harvests" },
  { label: "Complimentary", text: "Shipping on orders over ₹999" },
  { label: "Direct", text: "From our farms to your doorstep" },
  { label: "Traditional", text: "Stone-ground & Hand-pounded" }
];

const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-primary text-beige py-2.5 px-4 overflow-hidden border-b border-white/5 relative z-50">
      <div className="container mx-auto relative h-5">
        {messages.map((msg, i) => (
          <div 
            key={i}
            className={cn(
              "absolute inset-0 flex justify-center items-center gap-3 transition-all duration-1000",
              i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            )}
          >
            <span className="text-[9px] font-body font-bold uppercase tracking-[0.3em] text-accent px-2 py-0.5 border border-accent/20 rounded">
              {msg.label}
            </span>
            <span className="text-[10px] font-body font-medium uppercase tracking-[0.2em] opacity-80">
              {msg.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
