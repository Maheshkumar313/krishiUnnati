import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Star, Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, category, rating }) => {
  return (
    <div className="group flex flex-col bg-white rounded-[32px] overflow-hidden border border-primary/5 hover:border-accent/30 shadow-soft hover:shadow-premium transition-all duration-500">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-beige/10">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-5 left-5 flex flex-col gap-2">
          <span className="bg-white/90 backdrop-blur-md text-primary text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-sm border border-primary/5">
            {category}
          </span>
        </div>

        {/* Favorite Button */}
        <button className="absolute top-5 right-5 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full text-primary hover:text-accent flex items-center justify-center transition-all shadow-sm border border-primary/5">
          <Heart size={16} />
        </button>
        
        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-accent shadow-xl">
            <ShoppingBag size={16} />
            Add to Bag
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-8 flex flex-col flex-grow text-center">
        <div className="flex justify-center items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={10} 
              className={i < rating ? "fill-accent text-accent" : "text-beige-500"} 
            />
          ))}
          <span className="text-[10px] text-primary/30 font-bold ml-1 uppercase tracking-tighter">({rating}.0)</span>
        </div>
        
        <Link href={`/product/${id}`} className="mb-3 block group-hover:text-accent transition-colors">
          <h3 className="text-xl font-heading text-primary leading-tight line-clamp-1">{name}</h3>
        </Link>
        
        <div className="mt-auto pt-2">
          <span className="text-lg font-body font-bold text-primary">₹{price.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
