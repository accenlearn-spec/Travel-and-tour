import Image from "next/image";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { customerTestimonials } from "../data/home.data";

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full">
            Traveler Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            What Our Travelers Say
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Real feedback from globetrotters who booked their dream tours with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customerTestimonials.map((item) => (
            <Card
              key={item.id}
              className="p-8 flex flex-col justify-between rounded-3xl border-slate-100 bg-slate-50/50 hover:bg-white transition-all duration-300 hover:shadow-xl relative"
            >
              <div>
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-slate-300/60" />
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Author & Tour Info */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden shrink-0 border-2 border-emerald-500">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1">
                      {item.name}
                      {item.verified && (
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      )}
                    </h4>
                    <span className="text-xs text-slate-500 block">{item.location}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
