"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Star } from "lucide-react";
import { Destination } from "@/types/travel.types";
import { seedDestinations } from "../data/seed.data";

interface PopularDestinationsProps {
  destinations?: Destination[];
  title?: string;
  subtitle?: string;
}

export function PopularDestinations({
  destinations = seedDestinations,
  title = "Plan Your Perfect Trip",
  subtitle = "Discover popular journeys for family holidays, temple visits, weekend getaways and group travel.",
}: PopularDestinationsProps) {
  const displayDestinations = destinations.slice(0, 6);

  return (
    <section id="popular-destinations" className="scroll-mt-20 py-20 sm:py-24 lg:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4 text-left">
          <div>
            {/* Small uppercase label */}
            <span className="inline-block text-xs font-bold uppercase tracking-[0.08em] text-[#1557A6] bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full mb-3">
              Explore Popular Destinations
            </span>
            {/* Section heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0F172A] tracking-tight">
              {title}
            </h2>
            {/* Description */}
            <p className="mt-2 text-sm sm:text-base text-[#64748B] font-normal max-w-xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* See more places button on the right */}
          <Link
            href="/destinations"
            className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#0F172A] bg-white hover:bg-slate-50 border border-slate-300 px-4 py-2.5 rounded-xl shadow-2xs transition-colors shrink-0 self-start sm:self-auto cursor-pointer"
          >
            <span>See more places</span>
            <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
          </Link>
        </div>

        {/* 6 Destination Image Cards in CSS Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {displayDestinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/search?destination=${encodeURIComponent(destination.name)}`}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xs hover:shadow-[0_12px_30px_rgba(15,42,95,0.12)] transition-all duration-300 cursor-pointer block bg-slate-100"
            >
              {/* Destination Image */}
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Bottom Gradient for High Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E40]/95 via-[#0B1E40]/40 to-transparent pointer-events-none" />

              {/* Top rating badge if available */}
              {destination.rating && (
                <div className="absolute top-2.5 right-2.5 z-10">
                  <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-white bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20">
                    <Star className="h-3 w-3 text-[#F59E0B] fill-[#F59E0B]" />
                    {destination.rating}
                  </span>
                </div>
              )}

              {/* Card Meta Content */}
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 flex items-end justify-between gap-2 z-10">
                <div className="flex flex-col text-left min-w-0">
                  <h3 className="text-white font-bold text-[15px] sm:text-[17px] leading-tight group-hover:text-amber-300 transition-colors drop-shadow-xs truncate">
                    {destination.name}
                  </h3>
                  <span className="text-white/80 text-[11px] sm:text-xs font-normal mt-0.5 leading-tight truncate">
                    {destination.category || "Tour Package"}
                  </span>
                </div>

                {/* Circular Orange Arrow Button */}
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-[#F97316] text-white flex items-center justify-center shadow-xs group-hover:bg-[#EA580C] group-hover:translate-x-0.5 transition-all shrink-0">
                  <ArrowRight className="h-3.5 w-3.5 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
