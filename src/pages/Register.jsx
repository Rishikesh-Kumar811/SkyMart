import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Zap, Eye, EyeOff } from "lucide-react";
import { SEO } from "../components/SEO";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    register(email, name);
    navigate("/home");
  };
  return <div className="min-h-screen bg-ink flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      <SEO
    title="Register"
    description="Create a new SkyMart account and join the future of e-commerce today."
  />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-volt/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="w-full max-w-md relative z-10">
        <div className="flex items-center gap-3 mb-10 justify-center">
          <div className="w-12 h-12 bg-volt rounded-2xl flex items-center justify-center">
            <Zap className="w-6 h-6 fill-ink text-ink" />
          </div>
          <span className="font-heading font-bold text-[clamp(1.25rem,5cqw,1.5rem)] tracking-tight text-white">
            Sky<span className="text-volt">Mart</span>
          </span>
        </div>
        <div className="bg-surface border border-white/10 p-8 sm:p-10 rounded-[2rem] shadow-2xl">
          <h2 className="font-heading font-bold text-[clamp(1.25rem,5cqw,1.5rem)] mb-2 text-center">Create Account</h2>
          <p className="text-white/50 text-[clamp(0.75rem,2.5cqw,0.875rem)] mb-8 text-center">Join SkyMart to start shopping today.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-[clamp(0.75rem,2.5cqw,0.875rem)] font-medium text-white/80">Full Name</label>
              <input
    type="text"
    required
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="w-full bg-ink border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-volt/50 transition-colors"
    placeholder="John Doe"
  />
            </div>
            <div className="space-y-2">
              <label className="text-[clamp(0.75rem,2.5cqw,0.875rem)] font-medium text-white/80">Email</label>
              <input
    type="email"
    required
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full bg-ink border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-volt/50 transition-colors"
    placeholder="john@example.com"
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
              {password && <div className="flex gap-1 mt-2">
                  <div className={`h-1 flex-1 rounded-full ${password.length > 3 ? "bg-red-500" : "bg-white/10"}`} />
                  <div className={`h-1 flex-1 rounded-full ${password.length > 6 ? "bg-yellow-500" : "bg-white/10"}`} />
                  <div className={`h-1 flex-1 rounded-full ${password.length > 8 ? "bg-green-500" : "bg-white/10"}`} />
                </div>}
            </div>
            <div className="space-y-2">
              <label className="text-[clamp(0.75rem,2.5cqw,0.875rem)] font-medium text-white/80">Confirm Password</label>
              <input
    type="password"
    required
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    className="w-full bg-ink border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-volt/50 transition-colors"
    placeholder="••••••••"
  />
            </div>
            <button
    type="submit"
    className="w-full py-3.5 bg-volt text-ink font-bold rounded-xl hover:bg-[#e2ff66] transition-colors mt-6"
  >
              Sign Up
            </button>
          </form>
          <p className="text-center text-[clamp(0.75rem,2.5cqw,0.875rem)] text-white/50 mt-8">
            Already have an account?{" "}
            <Link to="/login" className="text-volt font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>;
};
export {
  Register
};
