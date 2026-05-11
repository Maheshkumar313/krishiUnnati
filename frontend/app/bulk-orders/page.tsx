import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import { Package, Truck, Gift, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function BulkOrdersPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-primary py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-6 inline-block">B2B & Gifting</span>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8">
            Bulk Harvest & <br />
            <span className="text-accent italic">Corporate Gifting</span>
          </h1>
          <p className="text-beige/70 max-w-2xl mx-auto text-lg font-medium leading-relaxed mb-10">
            From festive hampers to monthly pantry supplies for your organization, we bring the purity of our farm to your scale.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all shadow-xl">
              Download Catalog
            </button>
            <button className="px-10 py-5 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all">
              Inquire Now
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-beige/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Package size={40} />,
                title: "Wholesale Supplies",
                desc: "Direct farm-to-warehouse supplies of organic rice, millets, and cold-pressed oils for retail chains and restaurants."
              },
              {
                icon: <Gift size={40} />,
                title: "Curated Gifting",
                desc: "Premium, eco-friendly gift boxes for employees and clients, customized with your brand's story and values."
              },
              {
                icon: <Truck size={40} />,
                title: "Institutional Pantry",
                desc: "Regular supplies of healthy snacks, honey, and staples for corporate offices prioritizing employee wellness."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 rounded-[40px] shadow-sm hover:shadow-premium transition-all group">
                <div className="text-secondary mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-primary/60 leading-relaxed font-medium mb-8">{item.desc}</p>
                <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs">
                  Learn More <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200" 
                  alt="Bulk Orders" 
                  className="rounded-[60px] shadow-2xl"
                />
                <div className="absolute -bottom-10 -right-10 bg-primary text-white p-12 rounded-[40px] hidden md:block">
                  <h4 className="text-4xl font-bold text-accent mb-2">500+</h4>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-60">Corporate Partners</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-10">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Why Partner With <span className="text-secondary italic">KrishiUnnati?</span></h2>
                <p className="text-lg text-primary/70 font-medium">We ensure quality, traceability, and social impact in every bulk transaction.</p>
              </div>
              
              <div className="space-y-6">
                {[
                  "Customized Branding & Packaging",
                  "Verified Organic Traceability",
                  "Competitive Institutional Pricing",
                  "Dedicated Relationship Manager"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-xl font-bold text-primary">
                    <ShieldCheck className="text-secondary" size={28} />
                    {item}
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button className="flex items-center gap-4 px-8 py-4 bg-beige rounded-2xl text-primary font-bold hover:bg-primary hover:text-white transition-all">
                  <MessageCircle size={20} />
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
