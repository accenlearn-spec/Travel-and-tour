"use client";

import * as React from "react";
import Link from "next/link";
import { Compass, Search, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-slate-100 text-slate-900"
          : "bg-gradient-to-b from-slate-950/70 to-transparent py-5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xl font-black tracking-tight group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform">
            <Compass className="h-6 w-6" />
          </div>
          <span className="font-extrabold text-2xl tracking-tight">
            Wander<span className="text-emerald-500">Lust</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <Link
            href="#popular-destinations"
            className={`transition-colors hover:text-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1 ${
              isScrolled ? "text-slate-700" : "text-slate-100"
            }`}
          >
            Destinations
          </Link>
          <Link
            href="#featured-tours"
            className={`transition-colors hover:text-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1 ${
              isScrolled ? "text-slate-700" : "text-slate-100"
            }`}
          >
            Tours
          </Link>
          <a
            href="#featured-tours"
            className={`transition-colors hover:text-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1 ${
              isScrolled ? "text-slate-700" : "text-slate-100"
            }`}
          >
            Categories
          </a>
          <a
            href="#why-us"
            className={`transition-colors hover:text-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1 ${
              isScrolled ? "text-slate-700" : "text-slate-100"
            }`}
          >
            About Us
          </a>
        </nav>

        {/* Desktop Right CTA / Search & Auth Placeholders */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className={`p-2 rounded-full transition-colors ${
              isScrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Login / Sign Up buttons (Visually present, mock action) */}
          <Button
            variant={isScrolled ? "ghost" : "glass"}
            size="sm"
            onClick={() => alert("Authentication will be implemented in Phase F2.")}
            className="font-bold cursor-pointer"
          >
            Log In
          </Button>

          <Button
            variant="default"
            size="sm"
            onClick={() => alert("Registration will be implemented in Phase F2.")}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-sm cursor-pointer"
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className={`p-2 rounded-lg transition-colors ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-slate-900 border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 font-semibold text-base mb-6">
            <Link
              href="#popular-destinations"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-100"
            >
              Destinations
            </Link>
            <Link
              href="#featured-tours"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-100"
            >
              Tours
            </Link>
            <a
              href="#featured-tours"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-100"
            >
              Categories
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-100"
            >
              About Us
            </a>
          </nav>

          <div className="flex flex-col gap-2.5">
            <Button
              variant="outline"
              onClick={() => {
                setMobileMenuOpen(false);
                alert("Authentication will be implemented in Phase F2.");
              }}
              className="w-full justify-center font-bold"
            >
              <User className="h-4 w-4 mr-2" />
              Log In
            </Button>
            <Button
              variant="default"
              onClick={() => {
                setMobileMenuOpen(false);
                alert("Registration will be implemented in Phase F2.");
              }}
              className="w-full justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold"
            >
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
