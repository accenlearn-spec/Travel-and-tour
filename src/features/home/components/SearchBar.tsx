"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Bus, Building2, ArrowLeftRight, ChevronDown, Calendar, Plus, Compass } from "lucide-react";

interface SearchBarProps {
  initialFrom?: string;
  initialTo?: string;
  popularRoutes?: Array<{ from: string; to: string }>;
}

const defaultPopularRoutes = [
  { from: "Chennai", to: "Ooty" },
  { from: "Bangalore", to: "Coorg" },
  { from: "Chennai", to: "Tirupati" },
  { from: "Madurai", to: "Rameswaram" },
];

export function SearchBar({
  initialFrom = "Chennai",
  initialTo = "Kanyakumari",
  popularRoutes = defaultPopularRoutes,
}: SearchBarProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState<"buses" | "stays">("buses");
  const [fromLocation, setFromLocation] = React.useState(initialFrom);
  const [toLocation, setToLocation] = React.useState(initialTo);
  const [tripType, setTripType] = React.useState("Return");
  const [departReturnDate, setDepartReturnDate] = React.useState("02 Dec 22 - 12 Dec 22");
  const [passengerClass, setPassengerClass] = React.useState("1 Passenger, Economy");
  const [showPromoInput, setShowPromoInput] = React.useState(false);
  const [promoCode, setPromoCode] = React.useState("");
  const [showAdvanced, setShowAdvanced] = React.useState(false);

  const handleSwapLocations = (e: React.MouseEvent) => {
    e.preventDefault();
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
  };

  const handleSelectRoute = (from: string, to: string) => {
    setFromLocation(from);
    setToLocation(to);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    if (fromLocation) queryParams.set("from", fromLocation);
    if (toLocation) queryParams.set("destination", toLocation);
    if (tripType) queryParams.set("trip", tripType);
    if (passengerClass) queryParams.set("passengers", passengerClass);

    router.push(`/search?${queryParams.toString()}`);
  };

  return (
    <div
      id="enquiry"
      className="w-full max-w-[1360px] mx-auto -mt-20 sm:-mt-24 lg:-mt-26 relative z-30 px-4 sm:px-6"
    >
      {/* Floating White Search Card */}
      <div className="bg-white rounded-[24px] p-5 sm:p-7 shadow-[0_20px_50px_rgba(15,42,95,0.12)] border border-slate-200/90 text-[#0F172A]">
        
        {/* Top Tab Bar (Buses | Stays / Tours) */}
        <div className="flex items-center gap-7 sm:gap-8 mb-5 border-b border-slate-100 pb-3">
          {/* Buses Tab */}
          <button
            type="button"
            onClick={() => setActiveTab("buses")}
            className={`flex items-center gap-2 text-sm sm:text-base font-bold transition-all relative pb-3 cursor-pointer ${
              activeTab === "buses"
                ? "text-[#1557A6]"
                : "text-slate-600 hover:text-[#0F172A]"
            }`}
          >
            <Bus className={`h-4 w-4 ${activeTab === "buses" ? "text-[#1557A6]" : "text-slate-400"}`} />
            <span>Buses</span>
            {activeTab === "buses" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#1557A6] rounded-full" />
            )}
          </button>

          {/* Stays / Tours Tab */}
          <button
            type="button"
            onClick={() => setActiveTab("stays")}
            className={`flex items-center gap-2 text-sm sm:text-base font-bold transition-all relative pb-3 cursor-pointer ${
              activeTab === "stays"
                ? "text-[#1557A6]"
                : "text-slate-600 hover:text-[#0F172A]"
            }`}
          >
            <Building2 className={`h-4 w-4 ${activeTab === "stays" ? "text-[#1557A6]" : "text-slate-400"}`} />
            <span>Stays / Tours</span>
            {activeTab === "stays" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#1557A6] rounded-full" />
            )}
          </button>
        </div>

        {/* Search Form Fields (Uniform 66px height) */}
        <form onSubmit={handleSearch}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2.5fr_1.3fr_1.9fr_2fr_1.5fr] gap-3 sm:gap-3.5 items-stretch text-left">
            
            {/* 1. FROM - TO Field (66px) */}
            <div className="h-[66px] border border-[#DCE4EA] rounded-xl px-3.5 sm:px-4 py-2 bg-white hover:border-[#1557A6]/60 focus-within:border-[#1557A6] focus-within:ring-1 focus-within:ring-[#1557A6] transition-all flex flex-col justify-center">
              <span className="block text-[11px] font-bold text-[#64748B] uppercase tracking-[0.04em] leading-none mb-1">
                From - To
              </span>
              <div className="flex items-center justify-between gap-1.5 min-w-0">
                <div className="flex items-center gap-1.5 min-w-0 flex-1">
                  <input
                    type="text"
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    placeholder="Origin"
                    className="w-full bg-transparent text-sm font-semibold text-[#0F172A] focus:outline-none truncate placeholder:text-slate-400"
                  />
                  <span className="text-slate-400 font-semibold select-none">-</span>
                  <input
                    type="text"
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                    placeholder="Destination"
                    className="w-full bg-transparent text-sm font-semibold text-[#0F172A] focus:outline-none truncate placeholder:text-slate-400"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSwapLocations}
                  title="Swap Origin and Destination"
                  className="p-1 rounded-md text-slate-400 hover:text-[#1557A6] hover:bg-blue-50 transition-colors shrink-0 cursor-pointer"
                >
                  <ArrowLeftRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* 2. TRIP Field (66px) */}
            <div className="h-[66px] border border-[#DCE4EA] rounded-xl px-3.5 sm:px-4 py-2 bg-white hover:border-[#1557A6]/60 focus-within:border-[#1557A6] focus-within:ring-1 focus-within:ring-[#1557A6] transition-all flex flex-col justify-center relative">
              <span className="block text-[11px] font-bold text-[#64748B] uppercase tracking-[0.04em] leading-none mb-1">
                Trip
              </span>
              <div className="relative flex items-center justify-between">
                <select
                  value={tripType}
                  onChange={(e) => setTripType(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-[#0F172A] focus:outline-none appearance-none cursor-pointer pr-5"
                >
                  <option value="Return">Return</option>
                  <option value="One Way">One Way</option>
                  <option value="Custom Group">Custom Group</option>
                </select>
                <ChevronDown className="h-4 w-4 text-slate-400 absolute right-0 pointer-events-none" />
              </div>
            </div>

            {/* 3. DEPART - RETURN Field (66px) */}
            <div className="h-[66px] border border-[#DCE4EA] rounded-xl px-3.5 sm:px-4 py-2 bg-white hover:border-[#1557A6]/60 focus-within:border-[#1557A6] focus-within:ring-1 focus-within:ring-[#1557A6] transition-all flex flex-col justify-center">
              <span className="block text-[11px] font-bold text-[#64748B] uppercase tracking-[0.04em] leading-none mb-1">
                Depart - Return
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-slate-500 shrink-0" />
                <input
                  type="text"
                  value={departReturnDate}
                  onChange={(e) => setDepartReturnDate(e.target.value)}
                  placeholder="Select Dates"
                  className="w-full bg-transparent text-sm font-semibold text-[#0F172A] focus:outline-none truncate"
                />
              </div>
            </div>

            {/* 4. PASSENGER - CLASS Field (66px) */}
            <div className="h-[66px] border border-[#DCE4EA] rounded-xl px-3.5 sm:px-4 py-2 bg-white hover:border-[#1557A6]/60 focus-within:border-[#1557A6] focus-within:ring-1 focus-within:ring-[#1557A6] transition-all flex flex-col justify-center relative">
              <span className="block text-[11px] font-bold text-[#64748B] uppercase tracking-[0.04em] leading-none mb-1">
                Passenger - Class
              </span>
              <div className="relative flex items-center justify-between">
                <select
                  value={passengerClass}
                  onChange={(e) => setPassengerClass(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-[#0F172A] focus:outline-none appearance-none cursor-pointer pr-5"
                >
                  <option value="1 Passenger, Economy">1 Passenger, Economy</option>
                  <option value="2 Guests, Tourist Coach">2 Guests, Tourist Coach</option>
                  <option value="3-5 Group">3-5 Group</option>
                  <option value="6-12 Group">6-12 Group</option>
                  <option value="13-25 Luxury Coach">13-25 Luxury Coach</option>
                  <option value="26-50 Group Charter">26-50 Group Charter</option>
                </select>
                <ChevronDown className="h-4 w-4 text-slate-400 absolute right-0 pointer-events-none" />
              </div>
            </div>

            {/* 5. SEARCH BUSES BUTTON (Identical 66px height with Vibrant Orange) */}
            <div className="h-[66px] flex items-stretch">
              <button
                type="submit"
                className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-[15px] rounded-xl shadow-sm cursor-pointer transition-all duration-150 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center px-5 shrink-0"
              >
                <span>Search Buses</span>
              </button>
            </div>

          </div>

          {/* Popular Pre-filled Route Chips Row */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[#64748B] font-semibold flex items-center gap-1">
                <Compass className="h-3.5 w-3.5 text-[#1557A6]" />
                Popular Routes:
              </span>
              {popularRoutes.map((route, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectRoute(route.from, route.to)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100/80 hover:bg-blue-50 text-slate-700 hover:text-[#1557A6] border border-slate-200/60 transition-colors font-medium cursor-pointer"
                >
                  {route.from} → {route.to}
                </button>
              ))}
            </div>

            {/* Secondary Promo & Advanced Actions */}
            <div className="flex items-center gap-4 text-xs font-semibold text-[#64748B]">
              {!showPromoInput ? (
                <button
                  type="button"
                  onClick={() => setShowPromoInput(true)}
                  className="inline-flex items-center gap-1 hover:text-[#1557A6] transition-colors cursor-pointer"
                >
                  <Plus className="h-3.5 w-3.5 text-slate-500" />
                  <span>Add Promo Code</span>
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo Code"
                    className="text-xs font-bold px-2.5 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-[#1557A6]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPromoInput(false)}
                    className="text-xs text-slate-400 hover:text-slate-600 font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              )}

              <span className="w-px h-3.5 bg-slate-200" />

              <button
                type="button"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="inline-flex items-center gap-1 hover:text-[#1557A6] transition-colors cursor-pointer"
              >
                <span>Advanced Options</span>
                <ChevronDown className={`h-3.5 w-3.5 text-slate-400 transition-transform ${showAdvanced ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>

          {/* Advanced Search Options Tray (if toggled) */}
          {showAdvanced && (
            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-600 animate-in fade-in duration-150">
              <label className="flex items-center gap-2 cursor-pointer hover:text-slate-900">
                <input type="checkbox" className="rounded text-[#1557A6] focus:ring-[#1557A6]" defaultChecked />
                <span>AC Sleeper Coaches Only</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-slate-900">
                <input type="checkbox" className="rounded text-[#1557A6] focus:ring-[#1557A6]" />
                <span>Direct / Non-Stop Routes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-slate-900">
                <input type="checkbox" className="rounded text-[#1557A6] focus:ring-[#1557A6]" />
                <span>Underdeck Luggage Bay</span>
              </label>
            </div>
          )}

        </form>

      </div>
    </div>
  );
}
