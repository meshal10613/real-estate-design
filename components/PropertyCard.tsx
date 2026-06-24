"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, BedDouble, Bath, Maximize2, MapPin, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
  category: string;
  status: "For Sale" | "For Rent";
}

export function PropertyCard({
  id,
  title,
  location,
  price,
  area,
  bedrooms,
  bathrooms,
  image,
  category,
  status,
}: PropertyCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <Link href={`/properties/${id}`} className="group block">
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
        {/* Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Subtle gradient overlay at bottom of image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Badges on top left */}
          <div className="absolute left-4 top-4 flex flex-col gap-1.5">
            <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-gray-900 shadow-sm backdrop-blur-sm">
              {category}
            </span>
            <span className={cn(
              "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold text-white shadow-sm backdrop-blur-sm",
              status === "For Sale" ? "bg-gray-900/80" : "bg-emerald-600/80"
            )}>
              {status}
            </span>
          </div>

          {/* Heart Icon on top right */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setLiked(!liked);
            }}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:scale-110 active:scale-95"
            aria-label="Add to favorites"
          >
            <Heart
              className={cn(
                "h-4 w-4 transition-all duration-300",
                liked
                  ? "fill-rose-500 text-rose-500 scale-110"
                  : "text-gray-600 hover:text-rose-500"
              )}
            />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-5">
          {/* Price & Favorite details */}
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold tracking-tight text-gray-900">{price}</span>
            <span className="text-xs text-gray-400 font-medium">Est. Mort. $1,200/mo</span>
          </div>

          {/* Title */}
          <h3 className="mt-2.5 text-base font-semibold text-gray-900 transition-colors duration-200 group-hover:text-gray-700 line-clamp-1">
            {title}
          </h3>

          {/* Location */}
          <div className="mt-1.5 flex items-center gap-1 text-xs text-gray-500">
            <MapPin className="h-3.5 w-3.5 text-gray-400 shrink-0" />
            <span className="truncate">{location}</span>
          </div>

          {/* Separator line */}
          <div className="my-4 border-t border-gray-100" />

          {/* Specs */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-medium">
                <BedDouble className="h-4 w-4 text-gray-400" />
                <span>{bedrooms} Beds</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Bath className="h-4 w-4 text-gray-400" />
                <span>{bathrooms} Baths</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Maximize2 className="h-3.5 w-3.5 text-gray-400" />
                <span>{area}</span>
              </span>
            </div>
            
            {/* Learn More indicator */}
            <div className="flex items-center gap-0.5 text-gray-900 font-semibold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              <span className="text-[11px]">View</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
