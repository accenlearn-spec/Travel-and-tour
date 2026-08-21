"use client";

import * as React from "react";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { popularDestinations } from "../data/home.data";

export function SearchBar() {
  const [selectedDestination, setSelectedDestination] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState("");
  const [travelers, setTravelers] = React.useState("2 Guests");
  const [activeTab, setActiveTab] = React.useState<"tours" | "destinations">("tours");
  const [isSearched, setIsSearched] = React.useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearched(true);
    setTimeout(() => setIsSearched(false), 3000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Search Type Tabs */}
      <div className="flex items-center gap-2 mb-3 px-2">
        <button
          type="button"
          onClick={() => setActiveTab("tours")}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
            activeTab === "tours"
              ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/20"
              : "bg-white/70 hover:bg-white text-slate-700 backdrop-blur-md"
          }`}
        >
          Explore Tours
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("destinations")}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
            activeTab === "destinations"
              ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/20"
              : "bg-white/70 hover:bg-white text-slate-700 backdrop-blur-md"
          }`}
        >
          Find Destinations
        </button>
      </div>

      {/* Main Bar Card */}
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl border border-white/50 text-slate-900">
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Destination Selection */}
          <div className="md:col-span-4 flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100/80 transition-colors border border-slate-100">
            <div className="h-10 w-10 rounded-lg bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <label htmlFor="destination-select" className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Where to?
              </label>
              <select
                id="destination-select"
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer truncate"
              >
                <option value="">All Destinations</option>
                {popularDestinations.map((dest) => (
                  <option key={dest.id} value={dest.name}>
                    {dest.name}, {dest.country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Date Selector */}
          <div className="md:col-span-3 flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100/80 transition-colors border border-slate-100">
            <div className="h-10 w-10 rounded-lg bg-sky-100/80 text-sky-700 flex items-center justify-center shrink-0">
              <Calendar className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <label htmlFor="travel-date" className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                When?
              </label>
              <input
                id="travel-date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer"
              />
            </div>
          </div>

          {/* Travelers Selector */}
          <div className="md:col-span-3 flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100/80 transition-colors border border-slate-100">
            <div className="h-10 w-10 rounded-lg bg-amber-100/80 text-amber-700 flex items-center justify-center shrink-0">
              <Users className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <label htmlFor="travelers-select" className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Travelers
              </label>
              <select
                id="travelers-select"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer"
              >
                <option value="1 Guest">1 Guest</option>
                <option value="2 Guests">2 Guests</option>
                <option value="3-4 Guests">3-4 Guests</option>
                <option value="5+ Group">5+ Group</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="md:col-span-2">
            <Button
              type="submit"
              size="lg"
              className="w-full h-13 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-900/20"
            >
              <Search className="h-5 w-5 mr-1" />
              Search
            </Button>
          </div>
        </form>

        {isSearched && (
          <div className="mt-3 p-2.5 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-lg text-center border border-emerald-200 animate-pulse-subtle">
            ✨ Demo Search Active: Filtered results preview ready for {selectedDestination || "All Destinations"}!
          </div>
        )}
      </div>
    </div>
  );
}
