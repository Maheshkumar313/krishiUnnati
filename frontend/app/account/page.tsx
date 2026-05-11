"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import { User, Package, MapPin, Heart, LogOut, ChevronRight, Settings } from 'lucide-react';

export default function AccountPage() {
  const user = {
    name: "Anil Kumar",
    email: "anil@example.com",
    joined: "March 2024"
  };

  return (
    <main className="flex flex-col min-h-screen bg-white">

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-8">
            <div className="flex items-center gap-6 p-6 bg-beige/30 rounded-[32px]">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-accent text-2xl font-bold">
                AK
              </div>
              <div>
                <h3 className="font-bold text-primary text-lg">{user.name}</h3>
                <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">Member since {user.joined}</p>
              </div>
            </div>

            <nav className="flex flex-col gap-2">
              {[
                { icon: <Package size={18} />, label: "Orders History" },
                { icon: <MapPin size={18} />, label: "Shipping Addresses" },
                { icon: <Heart size={18} />, label: "Your Wishlist" },
                { icon: <Settings size={18} />, label: "Account Settings" },
                { icon: <LogOut size={18} />, label: "Sign Out", danger: true }
              ].map((item, i) => (
                <button 
                  key={i}
                  className={`flex items-center justify-between p-5 rounded-2xl transition-all font-bold text-sm ${
                    item.danger ? "text-red-500 hover:bg-red-50" : "text-primary/60 hover:bg-beige hover:text-primary"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {item.icon}
                    {item.label}
                  </div>
                  <ChevronRight size={16} />
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="lg:w-3/4 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Recent <span className="text-secondary italic">Orders</span></h2>
              <div className="space-y-4">
                {[
                  { id: "#KU-8921", date: "May 10, 2024", status: "In Transit", total: "₹1,245" },
                  { id: "#KU-8754", date: "April 22, 2024", status: "Delivered", total: "₹850" }
                ].map((order, i) => (
                  <div key={i} className="p-8 border border-beige rounded-[32px] hover:shadow-sm transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-beige rounded-2xl flex items-center justify-center text-primary">
                        <Package size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary">{order.id}</h4>
                        <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">{order.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-12">
                      <div>
                        <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-1">Status</p>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-secondary/10 text-secondary'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-1">Total</p>
                        <p className="font-bold text-primary">{order.total}</p>
                      </div>
                      <button className="text-accent font-bold text-sm hover:underline">Details</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 bg-primary rounded-[40px] text-beige">
                <h3 className="text-xl font-bold mb-4">Krishi Points</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold text-accent">840</span>
                  <span className="font-bold opacity-60">Seeds Earned</span>
                </div>
                <p className="text-sm font-medium opacity-70 mb-8">Redeem your seeds for exclusive farm tours and heirloom samples.</p>
                <button className="w-full py-4 bg-accent text-primary font-bold rounded-2xl hover:bg-white transition-all">
                  Redeem Now
                </button>
              </div>
              
              <div className="p-10 border-2 border-dashed border-beige rounded-[40px] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-beige/50 rounded-full flex items-center justify-center text-primary/20 mb-4">
                  <MapPin size={32} />
                </div>
                <h3 className="font-bold text-primary mb-2">New Address?</h3>
                <p className="text-sm text-primary/60 font-medium mb-6">Add a new shipping destination for your next harvest.</p>
                <button className="text-primary font-bold hover:text-accent transition-colors">Add Address +</button>
              </div>
            </div>
          </div>

        </div>
      </div>


    </main>
  );
}
