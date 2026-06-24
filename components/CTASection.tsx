"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export function CTASection() {
  const handleScrollToFeatured = () => {
    const featured = document.getElementById("featured");
    if (featured) {
      featured.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="cta" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800 shadow-xl">
          
          <div className="grid items-center lg:grid-cols-2">
            {/* Text Content */}
            <div className="relative z-10 p-8 sm:p-14 lg:p-20 text-center lg:text-left flex flex-col items-center lg:items-start">
              
              <div className="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-500">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Begin Your Journey</span>
              </div>

              <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Make Your Dream Space
                <br />
                A <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent italic font-light font-serif">Reality</span>
              </h2>
              
              <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400">
                Partner with Realteek to discover stunning, architecturally sound layouts that fulfill your personal vision of a welcoming home.
              </p>
              
              {/* Dual Button Layout */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Button 
                  onClick={handleScrollToFeatured}
                  className="rounded-full bg-white px-7 py-5 text-xs font-bold uppercase tracking-wider text-neutral-900 transition-all hover:bg-neutral-100 hover:shadow-lg w-full sm:w-auto flex items-center justify-center gap-2 group"
                >
                  <span>Explore Listings</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <a href="#stats" className="w-full sm:w-auto">
                  <Button 
                    variant="outline" 
                    className="rounded-full border-white/20 hover:border-white bg-transparent hover:bg-white/5 px-7 py-5 text-xs font-bold uppercase tracking-wider text-white w-full sm:w-auto"
                  >
                    Our History
                  </Button>
                </a>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative hidden h-full min-h-[460px] lg:block overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                alt="Dream home concept"
                fill
                className="object-cover opacity-60 transition-transform duration-700 hover:scale-103"
                sizes="50vw"
              />
              {/* Dark vignette gradient overlay from left to right */}
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-transparent" />
            </div>
          </div>

          {/* Decorative glowing gradient vectors in background */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
