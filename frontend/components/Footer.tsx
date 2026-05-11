import React from 'react';
import Link from 'next/link';
import { Leaf, Phone, Mail, MapPin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-beige pt-32 pb-12">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 border-b border-white/5 pb-24 mb-12">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="flex flex-col group">
              <div className="flex items-center gap-2">
                <Leaf className="text-accent" size={24} />
                <span className="text-3xl font-heading tracking-tight text-white">
                  Krishi<span className="text-accent italic">Unnati</span>
                </span>
              </div>
              <span className="text-[9px] font-body font-bold text-beige/40 uppercase tracking-[0.4em] mt-2">
                Tradition of Purity
              </span>
            </Link>
            <p className="text-beige/60 text-sm leading-relaxed font-body max-w-xs">
              Honoring the timeless traditions of Indian farming, we bring you the finest organic harvests, nurtured with care and delivered with integrity.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-500">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-500">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-sm font-body font-bold uppercase tracking-[0.3em] mb-10 text-accent/80">Collections</h4>
            <ul className="flex flex-col gap-5 text-sm font-medium">
              <li><Link href="/shop/rice" className="text-beige/60 hover:text-accent transition-colors">Rice & Grains</Link></li>
              <li><Link href="/shop/spices" className="text-beige/60 hover:text-accent transition-colors">Stone-ground Spices</Link></li>
              <li><Link href="/shop/oils" className="text-beige/60 hover:text-accent transition-colors">Wooden Ghani Oils</Link></li>
              <li><Link href="/shop/millets" className="text-beige/60 hover:text-accent transition-colors">Heritage Millets</Link></li>
              <li><Link href="/shop/groceries" className="text-beige/60 hover:text-accent transition-colors">Daily Essentials</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-body font-bold uppercase tracking-[0.3em] mb-10 text-accent/80">Company</h4>
            <ul className="flex flex-col gap-5 text-sm font-medium">
              <li><Link href="/our-farm" className="text-beige/60 hover:text-accent transition-colors">Our Farm Story</Link></li>
              <li><Link href="/services" className="text-beige/60 hover:text-accent transition-colors">Gardening Services</Link></li>
              <li><Link href="/farmers" className="text-beige/60 hover:text-accent transition-colors">Farmer Community</Link></li>
              <li><Link href="/blogs" className="text-beige/60 hover:text-accent transition-colors">Journal</Link></li>
              <li><Link href="/contact" className="text-beige/60 hover:text-accent transition-colors">Get in Touch</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-body font-bold uppercase tracking-[0.3em] mb-10 text-accent/80">Concierge</h4>
            <ul className="flex flex-col gap-8 text-sm">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <MapPin size={18} className="text-accent group-hover:text-white" />
                </div>
                <span className="text-beige/60 leading-relaxed font-body">
                  Krishi Unnati Estate,<br />
                  Jubilee Hills, Hyderabad,<br />Telangana - 500033
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <Phone size={18} className="text-accent group-hover:text-white" />
                </div>
                <span className="text-beige/60 font-body">+91 40 2355 9999</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <Mail size={18} className="text-accent group-hover:text-white" />
                </div>
                <span className="text-beige/60 font-body">concierge@krishiunnati.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.4em] font-bold text-beige/20 font-body">
          <p>© 2026 KrishiUnnati Private Limited. All Rights Reserved.</p>
          <div className="flex gap-10">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            <Link href="/shipping" className="hover:text-accent transition-colors">Shipping Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
