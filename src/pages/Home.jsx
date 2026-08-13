import { useMemo } from "react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { PRODUCTS, CATEGORIES } from "../data/products";
import { Link } from "react-router-dom";
import { ShoppingBag, TrendingUp, Star, Tag, Zap, Shield, ArrowRight } from "lucide-react";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
const Home = () => {
  const { user } = useAuth();
  const { cartCount, cartTotal } = useCart();
  const getGreeting = () => {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 17) return "Good afternoon";
    return "Good evening";
  };
  const categoryIcons = {
    electronics: "\u{1F4BB}",
    clothing: "\u{1F455}",
    furniture: "\u{1F6CB}\uFE0F",
    home: "\u{1F3E0}",
    sports: "\u26BD",
    accessories: "\u231A"
  };
  const categoryCounts = useMemo(() => {
    const counts = {};
    PRODUCTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);
  const topRated = useMemo(() => [...PRODUCTS].sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 5), []);
  const newArrivals = useMemo(() => PRODUCTS.slice(0, 5), []);
  const ProductMiniList = ({ products, title, icon: Icon, sortParam }) => <div className="bg-surface border border-white/10 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-heading font-bold text-[clamp(0.875rem,3cqw,1rem)] flex items-center gap-2 text-white">
          <Icon size={18} className={`text-${title === "Top Rated" ? "amber-400 fill-amber-400" : "volt fill-volt"}`} /> {title}
        </h2>
        <Link to={`/products${sortParam ? `?sort=${sortParam}` : ""}`} className="text-volt text-[clamp(0.65rem,2cqw,0.75rem)] hover:text-[#e2ff66] flex items-center gap-1 transition-colors duration-300 ease-apple">
          See all <ArrowRight size={12} />
        </Link>
      </div>
      <div className="space-y-2">
        {products.map((p) => <Link
    key={p.id}
    to={`/products/${p.id}`}
    className="group flex items-center gap-3 p-2.5 hover:bg-white/5 border border-transparent hover:border-white/10 rounded-xl transition-all duration-300 ease-apple transform-gpu"
  >
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 p-1.5">
              <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-contain mix-blend-multiply" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white/70 text-[clamp(0.65rem,2cqw,0.75rem)] line-clamp-1">{p.title}</p>
              <p className="text-volt font-heading font-bold text-[clamp(0.75rem,2.5cqw,0.875rem)] mt-0.5">${p.price.toFixed(2)}</p>
            </div>
            <button
    onClick={(e) => {
      e.preventDefault();
    }}
    className="shrink-0 w-7 h-7 bg-volt/10 hover:bg-volt text-volt hover:text-ink rounded-lg flex items-center justify-center transition-all duration-300 ease-apple transform-gpu active:scale-95"
  >
              <ShoppingBag size={13} />
            </button>
          </Link>)}
      </div>
    </div>;
  return <div className="w-full max-w-[1600px] mx-auto px-[clamp(1rem,4vw,9.5rem)] pt-[clamp(2rem,4vw,3rem)] pb-[clamp(2rem,5vw,4rem)]">
      <SEO
    title="Home"
    description="Discover today's picks — hand-curated products across electronics, fashion, and more on SkyMart."
    schema={{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "SkyMart",
      "url": "https://skymart.com"
    }}
  />
      <section id="scroll-sentinel" className="relative overflow-hidden rounded-[clamp(1rem,4cqw,2rem)] bg-surface border border-white/10 py-[clamp(1.5rem,3cqw,2.5rem)] px-[clamp(1.5rem,4cqw,3rem)] mb-[clamp(1.5rem,4cqw,2.5rem)] shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-volt/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-volt/4 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
    backgroundImage: "linear-gradient(rgba(200,244,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,244,0,1) 1px, transparent 1px)",
    backgroundSize: "40px 40px"
  }} />
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-[clamp(2rem,5cqw,5rem)]">
          <div>
            <p className="text-volt/70 text-[clamp(0.75rem,2.5cqw,0.875rem)] tracking-widest uppercase mb-2">{getGreeting()} 👋</p>
            <h1 className="font-heading font-bold text-[clamp(2rem,6cqw,4rem)] text-white leading-tight mb-[clamp(0.5rem,1.5cqw,1rem)] drop-shadow-md">
              Welcome back,<br />
              <span className="text-volt drop-shadow-[0_0_15px_rgba(200,244,0,0.3)]">{user?.name?.split(" ")[0] || "Shopper"}!</span>
            </h1>
            <p className="text-[clamp(0.875rem,2.5cqw,1.125rem)] text-white/60 max-w-[min(100%,40ch)] mb-[clamp(1rem,3cqw,2rem)] leading-relaxed">
              Discover today's picks — hand-curated products across electronics, fashion, and more.
            </p>
            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-[clamp(0.75rem,2cqw,1.5rem)] max-w-[90%] mx-auto sm:max-w-none sm:mx-0">
              <Link to="/products" className="bg-volt text-ink font-semibold px-6 sm:px-[clamp(1.25rem,2.5cqw,2.5rem)] py-3 sm:py-[clamp(0.75rem,1.5cqw,1.25rem)] rounded-2xl sm:rounded-[clamp(1rem,2cqw,1.5rem)] hover:bg-[#e2ff66] transition-all duration-300 ease-spring transform-gpu hover:scale-105 active:scale-95 flex items-center justify-center gap-2 sm:gap-[clamp(0.5rem,1cqw,1rem)] text-center whitespace-nowrap text-base sm:text-[clamp(0.875rem,1.5cqw,1.125rem)]">
                Shop Now <ArrowRight size={16} />
              </Link>
              <Link to="/products" className="border border-white/15 text-white/70 px-6 sm:px-[clamp(1.25rem,2.5cqw,2.5rem)] py-3 sm:py-[clamp(0.75rem,1.5cqw,1.25rem)] rounded-2xl sm:rounded-[clamp(1rem,2cqw,1.5rem)] hover:border-white/30 hover:text-white transition-colors duration-300 ease-apple transform-gpu active:scale-95 flex items-center justify-center text-center whitespace-nowrap text-base sm:text-[clamp(0.875rem,1.5cqw,1.125rem)]">
                View All Products
              </Link>
            </div>
          </div>
          <div className="shrink-0 grid grid-cols-1 min-[400px]:grid-cols-2 sm:flex sm:flex-col gap-[clamp(0.5rem,2cqw,1rem)] sm:gap-[clamp(1rem,2.5cqw,1.5rem)] w-[90%] mx-auto sm:w-[clamp(14rem,22cqw,18rem)] sm:mx-0">
            <div className="bg-volt/10 border border-volt/20 rounded-[clamp(1rem,3cqw,1.5rem)] px-[clamp(1rem,4cqw,2rem)] py-[clamp(0.75rem,2cqw,1.25rem)] text-center backdrop-blur-sm shadow-[0_4px_20px_rgba(200,244,0,0.1)]">
              <p className="font-heading font-bold text-[clamp(1.5rem,4cqw,2.5rem)] text-volt drop-shadow-[0_0_10px_rgba(200,244,0,0.4)]">20+</p>
              <p className="text-white/60 text-[clamp(0.7rem,2cqw,0.875rem)] mt-1 font-medium">Products Available</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[clamp(1rem,3cqw,1.5rem)] px-[clamp(1rem,4cqw,2rem)] py-[clamp(0.75rem,2cqw,1.25rem)] text-center backdrop-blur-sm shadow-[0_4px_20px_rgba(255,255,255,0.05)]">
              <p className="font-heading font-bold text-[clamp(1.5rem,4cqw,2rem)] text-white">Free</p>
              <p className="text-white/60 text-[clamp(0.7rem,2cqw,0.875rem)] mt-1 font-medium">Delivery on ₹999+</p>
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(0.5rem,2cqw,1.5rem)] mb-[clamp(1.5rem,4cqw,2.5rem)] w-full">
        <div className="w-full bg-white/5 border border-white/10 rounded-[clamp(1rem,3cqw,1.5rem)] p-[clamp(0.75rem,2.5cqw,1.25rem)] flex flex-row items-start justify-start gap-[clamp(0.75rem,2cqw,1.25rem)] backdrop-blur-md shadow-lg transition-transform duration-500 ease-apple transform-gpu hover:-translate-y-1">
          <div className="w-[clamp(2.25rem,5cqw,3rem)] h-[clamp(2.25rem,5cqw,3rem)] mt-0.5 rounded-[clamp(0.75rem,2cqw,1rem)] flex items-center justify-center shrink-0 bg-volt/15 text-volt border border-volt/20 shadow-[0_0_15px_rgba(200,244,0,0.2)]">
            <ShoppingBag size={20} className="w-[clamp(1.125rem,2.5cqw,1.375rem)] h-[clamp(1.125rem,2.5cqw,1.375rem)] drop-shadow-md" />
          </div>
          <div className="flex flex-col text-left whitespace-nowrap">
            <p className="font-heading font-bold text-[clamp(1.25rem,4cqw,1.75rem)] text-white leading-tight">{cartCount}</p>
            <p className="text-white/80 text-[clamp(0.75rem,2.5cqw,0.875rem)] font-medium mt-0.5">Cart Items</p>
            <p className="text-white/40 text-[clamp(0.65rem,2cqw,0.75rem)] mt-0.5">In your bag</p>
          </div>
        </div>
        <div className="w-full bg-white/5 border border-white/10 rounded-[clamp(1rem,3cqw,1.5rem)] p-[clamp(0.75rem,2.5cqw,1.25rem)] flex flex-row items-start justify-start gap-[clamp(0.75rem,2cqw,1.25rem)] backdrop-blur-md shadow-lg transition-transform duration-500 ease-apple transform-gpu hover:-translate-y-1">
          <div className="w-[clamp(2.25rem,5cqw,3rem)] h-[clamp(2.25rem,5cqw,3rem)] mt-0.5 rounded-[clamp(0.75rem,2cqw,1rem)] flex items-center justify-center shrink-0 bg-blue-500/15 text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <TrendingUp size={20} className="w-[clamp(1.125rem,2.5cqw,1.375rem)] h-[clamp(1.125rem,2.5cqw,1.375rem)] drop-shadow-md" />
          </div>
          <div className="flex flex-col text-left whitespace-nowrap">
            <p className="font-heading font-bold text-[clamp(1.25rem,4cqw,1.75rem)] text-white leading-tight">${cartTotal.toFixed(2)}</p>
            <p className="text-white/80 text-[clamp(0.75rem,2.5cqw,0.875rem)] font-medium mt-0.5">Cart Value</p>
            <p className="text-white/40 text-[clamp(0.65rem,2cqw,0.75rem)] mt-0.5">Ready to checkout</p>
          </div>
        </div>
        <div className="w-full bg-white/5 border border-white/10 rounded-[clamp(1rem,3cqw,1.5rem)] p-[clamp(0.75rem,2.5cqw,1.25rem)] flex flex-row items-start justify-start gap-[clamp(0.75rem,2cqw,1.25rem)] backdrop-blur-md shadow-lg transition-transform duration-500 ease-apple transform-gpu hover:-translate-y-1">
          <div className="w-[clamp(2.25rem,5cqw,3rem)] h-[clamp(2.25rem,5cqw,3rem)] mt-0.5 rounded-[clamp(0.75rem,2cqw,1rem)] flex items-center justify-center shrink-0 bg-amber-500/15 text-amber-400 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Star size={20} className="w-[clamp(1.125rem,2.5cqw,1.375rem)] h-[clamp(1.125rem,2.5cqw,1.375rem)] drop-shadow-md" />
          </div>
          <div className="flex flex-col text-left whitespace-nowrap">
            <p className="font-heading font-bold text-[clamp(1.25rem,4cqw,1.75rem)] text-white leading-tight">5</p>
            <p className="text-white/80 text-[clamp(0.75rem,2.5cqw,0.875rem)] font-medium mt-0.5">Top Products</p>
            <p className="text-white/40 text-[clamp(0.65rem,2cqw,0.75rem)] mt-0.5">Highly rated</p>
          </div>
        </div>
        <div className="w-full bg-white/5 border border-white/10 rounded-[clamp(1rem,3cqw,1.5rem)] p-[clamp(0.75rem,2.5cqw,1.25rem)] flex flex-row items-start justify-start gap-[clamp(0.75rem,2cqw,1.25rem)] backdrop-blur-md shadow-lg transition-transform duration-500 ease-apple transform-gpu hover:-translate-y-1">
          <div className="w-[clamp(2.25rem,5cqw,3rem)] h-[clamp(2.25rem,5cqw,3rem)] mt-0.5 rounded-[clamp(0.75rem,2cqw,1rem)] flex items-center justify-center shrink-0 bg-purple-500/15 text-purple-400 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <Tag size={20} className="w-[clamp(1.125rem,2.5cqw,1.375rem)] h-[clamp(1.125rem,2.5cqw,1.375rem)] drop-shadow-md" />
          </div>
          <div className="flex flex-col text-left whitespace-nowrap">
            <p className="font-heading font-bold text-[clamp(1.25rem,4cqw,1.75rem)] text-white leading-tight">{CATEGORIES.length}</p>
            <p className="text-white/80 text-[clamp(0.75rem,2.5cqw,0.875rem)] font-medium mt-0.5">Categories</p>
            <p className="text-white/40 text-[clamp(0.65rem,2cqw,0.75rem)] mt-0.5">To explore</p>
          </div>
        </div>
      </div>
      <section className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-heading font-bold text-[clamp(1.125rem,4cqw,1.25rem)]">Shop by Category</h2>
          <Link to="/products" className="text-volt text-[clamp(0.75rem,2.5cqw,0.875rem)] hover:text-[#e2ff66] transition-colors duration-300 ease-apple flex items-center gap-1">
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,clamp(120px,15cqw,180px)),1fr))] gap-[clamp(0.5rem,1.5cqw,1rem)]">
          {CATEGORIES.map((cat) => <Link
    key={cat}
    to={`/products?category=${encodeURIComponent(cat)}`}
    className="group bg-white/5 border border-white/10 hover:border-volt/50 rounded-[clamp(1rem,3cqw,1.5rem)] p-[clamp(1rem,3cqw,1.5rem)] text-center transition-all duration-500 ease-apple transform-gpu hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,244,0,0.1)] backdrop-blur-sm"
  >
              <div className="text-[clamp(1.5rem,4cqw,2.5rem)] mb-[clamp(0.5rem,1cqw,1rem)] drop-shadow-md">{categoryIcons[cat] || "\u{1F4E6}"}</div>
              <p className="font-semibold text-white/90 text-[clamp(0.75rem,2.5cqw,0.875rem)] capitalize">{cat}</p>
              <p className="text-white/50 text-[clamp(0.65rem,2cqw,0.75rem)] mt-1">{categoryCounts[cat] || 0} items</p>
            </Link>)}
        </div>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <ProductMiniList products={topRated} title="Top Rated" icon={Star} sortParam="rating" />
        <ProductMiniList products={newArrivals} title="New Arrivals" icon={Zap} />
      </div>
      <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(min(100%,clamp(250px,30cqw,350px)),1fr))] gap-[clamp(0.5rem,2cqw,1.5rem)]">
        <div className="bg-white/5 border border-white/10 rounded-[clamp(1rem,3cqw,1.5rem)] p-[clamp(1rem,3cqw,1.5rem)] flex items-center gap-4 backdrop-blur-md">
          <Zap size={24} className="-translate-y-[0.31rem] text-volt shrink-0 w-[clamp(1.25rem,4cqw,1.75rem)] h-[clamp(1.25rem,4cqw,1.75rem)] drop-shadow-[0_0_10px_rgba(200,244,0,0.3)]" />
          <div>
            <p className="font-semibold text-white/90 text-[clamp(0.75rem,2.5cqw,0.875rem)]">Fast Delivery</p>
            <p className="text-white/50 text-[clamp(0.65rem,2cqw,0.75rem)]">Same-day on select items</p>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-[clamp(1rem,3cqw,1.5rem)] p-[clamp(1rem,3cqw,1.5rem)] flex items-center gap-4 backdrop-blur-md">
          <Shield size={24} className="-translate-y-[0.31rem] text-blue-400 shrink-0 w-[clamp(1.25rem,4cqw,1.75rem)] h-[clamp(1.25rem,4cqw,1.75rem)] drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
          <div>
            <p className="font-semibold text-white/90 text-[clamp(0.75rem,2.5cqw,0.875rem)]">Secure Payments</p>
            <p className="text-white/50 text-[clamp(0.65rem,2cqw,0.75rem)]">100% encrypted checkout</p>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-[clamp(1rem,3cqw,1.5rem)] p-[clamp(1rem,3cqw,1.5rem)] flex items-center gap-4 backdrop-blur-md">
          <Tag size={24} className="-translate-y-[0.31rem] text-green-400 shrink-0 w-[clamp(1.25rem,4cqw,1.75rem)] h-[clamp(1.25rem,4cqw,1.75rem)] drop-shadow-[0_0_10px_rgba(74,222,128,0.3)]" />
          <div>
            <p className="font-semibold text-white/90 text-[clamp(0.75rem,2.5cqw,0.875rem)]">Best Prices</p>
            <p className="text-white/50 text-[clamp(0.65rem,2cqw,0.75rem)]">Price-match guarantee</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>;
};
export {
  Home
};
