import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import { Mail, Phone, MapPin, MessageSquare, Clock, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-4 inline-block">Get in Touch</span>
          <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-6">We'd Love to <br /><span className="text-secondary italic">Hear From You</span></h1>
          <p className="text-primary/60 text-lg font-medium leading-relaxed">
            Whether you have a question about our farming practices, your order, or just want to say Namaste, our team is here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="bg-beige/20 p-10 rounded-[40px] border border-beige space-y-6">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Call Us</h3>
              <p className="text-primary/60 font-medium mb-1">+91 40 2355 9999</p>
              <p className="text-primary/60 font-medium">+91 99887 76655</p>
            </div>
          </div>

          <div className="bg-beige/20 p-10 rounded-[40px] border border-beige space-y-6">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Email Us</h3>
              <p className="text-primary/60 font-medium mb-1">namaste@krishiunnati.com</p>
              <p className="text-primary/60 font-medium">bulk@krishiunnati.com</p>
            </div>
          </div>

          <div className="bg-beige/20 p-10 rounded-[40px] border border-beige space-y-6">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Visit Farm</h3>
              <p className="text-primary/60 font-medium">Sy. No. 24, Shankarpally Road,</p>
              <p className="text-primary/60 font-medium">Rangareddy, Telangana - 501203</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/2 space-y-10">
            <div className="bg-primary text-beige p-12 rounded-[60px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MessageSquare size={120} />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Support <br />Hours</h3>
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <Clock className="text-accent" size={20} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60">Monday - Friday</p>
                    <p className="font-bold">9:00 AM - 7:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="text-accent" size={20} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60">Saturday - Sunday</p>
                    <p className="font-bold">10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
              <p className="mt-12 text-sm font-medium opacity-60 italic">
                *Response time is usually within 2-4 working hours.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <form className="space-y-6 bg-white p-2 border border-beige rounded-[40px]">
              <div className="p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary/40 uppercase tracking-widest ml-4">Full Name</label>
                    <input type="text" className="w-full bg-beige/30 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-secondary/20 font-medium" placeholder="Anil Kumar" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary/40 uppercase tracking-widest ml-4">Email Address</label>
                    <input type="email" className="w-full bg-beige/30 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-secondary/20 font-medium" placeholder="anil@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary/40 uppercase tracking-widest ml-4">Subject</label>
                  <select className="w-full bg-beige/30 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-secondary/20 font-bold text-primary/60">
                    <option>General Inquiry</option>
                    <option>Order Status</option>
                    <option>Bulk/B2B Request</option>
                    <option>Farm Visit Booking</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary/40 uppercase tracking-widest ml-4">Message</label>
                  <textarea rows={5} className="w-full bg-beige/30 border-none rounded-[32px] px-6 py-4 focus:ring-2 focus:ring-secondary/20 font-medium" placeholder="Tell us more about your inquiry..."></textarea>
                </div>
                <button className="w-full py-5 bg-primary text-beige font-bold rounded-2xl hover:bg-secondary transition-all shadow-xl flex items-center justify-center gap-3 group">
                  Send Message
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>


    </main>
  );
}
