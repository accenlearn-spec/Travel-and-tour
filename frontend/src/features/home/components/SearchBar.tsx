"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Bus,
  Compass,
  ArrowLeftRight,
  ChevronDown,
  Calendar,
  MapPin,
  Users,
  Search,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface SearchBarProps {
  initialFrom?: string;
  initialTo?: string;
  popularRoutes?: Array<{ from: string; to: string }>;
}

const defaultPopularOrigins = [
  "Chennai",
  "Bangalore",
  "Coimbatore",
  "Madurai",
  "Salem",
  "Trichy",
  "Tirunelveli",
  "Vellore",
  "Pondicherry",
  "Hosur",
  "Erode",
  "Tiruppur",
];

const defaultPopularDestinations = [
  "Ooty",
  "Kodaikanal",
  "Mysore",
  "Coorg",
  "Munnar",
  "Tirupati",
  "Rameswaram",
  "Kanyakumari",
  "Wayanad",
  "Yercaud",
  "Madurai",
  "Chennai",
];

const defaultPopularRoutes = [
  { from: "Chennai", to: "Ooty" },
  { from: "Bangalore", to: "Coorg" },
  { from: "Chennai", to: "Tirupati" },
  { from: "Madurai", to: "Rameswaram" },
  { from: "Coimbatore", to: "Munnar" },
];

