import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Zap, Eye, EyeOff } from "lucide-react";
import { SEO } from "../components/SEO";
const Login = () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
    navigate("/home");
  };
  return <div className="min-h-screen bg-ink flex">
      <SEO
    title="Login"
    description="Sign in to your SkyMart account to access your orders, wishlist, and exclusive deals."
  />
      <div className="hidden lg:flex flex-col w-1/2 bg-[#111] relative overflow-hidden p-16">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-volt/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-volt/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="flex items-center gap-3 mb-20 relative z-10">
          <div className="w-12 h-12 bg-volt rounded-2xl flex items-center justify-center">
            <Zap className="w-6 h-6 fill-ink text-ink" />
          </div>
          <span className="font-heading font-bold text-[clamp(1.25rem,5cqw,1.5rem)] tracking-tight text-white">
            Sky<span className="text-volt">Mart</span>
          </span>
        </div>
        <div className="relative z-10 flex flex-col justify-center flex-grow">
          <h1 className="font-heading font-bold text-[clamp(2rem,10cqw,3rem)] leading-tight mb-6">
            Shop the future.<br />
            <span className="text-volt">Today.</span>
          </h1>
          <p className="text-white/50 text-[clamp(1rem,3.5cqw,1.125rem)] max-w-md mb-12">
            Experience the next generation of e-commerce. Fast, secure, and incredibly beautiful.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="font-heading font-bold text-[clamp(1.5rem,6cqw,1.875rem)] text-white mb-1">20K+</div>
              <div className="text-white/50 text-[clamp(0.75rem,2.5cqw,0.875rem)]">Products</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="font-heading font-bold text-[clamp(1.5rem,6cqw,1.875rem)] text-white mb-1">50K+</div>
              <div className="text-white/50 text-[clamp(0.75rem,2.5cqw,0.875rem)]">Users</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 col-span-2">
              <div className="font-heading font-bold text-[clamp(1.5rem,6cqw,1.875rem)] text-volt mb-1">4.9★</div>
              <div className="text-white/50 text-[clamp(0.75rem,2.5cqw,0.875rem)]">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-3 mb-12 justify-center">
            <div className="w-12 h-12 bg-volt rounded-2xl flex items-center justify-center">
              <Zap className="w-6 h-6 fill-ink text-ink" />
            </div>
            <span className="font-heading font-bold text-[clamp(1.25rem,5cqw,1.5rem)] tracking-tight text-white">
              Sky<span className="text-volt">Mart</span>
            </span>
          </div>
          <div className="bg-surface border border-white/10 p-8 sm:p-10 rounded-[2rem]">
            <h2 className="font-heading font-bold text-[clamp(1.25rem,5cqw,1.5rem)] mb-2">Welcome back</h2>
            <p className="text-white/50 text-[clamp(0.75rem,2.5cqw,0.875rem)] mb-8">Enter your details to access your account.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-[clamp(0.75rem,2.5cqw,0.875rem)] font-medium text-white/80">Email</label>
                <input
    type="email"
    required
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full bg-ink border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-volt/50 transition-colors"
    placeholder="test@test.com"
  />
              </div>
              <div className="space-y-2">
                <label className="text-[clamp(0.75rem,2.5cqw,0.875rem)] font-medium text-white/80">Password</label>
                <div className="relative">
                  <input
    type={showPassword ? "text" : "password"}
    required
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full bg-ink border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-volt/50 transition-colors pr-10"
    placeholder="••••••••"
  />
                  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between text-[clamp(0.75rem,2.5cqw,0.875rem)]">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded bg-ink border-white/20 text-volt focus:ring-0 w-4 h-4 accent-volt" />
                  <span className="text-white/60">Remember me</span>
                </label>
                <a href="#" className="text-volt hover:underline">Forgot password?</a>
              </div>
              <button
    type="submit"
    className="w-full py-3.5 bg-volt text-ink font-bold rounded-xl hover:bg-[#e2ff66] transition-colors mt-4"
  >
                Sign In
              </button>
            </form>
            <p className="text-center text-[clamp(0.75rem,2.5cqw,0.875rem)] text-white/50 mt-8">
              Don't have an account?{" "}
              <Link to="/register" className="text-volt font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export {
  Login
};
