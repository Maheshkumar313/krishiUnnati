import React from 'react';
import { Leaf, Sprout, Sun, Droplets, ShieldCheck, Heart, ArrowRight, MapPin } from 'lucide-react';

export default function OurFarmPage() {
  return (
    <div className="flex flex-col">
      {/* Farm Introduction Banner */}
      <section className="relative h-[500px] lg:h-[600px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        >
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center items-center text-center relative z-10">
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-6">Explore Our Roots</span>
          <h1 className="text-5xl lg:text-7xl font-bold text-beige mb-6 leading-tight">
            Where Every Seed <br />
            <span className="text-accent italic">Tells a Story</span>
          </h1>
          <p className="text-beige/90 max-w-2xl text-lg font-medium leading-relaxed">
            Welcome to KrishiUnnati Farms. Nestled in the fertile plains of Telangana, our farm is a testament to traditional Indian wisdom and natural abundance.
          </p>
        </div>
      </section>

      {/* Natural Farming Philosophy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl border-8 border-beige">
                  <img src="/images/farmer.png" alt="Our Farmer" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-primary text-beige p-10 rounded-[40px] shadow-2xl max-w-xs hidden md:block">
                  <Quote className="text-accent mb-4" size={40} />
                  <p className="italic text-sm font-medium leading-relaxed">
                    "We don't just grow crops; we nurture the soil. Because healthy soil is the mother of healthy families."
                  </p>
                  <h4 className="mt-4 font-bold text-accent">- Shivappa, Master Farmer</h4>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <span className="text-secondary font-bold uppercase tracking-widest text-xs">Our Philosophy</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary">Nurturing Nature, <br />Preserving <span className="text-secondary italic">Wisdom</span></h2>
              <p className="text-lg text-primary/70 leading-relaxed font-medium">
                At KrishiUnnati, we follow the principles of <span className="text-primary font-bold">Prakritik Kheti</span> (Natural Farming). We believe that nature has everything required to produce healthy food. 
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                {[
                  { icon: <Sun size={24} />, title: "Surya Shakti", desc: "Harnessing the power of the sun for natural growth." },
                  { icon: <Droplets size={24} />, title: "Jeevamrut", desc: "Traditional microbial culture for soil enrichment." },
                  { icon: <Leaf size={24} />, title: "Beejamrut", desc: "Natural seed treatment for pest resistance." },
                  { icon: <Droplets size={24} />, title: "Mulching", desc: "Retaining moisture and promoting earthworms." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-beige rounded-2xl flex items-center justify-center text-secondary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{item.title}</h4>
                      <p className="text-xs text-primary/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farming Process Timeline */}
      <section className="py-24 bg-beige/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary text-4xl font-bold mb-4">The Journey of <span className="text-secondary italic">Purity</span></h2>
            <p className="text-primary/60 font-medium">From the first seed to your dining table.</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/10 hidden lg:block -translate-x-1/2" />
            
            <div className="space-y-16">
              {[
                { title: "Soil Preparation", desc: "Enriching the earth with natural compost and Jeevamrut.", step: "01" },
                { title: "Sowing Native Seeds", desc: "Using only heirloom, non-GMO seeds for biodiversity.", step: "02" },
                { title: "Natural Cultivation", desc: "Daily care using organic decoctions for pest control.", step: "03" },
                { title: "Traditional Harvesting", desc: "Harvesting at peak ripeness to ensure maximum nutrients.", step: "04" },
                { title: "Cold-Stone Processing", desc: "Traditional processing to retain natural oils and aroma.", step: "05" }
              ].map((item, i) => (
                <div key={i} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-[45%] text-center lg:text-right">
                    <div className={i % 2 === 1 ? 'lg:text-left' : 'lg:text-right'}>
                      <h3 className="text-2xl font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-primary/60 font-medium">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-primary text-accent rounded-full flex items-center justify-center font-bold text-xl relative z-10 border-4 border-white shadow-xl lg:mx-auto">
                    {item.step}
                  </div>
                  <div className="lg:w-[45%] h-full hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organic Cultivation Methods */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-10">
              <div>
                <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 inline-block">Cultivation</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">No Chemicals, <br /><span className="text-secondary italic">Just Care</span></h2>
                <p className="text-lg text-primary/70 leading-relaxed font-medium">
                  We use age-old Indian methods like <span className="text-primary font-bold">Dashaparni Ark</span> and <span className="text-primary font-bold">Neem Oil</span> for natural pest management. No synthetic fertilizers or chemical pesticides ever touch our soil.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  "Crop Rotation for Soil Health",
                  "Inter-cropping for Pest Management",
                  "Rainwater Harvesting for Irrigation",
                  "Manual Weeding (No Weedicides)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-primary font-bold text-lg">
                    <CheckCircle2 className="text-secondary shrink-0" size={28} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl">
                <img src="/images/process.png" alt="Farming Process" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-accent rounded-full opacity-20 blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary rounded-full opacity-10 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Practices */}
      <section className="py-24 bg-primary text-beige relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Sustainable by <span className="text-accent">Design</span></h2>
            <p className="text-beige/70 text-lg font-medium">We believe in leaving the earth better than we found it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Zero Waste Farming", 
                desc: "Every farm byproduct is recycled. Cow dung becomes fuel and fertilizer, and crop residue becomes mulch.",
                icon: <RotateCcw size={32} />
              },
              { 
                title: "Water Conservation", 
                desc: "Drip irrigation and rainwater harvesting tanks ensure we use every drop of water responsibly.",
                icon: <Droplets size={32} />
              },
              { 
                title: "Biodiversity", 
                desc: "We plant flowering borders and trees around our crops to provide a natural habitat for birds and bees.",
                icon: <Sprout size={32} />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-beige/60 leading-relaxed text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm-to-family journey */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-[60px] p-10 lg:p-24 flex flex-col lg:flex-row items-center gap-16 shadow-xl border border-beige">
            <div className="lg:w-1/2">
              <img src="/images/sustainability.png" className="w-full rounded-[40px] shadow-lg" alt="Organic Methods" />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary">Farm to <span className="text-secondary italic">Family</span></h2>
              <p className="text-lg text-primary/70 font-medium leading-relaxed">
                When you buy from KrishiUnnati, you aren't just a customer; you're part of a community. We ensure that our farmers are paid fairly and that you receive food that is as pure as nature intended.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 font-bold text-primary">
                  <ShieldCheck className="text-secondary" /> Traceability to the specific farm block
                </li>
                <li className="flex items-center gap-3 font-bold text-primary">
                  <ShieldCheck className="text-secondary" /> No storage in cold warehouses
                </li>
                <li className="flex items-center gap-3 font-bold text-primary">
                  <ShieldCheck className="text-secondary" /> Direct impact on rural livelihoods
                </li>
              </ul>
              <button className="px-10 py-5 bg-primary text-beige font-bold rounded-full hover:bg-secondary transition-all shadow-xl flex items-center gap-2 group">
                Visit Our Farm <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust and Purity Section */}
      <section className="py-24 bg-white border-t border-beige/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="text-primary fill-primary" size={48} />
            </div>
            <h2 className="text-4xl font-bold text-primary mb-6">Our Promise of <span className="text-secondary">Purity</span></h2>
            <p className="text-primary/60 text-lg font-medium leading-relaxed mb-12">
              Every product that leaves our farm is checked for quality, nutrition, and purity. We stand by our promise: if it's not pure enough for our own children, it's not good enough for yours.
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
              <div className="flex items-center gap-2 font-bold text-primary">
                <MapPin size={24} /> ISO 9001:2015
              </div>
              <div className="flex items-center gap-2 font-bold text-primary">
                <Leaf size={24} /> NPOP CERTIFIED
              </div>
              <div className="flex items-center gap-2 font-bold text-primary">
                <ShieldCheck size={24} /> FSSAI APPROVED
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Add missing icon from previous turns if needed
const Quote = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    className={className} 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 21C14.017 15.5 16.5 11.5 21 11.5V13.5C18.5 13.5 17.5 15.5 17.5 18H19.017V21H16.017V21ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C9.10457 16 10 16.8954 10 18V21C10 22.1046 9.10457 23 8 23H5C3.89543 23 3 22.1046 3 21ZM3 21C3 15.5 5.5 11.5 10 11.5V13.5C7.5 13.5 6.5 15.5 6.5 18H8V21H5V21Z" />
  </svg>
);

const CheckCircle2 = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    className={className} 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const RotateCcw = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    className={className} 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);
