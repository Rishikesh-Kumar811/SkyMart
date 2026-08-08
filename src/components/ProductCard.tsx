import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';
import { ShoppingCart, Check, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { StarRating } from './StarRating';
import { cn } from '../lib/utils';
import { useToast } from './Toast';
interface ProductCardProps {
  product: Product;
}
const CATEGORY_COLORS: Record<string, string> = {
  electronics: '#3b82f6',
  clothing: '#f59e0b',
  furniture: '#8b5cf6',
  home: '#10b981',
  sports: '#ef4444',
  accessories: '#ec4899',
};
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart, addToCart } = useCart();
  const { showToast } = useToast();
  const [imgError, setImgError] = useState(false);
  const isInCart = cart.some(item => item.product.id === product.id);
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product);
    if (isInCart) {
      showToast('Quantity updated!');
    } else {
      showToast('Added to Cart');
    }
  };
  const accentColor = CATEGORY_COLORS[product.category] || '#c8f400';
  return (
    <Link
      to={`/products/${product.id}`}
      className="@container group bg-surface border border-white/8 rounded-3xl overflow-hidden transition-all duration-500 ease-apple transform-gpu hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col cursor-pointer"
    >
      <div className="relative aspect-square bg-[#ebecee] rounded-t-3xl overflow-hidden flex items-center justify-center">
        {imgError ? (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-2"
            style={{ background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}30)` }}
          >
            <Package size={32} style={{ color: accentColor }} />
            <span className="text-[clamp(0.65rem,2cqw,0.75rem)] text-center px-4 font-medium" style={{ color: accentColor }}>
              {product.title}
            </span>
          </div>
        ) : (
            <img
              src={product.image}
              alt={product.title}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-contain p-[6%] sm:p-[8%] group-hover:scale-[1.07] transition-transform duration-700 ease-apple transform-gpu will-change-transform"
            />
        )}
        <span className="absolute top-[clamp(0.6rem,4cqw,1rem)] left-[clamp(0.6rem,4cqw,1rem)] bg-black/60 backdrop-blur-md text-white text-[clamp(0.6rem,3cqw,0.95rem)] font-medium rounded-full px-[clamp(0.5rem,2cqw,0.75rem)] py-[clamp(0.25rem,1.8cqw,0.45rem)] capitalize z-10 tracking-wide">
          {product.category}
        </span>
      </div>
      <div className="p-[clamp(0.75rem,4.5cqw,1.5rem)] flex flex-col flex-1 gap-[clamp(0.3rem,2cqw,0.6rem)]">
        <p className="text-white/40 text-[clamp(0.65rem,3.5cqw,0.95rem)] font-medium capitalize">{product.category}</p>
        <h3 className="text-white/85 text-[clamp(0.85rem,5.5cqw,1.5rem)] font-medium leading-snug line-clamp-2 flex-1">{product.title}</h3>
        <StarRating rate={product.rating.rate} count={product.rating.count} />
        <div className="flex items-center justify-between mt-[clamp(0.4rem,3cqw,0.85rem)] pt-[clamp(0.4rem,3cqw,0.85rem)] border-t border-white/10">
          <span className="font-heading font-bold text-volt text-[clamp(1.05rem,6.5cqw,1.75rem)]">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className={cn(
              "flex items-center gap-[clamp(0.3rem,1.8cqw,0.6rem)] px-[clamp(0.75rem,3.5cqw,1.5rem)] py-[clamp(0.4rem,2.2cqw,0.75rem)] rounded-[clamp(0.6rem,2.5cqw,1.25rem)] text-[clamp(0.7rem,3cqw,1rem)] font-semibold transition-all duration-300 ease-spring active:scale-95 transform-gpu cursor-pointer",
              isInCart
                ? 'bg-green-500/15 text-green-400 border border-green-500/20'
                : 'bg-volt text-ink hover:bg-[#e2ff66]'
            )}
          >
            {isInCart ? (
              <><Check className="w-[clamp(0.8rem,3.5cqw,1.2rem)] h-[clamp(0.8rem,3.5cqw,1.2rem)]" /> Added</>
            ) : (
              <><ShoppingCart className="w-[clamp(0.8rem,3.5cqw,1.2rem)] h-[clamp(0.8rem,3.5cqw,1.2rem)]" /> Add</>
            )}
          </button>
        </div>
      </div>
    </Link>
  );
};
