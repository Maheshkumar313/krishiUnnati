import React from 'react';
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sprout, Phone, Mail, Clock, MapPin, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: "Terrace Garden Setup",
    desc: "Complete end-to-end setup including waterproofing consultation, stand installation, pot selection, and the first layer of high-nutrient organic soil.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Monthly Maintenance",
    desc: "Expert gardeners visit your home to handle pest control (organic), fertilization, pruning, and health checks for your plants.",
    image: "https://images.unsplash.com/photo-1416870230247-d01c3f47bfba?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Gardening Guidance",
    desc: "Video consultations or in-person workshops to teach you the art of traditional Indian organic farming and urban gardening.",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800"
  }
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-cream">
      <AnnouncementBar />
      <Navbar />

      {/* Services Hero */}
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/gardening.png" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-accent font-bold uppercase tracking-widest text-xs mb-6 inline-block">Expert Services</span>
          <h1 className="text-4xl lg:text-7xl font-bold text-white mb-8">Green Living, <span className="text-accent italic">Made Simple</span></h1>
          <p className="text-beige/70 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            We don't just sell products; we help you build a sustainable lifestyle. Bring the farm to your home with our professional urban gardening services.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:gap-24">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 w-full h-[400px] lg:h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
              </div>
              <div className="lg:w-1/2 space-y-8">
                <h2 className="text-3xl lg:text-5xl font-bold text-primary">{service.title}</h2>
                <p className="text-lg text-primary/70 leading-relaxed font-medium">
                  {service.desc}
                </p>
                <div className="space-y-4">
                  {[
                    "Standardized organic practices",
                    "Season-specific planting plans",
                    "High-yield traditional varieties"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-primary font-bold">
                      <CheckCircle2 className="text-secondary" size={24} />
                      {item}
                    </div>
                  ))}
                </div>
                <button className="px-10 py-5 bg-primary text-beige font-bold rounded-full hover:bg-secondary transition-all shadow-xl">
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-beige/40 rounded-[50px] p-10 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">Start Your <span className="text-secondary">Green Journey</span> Today</h2>
              <p className="text-primary/60 font-medium text-lg">Our experts are just a call away to help you set up your dream organic garden.</p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-6">
              <a href="tel:+919876543210" className="flex items-center gap-4 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-secondary transition-all shadow-lg">
                <Phone size={20} /> Call Now
              </a>
              <a href="mailto:info@krishiunnati.com" className="flex items-center gap-4 bg-white text-primary border border-primary/10 px-8 py-4 rounded-2xl font-bold hover:bg-beige transition-all shadow-sm">
                <Mail size={20} /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
