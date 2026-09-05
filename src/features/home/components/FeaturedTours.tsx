"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Heart, ArrowRight, Star } from "lucide-react";
import { TourPackage } from "@/types/travel.types";
import { seedFeaturedTours } from "../data/seed.data";

interface FeaturedToursProps {
  tours?: TourPackage[];
  title?: string;
  subtitle?: string;
}

export function FeaturedTours({
  tours = seedFeaturedTours,
  title = "Popular Tour Packages",
  subtitle = "Simple, well-planned journeys for families, groups and pilgrimage travel across South India.",
}: FeaturedToursProps) {
  const [wishlist, setWishlist] = React.useState<Record<string, boolean>>({});

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="featured-tours" className="scroll-mt-20 py-20 sm:py-24 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4 text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#1557A6] border border-blue-100 text-xs font-bold uppercase tracking-[0.08em] mb-3">
              Curated Packages
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              {title}
            </h2>
            <p className="mt-2 text-base text-[#64748B] max-w-xl leading-relaxed font-normal">
              {subtitle}
            </p>
          </div>
          <Link
            href="/tours"
            className="inline-flex items-center text-sm font-bold text-[#1557A6] hover:text-[#F97316] transition-colors group cursor-pointer shrink-0 self-start sm:self-auto"
          >
            <span>Browse All Tours</span>
            <ArrowRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Tour Cards Grid (3 cols desktop, 2 cols tablet, 1 col mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tours.map((tour) => {
            const isWishlisted = !!wishlist[tour.id];
            return (
              <div
                key={tour.id}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-xs hover:shadow-[0_12px_30px_rgba(15,42,95,0.08)] transition-all duration-200 border border-slate-200/80 hover:border-blue-300 flex flex-col hover:-translate-y-1 text-left"
              >
                {/* Media Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/15 group-hover:bg-slate-950/5 transition-colors" />

                  {/* Badge */}
                  {tour.badge && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[11px] font-bold text-[#0F172A] bg-[#F59E0B] px-3 py-1 rounded-full uppercase tracking-wider shadow-xs border border-amber-400/40">
                        {tour.badge}
                      </span>
                    </div>
                  )}

                  {/* Rating Pill */}
                  {tour.rating && (
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-black/55 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                        <Star className="h-3 w-3 text-[#F59E0B] fill-[#F59E0B]" />
                        {tour.rating} ({tour.reviewCount})
                      </span>
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button
                    type="button"
                    onClick={() => toggleWishlist(tour.id)}
                    aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                    className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 backdrop-blur-xs text-slate-700 hover:text-red-500 hover:bg-white transition-all shadow-xs cursor-pointer"
                  >
                    <Heart
                      className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`}
                    />
                  </button>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Meta Row: Route + Duration */}
                    <div className="flex items-center justify-between text-xs text-[#64748B] mb-2.5">
                      <div className="flex items-center gap-1 font-medium truncate max-w-[65%]">
                        <MapPin className="h-3.5 w-3.5 text-[#1557A6] shrink-0" />
                        <span className="truncate">{tour.destination}</span>
                      </div>
                      <div className="flex items-center gap-1 font-medium shrink-0">
                        <Clock className="h-3.5 w-3.5 text-slate-400" />
                        <span>{tour.duration}</span>
                      </div>
                    </div>

                    {/* Title with predictable height */}
                    <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#1557A6] transition-colors leading-snug line-clamp-2 min-h-[50px]">
                      <Link href={`/tours/${tour.slug}`}>
                        {tour.title}
                      </Link>
                    </h3>
                  </div>

                  {/* Footer Row: Action Button */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      Group &amp; Family Friendly
                    </span>
                    <Link
                      href={`/tours/${tour.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#F97316] hover:bg-[#EA580C] px-4 py-2 rounded-xl transition-all duration-150 hover:scale-[1.02] shadow-sm cursor-pointer"
                    >
                      <span>View Tour</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
