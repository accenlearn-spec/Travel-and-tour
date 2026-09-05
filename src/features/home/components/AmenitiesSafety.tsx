"use client";

import Link from "next/link";
import {
  Armchair,
  Sparkles,
  Luggage,
  BadgeCheck,
  HeartPulse,
  Headphones,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface AmenityItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const defaultAmenitiesData: AmenityItem[] = [
  {
    id: "amenity-001",
    title: "Comfortable Seating",
    description: "Ergonomic pushback seating designed to support a relaxed travel experience.",
    icon: Armchair,
  },
  {
    id: "amenity-002",
    title: "Clean Travel Environment",
    description: "Strict sanitization and clean cabins maintaining a neat passenger space.",
    icon: Sparkles,
  },
  {
    id: "amenity-003",
    title: "Luggage Space",
    description: "Generous underdeck and overhead storage for group bags and luggage.",
    icon: Luggage,
  },
  {
    id: "amenity-004",
    title: "Experienced Drivers",
    description: "Professional, verified drivers for smooth highway and mountain roads.",
    icon: BadgeCheck,
  },
  {
    id: "amenity-005",
    title: "First-Aid Preparedness",
    description: "On-board first-aid supplies and safety protocols for peace of mind.",
    icon: HeartPulse,
  },
  {
    id: "amenity-006",
    title: "Journey Assistance",
    description: "Round-the-clock trip coordination and quick assistance whenever needed.",
    icon: Headphones,
  },
];

export function AmenitiesSafety() {
  return (
    <section
      id="amenities"
      className="scroll-mt-20 py-20 sm:py-24 lg:py-28 bg-[#F8FAFC] border-t border-slate-200/80"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial & Brand Message */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between h-full">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.08em] text-[#1557A6] bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full mb-3">
                Comfort &amp; Safety
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                Designed for Better Journeys
              </h2>
              
              <p className="mt-4 text-base text-[#64748B] leading-relaxed font-normal">
                Thoughtful comfort features, strict maintenance standards, and proven travel practices that make every group journey smoother, safer, and more reassuring.
              </p>
            </div>

            {/* Trust Note & CTA Box */}
            <div className="mt-8 pt-6 border-t border-slate-200/80">
              <div className="flex items-start gap-3 text-[#0F172A] bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                <ShieldCheck className="h-5 w-5 text-[#1557A6] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-medium leading-normal text-slate-700">
                  Every vehicle undergoes pre-trip mechanical checks before starting on highways.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="/#enquiry"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-[#F97316] hover:bg-[#EA580C] px-6 py-3 rounded-xl transition-all duration-150 hover:scale-[1.01] shadow-sm cursor-pointer"
                >
                  <span>Plan Your Journey</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Amenity/Safety Items Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {defaultAmenitiesData.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="group bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all duration-200 flex items-start gap-4 text-left hover:-translate-y-0.5"
                  >
                    <div className="h-11 w-11 rounded-xl bg-blue-50 border border-blue-100 text-[#1557A6] flex items-center justify-center shrink-0 group-hover:bg-[#1557A6] group-hover:text-white transition-colors duration-200">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#1557A6] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
