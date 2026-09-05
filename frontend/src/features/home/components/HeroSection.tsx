"use client";

import Image from "next/image";
import Link from "next/link";
import { Bus, ShieldCheck, Users, CalendarCheck, Headphones, Star } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { SearchBar } from "./SearchBar";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const transitionDelay = (delay: number) => (shouldReduceMotion ? 0 : delay);

  return (
    <section className="relative w-full overflow-visible">
      {/* ========================================================================= */}
      {/* 1. FULL-WIDTH CINEMATIC HERO BANNER (Sri Murugan Bus Banner Artwork)     */}
      {/* ========================================================================= */}
      <div className="relative w-full min-h-[530px] sm:min-h-[550px] lg:min-h-[580px] overflow-hidden bg-[#0B1E40] flex flex-col justify-between">
        
        {/* Banner Background Image */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: transitionDelay(0.0) }}
        >
          <Image
            src="/images/sri-murugan-bus-banner.png"
            alt="Sri Murugan Holidays Luxury Coach on Scenic Mountain Highway"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] sm:object-[68%_center] lg:object-[71%_center] filter brightness-[0.98] contrast-[1.02]"
          />

          {/* Directional Overlay: Deep Navy on left for high contrast readability, transparent on right for bright bus */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(15, 42, 95, 0.88) 0%, rgba(15, 42, 95, 0.72) 32%, rgba(15, 42, 95, 0.25) 60%, rgba(15, 42, 95, 0.02) 82%)",
            }}
          />

          {/* Subtle top vignette for upper controls contrast */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. TOP-RIGHT HERO CONTROLS (Find Bus | Login | Sign Up)                   */}
        {/* ========================================================================= */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 sm:pt-7 flex items-center justify-end">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: transitionDelay(0.1) }}
            className="flex items-center gap-3 sm:gap-4"
          >
            {/* Find Bus Pill Button */}
            <Link
              href="/#enquiry"
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/95 hover:bg-white text-[#0F172A] font-bold text-xs sm:text-[13px] px-3.5 sm:px-4 py-2 rounded-full border border-white/60 shadow-sm transition-all duration-150 hover:scale-[1.02] cursor-pointer"
            >
              <Bus className="h-3.5 w-3.5 text-[#1557A6]" />
              <span>Find Bus</span>
            </Link>

            {/* Login Link */}
            <Link
              href="/login"
              className="text-white hover:text-amber-300 font-bold text-xs sm:text-[13px] px-2.5 sm:px-3 py-1.5 transition-colors cursor-pointer drop-shadow-xs"
            >
              Login
            </Link>

            {/* Sign Up Orange Pill */}
            <Link
              href="/register"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xs sm:text-[13px] px-4 sm:px-4.5 py-2 rounded-full shadow-sm transition-all duration-150 hover:scale-[1.02] cursor-pointer"
            >
              Sign up
            </Link>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 3. HERO CONTENT ON THE LEFT                                               */}
        {/* ========================================================================= */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-4 sm:pt-6 pb-28 sm:pb-32 lg:pb-36">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: transitionDelay(0.15) }}
            className="max-w-[540px] text-left"
          >
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(15,42,95,0.60)] backdrop-blur-md border border-[rgba(245,158,11,0.4)] text-white text-[11px] sm:text-[11.5px] font-bold tracking-wider uppercase mb-4 sm:mb-5 shadow-sm">
              <Star className="h-3.5 w-3.5 text-[#F59E0B] fill-[#F59E0B]" />
              <span>Safe • Comfortable • Reliable</span>
            </div>

            {/* Hero Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.06] drop-shadow-sm mb-4">
              Travel Comfortably<br />Across India
            </h1>

            {/* Hero Subtitle Description */}
            <p className="text-sm sm:text-base text-white/95 font-normal leading-relaxed max-w-[490px] drop-shadow-xs mb-8">
              Book luxury coaches, tour packages, family holidays and custom bus rentals with Sri Murugan Holidays.
            </p>

            {/* Feature / Trust Row */}
            <div className="grid grid-cols-2 sm:flex sm:items-center gap-4 sm:gap-6 pt-1">
              {/* Feature 1: Safe & Reliable */}
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-full bg-[#1557A6]/40 backdrop-blur-xs border border-[#1557A6]/60 flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="h-4 w-4 text-amber-300" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-xs font-bold text-white tracking-tight">Safe &amp; Reliable</span>
                  <span className="text-[10px] sm:text-[10.5px] text-white/80 font-normal mt-0.5">Your safety is our priority</span>
                </div>
              </div>

              {/* Feature 2: Group Friendly */}
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-full bg-[#1557A6]/40 backdrop-blur-xs border border-[#1557A6]/60 flex items-center justify-center text-white shrink-0">
                  <Users className="h-4 w-4 text-amber-300" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-xs font-bold text-white tracking-tight">Group Friendly</span>
                  <span className="text-[10px] sm:text-[10.5px] text-white/80 font-normal mt-0.5">Perfect for families &amp; groups</span>
                </div>
              </div>

              {/* Feature 3: Easy Booking */}
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-full bg-[#1557A6]/40 backdrop-blur-xs border border-[#1557A6]/60 flex items-center justify-center text-white shrink-0">
                  <CalendarCheck className="h-4 w-4 text-amber-300" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-xs font-bold text-white tracking-tight">Easy Booking</span>
                  <span className="text-[10px] sm:text-[10.5px] text-white/80 font-normal mt-0.5">Quick enquiry &amp; hassle-free</span>
                </div>
              </div>

              {/* Feature 4: 24/7 Support */}
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-full bg-[#1557A6]/40 backdrop-blur-xs border border-[#1557A6]/60 flex items-center justify-center text-white shrink-0">
                  <Headphones className="h-4 w-4 text-amber-300" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-xs font-bold text-white tracking-tight">24/7 Support</span>
                  <span className="text-[10px] sm:text-[10.5px] text-white/80 font-normal mt-0.5">We&apos;re here anytime</span>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 4. FLOATING SEARCHBAR OVERLAPPING BANNER BOTTOM                           */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: transitionDelay(0.25) }}
        className="relative z-30 w-full"
      >
        <SearchBar />
      </motion.div>
    </section>
  );
}
