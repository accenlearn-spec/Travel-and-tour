import Image from "next/image";
import { Compass, Umbrella, Landmark, Trees, Crown, Heart, ArrowUpRight } from "lucide-react";
import { travelCategories } from "../data/home.data";

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="h-6 w-6 text-emerald-600" />,
  Umbrella: <Umbrella className="h-6 w-6 text-sky-600" />,
  Landmark: <Landmark className="h-6 w-6 text-amber-600" />,
  Trees: <Trees className="h-6 w-6 text-teal-600" />,
  Crown: <Crown className="h-6 w-6 text-purple-600" />,
  Heart: <Heart className="h-6 w-6 text-rose-600" />,
};

export function CategoriesSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3.5 py-1 rounded-full">
            Tailored Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Browse by Travel Style
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Whether you crave high-energy adventure or serene luxury escapes, find the perfect category for your trip.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelCategories.map((cat) => (
            <div
              key={cat.id}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col justify-between"
            >
              {/* Category Background Thumbnail */}
              <div className="relative h-40 w-full mb-5 rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors" />

                {/* Floating Icon Box */}
                <div className="absolute bottom-3 left-3 h-12 w-12 rounded-xl bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center">
                  {iconMap[cat.iconName] || <Compass className="h-6 w-6 text-emerald-600" />}
                </div>

                <div className="absolute top-3 right-3">
                  <span className="text-xs font-bold text-white bg-slate-900/70 backdrop-blur-md px-2.5 py-1 rounded-full">
                    {cat.tourCount} Tours
                  </span>
                </div>
              </div>

              {/* Category Info */}
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {cat.name}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="mt-2 text-sm text-slate-500 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
