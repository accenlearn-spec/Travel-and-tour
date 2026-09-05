"use client";

import Link from "next/link";
import {
  BusFront,
  Landmark,
  UsersRound,
  Users,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  Route,
  ArrowRight,
} from "lucide-react";
import { ServiceItem } from "@/types/travel.types";
import { seedServices } from "../data/seed.data";

interface CategoriesSectionProps {
  services?: ServiceItem[];
  title?: string;
  subtitle?: string;
  previewMode?: boolean;
}

const iconMap: Record<string, React.ElementType> = {
  BusFront,
  Landmark,
  UsersRound,
  Users,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  Route,
};

export function CategoriesSection({
  services = seedServices,
  title = "Our Services",
  subtitle = "Dependable tourist coach and group travel solutions for families, institutions, and organizations.",
  previewMode = false,
}: CategoriesSectionProps) {
  // If previewMode, display 4 highlights on Home
  const displayedServices = previewMode ? services.slice(0, 4) : services;

  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-24 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.08em] text-[#1557A6] bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-3">
            {title}
          </h2>
          <p className="mt-2 text-base text-[#64748B] leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {displayedServices.map((item) => {
            const IconComponent = iconMap[item.iconName] || BusFront;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 shadow-xs hover:shadow-[0_12px_30px_rgba(15,42,95,0.08)] border border-slate-200/80 hover:border-blue-300 transition-all duration-200 hover:-translate-y-1 text-left"
              >
                <div>
                  {/* Top Bar: Icon Container & Category Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100/80 flex items-center justify-center text-[#1557A6] group-hover:bg-[#1557A6] group-hover:text-white transition-colors duration-200 shrink-0">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#1557A6] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Enquire Action Link */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/contact?service=${encodeURIComponent(item.title)}`}
                    className="text-xs font-bold text-[#1557A6] group-hover:text-[#F97316] inline-flex items-center gap-1 transition-colors focus:outline-none"
                  >
                    <span>Enquire About Service</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services CTA for Homepage preview */}
        {previewMode && (
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#1557A6] hover:bg-[#0D4182] px-7 py-3.5 rounded-xl shadow-xs transition-all hover:scale-[1.01]"
            >
              <span>View All Services ({services.length})</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
