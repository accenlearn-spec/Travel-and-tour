import type { Metadata } from "next";
import {
  HeroSection,
  PopularDestinations,
  CategoriesSection,
  FeaturedTours,
  CoachShowcase,
  JourneyProcess,
  WhyChooseUs,
  AmenitiesSafety,
  AboutSection,
  GalleryPreview,
  PromotionalBanner,
  Testimonials,
  NewsletterSection,
  seedDestinations,
  seedFeaturedTours,
  seedServices,
  seedJourneySteps,
  seedTrustReasons,
  seedTestimonials,
} from "@/features/home";

export const metadata: Metadata = {
  title: "Sri Murugan Holidays | Tours & Travels",
  description:
    "Discover unforgettable journeys with comfortable travel, carefully planned tours, dedicated tourist coach, and experiences worth remembering with Sri Murugan Holidays.",
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
      {/* 1. Hero Banner with Sri Murugan Coach & Interactive Search Bar */}
      <HeroSection />

      {/* 2. Popular Destinations (6 cards, 4:3 aspect ratio) */}
      <PopularDestinations destinations={seedDestinations} />

      {/* 3. Our Services Preview (4 highlights with 'View All Services →') */}
      <CategoriesSection services={seedServices} previewMode={true} />

      {/* 4. Curated Tour Packages */}
      <FeaturedTours tours={seedFeaturedTours} />

      {/* 5. Meet Our Coach (Single Coach Showcase with verified amenities) */}
      <CoachShowcase />

      {/* 6. About Sri Murugan Holidays Preview */}
      <AboutSection />

      {/* 7. Why Choose Sri Murugan Holidays (4 trust pillars) */}
      <WhyChooseUs features={seedTrustReasons} />

      {/* 8. How Booking Works (4-step connected timeline) */}
      <JourneyProcess steps={seedJourneySteps} />

      {/* 9. Travel Memories Preview (4 photos with 'View Gallery →') */}
      <GalleryPreview />

      {/* 10. Verified Traveler Testimonials */}
      <Testimonials testimonials={seedTestimonials} />

      {/* 11. Promotional Conversion Banner */}
      <PromotionalBanner />

      {/* 12. Newsletter Subscription */}
      <NewsletterSection />
    </main>
  );
}

