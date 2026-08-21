"use client";

import Image from "next/image";
import { Bus, ShieldCheck, Star, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "./SearchBar";

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-slate-950">
      {/* Hero Bus Background Visual */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bus.jpg"
          alt="Sri Murugan Holidays Luxury Tourist Coach on scenic road"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105 filter brightness-[0.85] contrast-[1.05]"
        />
        {/* Subtle Dark Navy + Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent hidden md:block" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center text-white my-auto w-full">
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-amber-500/40 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-xl">
            <Bus className="h-4 w-4 text-amber-400 shrink-0" />
            <span>SRI MURUGAN HOLIDAYS</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-200">TOURS &amp; TRAVELS</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-white drop-shadow-md">
            Journeys Made <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Memorable.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed text-balance drop-shadow-sm max-w-2xl">
            Discover unforgettable journeys with comfortable travel, carefully planned tours, and experiences worth remembering.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#featured-tours">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-amber-950/50 border border-amber-400/40 cursor-pointer">
                <Bus className="h-5 w-5 mr-2" />
                Explore Tours
              </Button>
            </a>
            <a href="#popular-destinations">
              <Button size="lg" variant="glass" className="font-bold rounded-xl text-white hover:bg-white/15 border-white/30 cursor-pointer">
                Plan Your Journey
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </a>
          </div>

          {/* Trust Badges Bar */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-slate-200 border-t border-white/10 pt-6">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((idx) => (
                  <Star key={idx} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span><strong className="text-white font-bold">4.9/5</strong> Rating (3,500+ Trips)</span>
            </div>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              <span>Safe &amp; Comfortable Luxury Coaches</span>
            </div>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber-400" />
              <span>Temple Trips &amp; All India Circuits</span>
            </div>
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
