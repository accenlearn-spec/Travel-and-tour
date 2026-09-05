export interface Destination {
  id: string;
  name: string;
  region: string;
  country: string;
  image: string;
  shortDescription: string;
  tourCount: number;
  featured?: boolean;
  rating: number;
  category?: string;
}

export interface Tour {
  id: string;
  title: string;
  slug: string;
  destination: string;
  image: string;
  duration: string; // e.g. "5 Days / 4 Nights"
  rating: number;
  reviewCount: number;
  startingPrice: number;
  currency: string;
  badge?: string; // e.g. "Bestseller", "Featured", "Luxury", "Top Rated"
  category: string;
}

export interface Category {
  id: string;
  name: string;
  iconName: string; // Lucide icon identifier
  description: string;
  tourCount: number;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
  tourName: string;
  verified: boolean;
}

export interface WhyUsFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SearchState {
  destination: string;
  travelDate: string;
  travelers: number;
  category: string;
}
