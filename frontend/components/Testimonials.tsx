import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Regular Customer",
    content: "The quality of rice and millets from KrishiUnnati is unmatched. You can actually taste the difference. It feels like getting food directly from my village.",
    avatar: "https://i.pravatar.cc/150?u=priya"
  },
  {
    name: "Dr. Arvind Rao",
    role: "Health Enthusiast",
    content: "As a doctor, I'm very picky about organic claims. KrishiUnnati's transparency and quality of their cold-pressed oils and spices have made me a loyal customer.",
    avatar: "https://i.pravatar.cc/150?u=arvind"
  },
  {
    name: "Meera Reddy",
    role: "Gardening Client",
    content: "They helped me set up my terrace garden 6 months ago. Now I harvest my own tomatoes and chilies! Their guidance is truly expert and very helpful.",
    avatar: "https://i.pravatar.cc/150?u=meera"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-cream overflow-hidden relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary text-4xl font-bold mb-4">What Our <span className="text-secondary italic">Families</span> Say</h2>
          <p className="text-primary/60 font-medium">Stories of health and happiness from our community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-10 rounded-[40px] border border-beige shadow-sm relative group hover:shadow-xl transition-all">
              <Quote className="text-accent absolute top-8 right-8 opacity-20" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-primary/80 italic leading-relaxed mb-8 font-medium">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border-2 border-accent" />
                <div>
                  <h4 className="text-primary font-bold">{item.name}</h4>
                  <p className="text-[10px] text-secondary font-bold uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
