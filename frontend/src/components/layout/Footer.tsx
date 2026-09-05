"use client";

import Link from "next/link";
import { Heart, Bus, Phone, Mail, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { appConfig } from "@/config/app.config";

export function Footer() {
  return (
    <footer className="bg-[#0B1E40] text-slate-300 text-sm border-t border-[#1557A6]/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Company Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <BrandLogo variant="footer" />

            <div className="flex flex-col gap-2.5 text-xs text-slate-300 mt-2">
              <div className="flex items-center gap-2.5">
                <Bus className="h-4 w-4 text-[#F59E0B] shrink-0" />
                <span>Dedicated Tourist Coach &amp; Custom Tour Packages</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-[#F59E0B] shrink-0" />
                <span>{appConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#F97316] shrink-0" />
                <span>Support: {appConfig.contact.phone} ({appConfig.contact.workingHours})</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <a
                href={appConfig.contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Support"
                className="h-10 px-3.5 rounded-full bg-emerald-700/80 hover:bg-emerald-600 text-white flex items-center gap-2 text-xs font-bold transition-colors"
              >
                <span>WhatsApp Support</span>
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 text-[#F59E0B]">
              Explore
            </h4>
            <ul className="space-y-2.5 font-medium">
              <li>
                <Link href="/services" className="hover:text-white hover:translate-x-0.5 inline-block transition-transform">
                  All Travel Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white hover:translate-x-0.5 inline-block transition-transform">
                  Journeys Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:translate-x-0.5 inline-block transition-transform">
                  Our Coach Specifications
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-white hover:translate-x-0.5 inline-block transition-transform">
                  Check Coach Availability
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 text-[#F59E0B]">
              Enquiries &amp; Help
            </h4>
            <ul className="space-y-2.5 font-medium">
              <li>
                <Link href="/contact" className="hover:text-white hover:translate-x-0.5 inline-block transition-transform">
                  Enquiry Desk
                </Link>
              </li>
              <li>
                <a href={`tel:${appConfig.contact.phoneTel}`} className="hover:text-white hover:translate-x-0.5 inline-block transition-transform">
                  Call {appConfig.contact.phone}
                </a>
              </li>
              <li>
                <Link href="/contact?type=enquiry" className="hover:text-white hover:translate-x-0.5 inline-block transition-transform">
                  Request Travel Quotation
                </Link>
              </li>
              <li>
                <a href={`mailto:${appConfig.contact.email}`} className="hover:text-white hover:translate-x-0.5 inline-block transition-transform">
                  {appConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 text-[#F59E0B]">
              Sri Murugan
            </h4>
            <ul className="space-y-2.5 font-medium">
              <li>
                <Link href="/about" className="hover:text-white hover:translate-x-0.5 inline-block transition-transform">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white hover:translate-x-0.5 inline-block transition-transform">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white hover:translate-x-0.5 inline-block transition-transform">
                  Photo Memories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:translate-x-0.5 inline-block transition-transform">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-950 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Sri Murugan Holidays. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-300">

            <span>Crafted for safe, comfortable &amp; memorable journeys.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
