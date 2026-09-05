"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Tag,
  ArrowRight,
  Bus,
} from "lucide-react";
import { seedGalleryItems } from "@/features/home/data/seed.data";
import { GalleryItem } from "@/types/travel.types";

const categories = ["All", "Bus", "Trips", "Destinations", "Customers", "Events"] as const;
type Category = (typeof categories)[number];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = React.useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  // Filter items
  const filteredItems = React.useMemo(() => {
    if (activeCategory === "All") return seedGalleryItems;
    return seedGalleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Lightbox keyboard controls
  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (lightboxIndex === null) return;

      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  // Lock body scroll when lightbox is open
  React.useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const currentItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <main className="flex flex-col min-h-screen">
      
      {/* 1. Gallery Hero Banner */}
      <section className="relative bg-[#0B1E40] text-white py-18 sm:py-24 overflow-hidden border-b border-blue-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-[#071328] via-[#0B1E40] to-[#1557A6]/40" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 rounded-full mb-3">
            <Camera className="h-3.5 w-3.5" />
            Photo Gallery
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Our Journeys &amp; Memories
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Real photos of our tourist coach, South Indian pilgrimage circuits, scenic hill stations, and memorable family adventures.
          </p>
        </div>
      </section>

      {/* 2. Gallery Content Section */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#1557A6] text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 hover:text-[#0F172A] border border-slate-200/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Responsive Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 aspect-[4/3] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Stage */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Caption & Location */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  {item.location && (
                    <p className="text-xs text-slate-300 flex items-center gap-1 mt-1">
                      <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                      <span>{item.location}</span>
                    </p>
                  )}
                  {item.caption && (
                    <p className="text-[11px] text-slate-300/90 mt-1 line-clamp-1">
                      {item.caption}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Interactive Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-between p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Top Bar: Title & Close */}
          <div className="w-full max-w-6xl flex items-center justify-between text-white z-20 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                {currentItem.category} · {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white">
                {currentItem.title}
              </h4>
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close Lightbox"
              className="h-10 w-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Central Image Viewport with Prev / Next */}
          <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-2">
            {/* Previous Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-all z-20 cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Displayed Image */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-xl overflow-hidden flex items-center justify-center">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                priority
                sizes="100vw"
                className="object-contain object-center"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
              }}
              aria-label="Next image"
              className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-all z-20 cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Bottom Information & Keyboard Helper */}
          <div className="w-full max-w-4xl text-center text-slate-300 text-xs sm:text-sm pt-2">
            {currentItem.caption && <p>{currentItem.caption}</p>}
            <p className="text-[11px] text-slate-500 mt-1">
              Use Left &amp; Right Arrow keys to navigate · Press Esc to close
            </p>
          </div>
        </div>
      )}

      {/* 4. Bottom Planning CTA */}
      <section className="py-16 bg-white border-t border-slate-200/80 text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1557A6] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Create Your Memories
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mt-2.5">
            Planning Your Next Journey?
          </h2>
          <p className="mt-2 text-sm text-[#64748B] max-w-md mx-auto">
            Book our comfortable tourist coach for your upcoming family function, outstation vacation, or pilgrimage.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/contact?type=enquiry"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm px-7 py-3 rounded-xl shadow-xs transition-colors flex items-center gap-2"
            >
              <span>Enquire Now</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
