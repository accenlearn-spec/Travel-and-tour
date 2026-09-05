"use client";

import Image from "next/image";
import Link from "next/link";
import { Bus, Check, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { appConfig } from "@/config/app.config";
import { seedCoachDetails } from "../data/seed.data";

export function CoachShowcase() {
  const coach = seedCoachDetails;

  return (
    <section id="coach" className="scroll-mt-20 py-20 sm:py-24 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.08em] text-[#1557A6] bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full">
            Travel in Comfort
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-3">
            Meet Our Tourist Coach
          </h2>
          <p className="mt-2 text-base text-[#64748B] leading-relaxed font-normal">
            A dedicated, well-maintained coach designed for comfortable outstation family trips, temple pilgrimages, and group travel.
          </p>
        </div>

        {/* Large Single Coach Stage Showcase Card */}
        <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          
          {/* Left / Top: High-Resolution Bus Image Stage */}
          <div className="lg:col-span-7 bg-[#0B1E40] relative p-6 sm:p-10 flex flex-col justify-between overflow-hidden min-h-[340px] sm:min-h-[420px]">
            {/* Background Halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#071328] via-[#0B1E40] to-[#1557A6]/50" />
            
            {/* Top Badges */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F172A] bg-[#F59E0B] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-xs border border-amber-400/40">
                <Bus className="h-3.5 w-3.5 text-[#0F172A]" />
                Sri Murugan Coach
              </span>
              <span className="text-xs font-semibold text-white/90 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                Outstation &amp; Local Tours
              </span>
            </div>

            {/* Coach Visual Cutout */}
            <div className="relative z-10 w-full h-56 sm:h-72 my-4 flex items-center justify-center">
              <Image
                src={coach.image}
                alt={coach.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain object-center drop-shadow-[0_18px_30px_rgba(0,0,0,0.7)] hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Bottom Caption */}
            <div className="relative z-10 text-xs text-slate-300 flex items-center justify-between pt-2 border-t border-blue-900/50">
              <span>Sanitized before every departure</span>
              <span>Direct operator charter</span>
            </div>
          </div>

          {/* Right / Bottom: Editorial Details & Specifications */}
          <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between bg-white text-left">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1557A6]">
                Our Coach
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mt-1">
                {coach.title}
              </h3>
              <p className="text-sm font-semibold text-[#F97316] mt-1">
                {coach.tagline}
              </p>
              <p className="text-sm text-[#64748B] leading-relaxed mt-3">
                {coach.description}
              </p>

              {/* Verified Features Checklist */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5">
                  Verified Onboard Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {coach.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm font-semibold text-[#0F172A]">
                      <div className="h-5 w-5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mr-2.5 shrink-0">
                        <Check className="h-3 w-3 font-bold" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact?vehicle=coach"
                className="flex-1 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm text-center py-3 px-5 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Enquire About This Bus</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              
              <a
                href={appConfig.contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm text-center py-3 px-4 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
