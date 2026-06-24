"use client";

import { useState, useRef } from "react";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { properties } from "@/lib/properties";

const categories = [
  "All",
  "Villas",
  "Apartments",
  "Luxury Villas",
  "Duplex Homes",
  "Townhouses",
  "Studio Apartments",
];

export function FeaturedGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProperties =
    activeCategory === "All"
      ? properties
      : properties.filter((p) => p.category === activeCategory);

  const scrollCategories = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="featured" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28 scroll-mt-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-800">
            <Sparkles className="h-3 w-3 text-amber-500" />
            <span>Featured Collections</span>
          </div>
          
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Discover Handpicked Homes
            <br />
            That <span className="italic font-light text-neutral-500 font-serif">Define Elegance</span>
          </h2>
          
          <p className="mt-3 text-sm text-gray-400">
            Explore our curated selection of fine living quarters, hand-selected for architectural excellence and premium finishes.
          </p>
        </div>

        {/* Category Tabs Section */}
        <div className="relative mt-12 flex items-center gap-2">
          {/* Scroll Left Button */}
          <Button
            variant="outline"
            size="icon"
            className="hidden shrink-0 rounded-full border border-gray-200 bg-white hover:bg-gray-50 h-9 w-9 sm:flex shadow-sm"
            onClick={() => scrollCategories("left")}
            aria-label="Scroll categories left"
          >
            <ChevronLeft className="h-4 w-4 text-gray-600" />
          </Button>

          {/* Scrollable category list */}
          <div
            ref={scrollRef}
            className="scrollbar-hide flex flex-1 gap-2.5 overflow-x-auto py-1 px-1"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-gray-900 border-gray-900 text-white shadow-sm scale-102"
                    : "bg-white border-gray-100 text-gray-600 hover:bg-gray-50 hover:border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Scroll Right Button */}
          <Button
            variant="outline"
            size="icon"
            className="hidden shrink-0 rounded-full border border-gray-200 bg-white hover:bg-gray-50 h-9 w-9 sm:flex shadow-sm"
            onClick={() => scrollCategories("right")}
            aria-label="Scroll categories right"
          >
            <ChevronRight className="h-4 w-4 text-gray-600" />
          </Button>
        </div>

        {/* Property Grid */}
        {filteredProperties.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property, index) => (
              <div
                key={`${property.title}-${index}`}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 border border-dashed border-gray-200 rounded-2xl p-12 text-center">
            <p className="text-sm text-gray-500 font-semibold">No listings found in this category.</p>
            <Button
              variant="link"
              onClick={() => setActiveCategory("All")}
              className="mt-2 text-xs font-bold text-gray-900 uppercase tracking-widest"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
