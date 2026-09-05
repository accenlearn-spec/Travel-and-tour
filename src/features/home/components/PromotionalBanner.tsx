"use client";

import Image from "next/image";
import { Sparkles, ArrowRight, Bus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PromotionalBanner() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="relative rounded-3xl overflow-hidden bg-[#0B1E40] text-white shadow-xl p-8 sm:p-12 lg:p-16 border border-blue-900/60">
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80"
            alt="Scenic South India Travel Road"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071328] via-[#0B1E40]/90 to-transparent" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F59E0B] text-[#0F172A] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Special Travel Offer
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Your Next Journey Is Waiting.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Book your early-bird group coach or tour package today and enjoy transparent pricing, modern luxury coaches, and dedicated trip coordination.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#featured-tours">
                <Button size="lg" className="bg-[#F97316] hover:bg-[#EA580C] font-bold text-white rounded-xl shadow-md cursor-pointer transition-all duration-150 hover:scale-[1.01]">
                  <Bus className="h-5 w-5 mr-2" />
                  Explore Packages
                </Button>
              </a>
              <a href="#popular-destinations">
                <Button size="lg" variant="outline" className="font-bold text-white hover:bg-white/15 border-white/40 bg-white/5 rounded-xl cursor-pointer">
                  View Destinations
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
