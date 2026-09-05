import type { Metadata } from "next";
import {
  HeroSection,
  PopularDestinations,
  CategoriesSection,
  FeaturedTours,
  FleetShowcase,
  JourneyProcess,
  WhyChooseUs,
  AmenitiesSafety,
  AboutSection,
  PromotionalBanner,
  Testimonials,
  NewsletterSection,
  seedDestinations,
  seedFeaturedTours,
  seedFleetVehicles,
  seedServices,
  seedJourneySteps,
  seedTrustReasons,
  seedTestimonials,
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
      {/* 1. Hero Banner with Sri Murugan bus & Top Actions */}
      <HeroSection />

      {/* 2. Popular Destinations (6 cards, 4:3 aspect ratio) */}
      <PopularDestinations destinations={seedDestinations} />

      {/* 3. Our Services (Clean 3-column grid) */}
      <CategoriesSection services={seedServices} />

      {/* 4. Curated Tour Packages (Unified 3-column grid) */}
      <FeaturedTours tours={seedFeaturedTours} />

      {/* 5. Fleet Showcase (Differentiated vehicle comparison) */}
      <FleetShowcase vehicles={seedFleetVehicles} />

      {/* 6. How Your Journey Works (4-step connected timeline) */}
      <JourneyProcess steps={seedJourneySteps} />

      {/* 7. Why Choose Sri Murugan Holidays (4 trust pillars) */}
      <WhyChooseUs features={seedTrustReasons} />

      {/* 8. Amenities & Safety Standards */}
      <AmenitiesSafety />

      {/* 9. About Sri Murugan Holidays */}
      <AboutSection />

      {/* 10. Promotional Conversion Banner */}
      <PromotionalBanner />

      {/* 11. Verified Traveler Testimonials */}
      <Testimonials testimonials={seedTestimonials} />

      {/* 12. Newsletter Subscription */}
      <NewsletterSection />
    </main>
  );
}
