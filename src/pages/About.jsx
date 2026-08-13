import { Link } from "react-router-dom";
import { Zap, ArrowRight, ShieldCheck, Truck, HeartHandshake, Star, Package, Users } from "lucide-react";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
const About = () => {
  return <div className="min-h-screen bg-ink pb-12">
      <SEO
    title="About Us"
    description="Learn about SkyMart, our story, and what we stand for. We are redefining the e-commerce experience."
  />
      <div className="w-full max-w-[1000px] md:max-w-[1150px] mx-auto px-[clamp(1.5rem,5vw,4rem)] pt-[clamp(2rem,4vw,3rem)] pb-[clamp(2rem,5vw,4rem)] space-y-20">
        <div className="text-center mb-[clamp(3rem,8cqw,5rem)] relative z-10">
          <div className="inline-flex items-center justify-center w-[clamp(3rem,6vw,4.5rem)] h-[clamp(3rem,6vw,4.5rem)] bg-volt text-ink rounded-[clamp(0.75rem,2vw,1.25rem)] mb-[clamp(1.5rem,4cqw,2rem)] shadow-[0_0_30px_rgba(200,244,0,0.3)] animate-float-smooth">
            <Zap className="w-[clamp(1.5rem,3vw,2.25rem)] h-[clamp(1.5rem,3vw,2.25rem)] fill-current drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
          </div>
          <h1 className="font-heading font-bold text-[clamp(1.5rem,4vw,3rem)] mb-[clamp(1rem,3vw,1.5rem)] tracking-tight leading-none text-white drop-shadow-2xl">
            About <span className="text-volt drop-shadow-[0_0_20px_rgba(200,244,0,0.3)]">SkyMart</span>
          </h1>
          <p className="text-white/70 text-[clamp(0.85rem,1.2vw,1rem)] max-w-2xl mx-auto leading-relaxed">
            SkyMart is a next-generation e-commerce platform built to make online<br className="hidden sm:block" /> shopping fast, fair, and enjoyable — for everyone.
          </p>
        </div>
        <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-[clamp(1.5rem,4vw,3rem)] md:gap-x-[clamp(0.75rem,2vw,1.5rem)] place-items-center">
          <div className="group w-[clamp(140px,40vw,280px)] md:w-full aspect-square mx-auto bg-white/5 border border-white/10 p-[clamp(1rem,3.5vw,2rem)] rounded-[clamp(1rem,3vw,1.5rem)] text-center backdrop-blur-xl lg:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 ease-apple lg:hover:-translate-y-2 lg:hover:bg-white/10 lg:hover:border-white/20 lg:hover:shadow-[0_15px_40px_rgba(200,244,0,0.15)] flex flex-col items-center justify-center relative lg:overflow-hidden">
            <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-volt/20 rounded-full blur-[40px] opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500" />
            <Package className="relative z-10 w-[clamp(1.5rem,3.5vw,2rem)] h-[clamp(1.5rem,3.5vw,2rem)] text-volt mx-auto mb-[clamp(0.25rem,1vw,0.75rem)] transition-transform duration-500 ease-spring lg:group-hover:scale-110 lg:drop-shadow-[0_0_10px_rgba(200,244,0,0.4)]" strokeWidth={1.5} />
            <div className="relative z-10 font-heading font-bold text-[clamp(1.2rem,3vw,2rem)] text-white mb-1 leading-tight tracking-tight">20K+</div>
            <div className="relative z-10 text-white/50 text-[clamp(0.6rem,1.5vw,0.85rem)] font-medium tracking-widest uppercase">Products</div>
          </div>
          <div className="group w-[clamp(140px,40vw,280px)] md:w-full aspect-square mx-auto bg-white/5 border border-white/10 p-[clamp(1rem,3.5vw,2rem)] rounded-[clamp(1rem,3vw,1.5rem)] text-center backdrop-blur-xl lg:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 ease-apple lg:hover:-translate-y-2 lg:hover:bg-white/10 lg:hover:border-white/20 lg:hover:shadow-[0_15px_40px_rgba(200,244,0,0.15)] flex flex-col items-center justify-center relative lg:overflow-hidden">
            <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-volt/20 rounded-full blur-[40px] opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500" />
            <Users className="relative z-10 w-[clamp(1.5rem,3.5vw,2rem)] h-[clamp(1.5rem,3.5vw,2rem)] text-volt mx-auto mb-[clamp(0.25rem,1vw,0.75rem)] transition-transform duration-500 ease-spring lg:group-hover:scale-110 lg:drop-shadow-[0_0_10px_rgba(200,244,0,0.4)]" strokeWidth={1.5} />
            <div className="relative z-10 font-heading font-bold text-[clamp(1.2rem,3vw,2rem)] text-white mb-1 leading-tight tracking-tight">50K+</div>
            <div className="relative z-10 text-white/50 text-[clamp(0.6rem,1.5vw,0.85rem)] font-medium tracking-widest uppercase">Happy Customers</div>
          </div>
          <div className="group w-[clamp(140px,40vw,280px)] md:w-full aspect-square mx-auto bg-white/5 border border-white/10 p-[clamp(1rem,3.5vw,2rem)] rounded-[clamp(1rem,3vw,1.5rem)] text-center backdrop-blur-xl lg:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 ease-apple lg:hover:-translate-y-2 lg:hover:bg-white/10 lg:hover:border-white/20 lg:hover:shadow-[0_15px_40px_rgba(200,244,0,0.15)] flex flex-col items-center justify-center relative lg:overflow-hidden">
            <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-volt/20 rounded-full blur-[40px] opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500" />
            <Star className="relative z-10 w-[clamp(1.5rem,3.5vw,2rem)] h-[clamp(1.5rem,3.5vw,2rem)] text-volt mx-auto mb-[clamp(0.25rem,1vw,0.75rem)] transition-transform duration-500 ease-spring lg:group-hover:scale-110 lg:drop-shadow-[0_0_10px_rgba(200,244,0,0.4)]" strokeWidth={1.5} />
            <div className="relative z-10 font-heading font-bold text-[clamp(1.2rem,3vw,2rem)] text-white mb-1 leading-tight tracking-tight">4.9</div>
            <div className="relative z-10 text-white/50 text-[clamp(0.6rem,1.5vw,0.85rem)] font-medium tracking-widest uppercase">Avg. Rating</div>
          </div>
          <div className="group w-[clamp(140px,40vw,280px)] md:w-full aspect-square mx-auto bg-white/5 border border-white/10 p-[clamp(1rem,3.5vw,2rem)] rounded-[clamp(1rem,3vw,1.5rem)] text-center backdrop-blur-xl lg:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 ease-apple lg:hover:-translate-y-2 lg:hover:bg-white/10 lg:hover:border-white/20 lg:hover:shadow-[0_15px_40px_rgba(200,244,0,0.15)] flex flex-col items-center justify-center relative lg:overflow-hidden">
            <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-volt/20 rounded-full blur-[40px] opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500" />
            <Truck className="relative z-10 w-[clamp(1.5rem,3.5vw,2rem)] h-[clamp(1.5rem,3.5vw,2rem)] text-volt mx-auto mb-[clamp(0.25rem,1vw,0.75rem)] transition-transform duration-500 ease-spring lg:group-hover:scale-110 lg:drop-shadow-[0_0_10px_rgba(200,244,0,0.4)]" strokeWidth={1.5} />
            <div className="relative z-10 font-heading font-bold text-[clamp(1.2rem,3vw,2rem)] text-white mb-1 leading-tight tracking-tight">99%</div>
            <div className="relative z-10 text-white/50 text-[clamp(0.6rem,1.5vw,0.85rem)] font-medium tracking-widest uppercase">On-time Delivery</div>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 p-[clamp(1.5rem,5cqw,3rem)] rounded-[clamp(1.5rem,4cqw,2rem)] backdrop-blur-md shadow-2xl">
          <h2 className="font-heading font-bold text-[clamp(1.5rem,4cqw,2rem)] mb-[clamp(1rem,3cqw,1.5rem)]">Our Story</h2>
          <div className="flex flex-col gap-4 text-white/70 leading-relaxed text-[clamp(0.8rem,1.5vw,0.95rem)]">
            <p>
              SkyMart started in 2022 as a small side project — two engineers tired of bloated, slow e-commerce experiences. We asked ourselves: what if shopping online was actually <span className="italic">enjoyable</span>?
            </p>
            <p>
              Three years later, SkyMart serves over 50,000 customers across the country. We stock electronics, fashion, jewelry, and everyday essentials — all at prices that don't require a second mortgage.
            </p>
            <p>
              We're still the same team at heart: obsessed with speed, transparency, and making you feel good about every purchase you make here.
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-heading font-bold text-[clamp(1.5rem,4vw,2rem)] mb-[clamp(1.5rem,4vw,2rem)] text-center">What We Stand For</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,clamp(250px,30vw,350px)),1fr))] gap-[clamp(0.5rem,2vw,1rem)]">
            <div className="bg-white/5 border border-white/10 p-[clamp(1rem,3vw,1.5rem)] rounded-[clamp(1rem,3vw,1.5rem)] flex items-center gap-4 backdrop-blur-md shadow-lg">
              <div className="self-start -mt-px w-[clamp(2.5rem,6vw,3rem)] h-[clamp(2.5rem,6vw,3rem)] bg-volt/15 border border-volt/20 rounded-[clamp(0.5rem,2vw,0.75rem)] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-[clamp(1.35rem,4vw,1.6rem)] h-[clamp(1.35rem,4vw,1.6rem)] text-volt" />
              </div>
              <div>
                <h3 className="font-bold text-[clamp(0.875rem,2.5vw,1rem)] mb-1">Trust</h3>
                <p className="text-white/50 text-[clamp(0.75rem,2.5vw,0.875rem)] leading-relaxed">
                  Every product is verified for quality and authenticity before listing.
                </p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-[clamp(1rem,3vw,1.5rem)] rounded-[clamp(1rem,3vw,1.5rem)] flex items-center gap-4 backdrop-blur-md shadow-lg">
              <div className="self-start -mt-px w-[clamp(2.5rem,6vw,3rem)] h-[clamp(2.5rem,6vw,3rem)] bg-volt/15 border border-volt/20 rounded-[clamp(0.5rem,2vw,0.75rem)] flex items-center justify-center shrink-0">
                <Truck className="w-[clamp(1.35rem,4vw,1.6rem)] h-[clamp(1.35rem,4vw,1.6rem)] text-volt" />
              </div>
              <div>
                <h3 className="font-bold text-[clamp(0.875rem,2.5vw,1rem)] mb-1">Speed</h3>
                <p className="text-white/50 text-[clamp(0.75rem,2.5vw,0.875rem)] leading-relaxed">
                  We obsess over delivery times so your orders arrive when promised.
                </p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-[clamp(1rem,3vw,1.5rem)] rounded-[clamp(1rem,3vw,1.5rem)] flex items-center gap-4 backdrop-blur-md shadow-lg">
              <div className="self-start -mt-px w-[clamp(2.5rem,6vw,3rem)] h-[clamp(2.5rem,6vw,3rem)] bg-volt/15 border border-volt/20 rounded-[clamp(0.5rem,2vw,0.75rem)] flex items-center justify-center shrink-0">
                <HeartHandshake className="w-[clamp(1.35rem,4vw,1.6rem)] h-[clamp(1.35rem,4vw,1.6rem)] text-volt" />
              </div>
              <div>
                <h3 className="font-bold text-[clamp(0.875rem,2.5vw,1rem)] mb-1">Community</h3>
                <p className="text-white/50 text-[clamp(0.75rem,2.5vw,0.875rem)] leading-relaxed">
                  We are building a community of people who appreciate good design and exceptional quality.
                </p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-[clamp(1rem,3vw,1.5rem)] rounded-[clamp(1rem,3vw,1.5rem)] flex items-center gap-4 backdrop-blur-md shadow-lg">
              <div className="self-start -mt-px w-[clamp(2.5rem,6vw,3rem)] h-[clamp(2.5rem,6vw,3rem)] bg-volt/15 border border-volt/20 rounded-[clamp(0.5rem,2vw,0.75rem)] flex items-center justify-center shrink-0">
                <Star className="w-[clamp(1.35rem,4vw,1.6rem)] h-[clamp(1.35rem,4vw,1.6rem)] text-volt" />
              </div>
              <div>
                <h3 className="font-bold text-[clamp(0.875rem,2.5vw,1rem)] mb-1">Quality</h3>
                <p className="text-white/50 text-[clamp(0.75rem,2.5vw,0.875rem)] leading-relaxed">
                  We painstakingly curate our catalog to ensure only the best products make it to your screen.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-heading font-bold text-[clamp(1.5rem,4cqw,2rem)] mb-[clamp(1.5rem,4cqw,2rem)] text-center">Meet the Team</h2>
          <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-[clamp(1.5rem,4vw,3rem)] md:gap-x-[clamp(0.75rem,2vw,1.5rem)] place-items-center">
            <div className="group w-[clamp(130px,35vw,250px)] md:w-full aspect-square mx-auto bg-white/5 border border-white/10 p-[clamp(1rem,3vw,1.75rem)] rounded-[clamp(1rem,3vw,1.5rem)] text-center backdrop-blur-xl lg:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 ease-apple hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_15px_40px_rgba(200,244,0,0.15)] flex flex-col items-center justify-center relative lg:overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-volt/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 w-[clamp(2.5rem,5vw,4rem)] h-[clamp(2.5rem,5vw,4rem)] bg-volt text-ink text-[clamp(1.2rem,2.5vw,1.75rem)] font-bold flex items-center justify-center rounded-[clamp(0.75rem,1.5vw,1rem)] mx-auto mb-[clamp(0.5rem,1.5vw,1rem)] transition-transform duration-500 ease-spring group-hover:scale-110 shadow-[0_0_15px_rgba(200,244,0,0.3)]">
                A
              </div>
              <div className="relative z-10 font-heading font-bold text-[clamp(0.85rem,2vw,1.25rem)] text-white mb-1 leading-tight tracking-tight">Aryan Shah</div>
              <div className="relative z-10 text-white/50 text-[clamp(0.55rem,1.2vw,0.8rem)] font-medium tracking-wide">Founder & CEO</div>
            </div>
            <div className="group w-[clamp(130px,35vw,250px)] md:w-full aspect-square mx-auto bg-white/5 border border-white/10 p-[clamp(1rem,3vw,1.75rem)] rounded-[clamp(1rem,3vw,1.5rem)] text-center backdrop-blur-xl lg:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 ease-apple hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] flex flex-col items-center justify-center relative lg:overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-blue-500/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 w-[clamp(2.5rem,5vw,4rem)] h-[clamp(2.5rem,5vw,4rem)] bg-blue-500 text-white text-[clamp(1.2rem,2.5vw,1.75rem)] font-bold flex items-center justify-center rounded-[clamp(0.75rem,1.5vw,1rem)] mx-auto mb-[clamp(0.5rem,1.5vw,1rem)] transition-transform duration-500 ease-spring group-hover:scale-110 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                P
              </div>
              <div className="relative z-10 font-heading font-bold text-[clamp(0.85rem,2vw,1.25rem)] text-white mb-1 leading-tight tracking-tight">Priya Mehta</div>
              <div className="relative z-10 text-white/50 text-[clamp(0.55rem,1.2vw,0.8rem)] font-medium tracking-wide">Head of Product</div>
            </div>
            <div className="group w-[clamp(130px,35vw,250px)] md:w-full aspect-square mx-auto bg-white/5 border border-white/10 p-[clamp(1rem,3vw,1.75rem)] rounded-[clamp(1rem,3vw,1.5rem)] text-center backdrop-blur-xl lg:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 ease-apple hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_15px_40px_rgba(168,85,247,0.15)] flex flex-col items-center justify-center relative lg:overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-purple-500/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 w-[clamp(2.5rem,5vw,4rem)] h-[clamp(2.5rem,5vw,4rem)] bg-purple-500 text-white text-[clamp(1.2rem,2.5vw,1.75rem)] font-bold flex items-center justify-center rounded-[clamp(0.75rem,1.5vw,1rem)] mx-auto mb-[clamp(0.5rem,1.5vw,1rem)] transition-transform duration-500 ease-spring group-hover:scale-110 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                R
              </div>
              <div className="relative z-10 font-heading font-bold text-[clamp(0.85rem,2vw,1.25rem)] text-white mb-1 leading-tight tracking-tight">Rohan Verma</div>
              <div className="relative z-10 text-white/50 text-[clamp(0.55rem,1.2vw,0.8rem)] font-medium tracking-wide">Lead Engineer</div>
            </div>
            <div className="group w-[clamp(130px,35vw,250px)] md:w-full aspect-square mx-auto bg-white/5 border border-white/10 p-[clamp(1rem,3vw,1.75rem)] rounded-[clamp(1rem,3vw,1.5rem)] text-center backdrop-blur-xl lg:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 ease-apple hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_15px_40px_rgba(244,63,94,0.15)] flex flex-col items-center justify-center relative lg:overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-rose-500/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 w-[clamp(2.5rem,5vw,4rem)] h-[clamp(2.5rem,5vw,4rem)] bg-rose-500 text-white text-[clamp(1.2rem,2.5vw,1.75rem)] font-bold flex items-center justify-center rounded-[clamp(0.75rem,1.5vw,1rem)] mx-auto mb-[clamp(0.5rem,1.5vw,1rem)] transition-transform duration-500 ease-spring group-hover:scale-110 shadow-[0_0_15px_rgba(244,63,94,0.3)]">
                S
              </div>
              <div className="relative z-10 font-heading font-bold text-[clamp(0.85rem,2vw,1.25rem)] text-white mb-1 leading-tight tracking-tight">Sneha Kapoor</div>
              <div className="relative z-10 text-white/50 text-[clamp(0.55rem,1.2vw,0.8rem)] font-medium tracking-wide">Design Director</div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/20 p-[clamp(1.5rem,5cqw,3rem)] rounded-[clamp(1.5rem,4cqw,2rem)] text-center relative overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-volt/10 blur-[100px] rounded-full pointer-events-none" />
          <h2 className="font-heading font-bold text-[clamp(1.5rem,4cqw,2rem)] mb-[clamp(0.5rem,2cqw,1rem)] relative z-10">Ready to shop?</h2>
          <p className="text-white/60 mb-[clamp(1rem,3cqw,2rem)] max-w-md mx-auto relative z-10 text-[clamp(0.875rem,2.5cqw,1rem)]">
            Join thousands of satisfied customers and experience the difference today.
          </p>
          <Link
    to="/products"
    className="group relative z-10 inline-flex items-center gap-[clamp(0.35rem,1.5vw,0.75rem)] bg-volt text-ink pl-[clamp(1rem,4vw,2.5rem)] pr-[clamp(0.75rem,3.5vw,2rem)] py-[clamp(0.6rem,2vw,1.25rem)] rounded-[clamp(0.5rem,1.5vw,1rem)] font-bold text-[clamp(0.75rem,2vw,1.25rem)] transition-all duration-200 ease-out hover:scale-[1.03] hover:bg-[#d4ff00] hover:shadow-[0_0_40px_rgba(200,244,0,0.5)] active:scale-95"
  >
            Browse Products
            <ArrowRight className="w-[clamp(0.8rem,2vw,1.5rem)] h-[clamp(0.8rem,2vw,1.5rem)] transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>;
};
export {
  About
};
