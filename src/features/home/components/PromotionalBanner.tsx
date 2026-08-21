import Image from "next/image";
import { Sparkles, ArrowRight, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PromotionalBanner() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-2xl p-8 sm:p-12 lg:p-16">
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80"
            alt="Traveler exploring scenic canyon"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-35 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Limited Season Offer
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Your Next Adventure Is Waiting.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Book your early-bird getaway today and enjoy up to <span className="text-amber-300 font-bold">25% OFF</span> selected luxury tours and seasonal packages.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#featured-tours">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 font-bold text-white rounded-xl shadow-lg shadow-emerald-950/50">
                  <Plane className="h-5 w-5 mr-2" />
                  Explore Deals
                </Button>
              </a>
              <a href="#popular-destinations">
                <Button size="lg" variant="glass" className="font-bold text-white hover:bg-white/20 border-white/30 rounded-xl">
                  View All Packages
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
