import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { useToast } from './Toast';
export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();
  const { showToast } = useToast();
  if (!isCartOpen) return null;
  return (
    <>
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
        onClick={() => setIsCartOpen(false)}
      />
      <div className={clsx(
        "fixed top-0 right-0 h-full w-[min(100%,clamp(320px,80cqw,480px))] max-w-full bg-black/60 backdrop-blur-2xl border-l border-white/10 z-[70] flex flex-col transform transition-transform duration-500 ease-apple transform-gpu shadow-[-10px_0_30px_rgba(0,0,0,0.5)]",
        isCartOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="p-[clamp(1rem,3cqw,1.5rem)] border-b border-white/10 flex items-center justify-between bg-white/5">
          <h2 className="text-[clamp(1.25rem,4cqw,1.5rem)] font-heading font-bold flex items-center gap-[clamp(0.5rem,2cqw,0.75rem)] drop-shadow-md">
            <ShoppingBag className="w-[clamp(1.25rem,4cqw,1.5rem)] h-[clamp(1.25rem,4cqw,1.5rem)] text-volt drop-shadow-[0_0_10px_rgba(200,244,0,0.3)]" />
            Cart
            {cart.length > 0 && (
              <span className="text-[clamp(0.65rem,2cqw,0.75rem)] bg-volt/20 border border-volt/30 text-volt px-[clamp(0.5rem,2cqw,0.75rem)] py-[clamp(0.125rem,0.5cqw,0.25rem)] rounded-full font-bold shadow-[0_0_15px_rgba(200,244,0,0.1)]">
                {cart.reduce((t, i) => t + i.quantity, 0)} items
              </span>
            )}
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-[clamp(0.25rem,1cqw,0.5rem)] rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm border border-transparent hover:border-white/10"
          >
            <X className="w-[clamp(1.25rem,4cqw,1.5rem)] h-[clamp(1.25rem,4cqw,1.5rem)]" />
          </button>
        </div>
        <div className="flex-grow overflow-y-auto p-[clamp(1rem,3cqw,1.5rem)] space-y-[clamp(1rem,3cqw,1.5rem)] scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-[clamp(0.75rem,2cqw,1rem)]">
              <div className="w-[clamp(4rem,10cqw,5rem)] h-[clamp(4rem,10cqw,5rem)] bg-white/5 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-sm shadow-inner">
                <ShoppingBag className="w-[clamp(1.5rem,4cqw,2rem)] h-[clamp(1.5rem,4cqw,2rem)] text-white/20" />
              </div>
              <div>
                <p className="text-[clamp(1rem,3cqw,1.125rem)] font-medium text-white">Cart is empty</p>
                <p className="text-white/50 text-[clamp(0.75rem,2.5cqw,0.875rem)] mt-1">Go shop something cool!</p>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="px-[clamp(1.5rem,4cqw,2rem)] py-[clamp(0.5rem,2cqw,0.75rem)] bg-white/5 border border-white/10 hover:bg-white/10 rounded-[clamp(0.5rem,2cqw,0.75rem)] transition-all duration-300 ease-apple transform-gpu hover:scale-105 active:scale-95 mt-[clamp(0.75rem,2cqw,1rem)] text-[clamp(0.75rem,2.5cqw,0.875rem)] font-medium backdrop-blur-sm shadow-lg hover:shadow-xl cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.product.id} className="flex gap-[clamp(0.75rem,3cqw,1rem)] bg-white/5 backdrop-blur-md rounded-[clamp(1rem,3cqw,1.5rem)] p-[clamp(0.75rem,2.5cqw,1rem)] border border-white/10 shadow-lg">
                <div className="w-[clamp(5rem,15cqw,6rem)] h-[clamp(5rem,15cqw,6rem)] bg-white/10 border border-white/10 rounded-[clamp(0.75rem,2.5cqw,1rem)] p-[clamp(0.5rem,2cqw,0.75rem)] flex-shrink-0 backdrop-blur-sm shadow-inner">
                  <img 
                    src={item.product.image} 
                    alt={item.product.title}
                    className="w-full h-full object-contain mix-blend-screen drop-shadow-md"
                  />
                </div>
                <div className="flex flex-col flex-grow justify-between py-1">
                  <div>
                    <h4 className="text-[clamp(0.75rem,2.5cqw,0.875rem)] font-medium line-clamp-2 leading-snug">{item.product.title}</h4>
                    <p className="text-volt font-heading font-bold mt-1 text-[clamp(0.875rem,3cqw,1.125rem)] drop-shadow-[0_0_10px_rgba(200,244,0,0.3)]">${(item.product.price * item.quantity).toFixed(2)}</p>
                    <p className="text-white/40 text-[clamp(0.65rem,2cqw,0.75rem)] mt-0.5">${item.product.price.toFixed(2)} each</p>
                  </div>
                  <div className="flex items-center justify-between mt-[clamp(0.5rem,2cqw,1rem)]">
                    <div className="flex items-center gap-[clamp(0.25rem,1cqw,0.5rem)] bg-black/40 rounded-[clamp(0.5rem,2cqw,0.75rem)] p-1 border border-white/10 shadow-inner">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-[clamp(1.5rem,4cqw,2rem)] h-[clamp(1.5rem,4cqw,2rem)] flex items-center justify-center rounded-[clamp(0.25rem,1cqw,0.5rem)] bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-300 ease-apple active:scale-90 transform-gpu cursor-pointer border border-transparent hover:border-white/10"
                      >
                        <Minus className="w-[clamp(0.75rem,2cqw,1rem)] h-[clamp(0.75rem,2cqw,1rem)]" />
                      </button>
                      <span className="text-[clamp(0.75rem,2.5cqw,0.875rem)] font-semibold w-[clamp(1.25rem,3cqw,1.5rem)] text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-[clamp(1.5rem,4cqw,2rem)] h-[clamp(1.5rem,4cqw,2rem)] flex items-center justify-center rounded-[clamp(0.25rem,1cqw,0.5rem)] bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-300 ease-apple active:scale-90 transform-gpu cursor-pointer border border-transparent hover:border-white/10"
                      >
                        <Plus className="w-[clamp(0.75rem,2cqw,1rem)] h-[clamp(0.75rem,2cqw,1rem)]" />
                      </button>
                    </div>
                    <button 
                      onClick={() => {
                        removeFromCart(item.product.id);
                        showToast('Item removed');
                      }}
                      className="text-white/40 hover:text-red-400 p-[clamp(0.25rem,1cqw,0.5rem)] transition-all duration-300 ease-apple hover:scale-110 active:scale-90 transform-gpu cursor-pointer rounded-full hover:bg-red-400/10"
                    >
                      <Trash2 className="w-[clamp(1rem,3cqw,1.25rem)] h-[clamp(1rem,3cqw,1.25rem)]" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="p-[clamp(1rem,3cqw,1.5rem)] border-t border-white/10 bg-white/5 backdrop-blur-md">
            <div className="flex items-center justify-between mb-[clamp(1rem,3cqw,1.5rem)]">
              <span className="text-white/70 text-[clamp(0.875rem,3cqw,1.125rem)]">Total</span>
              <span className="font-heading font-bold text-[clamp(1.25rem,4cqw,1.75rem)] text-volt drop-shadow-[0_0_15px_rgba(200,244,0,0.3)]">${cartTotal.toFixed(2)}</span>
            </div>
            <button 
              onClick={() => {
                showToast('Order placed! 🎆 (Demo)');
                setIsCartOpen(false);
                setTimeout(() => {
                  cart.forEach(item => removeFromCart(item.product.id));
                }, 500);
              }}
              className="w-full py-[clamp(0.75rem,3cqw,1.25rem)] bg-volt text-ink font-bold rounded-[clamp(0.75rem,3cqw,1.25rem)] hover:bg-[#e2ff66] transition-all duration-300 ease-spring transform-gpu flex items-center justify-center gap-[clamp(0.25rem,1cqw,0.5rem)] cursor-pointer text-[clamp(0.875rem,2.5cqw,1rem)] shadow-[0_0_30px_rgba(200,244,0,0.2)] hover:shadow-[0_0_40px_rgba(200,244,0,0.4)] hover:scale-[1.03] active:scale-[0.98]"
            >
              Checkout <ArrowRight className="w-[clamp(1rem,3cqw,1.25rem)] h-[clamp(1rem,3cqw,1.25rem)]" />
            </button>
            <button 
              onClick={() => {
                cart.forEach(item => removeFromCart(item.product.id));
                showToast('Cart cleared');
                setIsCartOpen(false);
              }}
              className="w-full text-center text-white/40 hover:text-white text-[clamp(0.75rem,2cqw,0.875rem)] mt-[clamp(0.75rem,2cqw,1rem)] transition-colors duration-300 ease-apple cursor-pointer py-[clamp(0.25rem,1cqw,0.5rem)] hover:underline"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};
