import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  Clock,
  CheckCircle2,
  Bus,
  ArrowRight,
  Phone,
  HeartHandshake,
  MapPin,
  Check,
} from "lucide-react";
import { appConfig } from "@/config/app.config";
import { seedCoachDetails } from "@/features/home/data/seed.data";

export const metadata: Metadata = {
  title: "About Us & Our Coach | Sri Murugan Holidays",
  description:
    "Learn about Sri Murugan Holidays, our mission for safe, comfortable travel, and explore specifications of our dedicated tourist coach.",
  openGraph: {
    title: "About Sri Murugan Holidays | Tours & Travels",
    description:
      "Dedicated tourist coach charter and organized holiday tours across South India.",
  },
};

export default function AboutPage() {
  const coach = seedCoachDetails;

  return (
    <main className="flex flex-col min-h-screen">
      
      {/* 1. About Hero Banner */}
      <section className="relative bg-[#0B1E40] text-white py-20 sm:py-24 overflow-hidden border-b border-blue-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-[#071328] via-[#0B1E40] to-[#1557A6]/40" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 rounded-full mb-3">
            About Sri Murugan Holidays
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Making Every Journey Safe &amp; Comfortable
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Founded with a passion for dependable group transit, temple pilgrimages, and family vacations, Sri Murugan Holidays is dedicated to personalized travel across Tamil Nadu and South India.
          </p>
        </div>
      </section>

      {/* 2. Company Story & Travel Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left: Editorial Story */}
            <div className="lg:col-span-7 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1557A6] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-3">
                Committed to Authentic Travel &amp; Passenger Care
              </h2>

              <div className="mt-5 space-y-4 text-sm sm:text-base text-[#64748B] leading-relaxed">
                <p>
                  At Sri Murugan Holidays, we believe that travel should be effortless, well-coordinated, and comfortable from the moment you board until you safely return home.
                </p>
                <p>
                  Rather than treating travel as mere transportation from point A to point B, we focus on providing clean, dependable coach charter services operated by experienced drivers who know the routes, the temples, the hill climbs, and the safest highway stops.
                </p>
                <p>
                  Whether it is an auspicious family temple visit to Tirupati or Rameswaram, a scenic holiday to Ooty and Munnar, an educational tour, or an official corporate outing, we take pride in punctuality, honest communication, and attentive service.
                </p>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-100">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#1557A6]">100%</div>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">Direct Operator Care</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#1557A6]">24/7</div>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">Enquiry Assistance</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#1557A6]">Verified</div>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">Safety &amp; Sanitation</div>
                </div>
              </div>
            </div>

            {/* Right: Mission & Philosophy Card */}
            <div className="lg:col-span-5 bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-7 sm:p-9 shadow-xs text-left">
              <div className="h-12 w-12 rounded-2xl bg-blue-100 text-[#1557A6] flex items-center justify-center mb-5">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                Our Travel Philosophy
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Safety Above All:</strong> Well-maintained vehicle with strict speed discipline and polite highway navigation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Cleanliness &amp; Comfort:</strong> Sanitized interiors, clean seating, and climate-controlled travel.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Transparent Guidance:</strong> Direct communication without hidden costs or confusing booking terms.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Family &amp; Group Friendly:</strong> Thoughtfully planned rest stops, elderly care, and luggage convenience.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR COACH - Dedicated Spotlight Section */}
      <section className="py-20 sm:py-24 bg-[#0B1E40] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.08em] text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 rounded-full">
              Our Coach
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              Meet Our Premium Tourist Coach
            </h2>
            <p className="mt-2 text-base text-slate-300 font-normal">
              A dedicated, well-kept tourist coach equipped for memorable trips across South India.
            </p>
          </div>

          <div className="bg-[#071328] border border-blue-900/60 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
            {/* Bus Image */}
            <div className="lg:col-span-7 relative h-64 sm:h-80 w-full flex items-center justify-center">
              <Image
                src={coach.image}
                alt={coach.title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain object-center drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
              />
            </div>

            {/* Coach Features */}
            <div className="lg:col-span-5 text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
                Verified Specifications
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {coach.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {coach.description}
              </p>

              <div className="mt-6 space-y-2.5">
                {coach.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-xs sm:text-sm text-slate-200">
                    <div className="h-4 w-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mr-2.5 shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-blue-900/60 flex flex-wrap gap-3">
                <Link
                  href="/contact?vehicle=coach"
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-xl transition-colors flex items-center gap-2"
                >
                  <span>Enquire About Coach</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${appConfig.contact.phoneTel}`}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl border border-white/20 transition-colors"
                >
                  Call {appConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Why Choose Us (5 Trust Pillars) */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 text-left">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1557A6] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Reliability
            </span>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mt-2">
              Why Travel With Sri Murugan Holidays
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#1557A6] flex items-center justify-center mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-[#0F172A] mb-1.5">Safe &amp; Comfortable Travel</h4>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Prioritized vehicle hygiene, regular mechanical upkeep, and smooth highway suspension for fatigue-free transit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#1557A6] flex items-center justify-center mb-4">
                <Award className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-[#0F172A] mb-1.5">Experienced Drivers</h4>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Courteous, verified drivers with extensive knowledge of South Indian state highways, ghat roads, and temple timings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#1557A6] flex items-center justify-center mb-4">
                <Users className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-[#0F172A] mb-1.5">Family &amp; Group Friendly</h4>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Custom stops suited for elder pilgrims, kids, and family groups, keeping everyone relaxed and comfortable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#1557A6] flex items-center justify-center mb-4">
                <MapPin className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-[#0F172A] mb-1.5">Custom Travel Planning</h4>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Flexible point-to-point itineraries planned according to your preferred travel dates and destination preferences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#1557A6] flex items-center justify-center mb-4">
                <Clock className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-[#0F172A] mb-1.5">24/7 Journey Assistance</h4>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Direct phone and WhatsApp support from quotation through journey completion whenever you need quick help.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-orange-50 text-[#F97316] flex items-center justify-center mb-4">
                  <Phone className="h-5 w-5" />
                </div>
                <h4 className="text-base font-bold text-[#0F172A] mb-1.5">Direct Communication</h4>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Speak directly with the operator. Zero intermediaries, fair pricing, and clear trip agreements.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <Link href="/contact" className="text-xs font-bold text-[#1557A6] hover:text-[#F97316]">
                  Get in touch →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="py-16 bg-white border-t border-slate-200/80 text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
            Have a Question or Looking to Plan a Trip?
          </h2>
          <p className="mt-2 text-sm text-[#64748B] max-w-md mx-auto">
            Our team is available to assist you with dates, routes, and coach availability.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-xs transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
