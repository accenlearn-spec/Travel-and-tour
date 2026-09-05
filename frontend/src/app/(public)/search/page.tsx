"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Bus,
  MapPin,
  Calendar,
  Users,
  Check,
  ArrowRight,
  Phone,
  MessageCircle,
  Clock,
  RotateCcw,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { appConfig } from "@/config/app.config";
import { seedCoachDetails, seedFeaturedTours } from "@/features/home/data/seed.data";

function SearchResultsInner() {
  const searchParams = useSearchParams();

  const fromCity = searchParams.get("from") || "Chennai";
  const toCity = searchParams.get("destination") || searchParams.get("to") || "Ooty";
  const departureDate = searchParams.get("departure") || "Upcoming Date";
  const returnDate = searchParams.get("return") || "";
  const tripType = searchParams.get("trip") || "Round Trip";
  const passengers = searchParams.get("passengers") || "Group / Family";

  const coach = seedCoachDetails;

  // Matching or suggested tours based on search destination
  const matchingTours = seedFeaturedTours.filter((tour) =>
    tour.destination.toLowerCase().includes(toCity.toLowerCase()) ||
    tour.title.toLowerCase().includes(toCity.toLowerCase())
  );

  const displayedTours = matchingTours.length > 0 ? matchingTours : seedFeaturedTours.slice(0, 3);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14 text-left">
      
      {/* 1. Search Query Summary Bar */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3 sm:gap-6">
          {/* Route Pill */}
          <div className="flex items-center gap-2">
            <span className="h-9 w-9 rounded-xl bg-blue-50 text-[#1557A6] flex items-center justify-center shrink-0">
              <MapPin className="h-4 w-4" />
            </span>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Selected Route
              </span>
              <span className="text-base font-extrabold text-[#0F172A]">
                {fromCity} → {toCity}
              </span>
            </div>
          </div>

          <div className="hidden sm:block h-8 w-px bg-slate-200" />

          {/* Date Pill */}
          <div className="flex items-center gap-2">
            <span className="h-9 w-9 rounded-xl bg-blue-50 text-[#1557A6] flex items-center justify-center shrink-0">
              <Calendar className="h-4 w-4" />
            </span>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Travel Timing
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#0F172A]">
                {departureDate} {returnDate ? `to ${returnDate}` : `(${tripType})`}
              </span>
            </div>
          </div>

          <div className="hidden sm:block h-8 w-px bg-slate-200" />

          {/* Passenger / Group Pill */}
          <div className="flex items-center gap-2">
            <span className="h-9 w-9 rounded-xl bg-blue-50 text-[#1557A6] flex items-center justify-center shrink-0">
              <Users className="h-4 w-4" />
            </span>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Group Size
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#0F172A]">
                {passengers}
              </span>
            </div>
          </div>
        </div>

        {/* Modify Search Action */}
        <div>
          <Link
            href="/#enquiry"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1557A6] bg-blue-50 hover:bg-blue-100/80 px-4 py-2.5 rounded-xl border border-blue-200 transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Modify Route</span>
          </Link>
        </div>
      </div>

      {/* 2. Coach Availability / Quotation Request Card */}
      <div className="mb-14">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1557A6] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Tourist Coach Option
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mt-2">
              Sri Murugan Holidays Tourist Coach
            </h2>
          </div>
          <span className="hidden sm:inline-flex text-xs font-semibold text-slate-500 items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
            <Clock className="h-3.5 w-3.5 text-slate-500" />
            Direct Operator Quotation
          </span>
        </div>

        {/* Main Card */}
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          
          {/* Coach Visual */}
          <div className="lg:col-span-6 bg-[#0B1E40] relative p-6 sm:p-10 flex flex-col justify-between overflow-hidden min-h-[300px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#071328] via-[#0B1E40] to-[#1557A6]/50" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#0F172A] bg-[#F59E0B] px-3 py-1 rounded-full uppercase tracking-wider">
                Sri Murugan Coach
              </span>
              <span className="text-xs text-white/90 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                Outstation &amp; Tour Ready
              </span>
            </div>

            <div className="relative z-10 w-full h-52 sm:h-64 my-4 flex items-center justify-center">
              <Image
                src={coach.image}
                alt={coach.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)]"
              />
            </div>

            <div className="relative z-10 text-xs text-slate-300 flex items-center justify-between pt-2 border-t border-blue-900/50">
              <span>Sanitized before every trip</span>
              <span>Available for {fromCity} pickup</span>
            </div>
          </div>

          {/* Coach Details & Availability Actions */}
          <div className="lg:col-span-6 p-6 sm:p-9 flex flex-col justify-between bg-white text-left">
            <div>
              <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 mb-2">
                <Check className="h-3.5 w-3.5" />
                <span>Coach Available for Booking Enquiries</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
                {coach.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1.5 leading-relaxed">
                Check date availability and receive an all-inclusive trip quotation for your route ({fromCity} to {toCity}).
              </p>

              {/* Verified Features */}
              <div className="mt-5 pt-5 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Verified Onboard Amenities
                </span>
                <ul className="grid grid-cols-2 gap-2.5">
                  {coach.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm font-semibold text-slate-700">
                      <div className="h-4 w-4 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mr-2 shrink-0">
                        <Check className="h-2.5 w-2.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Availability Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/contact?from=${encodeURIComponent(fromCity)}&to=${encodeURIComponent(
                  toCity
                )}&departure=${encodeURIComponent(departureDate)}&passengers=${encodeURIComponent(
                  passengers
                )}&vehicle=coach`}
                className="flex-1 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm text-center py-3.5 px-5 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
              >
                <span>Request Availability &amp; Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={`https://wa.me/${appConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  `Hi Sri Murugan Holidays, I would like to check availability for your coach for route ${fromCity} to ${toCity} on ${departureDate} (${passengers}).`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm text-center py-3.5 px-5 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${appConfig.contact.phoneTel}`}
                className="bg-slate-100 hover:bg-slate-200 text-[#0F172A] font-bold text-sm text-center py-3.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4 text-[#1557A6]" />
                <span className="hidden sm:inline">Call</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Matching / Recommended Tour Packages */}
      <div className="pt-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1557A6] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Curated Packages
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight mt-1.5">
              Tour Packages Matching Your Travel Route
            </h3>
          </div>
          <Link
            href="/services"
            className="text-xs sm:text-sm font-bold text-[#1557A6] hover:underline flex items-center gap-1"
          >
            <span>All Services</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedTours.map((tour) => (
            <div
              key={tour.id}
              className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full bg-slate-900">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    {tour.badge || tour.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 text-white text-xs font-bold bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
                  {tour.duration}
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-xs font-semibold text-[#1557A6] flex items-center gap-1 mb-1">
                    <MapPin className="h-3 w-3" />
                    {tour.destination}
                  </span>
                  <h4 className="text-base font-bold text-[#0F172A]">
                    {tour.title}
                  </h4>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Custom group charter</span>
                  <Link
                    href={`/contact?service=${encodeURIComponent(tour.title)}`}
                    className="text-xs font-bold text-[#1557A6] hover:text-[#F97316] flex items-center gap-1"
                  >
                    <span>Enquire Tour</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default function SearchPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <React.Suspense fallback={<div className="p-16 text-center text-sm text-slate-500">Loading search results...</div>}>
        <SearchResultsInner />
      </React.Suspense>
    </main>
  );
}
