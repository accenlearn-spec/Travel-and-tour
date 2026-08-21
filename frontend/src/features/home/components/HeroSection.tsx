"use client";

import Image from "next/image";
import { Compass, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "./SearchBar";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between pt-24 pb-12 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=2000&q=85"
          alt="Scenic tropical ocean landscape with mountain backdrop"
          fill
          priority
          className="object-cover object-center transform scale-105 filter brightness-90"
        />
        {/* Subtle Dark + Gradient Overlays for readable typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-slate-950/45" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center text-center text-white my-auto">
        {/* Hero Tag Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-semibold mb-6 shadow-xl animate-float">
          <Sparkles className="h-4 w-4 text-amber-400" />
          <span>Curated Travel & Premium Escapes</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl text-white drop-shadow-md">
          Explore the world. <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-amber-300 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
            Create unforgettable memories.
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-100 max-w-2xl font-normal leading-relaxed text-balance drop-shadow-sm">
          Discover handpicked destinations, luxury tours, and local guided adventures tailored to your dream journey.
        </p>

        {/* Hero Call to Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#featured-tours">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-950/30">
              <Compass className="h-5 w-5 mr-2" />
              Explore Tours
            </Button>
          </a>
          <a href="#popular-destinations">
            <Button size="lg" variant="glass" className="font-bold rounded-xl text-white hover:bg-white/20 border-white/40">
              View Destinations
            </Button>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-200">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              <span className="inline-block h-6 w-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-[10px] font-bold">★</span>
              <span className="inline-block h-6 w-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-[10px] font-bold">★</span>
              <span className="inline-block h-6 w-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-[10px] font-bold">★</span>
            </div>
            <span><strong className="text-white">4.9/5</strong> Rating (2,400+ Reviews)</span>
          </div>
          <div className="h-4 w-px bg-white/30 hidden sm:block" />
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            <span>Verified Local Guides</span>
          </div>
        </div>
      </div>

      {/* Floating Search Bar Integration */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <SearchBar />
      </div>
    </section>
  );
}
