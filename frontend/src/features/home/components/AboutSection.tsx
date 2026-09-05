"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Bus } from "lucide-react";

const aboutFeatures = [
  "Family & Group Travel",
  "Tour Planning & Circuits",
  "Custom Bus Charters",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-20 sm:py-24 lg:py-28 bg-white border-t border-slate-200/80"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Tourist Bus Image Stage */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden bg-[#0B1E40] border border-blue-950 shadow-md aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] flex items-center justify-center p-6 group">
              {/* Background gradient halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#071328] via-[#0B1E40] to-[#1557A6]/40" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0F172A] bg-[#F59E0B] px-3 py-1 rounded-full uppercase tracking-wider shadow-xs border border-amber-400/40">
                  <Bus className="h-3.5 w-3.5 text-[#0F172A]" />
                  Sri Murugan Holidays
                </span>
              </div>

              {/* Bus Cutout Image */}
              <div className="relative w-full h-full z-10 flex items-center justify-center">
                <Image
                  src="/images/hero-bus-cutout.png"
                  alt="Sri Murugan Holidays Tourist Bus"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                  className="object-contain object-center drop-shadow-[0_12px_22px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 text-left order-1 lg:order-2">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.08em] text-[#1557A6] bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full mb-3">
              About Sri Murugan Holidays
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Making Every Journey More Comfortable
            </h2>

            <div className="mt-4 space-y-3 text-base text-[#64748B] leading-relaxed font-normal">
              <p>
                Sri Murugan Holidays provides dependable travel solutions for families, groups, institutions and organizations. From tourist bus rentals and temple tours to family holidays and custom journeys, our focus is on making trip planning simple, comfortable and convenient.
              </p>
              <p>
                Whether you&apos;re planning a weekend getaway, a spiritual pilgrimage, a corporate retreat or a private family journey, our team helps you choose a travel option perfectly suited to your itinerary.
              </p>
            </div>

            {/* 3 Checklist Points */}
            <div className="mt-6 pt-6 border-t border-slate-200/80">
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {aboutFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-center text-xs sm:text-sm font-bold text-[#0F172A]">
                    <div className="h-5 w-5 rounded-full bg-blue-100 border border-blue-200 text-[#1557A6] flex items-center justify-center mr-2 shrink-0">
                      <Check className="h-3 w-3 font-bold" aria-hidden="true" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Primary Section CTA */}
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-[#1557A6] hover:bg-[#0D4182] px-6 py-3 rounded-xl shadow-xs transition-all duration-200 hover:scale-[1.01] cursor-pointer"
              >
                <span>Read More About Us</span>
                <ArrowRight className="h-4 w-4 text-white" aria-hidden="true" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
