import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Zap, ShoppingCart, LogOut, User as UserIcon, Menu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';
export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { cartCount, setIsCartOpen } = useCart();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      const sentinel = document.getElementById('scroll-sentinel');
      const navbar = document.getElementById('main-navbar');
      if (sentinel && navbar) {
        const sentinelRect = sentinel.getBoundingClientRect();
        const navRect = navbar.getBoundingClientRect();
        setIsScrolled(sentinelRect.top <= navRect.bottom - 1);
      } else {
        setIsScrolled(window.scrollY > 35);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  const navLinks = [
    { to: '/home', label: 'Home' },
    { to: '/products', label: 'Shop' },
    { to: '/about', label: 'About' },
  ];
  return (
    <nav id="main-navbar" className={cn(
      "bg-[#0d0d0d]/80 backdrop-blur-2xl sticky top-0 z-50 transition-shadow duration-500 ease-apple border-b",
      isScrolled ? "border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "border-transparent shadow-none"
    )}>
      <div className="max-w-[1600px] mx-auto px-[clamp(1.5rem,3vw,4.5rem)]">
        <div className="flex items-center justify-between h-[clamp(3.5rem,8cqw,4.5rem)]">
          <Link to="/home" className="flex items-center gap-[clamp(0.5rem,2cqw,0.75rem)] group">
            <div className="w-[clamp(1.75rem,5cqw,2.25rem)] h-[clamp(1.75rem,5cqw,2.25rem)] bg-volt rounded-[clamp(0.61rem,1.75cqw,0.86rem)] flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ease-expo transform-gpu shadow-[0_0_15px_rgba(200,244,0,0.3)]">
              <Zap className="w-[clamp(0.875rem,2.5cqw,1rem)] h-[clamp(0.875rem,2.5cqw,1rem)] fill-ink text-ink" />
            </div>
            <span className="font-heading font-bold text-[clamp(1.125rem,3.5cqw,1.25rem)] tracking-tight">
              Sky<span className="text-volt drop-shadow-[0_0_10px_rgba(200,244,0,0.3)]">Mart</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center md:gap-6 lg:gap-8 xl:gap-[clamp(2rem,5cqw,3.25rem)]">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => cn(
                  "text-[clamp(0.75rem,2cqw,0.875rem)] font-medium transition-colors duration-300 ease-apple hover:text-white relative py-1",
                  isActive ? "text-volt drop-shadow-[0_0_8px_rgba(200,244,0,0.5)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-volt after:rounded-full" : "text-white/50"
                )}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-[clamp(0.25rem,1cqw,0.5rem)] -mr-0.5">
            {user && (
              <div className="hidden sm:flex items-center gap-[clamp(0.5rem,2cqw,0.75rem)] bg-white/[0.03] border border-white/10 p-[clamp(0.125rem,0.5cqw,0.25rem)] pr-[clamp(0.75rem,2cqw,1rem)] rounded-[clamp(0.75rem,2cqw,1rem)] backdrop-blur-sm shadow-inner transition-colors duration-300 ease-apple hover:bg-white/5 cursor-default">
                <div className="w-[clamp(1.5rem,4cqw,2rem)] h-[clamp(1.5rem,4cqw,2rem)] rounded-[clamp(0.5rem,1.5cqw,0.75rem)] bg-volt text-ink flex items-center justify-center font-bold text-[clamp(0.85rem,2cqw,0.98rem)] shadow-[0_0_10px_rgba(200,244,0,0.2)]">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-[clamp(0.7rem,2cqw,0.85rem)] font-medium text-white/70 max-w-[clamp(60px,12cqw,110px)] truncate tracking-wide">
                  {user.name.toUpperCase()}
                </span>
              </div>
            )}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center justify-center w-[clamp(2rem,5cqw,2.5rem)] h-[clamp(2rem,5cqw,2.5rem)] bg-white/[0.03] border border-white/10 rounded-[clamp(0.75rem,2cqw,1rem)] hover:bg-white/10 transition-colors duration-300 ease-apple cursor-pointer shadow-inner text-white/70 hover:text-white group"
            >
              <ShoppingCart className="w-[clamp(1rem,2.5cqw,1.125rem)] h-[clamp(1rem,2.5cqw,1.125rem)] transition-transform duration-500 ease-spring transform-gpu group-hover:scale-[1.15]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-[clamp(1rem,2.5cqw,1.25rem)] h-[clamp(1rem,2.5cqw,1.25rem)] bg-volt text-ink rounded-full flex items-center justify-center text-[clamp(0.5rem,1.2cqw,0.6rem)] font-bold border-[2px] border-[#0d0d0d] shadow-[0_0_10px_rgba(200,244,0,0.3)]">
                  {cartCount}
                </span>
              )}
            </button>
            {user ? (
              <button
                onClick={handleLogout}
                className="flex items-center justify-center w-[clamp(2rem,5cqw,2.5rem)] h-[clamp(2rem,5cqw,2.5rem)] bg-white/[0.03] border border-white/10 rounded-[clamp(0.75rem,2cqw,1rem)] hover:bg-white/10 transition-colors duration-300 ease-apple cursor-pointer shadow-inner text-white/70 hover:text-white group"
                title="Logout"
              >
                <LogOut className="w-[clamp(1rem,2.5cqw,1.125rem)] h-[clamp(1rem,2.5cqw,1.125rem)] transition-transform duration-500 ease-expo transform-gpu group-hover:translate-x-0.5" />
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center justify-center w-[clamp(2rem,5cqw,2.5rem)] h-[clamp(2rem,5cqw,2.5rem)] bg-white/[0.03] border border-white/10 rounded-[clamp(0.75rem,2cqw,1rem)] hover:bg-white/10 transition-colors duration-300 ease-apple cursor-pointer shadow-inner text-white/70 hover:text-white group"
              >
                <UserIcon className="w-[clamp(1rem,2.5cqw,1.125rem)] h-[clamp(1rem,2.5cqw,1.125rem)] transition-transform duration-500 ease-spring transform-gpu group-hover:scale-110" />
              </Link>
            )}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-[clamp(2rem,5cqw,2.5rem)] h-[clamp(2rem,5cqw,2.5rem)] bg-white/[0.03] border border-white/10 rounded-[clamp(0.75rem,2cqw,1rem)] hover:bg-white/10 transition-colors duration-300 ease-apple cursor-pointer shadow-inner text-white/70 hover:text-white group"
            >
              <Menu className="w-[clamp(1rem,2.5cqw,1.125rem)] h-[clamp(1rem,2.5cqw,1.125rem)] transition-transform duration-500 ease-spring transform-gpu group-hover:scale-110" />
            </button>
          </div>
        </div>
      </div>
      <div className={cn(
        "md:hidden absolute top-full left-0 w-full bg-[#0d0d0d] border-b border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-500 ease-apple transform-gpu z-40 origin-top",
        isMobileMenuOpen ? "max-h-[500px] opacity-100 py-[clamp(1.5rem,4cqw,2rem)]" : "max-h-0 opacity-0 py-0 border-transparent"
      )}>
        <div className="flex flex-col gap-[clamp(0.5rem,2cqw,1rem)] px-[clamp(1.5rem,4cqw,2.5rem)]">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) => cn(
                "text-[clamp(1.125rem,3.5cqw,1.25rem)] font-heading font-bold transition-all duration-300 ease-apple p-[clamp(0.75rem,3cqw,1rem)] rounded-[clamp(0.5rem,2cqw,1rem)] flex items-center justify-between group",
                isActive 
                  ? "bg-volt/10 text-volt border border-volt/20 shadow-[0_0_15px_rgba(200,244,0,0.15)]" 
                  : "text-white/60 hover:bg-white/5 hover:text-white border border-transparent"
              )}
            >
              {link.label}
              <span className={cn(
                "text-[clamp(0.65rem,1.5cqw,0.875rem)] transition-transform duration-500 ease-spring transform-gpu",
                "group-hover:translate-x-1"
              )}>
                →
              </span>
            </NavLink>
          ))}
          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left text-[clamp(1.125rem,3.5cqw,1.25rem)] font-heading font-bold transition-all duration-300 ease-apple p-[clamp(0.75rem,3cqw,1rem)] rounded-[clamp(0.5rem,2cqw,1rem)] flex items-center justify-between group text-red-500/80 hover:bg-red-500/10 hover:text-red-500 border border-transparent hover:border-red-500/20 shadow-none hover:shadow-[0_0_15px_rgba(239,68,68,0.15)]"
            >
              Logout
              <LogOut className="w-[clamp(1rem,3cqw,1.25rem)] h-[clamp(1rem,3cqw,1.25rem)] transition-transform duration-500 ease-spring transform-gpu group-hover:translate-x-1" />
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-left text-[clamp(1.125rem,3.5cqw,1.25rem)] font-heading font-bold transition-all duration-300 ease-apple p-[clamp(0.75rem,3cqw,1rem)] rounded-[clamp(0.5rem,2cqw,1rem)] flex items-center justify-between group text-white/60 hover:bg-white/5 hover:text-white border border-transparent"
            >
              Login
              <UserIcon className="w-[clamp(1rem,3cqw,1.25rem)] h-[clamp(1rem,3cqw,1.25rem)] transition-transform duration-500 ease-spring transform-gpu group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
