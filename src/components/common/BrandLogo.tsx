"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "navbar" | "footer" | "auth" | "icon-only" | "full";
  lightBg?: boolean;
  className?: string;
  showText?: boolean;
}

export function BrandLogo({
  variant = "navbar",
  lightBg = false,
  className,
  showText = true,
}: BrandLogoProps) {
  const logoSrc = "/images/brand-logo.png";

  if (variant === "full") {
    return (
      <Link href="/" className={cn("inline-block group focus:outline-none", className)}>
        <Image
          src={logoSrc}
          alt="Sri Murugan Holidays - MM Holidays"
          width={400}
          height={400}
          unoptimized
          priority
          className="h-auto w-64 sm:w-80 object-contain transition-transform duration-200 group-hover:scale-105"
        />
      </Link>
    );
  }

  if (variant === "icon-only") {
    return (
      <div className={cn("relative flex items-center justify-center shrink-0", className)}>
        <Image
          src={logoSrc}
          alt="Sri Murugan Holidays"
          width={120}
          height={120}
          unoptimized
          className="h-10 sm:h-12 w-auto object-contain"
        />
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={cn("flex flex-col gap-3", className)}>
        <Link href="/" className="flex items-center gap-3.5 group focus:outline-none">
          <Image
            src={logoSrc}
            alt="Sri Murugan Holidays Emblem"
            width={240}
            height={240}
            unoptimized
            className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
          />
          {showText && (
            <div className="flex flex-col leading-tight">
              <span className="font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
                SRI MURUGAN <span className="text-amber-400">HOLIDAYS</span>
              </span>
              <span className="text-xs font-bold tracking-[0.22em] text-amber-400 uppercase">
                TOURS &amp; TRAVELS
              </span>
              <span className="text-xs text-slate-300 font-medium italic mt-0.5">
                Safe Journeys, Blessed Memories
              </span>
            </div>
          )}
        </Link>
        <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
          Travel comfortably. Explore confidently. Create unforgettable journeys with Sri Murugan Holidays.
        </p>
      </div>
    );
  }

  if (variant === "auth") {
    return (
      <Link href="/" className={cn("flex flex-col items-center text-center gap-3 group", className)}>
        <Image
          src={logoSrc}
          alt="Sri Murugan Holidays"
          width={320}
          height={320}
          unoptimized
          priority
          className="h-28 sm:h-36 md:h-40 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
        />
      </Link>
    );
  }

  // Navbar default variant
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-3 group focus:outline-none transition-opacity hover:opacity-95",
        className
      )}
    >
      <Image
        src={logoSrc}
        alt="Sri Murugan Holidays - MM Holidays"
        width={240}
        height={240}
        unoptimized
        priority
        className="h-12 sm:h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-200 shrink-0"
      />
      {showText && (
        <div className="hidden sm:flex flex-col leading-tight select-none">
          <span
            className={cn(
              "font-black text-base sm:text-lg lg:text-xl tracking-tight transition-colors",
              lightBg ? "text-slate-900" : "text-white"
            )}
          >
            SRI MURUGAN <span className="text-amber-500">HOLIDAYS</span>
          </span>
          <span
            className={cn(
              "text-[9px] sm:text-[10px] font-extrabold tracking-[0.18em] uppercase transition-colors",
              lightBg ? "text-amber-600" : "text-amber-400"
            )}
          >
            TOURS &amp; TRAVELS
          </span>
        </div>
      )}
    </Link>
  );
}
