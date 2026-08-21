import { ShieldCheck, Tag, Headphones, Clock, Users, Award } from "lucide-react";
import { whyChooseUsFeatures } from "../data/home.data";

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-7 w-7 text-emerald-600" />,
  Tag: <Tag className="h-7 w-7 text-amber-600" />,
  Headphones: <Headphones className="h-7 w-7 text-sky-600" />,
  Clock: <Clock className="h-7 w-7 text-teal-600" />,
  Users: <Users className="h-7 w-7 text-purple-600" />,
  Award: <Award className="h-7 w-7 text-rose-600" />,
};

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-3.5 py-1 rounded-full">
            Peace of Mind
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Why Travelers Choose Us
          </h2>
          <p className="mt-2 text-base text-slate-600">
            We provide seamless booking, verified expert guides, and round-the-clock support for worry-free adventures.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUsFeatures.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-start p-6 rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {iconMap[feature.iconName] || <ShieldCheck className="h-7 w-7 text-emerald-600" />}
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-12 border-t border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-600">50,000+</span>
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">Happy Travelers</span>
          </div>
          <div className="p-4">
            <span className="text-3xl sm:text-4xl font-extrabold text-amber-500">120+</span>
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">Destinations</span>
          </div>
          <div className="p-4">
            <span className="text-3xl sm:text-4xl font-extrabold text-sky-600">4.9 / 5</span>
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">Average Rating</span>
          </div>
          <div className="p-4">
            <span className="text-3xl sm:text-4xl font-extrabold text-teal-600">100%</span>
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">Verified Partners</span>
          </div>
        </div>
      </div>
    </section>
  );
}
