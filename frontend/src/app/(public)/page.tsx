import type { Metadata } from "next";
import {
  HeroSection,
  PopularDestinations,
  FeaturedTours,
  CategoriesSection,
  WhyChooseUs,
  PromotionalBanner,
  Testimonials,
  NewsletterSection,
} from "@/features/home";

export const metadata: Metadata = {
  title: "Sri Murugan Holidays | Tours & Travels",
  description:
    "Discover unforgettable journeys with comfortable travel, carefully planned tours, luxury coaches, and experiences worth remembering with Sri Murugan Holidays.",
  openGraph: {
    title: "Sri Murugan Holidays | Tours & Travels",
    description:
      "Travel comfortably and explore confidently across South India, temple circuits, hill stations, and curated holiday destinations.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <PopularDestinations />
      <FeaturedTours />
      <CategoriesSection />
      <WhyChooseUs />
      <PromotionalBanner />
      <Testimonials />
      <NewsletterSection />
    </main>
  );
}