export function SearchBar({
  initialFrom = "Chennai",
  initialTo = "Ooty",
  popularRoutes = defaultPopularRoutes,
}: SearchBarProps) {
  const router = useRouter();

  // Search input states
  const [fromLocation, setFromLocation] = React.useState(initialFrom);
  const [toLocation, setToLocation] = React.useState(initialTo);
  const [tripType, setTripType] = React.useState<"One Way" | "Round Trip">("Round Trip");

  // Dates (defaults: tomorrow and 3 days later)
  const tomorrowStr = React.useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  }, []);

  const returnStr = React.useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 4);
    return d.toISOString().split("T")[0];
  }, []);

  const [departureDate, setDepartureDate] = React.useState(tomorrowStr);
  const [returnDate, setReturnDate] = React.useState(returnStr);
  const [passengerGroup, setPassengerGroup] = React.useState("5–12 Passengers (Family Group)");

  // Dropdown open states
  const [fromDropdownOpen, setFromDropdownOpen] = React.useState(false);
  const [toDropdownOpen, setToDropdownOpen] = React.useState(false);
  const [fromFilter, setFromFilter] = React.useState("");
  const [toFilter, setToFilter] = React.useState("");

  // Error validation
  const [errorMsg, setErrorMsg] = React.useState("");

  const fromRef = React.useRef<HTMLDivElement>(null);
  const toRef = React.useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (fromRef.current && !fromRef.current.contains(e.target as Node)) {
        setFromDropdownOpen(false);
      }
      if (toRef.current && !toRef.current.contains(e.target as Node)) {
        setToDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filtered lists
  const filteredOrigins = defaultPopularOrigins.filter((city) =>
    city.toLowerCase().includes(fromFilter.toLowerCase())
  );

  const filteredDestinations = defaultPopularDestinations.filter((dest) =>
    dest.toLowerCase().includes(toFilter.toLowerCase())
  );

  const handleSwapLocations = (e: React.MouseEvent) => {
    e.preventDefault();
    setErrorMsg("");
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
  };

  const handleSelectRoute = (from: string, to: string) => {
    setErrorMsg("");
    setFromLocation(from);
    setToLocation(to);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fromLocation.trim()) {
      setErrorMsg("Please select or enter your departure location (From).");
      return;
    }
    if (!toLocation.trim()) {
      setErrorMsg("Please select or enter your destination (To).");
      return;
    }
    if (fromLocation.trim().toLowerCase() === toLocation.trim().toLowerCase()) {
      setErrorMsg("Origin and Destination cannot be the same place.");
      return;
    }

    setErrorMsg("");
    const queryParams = new URLSearchParams();
    queryParams.set("from", fromLocation.trim());
    queryParams.set("destination", toLocation.trim());
    queryParams.set("trip", tripType);
    queryParams.set("departure", departureDate);
    if (tripType === "Round Trip" && returnDate) {
      queryParams.set("return", returnDate);
    }
    queryParams.set("passengers", passengerGroup);

    router.push(`/search?${queryParams.toString()}`);
  };

  return (
    <div
      id="enquiry"
      className="w-full max-w-[1360px] mx-auto -mt-20 sm:-mt-24 lg:-mt-26 relative z-30 px-4 sm:px-6"
    >
      {/* Floating White Search Card */}
      <div className="bg-white rounded-[24px] p-5 sm:p-7 shadow-[0_20px_50px_rgba(15,42,95,0.12)] border border-slate-200/90 text-[#0F172A]">
        
        {/* Top Header Row with Coach availability badge & Trip Type toggle */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-slate-100 pb-3.5">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-blue-50 text-[#1557A6] flex items-center justify-center shrink-0">
              <Bus className="h-4 w-4" />
            </span>
            <div>
              <span className="text-sm font-bold text-[#0F172A]">Sri Murugan Tourist Coach &amp; Tours</span>
              <span className="hidden sm:inline text-xs text-[#64748B] ml-2">· Private Charter &amp; Outstation Travel</span>
            </div>
          </div>

          {/* One Way / Round Trip Toggle */}
          <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setTripType("Round Trip")}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                tripType === "Round Trip"
                  ? "bg-white text-[#1557A6] shadow-xs font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Round Trip
            </button>
            <button
              type="button"
              onClick={() => setTripType("One Way")}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                tripType === "One Way"
                  ? "bg-white text-[#1557A6] shadow-xs font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              One Way
            </button>
          </div>
        </div>

        {/* Validation Alert */}
        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center gap-2 animate-in fade-in duration-200">
            <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Search Form Fields */}
        <form onSubmit={handleSearch}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-3.5 items-stretch text-left">
            
            {/* 1. FROM Field (Searchable Dropdown) */}
            <div
              ref={fromRef}
              className="lg:col-span-3 relative h-[68px] border border-[#DCE4EA] rounded-xl px-3.5 sm:px-4 py-2 bg-white hover:border-[#1557A6]/60 focus-within:border-[#1557A6] focus-within:ring-1 focus-within:ring-[#1557A6] transition-all flex flex-col justify-center"
            >
              <div className="flex items-center justify-between">
                <span className="block text-[11px] font-bold text-[#64748B] uppercase tracking-[0.04em] leading-none mb-1">
                  From (Pickup City)
                </span>
                <MapPin className="h-3.5 w-3.5 text-slate-400" />
              </div>
              
              <input
                type="text"
                value={fromLocation}
                onChange={(e) => {
                  setFromLocation(e.target.value);
                  setFromFilter(e.target.value);
                  setFromDropdownOpen(true);
                  if (errorMsg) setErrorMsg("");
                }}
                onFocus={() => {
                  setFromFilter("");
                  setFromDropdownOpen(true);
                }}
                placeholder="Search city or pickup location..."
                className="w-full bg-transparent text-sm font-bold text-[#0F172A] focus:outline-none truncate placeholder:text-slate-400 placeholder:font-normal"
              />

              {/* FROM Dropdown Menu */}
              {fromDropdownOpen && (
                <div className="absolute left-0 right-0 top-[72px] bg-white rounded-xl shadow-2xl border border-slate-200 p-2 z-50 max-h-60 overflow-y-auto animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    Pickup Hubs &amp; Cities
                  </div>
                  {filteredOrigins.length > 0 ? (
                    filteredOrigins.map((city) => (
                      <button
                        key={city}
                        type="button"
                        onClick={() => {
                          setFromLocation(city);
                          setFromDropdownOpen(false);
                          if (errorMsg) setErrorMsg("");
                        }}
                        className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg flex items-center justify-between transition-colors ${
                          fromLocation === city
                            ? "bg-blue-50 text-[#1557A6] font-bold"
                            : "hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 text-slate-400" />
                          {city}
                        </span>
                        {fromLocation === city && <CheckCircle2 className="h-3.5 w-3.5 text-[#1557A6]" />}
                      </button>
                    ))
                  ) : (
                    <div className="p-3 text-xs text-slate-500 text-center">
                      Press enter to use &quot;{fromLocation}&quot;
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* SWAP BUTTON (in desktop rendered between From and To) */}
            <div className="hidden lg:flex items-center justify-center -mx-2 z-20">
              <button
                type="button"
                onClick={handleSwapLocations}
                title="Swap Origin and Destination"
                className="h-10 w-10 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-[#1557A6] border border-slate-200/80 flex items-center justify-center text-slate-500 transition-transform active:scale-95 shadow-xs cursor-pointer"
              >
                <ArrowLeftRight className="h-4 w-4" />
              </button>
            </div>

            {/* 2. TO Field (Searchable Dropdown) */}
            <div
              ref={toRef}
              className="lg:col-span-3 relative h-[68px] border border-[#DCE4EA] rounded-xl px-3.5 sm:px-4 py-2 bg-white hover:border-[#1557A6]/60 focus-within:border-[#1557A6] focus-within:ring-1 focus-within:ring-[#1557A6] transition-all flex flex-col justify-center"
            >
              <div className="flex items-center justify-between">
                <span className="block text-[11px] font-bold text-[#64748B] uppercase tracking-[0.04em] leading-none mb-1">
                  To (Destination)
                </span>
                <Compass className="h-3.5 w-3.5 text-slate-400" />
              </div>

              <input
                type="text"
                value={toLocation}
                onChange={(e) => {
                  setToLocation(e.target.value);
                  setToFilter(e.target.value);
                  setToDropdownOpen(true);
                  if (errorMsg) setErrorMsg("");
                }}
                onFocus={() => {
                  setToFilter("");
                  setToDropdownOpen(true);
                }}
                placeholder="Search destination..."
                className="w-full bg-transparent text-sm font-bold text-[#0F172A] focus:outline-none truncate placeholder:text-slate-400 placeholder:font-normal"
              />

              {/* TO Dropdown Menu */}
              {toDropdownOpen && (
                <div className="absolute left-0 right-0 top-[72px] bg-white rounded-xl shadow-2xl border border-slate-200 p-2 z-50 max-h-60 overflow-y-auto animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    Popular Destinations
                  </div>
                  {filteredDestinations.length > 0 ? (
                    filteredDestinations.map((dest) => (
                      <button
                        key={dest}
                        type="button"
                        onClick={() => {
                          setToLocation(dest);
                          setToDropdownOpen(false);
                          if (errorMsg) setErrorMsg("");
                        }}
                        className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg flex items-center justify-between transition-colors ${
                          toLocation === dest
                            ? "bg-blue-50 text-[#1557A6] font-bold"
                            : "hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Compass className="h-3.5 w-3.5 text-slate-400" />
                          {dest}
                        </span>
                        {toLocation === dest && <CheckCircle2 className="h-3.5 w-3.5 text-[#1557A6]" />}
                      </button>
                    ))
                  ) : (
                    <div className="p-3 text-xs text-slate-500 text-center">
                      Press enter to use &quot;{toLocation}&quot;
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 3. DATES (Departure + Return if round trip) */}
            <div className="lg:col-span-3 h-[68px] border border-[#DCE4EA] rounded-xl px-3.5 sm:px-4 py-2 bg-white hover:border-[#1557A6]/60 focus-within:border-[#1557A6] focus-within:ring-1 focus-within:ring-[#1557A6] transition-all flex flex-col justify-center">
              <span className="block text-[11px] font-bold text-[#64748B] uppercase tracking-[0.04em] leading-none mb-1">
                {tripType === "Round Trip" ? "Departure & Return Dates" : "Departure Date"}
              </span>
              
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-slate-400 shrink-0" />
                <div className="flex items-center gap-1.5 flex-1 min-w-0">
                  <input
                    type="date"
                    min={tomorrowStr}
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#0F172A] focus:outline-none cursor-pointer"
                  />
                  {tripType === "Round Trip" && (
                    <>
                      <span className="text-slate-300 font-bold">-</span>
                      <input
                        type="date"
                        min={departureDate || tomorrowStr}
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#0F172A] focus:outline-none cursor-pointer"
                      />
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* 4. PASSENGERS / GROUP SIZE */}
            <div className="lg:col-span-2 h-[68px] border border-[#DCE4EA] rounded-xl px-3.5 sm:px-4 py-2 bg-white hover:border-[#1557A6]/60 focus-within:border-[#1557A6] focus-within:ring-1 focus-within:ring-[#1557A6] transition-all flex flex-col justify-center relative">
              <span className="block text-[11px] font-bold text-[#64748B] uppercase tracking-[0.04em] leading-none mb-1">
                Passengers / Group
              </span>
              <div className="relative flex items-center justify-between">
                <select
                  value={passengerGroup}
                  onChange={(e) => setPassengerGroup(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#0F172A] focus:outline-none appearance-none cursor-pointer pr-5"
                >
                  <option value="1–4 Passengers (Family / Small)">1–4 Passengers</option>
                  <option value="5–12 Passengers (Family Group)">5–12 Passengers</option>
                  <option value="13–25 Passengers (Medium Group)">13–25 Passengers</option>
                  <option value="26–40+ Passengers (Full Coach)">26–40+ Passengers</option>
                </select>
                <ChevronDown className="h-4 w-4 text-slate-400 absolute right-0 pointer-events-none" />
              </div>
            </div>

            {/* 5. CHECK AVAILABILITY BUTTON (Uniform 68px height) */}
            <div className="lg:col-span-12 xl:col-span-1 h-[68px] flex items-stretch">
              <button
                type="submit"
                className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm sm:text-[15px] rounded-xl shadow-sm cursor-pointer transition-all duration-150 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center px-4 shrink-0 text-center gap-2"
              >
                <Search className="h-4 w-4" />
                <span className="whitespace-nowrap">Check Availability</span>
              </button>
            </div>

          </div>

          {/* Popular Pre-filled Route Chips Row */}
          <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
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

            {/* Mobile Swap Helper */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={handleSwapLocations}
                className="text-xs font-semibold text-[#1557A6] flex items-center gap-1"
              >
                <ArrowLeftRight className="h-3 w-3" />
                Swap Origin &amp; Destination
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
}
