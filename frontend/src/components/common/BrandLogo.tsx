"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "navbar" | "footer" | "auth" | "icon-only";
  lightBg?: boolean;
  className?: string;
}

export function BrandLogo({
  variant = "navbar",
  lightBg = false,
  className,
}: BrandLogoProps) {
  if (variant === "icon-only") {
    return (
      <div className={cn("relative flex items-center justify-center h-9 w-9 rounded-xl bg-slate-900 shadow-md p-1.5 border border-amber-500/30", className)}>
        <Image
          src="/images/brand-logo.svg"
          alt="Sri Murugan Holidays"
          width={32}
          height={32}
          className="h-full w-full object-contain"
        />
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={cn("flex flex-col gap-2", className)}>
        <Link href="/" className="flex items-center gap-3.5 group focus:outline-none rounded-lg">
          <div className="h-11 w-11 rounded-xl bg-slate-900 border border-amber-500/40 p-2 flex items-center justify-center shadow-lg shadow-slate-950/40 group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/images/brand-logo.svg"
              alt="Sri Murugan Holidays Emblem"
              width={36}
              height={36}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-black text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
              SRI MURUGAN <span className="text-amber-400">HOLIDAYS</span>
            </span>
            <span className="text-[11px] font-bold tracking-[0.22em] text-slate-400 uppercase">
              TOURS &amp; TRAVELS
            </span>
          </div>
        </Link>
        <p className="text-slate-400 text-xs leading-relaxed max-w-sm mt-1">
          Travel comfortably. Explore confidently. Create unforgettable journeys.
        </p>
      </div>
    );
  }

  if (variant === "auth") {
    return (
      <Link href="/" className={cn("flex flex-col items-center text-center gap-2 group", className)}>
        <div className="h-14 w-14 rounded-2xl bg-slate-900 border border-amber-500/40 p-2.5 flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
          <Image
            src="/images/brand-logo.svg"
            alt="Sri Murugan Holidays"
            width={48}
            height={48}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex flex-col items-center leading-tight">
          <span className="font-extrabold text-xl tracking-tight text-slate-900">
            SRI MURUGAN <span className="text-amber-600">HOLIDAYS</span>
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mt-0.5">
            TOURS &amp; TRAVELS
          </span>
        </div>
      </Link>
    );
  }

  // Navbar default variant
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2.5 group focus:outline-none rounded-lg p-0.5 transition-opacity hover:opacity-95",
        className
      )}
    >
      <div className="h-9 w-9 rounded-xl bg-slate-900/90 border border-amber-500/30 p-1.5 flex items-center justify-center shadow-md shadow-slate-950/20 group-hover:scale-105 transition-transform">
        <Image
          src="/images/brand-logo.svg"
          alt="Sri Murugan Holidays"
          width={28}
          height={28}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-black text-base sm:text-lg tracking-tight transition-colors",
            lightBg ? "text-slate-900" : "text-white"
          )}
        >
          SRI MURUGAN <span className="text-amber-500">HOLIDAYS</span>
        </span>
        <span
          className={cn(
            "text-[9px] sm:text-[10px] font-bold tracking-[0.18em] uppercase transition-colors",
            lightBg ? "text-slate-500" : "text-slate-300"
          )}
        >
          TOURS &amp; TRAVELS
        </span>
      </div>
    </Link>
  );
}
