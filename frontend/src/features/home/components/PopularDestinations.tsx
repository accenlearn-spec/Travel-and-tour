"use client";

import Image from "next/image";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { popularDestinations } from "../data/home.data";

export function PopularDestinations() {
  return (
    <section id="popular-destinations" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <MapPin className="h-3.5 w-3.5 text-emerald-600" />
              Top Destinations
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Popular Destinations
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl">
              Explore places travelers love around the world — from tropical backwaters to majestic royal forts.
            </p>
          </div>
          <button
            type="button"
            className="mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 group cursor-pointer"
          >
            Explore All Destinations
            <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Grid of Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {popularDestinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-[380px]"
            >
              {/* Image Container */}
              <div className="relative w-full h-full">
                <Image
                  src={destination.image}
                  alt={`${destination.name}, ${destination.country}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="glass" className="bg-white/90 text-slate-900 font-bold backdrop-blur-md px-2.5 py-1">
                    <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500 mr-1" />
                    {destination.rating}
                  </Badge>
                </div>

                {/* Tour Count Badge */}
                {destination.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant="default" className="bg-emerald-600 text-white font-semibold">
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Card Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-10 text-white flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                      {destination.country} • {destination.region}
                    </span>
                    <span className="text-xs font-medium text-slate-200 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      {destination.tourCount} Tours
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {destination.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-200 line-clamp-2 font-normal leading-relaxed opacity-90">
                    {destination.shortDescription}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-semibold text-white">
                    <span>Explore Packages</span>
                    <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1 text-amber-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
