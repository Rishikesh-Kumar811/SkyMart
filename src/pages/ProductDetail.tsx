import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { StarRating } from '../components/StarRating';
import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { ShoppingCart, Heart, ChevronLeft, ChevronRight, Truck, Shield, RotateCcw, Package, Check } from 'lucide-react';
import { useToast } from '../components/Toast';
export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { cart, addToCart } = useCart();
  const { showToast } = useToast();
  const product = PRODUCTS.find(p => p.id === Number(id));
  const isInCart = cart.some(item => item.product.id === Number(id));
  const [imgError, setImgError] = useState(false);
  const [liked, setLiked] = useState(false);
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 5);
  }, [product]);
  const currentIndex = PRODUCTS.findIndex(p => p.id === Number(id));
  const prevProduct = currentIndex > 0 ? PRODUCTS[currentIndex - 1] : null;
  const nextProduct = currentIndex < PRODUCTS.length - 1 ? PRODUCTS[currentIndex + 1] : null;
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-[clamp(1.25rem,5cqw,1.5rem)] font-heading font-bold mb-4">Product Not Found</h1>
        <Link to="/products" className="text-volt hover:underline">← Back to products</Link>
      </div>
    );
  }
  return (
    <div className="w-full max-w-[1600px] mx-auto px-[clamp(1rem,4vw,9.5rem)] pt-[clamp(2rem,4vw,3rem)] pb-[clamp(1.5rem,4vw,3rem)]">
      <SEO 
        title={product.title}
        description={product.description}
        image={product.image}
      />
      <div id="scroll-sentinel" className="flex items-center gap-[clamp(0.25rem,1cqw,0.5rem)] text-[clamp(0.75rem,2cqw,0.875rem)] text-white/40 mb-[clamp(1.5rem,4cqw,2rem)]">
        <Link to="/products" className="hover:text-volt transition-colors flex items-center gap-1 cursor-pointer">
          <ChevronLeft size={14} className="w-[clamp(0.75rem,2cqw,0.875rem)] h-[clamp(0.75rem,2cqw,0.875rem)]" /> Products
        </Link>
        <span>/</span>
        <span className="capitalize">{product.category}</span>
        <span>/</span>
        <span className="text-white/70 font-medium">{product.title}</span>
      </div>
      <div className="grid lg:grid-cols-2 gap-[clamp(1.5rem,5cqw,3rem)] mb-[clamp(2rem,6cqw,4rem)]">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[clamp(1.5rem,4cqw,2rem)] flex items-center justify-center aspect-square overflow-hidden shadow-xl">
          {imgError ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-volt/10 to-volt/25 rounded-xl gap-3">
              <Package size={64} className="text-volt w-[clamp(2.5rem,8cqw,4rem)] h-[clamp(2.5rem,8cqw,4rem)]" />
              <span className="text-volt font-heading font-bold text-[clamp(1rem,3cqw,1.25rem)] text-center px-6">{product.title}</span>
            </div>
          ) : (
            <img src={product.image} alt={product.title} onError={() => setImgError(true)} className="w-full h-full object-contain p-[clamp(2rem,6cqw,4rem)] mix-blend-screen drop-shadow-2xl filter contrast-125" />
          )}
        </div>
        <div className="@container flex flex-col">
          <span className="inline-block bg-white/10 text-white border border-white/20 text-[clamp(0.65rem,2cqw,0.875rem)] font-medium px-[clamp(0.6rem,3cqw,1rem)] py-[clamp(0.2rem,1.5cqw,0.4rem)] rounded-full mb-[clamp(0.5rem,2cqw,1rem)] self-start capitalize cursor-default backdrop-blur-sm">
            {product.category}
          </span>
          <h1 className="font-heading font-bold text-[clamp(2rem,6cqw,3rem)] text-white mb-[clamp(0.5rem,2cqw,1rem)] leading-tight">{product.title}</h1>
          <div className="flex items-center gap-[clamp(0.5rem,2cqw,0.75rem)]">
            <StarRating rate={product.rating.rate} />
            <span className="text-white/60 text-[clamp(0.75rem,2.5cqw,0.875rem)] font-medium">{product.rating.rate}</span>
            <span className="text-white/30 text-[clamp(0.75rem,2.5cqw,0.875rem)]">({product.rating.count} reviews)</span>
          </div>
          <div className="border-t border-white/10 my-[clamp(1rem,3cqw,1.5rem)]" />
          <p className="font-heading font-bold text-[clamp(2rem,6cqw,3rem)] text-volt mb-[clamp(0.25rem,1cqw,0.5rem)] drop-shadow-[0_0_15px_rgba(200,244,0,0.3)]">${product.price.toFixed(2)}</p>
          <div className="border-t border-white/10 my-[clamp(1rem,3cqw,1.5rem)]" />
          <p className="text-white/60 leading-relaxed mb-[clamp(1.5rem,5cqw,2rem)] text-[clamp(0.875rem,2.5cqw,1rem)]">{product.description}</p>
          <div className="flex gap-[clamp(0.5rem,2cqw,1rem)] mb-[clamp(1.5rem,5cqw,2rem)]">
            <button
              onClick={() => {
                const alreadyInCart = cart.some(item => item.product.id === product.id);
                addToCart(product);
                if (alreadyInCart) {
                  showToast('Quantity updated!');
                } else {
                  showToast('Added to Cart');
                }
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-[clamp(0.75rem,3cqw,1rem)] rounded-[clamp(0.75rem,3cqw,1rem)] font-heading font-bold text-[clamp(0.875rem,2.5cqw,1rem)] transition-all cursor-pointer active:scale-[0.97] shadow-lg hover:shadow-xl ${
                isInCart
                  ? 'bg-green-500/15 text-green-400 border border-green-500/20 backdrop-blur-sm'
                  : 'bg-volt text-ink hover:bg-[#e2ff66] shadow-[0_0_20px_rgba(200,244,0,0.2)]'
              }`}
            >
              {isInCart ? <Check size={18} className="w-[clamp(1rem,3cqw,1.25rem)] h-[clamp(1rem,3cqw,1.25rem)]" /> : <ShoppingCart size={18} className="w-[clamp(1rem,3cqw,1.25rem)] h-[clamp(1rem,3cqw,1.25rem)]" />}
              {isInCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
              className={`w-[clamp(3rem,10cqw,3.5rem)] h-[clamp(3rem,10cqw,3.5rem)] rounded-[clamp(0.75rem,3cqw,1rem)] border flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm shadow-lg ${
                liked 
                  ? 'bg-red-500/15 border-red-500/30 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]' 
                  : 'bg-white/5 border-white/10 text-white/40 hover:text-red-400 hover:border-red-400/30'
              }`}
            >
              <Heart size={20} className="w-[clamp(1.125rem,4cqw,1.25rem)] h-[clamp(1.125rem,4cqw,1.25rem)]" fill={liked ? 'currentColor' : 'none'} />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-[clamp(0.5rem,2cqw,1rem)] mb-[clamp(1.5rem,4cqw,2rem)]">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[clamp(0.75rem,3cqw,1rem)] p-[clamp(0.75rem,3cqw,1.25rem)] text-center shadow-lg">
              <Truck size={22} className="mx-auto mb-[clamp(0.25rem,1cqw,0.5rem)] text-white/50 w-[clamp(1.125rem,4cqw,1.5rem)] h-[clamp(1.125rem,4cqw,1.5rem)]" />
              <p className="text-[clamp(0.65rem,2cqw,0.875rem)] font-semibold text-white/80">Free Delivery</p>
              <p className="text-[clamp(0.55rem,1.5cqw,0.65rem)] text-white/40 mt-0.5">On orders $50+</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[clamp(0.75rem,3cqw,1rem)] p-[clamp(0.75rem,3cqw,1.25rem)] text-center shadow-lg">
              <Shield size={22} className="mx-auto mb-[clamp(0.25rem,1cqw,0.5rem)] text-white/50 w-[clamp(1.125rem,4cqw,1.5rem)] h-[clamp(1.125rem,4cqw,1.5rem)]" />
              <p className="text-[clamp(0.65rem,2cqw,0.875rem)] font-semibold text-white/80">Secure Pay</p>
              <p className="text-[clamp(0.55rem,1.5cqw,0.65rem)] text-white/40 mt-0.5">256-bit SSL</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[clamp(0.75rem,3cqw,1rem)] p-[clamp(0.75rem,3cqw,1.25rem)] text-center shadow-lg">
              <RotateCcw size={22} className="mx-auto mb-[clamp(0.25rem,1cqw,0.5rem)] text-white/50 w-[clamp(1.125rem,4cqw,1.5rem)] h-[clamp(1.125rem,4cqw,1.5rem)]" />
              <p className="text-[clamp(0.65rem,2cqw,0.875rem)] font-semibold text-white/80">Easy Returns</p>
              <p className="text-[clamp(0.55rem,1.5cqw,0.65rem)] text-white/40 mt-0.5">30-day policy</p>
            </div>
          </div>
          <div className={`grid ${prevProduct && nextProduct ? 'grid-cols-2' : 'grid-cols-1'} gap-[clamp(0.5rem,2cqw,1rem)]`}>
            {prevProduct && (
              <Link to={`/products/${prevProduct.id}`}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[clamp(0.75rem,3cqw,1rem)] py-[clamp(0.75rem,3cqw,1.25rem)] px-[clamp(1rem,4cqw,1.5rem)] flex items-center justify-center gap-2 text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer font-medium text-[clamp(0.75rem,2.5cqw,0.875rem)] shadow-lg">
                <ChevronLeft size={16} /> Previous
              </Link>
            )}
            {nextProduct && (
              <Link to={`/products/${nextProduct.id}`}
                className="bg-volt/10 text-volt border border-volt/20 rounded-[clamp(0.75rem,3cqw,1rem)] py-[clamp(0.75rem,3cqw,1.25rem)] px-[clamp(1rem,4cqw,1.5rem)] flex items-center justify-center gap-2 font-semibold hover:bg-volt hover:text-ink transition-colors cursor-pointer text-[clamp(0.75rem,2.5cqw,0.875rem)] shadow-lg">
                Next <ChevronRight size={16} />
              </Link>
            )}
          </div>
        </div>
      </div>
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="font-heading font-bold text-[clamp(1.25rem,5cqw,1.5rem)] mb-6">Related Products</h2>
          <div className="grid grid-cols-1 min-[460px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-10 min-[460px]:px-0 gap-x-[clamp(0.6rem,1.5cqw,0.85rem)] gap-y-[clamp(1rem,2cqw,1.25rem)]">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
};
