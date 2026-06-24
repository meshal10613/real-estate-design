"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Home, Search, Shield, DollarSign } from "lucide-react";

export function SearchBar() {
  const [location, setLocation] = useState("");
  const [purpose, setPurpose] = useState("buy");
  const [type, setType] = useState("villa");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Scroll to featured section or update filtering.
    // For demo purposes, we will trigger a search toast or direct link.
    const searchTarget = document.getElementById("featured");
    if (searchTarget) {
      searchTarget.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* Search Bar main glass container */}
      <form
        onSubmit={handleSearchSubmit}
        className="glass w-full rounded-2xl border border-white/25 p-3 shadow-2xl sm:rounded-full sm:p-2 backdrop-blur-lg"
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-1.5">
          {/* Location Input */}
          <div className="relative flex w-full flex-1 items-center">
            <MapPin className="absolute left-3.5 h-4 w-4 text-gray-500 shrink-0" />
            <Input
              placeholder="Where are you looking to live?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="h-11 w-full rounded-xl border-0 bg-transparent pl-9 text-xs sm:text-sm text-gray-800 shadow-none placeholder:text-gray-400 focus-visible:ring-0 focus-visible:bg-white/10 sm:rounded-full"
            />
          </div>

          {/* Divider */}
          <div className="hidden h-7 w-px bg-gray-200/60 sm:block" />

          {/* Buy/Rent Select */}
          <div className="relative w-full sm:w-36">
            <Select value={purpose} onValueChange={setPurpose}>
              <SelectTrigger className="h-11 w-full rounded-xl border-0 bg-transparent text-xs sm:text-sm font-semibold text-gray-700 shadow-none focus:ring-0 sm:rounded-full [&>svg]:text-gray-400 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-gray-500 shrink-0" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent className="rounded-xl border border-gray-100 bg-white text-gray-800 shadow-lg">
                <SelectItem value="buy" className="text-xs">For Sale</SelectItem>
                <SelectItem value="rent" className="text-xs">For Rent</SelectItem>
                <SelectItem value="sell" className="text-xs">Sell Property</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Divider */}
          <div className="hidden h-7 w-px bg-gray-200/60 sm:block" />

          {/* Property Type Select */}
          <div className="relative w-full sm:w-40">
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="h-11 w-full rounded-xl border-0 bg-transparent text-xs sm:text-sm font-semibold text-gray-700 shadow-none focus:ring-0 sm:rounded-full [&>svg]:text-gray-400 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-2">
                  <Home className="h-4 w-4 text-gray-500 shrink-0" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent className="rounded-xl border border-gray-100 bg-white text-gray-800 shadow-lg">
                <SelectItem value="villa" className="text-xs">Luxury Villa</SelectItem>
                <SelectItem value="apartment" className="text-xs">Apartment</SelectItem>
                <SelectItem value="duplex" className="text-xs">Duplex Home</SelectItem>
                <SelectItem value="townhouse" className="text-xs">Townhouse</SelectItem>
                <SelectItem value="studio" className="text-xs">Studio Flat</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* CTA Button */}
          <Button
            type="submit"
            className="h-11 w-full rounded-xl bg-gray-900 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-gray-800 hover:shadow-lg sm:w-auto sm:rounded-full"
          >
            <Search className="mr-1.5 h-4 w-4 shrink-0" />
            Find Homes
          </Button>
        </div>
      </form>

      {/* Popular quick tags underneath */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-xs text-white/70">
        <span className="font-semibold text-white/50 uppercase tracking-widest text-[9px]">Popular:</span>
        {["Seminyak Villas", "Uluwatu Cliffs", "Jakarta Penthouse", "Lakeside Retreats"].map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setLocation(tag.split(" ").slice(-1)[0])}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white hover:bg-white hover:text-gray-900 transition-all backdrop-blur-sm"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
