"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Bus,
  ShieldCheck,
} from "lucide-react";
import { appConfig } from "@/config/app.config";

function ContactFormInner() {
  const searchParams = useSearchParams();

  // Query parameter pre-fills
  const initialService = searchParams.get("service") || "";
  const initialVehicle = searchParams.get("vehicle") || "";
  const initialFrom = searchParams.get("from") || "";
  const initialTo = searchParams.get("to") || searchParams.get("destination") || "";
  const initialDate = searchParams.get("departure") || "";
  const initialPassengers = searchParams.get("passengers") || "";

  // Form states
  const [fullName, setFullName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [pickupCity, setPickupCity] = React.useState(initialFrom);
  const [destination, setDestination] = React.useState(initialTo);
  const [travelDate, setTravelDate] = React.useState(initialDate);
  const [passengerCount, setPassengerCount] = React.useState(initialPassengers || "5–12 Passengers");
  const [tripType, setTripType] = React.useState("Round Trip");
  const [message, setMessage] = React.useState(
    initialService
      ? `Hi, I would like to enquire about: ${initialService}.`
      : initialVehicle
      ? "Hi, I would like to enquire about chartering the Sri Murugan Holidays tourist coach."
      : ""
  );

  // Submission & Validation states
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) newErrors.fullName = "Please enter your full name.";
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Please enter your phone number.";
    } else if (!/^[0-9+ -]{8,15}$/.test(phoneNumber.trim())) {
      newErrors.phoneNumber = "Please enter a valid phone number.";
    }
    if (!pickupCity.trim()) newErrors.pickupCity = "Please enter pickup location.";
    if (!destination.trim()) newErrors.destination = "Please enter your destination.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate enquiry submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl border border-emerald-200 p-8 sm:p-12 text-center shadow-lg shadow-emerald-500/5 animate-in fade-in zoom-in-95 duration-300">
        <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="h-9 w-9" />
        </div>
        <h3 className="text-2xl font-black text-[#0F172A]">
          Enquiry Received Successfully!
        </h3>
        <p className="mt-3 text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
          Thank you, <strong>{fullName}</strong>. We have received your trip enquiry from{" "}
          <strong>{pickupCity}</strong> to <strong>{destination}</strong>. Our team will contact you shortly with coach availability and quotation.
        </p>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`https://wa.me/${appConfig.contact.whatsappNumber}?text=${encodeURIComponent(
              `Hi Sri Murugan Holidays, I just submitted an enquiry for ${pickupCity} to ${destination} for ${passengerCount}. My name is ${fullName}.`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-xs transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Connect on WhatsApp Now</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setFullName("");
              setPhoneNumber("");
              setMessage("");
            }}
            className="text-xs font-bold text-slate-500 hover:text-slate-800 px-4 py-2"
          >
            Send Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm text-left"
    >
      <div className="mb-6 pb-4 border-b border-slate-100">
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
          Request Coach &amp; Tour Quotation
        </h3>
        <p className="text-xs sm:text-sm text-[#64748B] mt-1">
          Fill out this form and our team will get back to you promptly with availability details.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Ramesh Kumar"
            className={`w-full text-sm font-semibold px-4 py-3 rounded-xl border ${
              errors.fullName ? "border-red-400 bg-red-50/30" : "border-slate-300 bg-slate-50/50"
            } focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1557A6] transition-all`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1 font-medium">{errors.fullName}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
            Phone / Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="e.g. +91 98765 43210"
            className={`w-full text-sm font-semibold px-4 py-3 rounded-xl border ${
              errors.phoneNumber ? "border-red-400 bg-red-50/30" : "border-slate-300 bg-slate-50/50"
            } focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1557A6] transition-all`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs mt-1 font-medium">{errors.phoneNumber}</p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
            Email Address (Optional)
          </label>
          <input
            type="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            placeholder="e.g. ramesh@example.com"
            className="w-full text-sm font-semibold px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1557A6] transition-all"
          />
        </div>

        {/* Trip Type */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
            Trip Type
          </label>
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            className="w-full text-sm font-semibold px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1557A6] transition-all cursor-pointer"
          >
            <option value="Round Trip">Round Trip</option>
            <option value="One Way">One Way</option>
            <option value="Multi-Day Tour Circuit">Multi-Day Tour Circuit</option>
            <option value="Single Day Event / Marriage Transit">Single Day Event / Marriage Transit</option>
          </select>
        </div>

        {/* Pickup Location */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
            From (Pickup City / Hub) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={pickupCity}
            onChange={(e) => setPickupCity(e.target.value)}
            placeholder="e.g. Chennai, Bangalore, Coimbatore"
            className={`w-full text-sm font-semibold px-4 py-3 rounded-xl border ${
              errors.pickupCity ? "border-red-400 bg-red-50/30" : "border-slate-300 bg-slate-50/50"
            } focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1557A6] transition-all`}
          />
          {errors.pickupCity && (
            <p className="text-red-500 text-xs mt-1 font-medium">{errors.pickupCity}</p>
          )}
        </div>

        {/* Destination */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
            To (Destination / Circuit) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="e.g. Ooty, Tirupati, Munnar, Mysore"
            className={`w-full text-sm font-semibold px-4 py-3 rounded-xl border ${
              errors.destination ? "border-red-400 bg-red-50/30" : "border-slate-300 bg-slate-50/50"
            } focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1557A6] transition-all`}
          />
          {errors.destination && (
            <p className="text-red-500 text-xs mt-1 font-medium">{errors.destination}</p>
          )}
        </div>

        {/* Travel Date */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
            Estimated Travel Date
          </label>
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className="w-full text-sm font-semibold px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1557A6] transition-all cursor-pointer"
          />
        </div>

        {/* Passenger Count / Group Size */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
            Number of Passengers / Group Size
          </label>
          <select
            value={passengerCount}
            onChange={(e) => setPassengerCount(e.target.value)}
            className="w-full text-sm font-semibold px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1557A6] transition-all cursor-pointer"
          >
            <option value="1–4 Passengers (Small Family)">1–4 Passengers (Small Family)</option>
            <option value="5–12 Passengers (Family Group)">5–12 Passengers (Family Group)</option>
            <option value="13–25 Passengers (Medium Group)">13–25 Passengers (Medium Group)</option>
            <option value="26–40+ Passengers (Full Coach Charter)">26–40+ Passengers (Full Coach Charter)</option>
          </select>
        </div>

      </div>

      {/* Message / Details */}
      <div className="mt-4 sm:mt-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
          Trip Details or Special Requirements
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Mention specific places to visit, pickup address, return timing, or any special requests..."
          className="w-full text-sm font-semibold p-4 rounded-xl border border-slate-300 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1557A6] transition-all"
        />
      </div>

      {/* Submit Action Button */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
          <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
          Zero spam guarantee · Your info is only used to send your quotation.
        </span>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-xs transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
        >
          {isSubmitting ? (
            <span>Processing Enquiry...</span>
          ) : (
            <>
              <span>Send Enquiry</span>
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* 1. Contact Hero Banner */}
      <section className="relative bg-[#0B1E40] text-white py-18 sm:py-24 overflow-hidden border-b border-blue-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-[#071328] via-[#0B1E40] to-[#1557A6]/40" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 rounded-full mb-3">
            Direct Communication
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Let&apos;s Plan Your Journey
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Have questions about coach availability, routes, or tour pricing? Reach out to Sri Murugan Holidays directly.
          </p>
        </div>
      </section>

      {/* 2. Contact Channels & Interactive Form */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Quick Contact Cards */}
            <div className="lg:col-span-5 space-y-4 text-left">
              
              {/* Phone Card */}
              <a
                href={`tel:${appConfig.contact.phoneTel}`}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex items-start gap-4 group block"
              >
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-[#1557A6] flex items-center justify-center shrink-0 group-hover:bg-[#1557A6] group-hover:text-white transition-colors">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Phone Support
                  </span>
                  <div className="text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#1557A6] transition-colors mt-0.5">
                    {appConfig.contact.phone}
                  </div>
                  <p className="text-xs text-[#64748B] mt-1">
                    Call directly for immediate availability and itinerary advice.
                  </p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={appConfig.contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex items-start gap-4 group block"
              >
                <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">
                    Instant WhatsApp Chat
                  </span>
                  <div className="text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-emerald-700 transition-colors mt-0.5">
                    WhatsApp Enquiry
                  </div>
                  <p className="text-xs text-[#64748B] mt-1">
                    Chat with our booking team for quick estimates and photo shares.
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${appConfig.contact.email}`}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex items-start gap-4 group block"
              >
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-[#1557A6] flex items-center justify-center shrink-0 group-hover:bg-[#1557A6] group-hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Email Desk
                  </span>
                  <div className="text-base font-bold text-[#0F172A] group-hover:text-[#1557A6] transition-colors mt-0.5 truncate">
                    {appConfig.contact.email}
                  </div>
                  <p className="text-xs text-[#64748B] mt-1">
                    Send formal requests, corporate RFPs, or long itineraries.
                  </p>
                </div>
              </a>

              {/* Office & Operating Hours */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#0B1E40] text-white border border-blue-900/60 shadow-xs text-left">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-amber-400" />
                  <h4 className="font-bold text-sm">Operating Hubs</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {appConfig.contact.address}
                </p>

                <div className="mt-4 pt-4 border-t border-blue-900/80 flex items-center gap-3 text-xs text-slate-300">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <span>{appConfig.contact.workingHours}</span>
                </div>
              </div>

            </div>

            {/* Right Column: Contact & Quotation Form */}
            <div className="lg:col-span-7">
              <React.Suspense fallback={<div className="p-8 text-center text-sm text-slate-500">Loading enquiry form...</div>}>
                <ContactFormInner />
              </React.Suspense>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
