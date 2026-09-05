"use client";

import * as React from "react";
import { Phone, MessageCircle, X } from "lucide-react";

export function QuickContactFloating() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded Quick Contact Card */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 w-72 text-left animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h4 className="text-sm font-bold text-[#0F172A]">Sri Murugan Support</h4>
              <p className="text-[11px] text-[#64748B]">Quick trip enquiry &amp; bookings</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close contact popup"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex flex-col gap-2.5 mt-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 hover:border-blue-200 transition-all group"
            >
              <div className="h-9 w-9 rounded-lg bg-blue-100 text-[#1557A6] flex items-center justify-center shrink-0">
                <Phone className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#0F172A] group-hover:text-[#1557A6]">Call Customer Care</span>
                <span className="text-[11px] text-[#64748B] font-medium">+91 98765 43210</span>
              </div>
            </a>

            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20a%20tour%20package%20or%20bus%20booking"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-50/70 hover:bg-emerald-100/70 border border-emerald-200/80 transition-all group"
            >
              <div className="h-9 w-9 rounded-lg bg-[#059669] text-white flex items-center justify-center shrink-0">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#0F172A] group-hover:text-[#059669]">WhatsApp Enquiry</span>
                <span className="text-[11px] text-[#059669] font-medium">Instant Response</span>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Quick Contact"
        className="h-13 w-13 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white shadow-[0_8px_24px_rgba(249,115,22,0.4)] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer border-2 border-white"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
      </button>
    </div>
  );
}
