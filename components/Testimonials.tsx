"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, CheckCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    quote:
      "We couldn't be happier with the outcome of our villa acquisition in Bali. From the initial search to the final contract signature, the team demonstrated a level of professionalism, integrity, and elite client care that is rare in today's market.",
    rating: 5,
    ratingText: "5.0 / 5.0",
    name: "Thomas Littel",
    role: "Founder & CEO, Apex Capital",
    propertyLink: "Tropical Oasis",
    propertyId: "tropical-oasis",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    initials: "TL",
  },
  {
    quote:
      "The expert advisors at Realteek made our dream beachside home a reality. Their attention to detail, responsiveness, and understanding of what our family needed was truly exceptional. We highly recommend their high-touch services.",
    rating: 5,
    ratingText: "5.0 / 5.0",
    name: "Sarah Johnson",
    role: "Primary Homeowner",
    propertyLink: "Bali Cliff Retreat",
    propertyId: "bali-cliff-retreat",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    initials: "SJ",
  },
  {
    quote:
      "Working with Realteek was a complete game-changer for our luxury investment portfolio. Their deep market insights and professional guidance helped us capture high-yield properties in Jakarta before they even hit public lists.",
    rating: 5,
    ratingText: "4.9 / 5.0",
    name: "David Chen",
    role: "Portfolio Asset Manager",
    propertyLink: "Metro Skyline Loft",
    propertyId: "metro-skyline-loft",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    initials: "DC",
  },
  {
    quote:
      "Exceptional high-end service from start to finish. The entire transaction process was seamless, and the team went above and beyond to negotiate favorable terms. Realteek sets the standard for modern luxury real estate brokerage.",
    rating: 5,
    ratingText: "5.0 / 5.0",
    name: "Emily Ross",
    role: "Luxury Estate Client",
    propertyLink: "Ocean View Villa",
    propertyId: "ocean-view-villa",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    initials: "ER",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    if (index < 0) setCurrent(testimonials.length - 1);
    else if (index >= testimonials.length) setCurrent(0);
    else setCurrent(index);
  };

  const testimonial = testimonials[current];

  return (
    <section className="bg-neutral-50/50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        
        {/* Modern Split-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Trust Summary Dashboard */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            <div className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-800 border border-amber-100/50">
              <CheckCircle className="h-3.5 w-3.5 text-amber-600" />
              <span>Client Stories</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients
              <br />
              Say About Us
            </h2>

            <p className="text-sm leading-relaxed text-gray-500 max-w-md">
              We take pride in providing our clients with exceptional real estate services, helping them find signature spaces that define their lifestyle.
            </p>

            {/* Scorecard Widget Box */}
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm max-w-xs w-full text-center lg:text-left">
              <div className="flex items-baseline justify-center lg:justify-start gap-1">
                <span className="text-3xl font-black text-gray-900 tracking-tight">4.95</span>
                <span className="text-xs text-gray-400 font-bold uppercase">/ 5.0</span>
              </div>
              
              <div className="mt-2.5 flex items-center justify-center lg:justify-start gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="mt-3.5 border-t border-gray-50 pt-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider flex items-center justify-center lg:justify-start gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Verified Client Reviews</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-fidelity Testimonial Card */}
          <div className="lg:col-span-7">
            <div 
              key={current} 
              className="rounded-3xl border border-gray-100 bg-white p-8 sm:p-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] animate-fade-in-up relative overflow-hidden flex flex-col justify-between min-h-[380px]"
            >
              {/* Giant quote mark element */}
              <Quote className="absolute right-8 top-8 h-20 w-20 text-neutral-50/80 -z-0 pointer-events-none" />

              {/* Purchase Badge Link */}
              <div className="relative z-10 self-start">
                <Badge variant="secondary" className="bg-amber-50/50 hover:bg-amber-50 text-amber-800 border border-amber-100 text-[10px] font-bold uppercase tracking-wider py-1 px-3.5 rounded-full">
                  Property: {testimonial.propertyLink}
                </Badge>
              </div>

              {/* Quote text */}
              <div className="relative z-10 mt-6 flex-1">
                <p className="text-base sm:text-lg italic font-medium leading-relaxed text-gray-700 font-serif">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author Info & Nav row */}
              <div className="relative z-10 mt-10 border-t border-gray-50 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                
                {/* Author Metadata */}
                <div className="flex items-center gap-3.5">
                  <Avatar className="h-12 w-12 border-2 border-white shadow-md">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
                    <AvatarFallback className="bg-amber-50 text-xs font-bold text-amber-700">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-sm font-black text-gray-900 leading-none">
                      {testimonial.name}
                    </p>
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mt-1.5 leading-none">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Navigation and Dashed progress bar controls */}
                <div className="flex items-center gap-4.5 sm:self-auto self-start">
                  
                  {/* Dash indicators */}
                  <div className="flex items-center gap-1.5">
                    {testimonials.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-300 ${idx === current ? "w-6 bg-gray-950" : "w-2 bg-gray-200"}`}
                      />
                    ))}
                  </div>

                  <div className="h-6 w-px bg-gray-100" />

                  {/* Buttons */}
                  <div className="flex items-center gap-1.5">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => goTo(current - 1)}
                      className="h-8.5 w-8.5 rounded-full border-gray-200 bg-white hover:bg-gray-50 shadow-sm"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-4 w-4 text-gray-600" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => goTo(current + 1)}
                      className="h-8.5 w-8.5 rounded-full border-gray-200 bg-white hover:bg-gray-50 shadow-sm"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-4 w-4 text-gray-600" />
                    </Button>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
