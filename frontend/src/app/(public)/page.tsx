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
  title: "WanderLust | Explore Unforgettable Journeys & Tour Escapes",
  description:
    "Discover handpicked destinations, curated tour packages, luxury retreats, and local guided adventures. Book your next unforgettable journey today.",
  openGraph: {
    title: "WanderLust | Explore Unforgettable Journeys",
    description:
      "Handpicked travel packages, luxury retreats, and authentic local experiences across Kerala, Goa, Rajasthan, Bali, Dubai, and Maldives.",
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
