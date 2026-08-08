import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Search, ChevronDown, Filter, X } from 'lucide-react';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
export const Shop: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryQuery = searchParams.get('category');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>(categoryQuery || 'all');
  const [sort, setSort] = useState<string>('featured');
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (category !== 'all') {
      result = result.filter(p => p.category === category);
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
      );
    }
    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating-desc':
        result.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case 'rating-asc':
        result.sort((a, b) => a.rating.rate - b.rating.rate);
        break;
      default:
        break;
    }
    return result;
  }, [search, category, sort]);
  return (
    <div className="min-h-screen bg-ink pb-8">
      <SEO 
        title="Shop" 
        description="Browse all products across categories. Find the best electronics, clothing, furniture, and more on SkyMart." 
      />
      <div className="w-full max-w-[1600px] mx-auto px-[clamp(1rem,4vw,9.5rem)] pt-[clamp(2rem,4vw,3rem)] pb-[clamp(1.5rem,4vw,2.5rem)]">
        <div id="scroll-sentinel" className="mb-[clamp(1.5rem,4cqw,2rem)]">
          <h1 className="font-heading font-bold text-[clamp(1.75rem,5cqw,2.75rem)] mb-0.5 drop-shadow-md leading-none relative -translate-y-[0.15em]">All Products</h1>
          <p className="text-white/50 text-[clamp(0.875rem,2.5cqw,1rem)]">Showing {filteredProducts.length} items</p>
        </div>
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[clamp(1rem,3cqw,1.5rem)] px-[clamp(1rem,3cqw,1.5rem)] py-[clamp(0.5rem,1.5cqw,0.875rem)] flex flex-col md:flex-row items-center gap-[clamp(0.5rem,2cqw,1rem)] mb-[clamp(1.5rem,4cqw,2rem)] shadow-lg">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input 
                type="text" 
                placeholder="Search products..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-ink border border-white/10 rounded-xl pl-11 pr-4 py-3 text-[clamp(0.75rem,2.5cqw,0.875rem)] focus:outline-none focus:border-volt/50 transition-colors"
              />
              {search && (
                <button 
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 w-full md:w-52">
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-ink border border-white/10 rounded-xl px-4 py-3 text-[clamp(0.75rem,2.5cqw,0.875rem)] appearance-none focus:outline-none focus:border-volt/50 transition-colors capitalize cursor-pointer"
                >
                  <option value="all">All Categories</option>
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
              </div>
              <div className="relative flex-1 w-full md:w-52">
                <select 
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="w-full bg-ink border border-white/10 rounded-xl px-4 py-3 text-[clamp(0.75rem,2.5cqw,0.875rem)] appearance-none focus:outline-none focus:border-volt/50 transition-colors cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating-desc">Top Rated</option>
                  <option value="rating-asc">Lowest Rated</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
              </div>
            </div>
          </div>
        {(category !== 'all' || search) && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-[clamp(0.75rem,2.5cqw,0.875rem)] text-white/50 mr-2 flex items-center gap-1">
              <Filter className="w-4 h-4" /> Active Filters:
            </span>
            {category !== 'all' && (
              <span className="inline-flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-[clamp(0.65rem,2cqw,0.75rem)] font-medium capitalize">
                Category: {category}
                <button onClick={() => setCategory('all')} className="ml-1 hover:text-red-400"><X className="w-3 h-3" /></button>
              </span>
            )}
            {search && (
              <span className="inline-flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-[clamp(0.65rem,2cqw,0.75rem)] font-medium">
                Search: "{search}"
                <button onClick={() => setSearch('')} className="ml-1 hover:text-red-400"><X className="w-3 h-3" /></button>
              </span>
            )}
            <button 
              onClick={() => { setCategory('all'); setSearch(''); }}
              className="text-[clamp(0.65rem,2cqw,0.75rem)] text-white/50 hover:text-white underline ml-2"
            >
              Clear all
            </button>
          </div>
        )}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 min-[460px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-10 min-[460px]:px-0 gap-x-[clamp(0.6rem,1.5cqw,0.85rem)] gap-y-[clamp(1rem,2cqw,1.25rem)]">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[clamp(1.5rem,4cqw,2rem)] p-[clamp(2rem,6cqw,4rem)] text-center flex flex-col items-center justify-center shadow-2xl">
            <div className="w-[clamp(4rem,10cqw,5rem)] h-[clamp(4rem,10cqw,5rem)] bg-white/5 rounded-full flex items-center justify-center mb-[clamp(1rem,3cqw,1.5rem)]">
              <Search className="w-[clamp(1.5rem,4cqw,2rem)] h-[clamp(1.5rem,4cqw,2rem)] text-white/20" />
            </div>
            <h2 className="font-heading font-bold text-[clamp(1.25rem,4cqw,2rem)] mb-2">No products found</h2>
            <p className="text-white/50 max-w-md mx-auto mb-[clamp(1rem,3cqw,1.5rem)] text-[clamp(0.875rem,2.5cqw,1rem)]">
              We couldn't find any products matching your current filters. Try adjusting your search or category.
            </p>
            <button 
              onClick={() => { setCategory('all'); setSearch(''); }}
              className="bg-volt/10 hover:bg-volt/20 text-volt border border-volt/20 px-[clamp(1rem,4cqw,2rem)] py-[clamp(0.75rem,2cqw,1rem)] rounded-[clamp(0.5rem,2cqw,0.75rem)] transition-colors font-medium text-[clamp(0.875rem,2.5cqw,1rem)] cursor-pointer"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
