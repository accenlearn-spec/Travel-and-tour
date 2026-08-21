"use client";

import * as React from "react";
import Link from "next/link";
import { Search, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/common/BrandLogo";

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
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-800 text-white"
          : "bg-gradient-to-b from-slate-950/85 via-slate-950/40 to-transparent py-4 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Component */}
        <BrandLogo variant="navbar" lightBg={false} />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <Link
            href="#popular-destinations"
            className="text-slate-200 transition-colors hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-1"
          >
            Destinations
          </Link>
          <Link
            href="#featured-tours"
            className="text-slate-200 transition-colors hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-1"
          >
            Tours
          </Link>
          <a
            href="#featured-tours"
            className="text-slate-200 transition-colors hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-1"
          >
            Categories
          </a>
          <a
            href="#why-us"
            className="text-slate-200 transition-colors hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-1"
          >
            About Us
          </a>
        </nav>

        {/* Desktop Right Action Area */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="p-2 rounded-full text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>

          <Button
            variant="glass"
            size="sm"
            onClick={() => alert("Authentication system active.")}
            className="font-bold cursor-pointer text-slate-100 hover:bg-white/15 border-white/20"
          >
            Log In
          </Button>

          <Button
            variant="default"
            size="sm"
            onClick={() => alert("Registration system active.")}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold rounded-lg shadow-md cursor-pointer border border-amber-400/40"
          >
            Book Tour
          </Button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 text-white border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 font-semibold text-base mb-6">
            <Link
              href="#popular-destinations"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-800 text-slate-200 hover:text-amber-400"
            >
              Destinations
            </Link>
            <Link
              href="#featured-tours"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-800 text-slate-200 hover:text-amber-400"
            >
              Tours
            </Link>
            <a
              href="#featured-tours"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-800 text-slate-200 hover:text-amber-400"
            >
              Categories
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-800 text-slate-200 hover:text-amber-400"
            >
              About Us
            </a>
          </nav>

          <div className="flex flex-col gap-2.5">
            <Button
              variant="outline"
              onClick={() => {
                setMobileMenuOpen(false);
                alert("Authentication system active.");
              }}
              className="w-full justify-center font-bold border-slate-700 text-white bg-slate-800 hover:bg-slate-700"
            >
              <User className="h-4 w-4 mr-2" />
              Log In
            </Button>
            <Button
              variant="default"
              onClick={() => {
                setMobileMenuOpen(false);
                alert("Registration system active.");
              }}
              className="w-full justify-center bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold"
            >
              Book Tour
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
