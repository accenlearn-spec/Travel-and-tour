"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { appConfig } from "@/config/app.config";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Lock background scrolling when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/80 shadow-[0_2px_12px_rgba(15,42,95,0.04)] transition-all">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 h-[86px] sm:h-[88px] flex items-center justify-between gap-6">
        
        {/* Brand Logo Component */}
        <div className="shrink-0">
          <BrandLogo variant="navbar" lightBg={true} />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-9 text-[14.5px] font-semibold">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 transition-colors duration-200 ${
                  isActive
                    ? "text-emerald-600 font-bold"
                    : "text-slate-700 hover:text-emerald-600"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-emerald-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Area: Support Phone Info + Enquire Now CTA */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-6 shrink-0">
          {/* Phone / Support Information */}
          <a
            href={`tel:${appConfig.contact.phoneTel}`}
            className="flex items-center gap-3 group text-left transition-opacity hover:opacity-90"
          >
            <div className="h-10 w-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform shrink-0">
              <Phone className="h-4 w-4 fill-current" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-[#0F172A] tracking-tight group-hover:text-emerald-700 transition-colors">
                {appConfig.contact.phone}
              </span>
              <span className="text-[11px] font-medium text-[#64748B] mt-0.5">
                {appConfig.contact.workingHours}
              </span>
            </div>
          </a>

          {/* Enquire Now Button (Vibrant Orange CTA -> /contact?type=enquiry) */}
          <Link href="/contact?type=enquiry">
            <button
              type="button"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm cursor-pointer transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center gap-2"
            >
              <Phone className="h-4 w-4 fill-white/80" />
              <span>Enquire Now</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="/contact?type=enquiry"
            className="sm:hidden bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-lg"
          >
            Enquire
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[86px] bottom-0 bg-slate-950/50 backdrop-blur-xs z-40 animate-in fade-in duration-200">
          <div className="bg-white border-b border-slate-200 px-6 pt-4 pb-8 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
            <nav className="flex flex-col gap-1 font-semibold text-base mb-6">
              {navLinks.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 px-3 border-b border-slate-100 rounded-md transition-colors flex items-center justify-between ${
                      isActive
                        ? "text-emerald-600 font-bold bg-emerald-50/70 border-l-4 border-l-emerald-600"
                        : "text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                        Active
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href={`tel:${appConfig.contact.phoneTel}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-left"
              >
                <div className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 fill-current" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-bold text-[#0F172A]">{appConfig.contact.phone}</span>
                  <span className="text-xs text-[#64748B]">{appConfig.contact.workingHours}</span>
                </div>
              </a>

              <Link
                href="/contact?type=enquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-center py-3 rounded-xl shadow-sm transition-colors"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

