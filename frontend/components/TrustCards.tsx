import React from 'react';
import { ShieldCheck, Leaf, Truck, UserCheck } from 'lucide-react';

const trustItems = [
  {
    icon: <Leaf className="text-accent" size={28} />,
    title: "Vedic Farming",
    desc: "Grown using traditional methods without any synthetic chemicals or pesticides."
  },
  {
    icon: <ShieldCheck className="text-accent" size={28} />,
    title: "Purity Guaranteed",
    desc: "Rigorous quality checks to ensure only the purest products reach your home."
  },
  {
    icon: <UserCheck className="text-accent" size={28} />,
    title: "Farmer First",
    desc: "We ensure our farmers get fair prices for their dedication to natural farming."
  },
  {
    icon: <Truck className="text-accent" size={28} />,
    title: "Conscious Delivery",
    desc: "Plastic-free packaging and optimized logistics to reduce our carbon footprint."
  }
];

const TrustCards = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-beige/30 rounded-full flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-soft">
                {item.icon}
              </div>
              <h3 className="text-2xl font-heading text-primary mb-4">{item.title}</h3>
              <p className="text-sm text-primary/50 font-body leading-relaxed max-w-[240px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustCards;
