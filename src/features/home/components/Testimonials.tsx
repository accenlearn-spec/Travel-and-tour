"use client";

import { Quote, Star, CheckCircle2 } from "lucide-react";
import { TestimonialItem } from "@/types/travel.types";
import { seedTestimonials } from "../data/seed.data";

interface TestimonialsProps {
  testimonials?: TestimonialItem[];
  title?: string;
  subtitle?: string;
}

export function Testimonials({
  testimonials = seedTestimonials,
  title = "What Our Travelers Say",
  subtitle = "Real journeys are remembered through comfort, driver punctuality, and overall travel experience.",
}: TestimonialsProps) {
  return (
    <section
      id="testimonials"
      className="scroll-mt-20 py-20 sm:py-24 lg:py-28 bg-white border-t border-slate-200/80"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.08em] text-[#1557A6] bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full">
            Traveler Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-3">
            {title}
          </h2>
          <p className="mt-2 text-base text-[#64748B] leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group bg-[#F8FAFC] p-6 sm:p-7 rounded-2xl border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-[0_12px_30px_rgba(15,42,95,0.08)] transition-all duration-200 text-left flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Rating stars and Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-blue-200 group-hover:text-[#1557A6] transition-colors" />
                </div>

                <p className="text-sm sm:text-[15px] text-[#0F172A] font-medium leading-relaxed italic">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#0F2A5F] text-amber-300 flex items-center justify-center font-bold text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-[#0F172A]">
                      {item.name}
                    </h4>
                    <span className="text-xs text-[#64748B]">
                      {item.location || item.category}
                    </span>
                  </div>
                </div>

                {item.verified && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1557A6] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                    <CheckCircle2 className="h-3 w-3 text-[#1557A6]" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
