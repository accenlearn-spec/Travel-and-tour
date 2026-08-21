"use client";

import * as React from "react";
import Image from "next/image";
import { Star, Clock, MapPin, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { featuredTours } from "../data/home.data";

export function FeaturedTours() {
  const [wishlist, setWishlist] = React.useState<Record<string, boolean>>({});

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="featured-tours" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
              Curated Experiences
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Tour Packages
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl">
              Handpicked itineraries with top-rated local guides, transparent pricing, and guaranteed memory creation.
            </p>
          </div>
          <button
            type="button"
            className="mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 group cursor-pointer"
          >
            Browse All Tours
            <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTours.map((tour) => {
            const isWishlisted = !!wishlist[tour.id];
            return (
              <Card
                key={tour.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border-slate-200/80 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl"
              >
                {/* Tour Card Media */}
                <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badge */}
                  {tour.badge && (
                    <div className="absolute top-3 left-3 z-10">
                      <Badge variant="accent" className="bg-amber-400 text-slate-950 font-bold shadow-sm">
                        {tour.badge}
                      </Badge>
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button
                    type="button"
                    onClick={() => toggleWishlist(tour.id)}
                    aria-label={`Save ${tour.title} to wishlist`}
                    className="absolute top-3 right-3 z-10 h-9 w-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-rose-600 hover:bg-white transition-all shadow-sm cursor-pointer"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        isWishlisted ? "fill-rose-600 text-rose-600" : ""
                      }`}
                    />
                  </button>

                  <div className="absolute bottom-3 left-3 z-10">
                    <Badge variant="outline" className="bg-slate-900/80 backdrop-blur-md text-white border-0 font-medium">
                      <Clock className="h-3 w-3 mr-1 text-sky-300" />
                      {tour.duration}
                    </Badge>
                  </div>
                </div>

                {/* Tour Details Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Destination */}
                    <div className="flex items-center text-xs font-semibold text-emerald-700 mb-1.5">
                      <MapPin className="h-3.5 w-3.5 mr-1 shrink-0" />
                      <span className="truncate">{tour.destination}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                      {tour.title}
                    </h3>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    {/* Rating & Reviews */}
                    <div className="flex items-center justify-between text-xs mb-3">
                      <div className="flex items-center font-bold text-slate-800">
                        <Star className="h-4 w-4 text-amber-500 fill-amber-500 mr-1" />
                        <span>{tour.rating}</span>
                        <span className="text-slate-400 font-normal ml-1">
                          ({tour.reviewCount} reviews)
                        </span>
                      </div>
                      <span className="text-[11px] font-medium text-slate-500 uppercase bg-slate-100 px-2 py-0.5 rounded">
                        {tour.category}
                      </span>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <span className="text-[11px] text-slate-500 block uppercase font-medium">From</span>
                        <div className="flex items-baseline">
                          <span className="text-xl font-extrabold text-slate-900">
                            ${tour.startingPrice}
                          </span>
                          <span className="text-xs text-slate-500 ml-0.5">/person</span>
                        </div>
                      </div>

                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 font-semibold">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
