import type { Metadata } from "next";
import Link from "next/link";
import {
  BusFront,
  Landmark,
  UsersRound,
  Users,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  Route,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
} from "lucide-react";
import { appConfig } from "@/config/app.config";
import { seedServices, seedJourneySteps, seedTrustReasons } from "@/features/home/data/seed.data";

export const metadata: Metadata = {
  title: "Travel Services & Tourist Coach Rental | Sri Murugan Holidays",
  description:
    "Explore our full range of travel services: Tourist Coach Rental, Temple Tours, Family Holidays, Group Tours, Corporate Travel, and Custom Tour Packages.",
  openGraph: {
    title: "Travel Services & Coach Rental | Sri Murugan Holidays",
    description:
      "Reliable and comfortable travel solutions across Tamil Nadu and South India for families, groups, and organizations.",
  },
};

const iconMap: Record<string, React.ElementType> = {
  BusFront,
  Landmark,
  UsersRound,
  Users,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  Route,
};

// Realistic benefits per service
const serviceBenefits: Record<string, string[]> = {
  "srv-001": ["Clean & Sanitized Coach", "Experienced Highway Driver", "Transparent Day/KM Pricing", "Flexible Pickup Points"],
  "srv-002": ["Comfortable Family Seating", "Paced Itineraries for Seniors & Kids", "Scenic Hill Station Routes", "Dedicated Assistance"],
  "srv-003": ["Spacious Luggage Compartments", "Group Seating Alignment", "Punctual Outstation Dispatch", "Custom Group Stops"],
  "srv-004": ["Temple Timing Alignment", "Sacred Pilgrimage Circuits", "Experienced Route Navigation", "Darshan-Friendly Stops"],
  "srv-005": ["Professional Conduct & Timing", "Corporate Offsite Transfers", "GST Invoice & Formal Receipts", "Air-Conditioned Comfort"],
  "srv-006": ["Safety-First Driving Protocols", "Speed Governor Equipped", "Institutional Verified Transit", "Clear Route Tracking"],
  "srv-007": ["Punctual Guest Transfers", "Spotless Decorated Presentation", "Coordinated Venue Shuttles", "Reliable Marriage Logistics"],
  "srv-008": ["Personalized Destination Routing", "Custom Pickup & Drop Points", "Tailored Day Scheduling", "Direct Operator Support"],
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* 1. Services Hero Banner */}
      <section className="relative bg-[#0B1E40] text-white py-20 sm:py-24 overflow-hidden border-b border-blue-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-[#071328] via-[#0B1E40] to-[#1557A6]/40" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 rounded-full mb-3">
              Comprehensive Travel Solutions
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Our Travel Services
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              From dedicated tourist coach charter and South India temple circuits to custom family getaways, we provide dependable, comfortable travel tailored to your group.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact?type=enquiry"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-sm transition-all hover:scale-[1.01]"
              >
                Request Service Quote
              </Link>
              <a
                href={appConfig.contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-sm transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Full Services Catalog Grid */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1557A6] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Tailored For Your Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-2.5">
              Available Travel Services
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#64748B]">
              Choose from our verified services. Every trip is serviced with our well-maintained coach and professional drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {seedServices.map((service) => {
              const IconComponent = iconMap[service.iconName] || BusFront;
              const benefits = serviceBenefits[service.id] || [
                "Experienced Driver",
                "Air-Conditioned Comfort",
                "Timely Dispatch",
                "Customer Support",
              ];

              return (
                <div
                  key={service.id}
                  className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between hover:border-blue-300 hover:-translate-y-1 text-left"
                >
                  <div>
                    {/* Header: Icon & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1557A6] shrink-0">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0F172A] mb-2 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Features Checklist */}
                    <div className="pt-4 border-t border-slate-100 mb-6">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                        Key Inclusions
                      </span>
                      <ul className="space-y-2">
                        {benefits.map((b, idx) => (
                          <li key={idx} className="flex items-start text-xs font-semibold text-slate-700">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card CTA: Enquire Now */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="w-full bg-[#F8FAFC] hover:bg-[#1557A6] text-[#1557A6] hover:text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl border border-slate-200/80 hover:border-[#1557A6] transition-all flex items-center justify-center gap-2 group"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Why Choose Our Services */}
      <section className="py-20 bg-[#F8FAFC] border-y border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1557A6] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Peace of Mind
            </span>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mt-2.5">
              Why Choose Sri Murugan Holidays
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seedTrustReasons.map((reason) => (
              <div
                key={reason.id}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 text-left shadow-xs"
              >
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#1557A6] flex items-center justify-center mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#0F172A] mb-1.5">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How Booking Works */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1557A6] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Simple 4-Step Process
            </span>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mt-2.5">
              How Booking With Us Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seedJourneySteps.map((step) => (
              <div
                key={step.step}
                className="relative bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-6 text-left"
              >
                <div className="h-8 w-8 rounded-full bg-[#1557A6] text-white text-xs font-extrabold flex items-center justify-center mb-4">
                  0{step.step}
                </div>
                <h3 className="text-base font-bold text-[#0F172A] mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom Conversion CTA */}
      <section className="py-16 bg-[#0B1E40] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to Plan Your Journey?
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto">
            Contact our team for coach charter availability, customized route planning, or transparent price quotations.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-xs transition-colors"
            >
              Contact Us Now
            </Link>
            <a
              href={`tel:${appConfig.contact.phoneTel}`}
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3 rounded-xl border border-white/20 transition-colors"
            >
              Call {appConfig.contact.phone}
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
