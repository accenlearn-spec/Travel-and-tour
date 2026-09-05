"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, MapPin } from "lucide-react";
import { seedGalleryItems } from "../data/seed.data";

export function GalleryPreview() {
  // Show 4 selected photos on the homepage
  const previewPhotos = seedGalleryItems.slice(0, 4);

  return (
    <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#1557A6] bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full mb-2">
              <Camera className="h-3.5 w-3.5 text-[#1557A6]" />
              Travel Memories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Journeys &amp; Moments
            </h2>
            <p className="mt-2 text-base text-[#64748B] max-w-xl font-normal">
              Snapshots from outstation trips, temple tours, and coach journeys across South India.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1557A6] hover:text-[#0D4182] group shrink-0"
          >
            <span>View Full Gallery ({seedGalleryItems.length} photos)</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {previewPhotos.map((item) => (
            <Link
              key={item.id}
              href="/gallery"
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Tag Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                  {item.category}
                </span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                <h3 className="text-sm font-bold truncate group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                {item.location && (
                  <p className="text-[11px] text-slate-300 flex items-center gap-1 mt-0.5">
                    <MapPin className="h-3 w-3 text-amber-400 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
