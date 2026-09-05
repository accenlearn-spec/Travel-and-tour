"use client";

import * as React from "react";
import { MapPin, Bus, CalendarCheck, Sparkles } from "lucide-react";
import { JourneyStepItem } from "@/types/travel.types";
import { seedJourneySteps } from "../data/seed.data";

interface JourneyProcessProps {
  steps?: JourneyStepItem[];
  title?: string;
  subtitle?: string;
}

const stepIcons: Record<string, React.ElementType> = {
  MapPin,
  Bus,
  CalendarCheck,
  Sparkles,
};

export function JourneyProcess({
  steps = seedJourneySteps,
  title = "How Your Journey Works",
  subtitle = "Four simple steps to plan and enjoy comfortable travel with Sri Murugan Holidays.",
}: JourneyProcessProps) {
  return (
    <section id="journey-process" className="scroll-mt-20 py-20 sm:py-24 lg:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.08em] text-[#1557A6] bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full">
            Simple &amp; Seamless Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-3">
            {title}
          </h2>
          <p className="mt-2 text-base text-[#64748B] leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* Desktop Horizontal Stepper & Mobile Vertical Timeline */}
        <div className="relative">
          {/* Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#1557A6]/20 via-[#1557A6] to-[#1557A6]/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((item) => {
              const IconComponent = stepIcons[item.iconName] || MapPin;
              return (
                <div
                  key={item.step}
                  className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-blue-300 shadow-xs hover:shadow-[0_12px_30px_rgba(15,42,95,0.08)] transition-all duration-200 flex flex-col items-center text-center hover:-translate-y-1"
                >
                  {/* Step Number & Icon Circle */}
                  <div className="relative mb-5">
                    <div className="h-14 w-14 rounded-2xl bg-[#0F2A5F] text-white flex items-center justify-center shadow-md group-hover:bg-[#1557A6] transition-colors duration-200">
                      <IconComponent className="h-6 w-6 text-amber-300" />
                    </div>
                    <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-[#F97316] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                      {item.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#1557A6] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
