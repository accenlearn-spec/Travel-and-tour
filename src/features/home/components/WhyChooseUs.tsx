"use client";

import { Armchair, BadgeCheck, Route, Headphones } from "lucide-react";
import { TrustReason } from "@/types/travel.types";
import { seedTrustReasons } from "../data/seed.data";

interface WhyChooseUsProps {
  features?: TrustReason[];
  title?: string;
  subtitle?: string;
}

const iconMap: Record<string, React.ElementType> = {
  Armchair,
  BadgeCheck,
  Route,
  Headphones,
};

export function WhyChooseUs({
  features = seedTrustReasons,
  title = "Why Choose Sri Murugan Holidays?",
  subtitle = "Thoughtful travel planning, comfortable journeys and dependable support for families, groups and organizations.",
}: WhyChooseUsProps) {
  return (
    <section
      id="why-us"
      className="scroll-mt-20 py-20 sm:py-24 lg:py-28 bg-white border-t border-slate-200/80"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.08em] text-[#1557A6] bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full">
            Our Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-3">
            {title}
          </h2>
          <p className="mt-2 text-base text-[#64748B] leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* 4 Core Trust Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.iconName] || Armchair;
            return (
              <div
                key={feature.id}
                className="group bg-[#F8FAFC] p-6 sm:p-7 rounded-2xl border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-[0_12px_30px_rgba(15,42,95,0.08)] transition-all duration-200 text-left flex flex-col items-start hover:-translate-y-1"
              >
                <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 text-[#1557A6] flex items-center justify-center mb-4 group-hover:bg-[#1557A6] group-hover:text-white transition-colors duration-200">
                  <IconComponent className="h-6 w-6" aria-hidden="true" />
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#1557A6] transition-colors">
                  {feature.title}
                </h3>
                
                <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
