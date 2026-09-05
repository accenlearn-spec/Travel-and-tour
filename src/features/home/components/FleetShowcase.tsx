"use client";

import Image from "next/image";
import Link from "next/link";
import { Bus, Check, ArrowRight, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FleetVehicle } from "@/types/travel.types";
import { seedFleetVehicles } from "../data/seed.data";

interface FleetShowcaseProps {
  vehicles?: FleetVehicle[];
  title?: string;
  subtitle?: string;
}

export function FleetShowcase({
  vehicles = seedFleetVehicles,
  title = "Our Fleet",
  subtitle = "Choose from comfortable, modern tourist vehicles designed for family trips, group tours, pilgrimage circuits and custom journeys.",
}: FleetShowcaseProps) {
  return (
    <section id="fleet" className="scroll-mt-20 py-20 sm:py-24 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.08em] text-[#1557A6] bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full">
            Travel in Comfort
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-3">
            {title}
          </h2>
          <p className="mt-2 text-base text-[#64748B] leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* Fleet Grid (3 cols desktop, 2 cols tablet, 1 col mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-xs hover:shadow-[0_12px_30px_rgba(15,42,95,0.09)] transition-all duration-200 border border-slate-200/80 hover:border-blue-300 flex flex-col justify-between hover:-translate-y-1 text-left"
            >
              <div>
                {/* Vehicle Image Stage (Dark Navy with Royal Blue halo) */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B1E40] flex items-center justify-center p-4">
                  {/* Subtle Light Halo behind vehicle */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#071328] via-[#0B1E40] to-[#1557A6]/40" />

                  {/* Vehicle Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[11px] font-bold text-[#0F172A] bg-[#F59E0B] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs border border-amber-400/40">
                      {vehicle.badge}
                    </span>
                  </div>

                  {/* Capacity Pill */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-[11px] font-bold text-white bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                      {vehicle.capacity}
                    </span>
                  </div>

                  {/* Vehicle Cutout Image */}
                  <div className="relative w-full h-full z-10 flex items-center justify-center">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain object-center drop-shadow-[0_10px_18px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1557A6] mb-1">
                    <Bus className="h-3.5 w-3.5 text-[#1557A6]" />
                    <span>{vehicle.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#1557A6] transition-colors">
                    {vehicle.name}
                  </h3>

                  <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                    {vehicle.suitability}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                    {vehicle.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center text-xs font-medium text-slate-700">
                        <Check className="h-3.5 w-3.5 text-[#1557A6] mr-2 shrink-0 font-bold" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-5 sm:p-6 pt-0">
                <Link
                  href="/#enquiry"
                  className="w-full text-xs font-bold text-[#1557A6] hover:text-white bg-blue-50 hover:bg-[#1557A6] border border-blue-200/80 p-3 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                >
                  <span>Enquire About This Vehicle</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom CTA Banner */}
        <div className="mt-12 sm:mt-16 bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 text-[#1557A6] flex items-center justify-center shrink-0 hidden sm:flex">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                Need Help Choosing a Vehicle?
              </h4>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-xl font-normal">
                Share your group size, travel dates and destination, and we&apos;ll recommend the best vehicle for your journey.
              </p>
            </div>
          </div>

          <Link href="/#enquiry" className="w-full md:w-auto shrink-0">
            <Button
              size="lg"
              className="w-full md:w-auto bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-base px-7 py-3 rounded-xl shadow-xs cursor-pointer transition-all duration-200 hover:scale-[1.01]"
            >
              <Users className="h-4 w-4 mr-2" />
              Get a Free Quote
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
