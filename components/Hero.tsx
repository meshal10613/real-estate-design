import Image from "next/image";
import { SearchBar } from "@/components/SearchBar";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[620px] w-full overflow-hidden lg:min-h-[720px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Modern cityscape with luxury buildings"
          fill
          priority
          className="object-cover object-center scale-102 animate-pulse-slow"
          sizes="100vw"
        />
        {/* Dark elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-center px-4 pt-28 pb-16 text-center">
        <div className="max-w-3xl">
          {/* Subtitle tag */}
          <div className="mx-auto w-fit rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-sm animate-fade-in-up">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/95">
              Premium Real Estate Network
            </span>
          </div>

          {/* Majestic Heading */}
          <h1 className="mt-6 animate-fade-in-up delay-100 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Discover Homes That
            <br />
            <span className="italic font-light text-neutral-100">Define Elegance</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl animate-fade-in-up delay-200 text-sm leading-relaxed text-neutral-300 sm:text-base">
            Buy, sell, or rent high-end real estate with Realteek. We partner with the world's leading architects to deliver unmatched living spaces.
          </p>
        </div>

        {/* Search Bar floats over hero */}
        <div className="mt-10 w-full max-w-4xl px-2 sm:px-4 animate-fade-in-up delay-300">
          <SearchBar />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-bounce">
          <span className="text-[9px] font-bold uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </section>
  );
}
