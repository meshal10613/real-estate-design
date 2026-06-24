"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Award, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

const stats = [
  {
    value: "1,500+",
    label: "Total Properties Sold",
    desc: "Helping families find their dream homes for over a decade with trust.",
  },
  {
    value: "30+",
    label: "Strategic Partners",
    desc: "Strong partnerships with local developers to offer exclusive properties.",
  },
  {
    value: "98.2%",
    label: "Satisfaction Rate",
    desc: "Client satisfaction rate, reflecting our commitment to exceptional service.",
  },
];

export function StatsSection() {
  const handleScrollToFeatured = () => {
    const featured = document.getElementById("featured");
    if (featured) {
      featured.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="stats" className="bg-neutral-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28 scroll-mt-10">
      <div className="mx-auto max-w-7xl">
        
        {/* Journey Headers */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-800 border border-amber-100">
            <Award className="h-3.5 w-3.5 text-amber-600" />
            <span>Our Journey</span>
          </div>
          
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Your Journey To The Perfect Home
            <br />
            <span className="bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent italic font-light font-serif">Starts With Us</span>
          </h2>
          
          <p className="mt-3.5 text-sm leading-relaxed text-gray-500">
            With a proven track record and in-depth market knowledge, we make your real estate journey seamless. Whether buying your first villa or managing a diverse portfolio, we deliver premium results.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12">
          {/* Team Image Column */}
          <div className="relative overflow-hidden rounded-3xl lg:col-span-6 shadow-lg group">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=520&fit=crop"
              alt="Professional real estate team"
              width={800}
              height={520}
              className="h-auto w-full rounded-3xl object-cover transition-transform duration-700 group-hover:scale-103"
            />
            {/* Ambient vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            
            {/* Floating Badge */}
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-4.5 py-3 shadow-md backdrop-blur-sm border border-gray-100 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Est. 2014</div>
                <div className="text-xs font-extrabold text-gray-900 mt-1 leading-none">Fully Certified Agency</div>
              </div>
            </div>
          </div>

          {/* Stats Cards Column - Responsive Grid */}
          <div className="flex flex-col justify-center lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-5">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-200 lg:flex lg:items-start lg:gap-5"
                >
                  <div className="shrink-0 mb-3 lg:mb-0">
                    <p className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                      {stat.value}
                    </p>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                      {stat.label}
                    </h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-gray-500">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA action button inside stats column */}
            <div className="pt-4 flex justify-start">
              <Button
                onClick={handleScrollToFeatured}
                className="rounded-full bg-gray-900 hover:bg-gray-800 text-white font-bold px-7 py-5 uppercase tracking-wider text-xs flex items-center gap-2 group shadow-sm transition-all hover:shadow"
              >
                <span>Browse Collections</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
