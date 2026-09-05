import type React from "react";

export interface Destination {
  id: string;
  name: string;
  region: string;
  country?: string;
  category: string;
  image: string;
  shortDescription: string;
  tourCount: number;
  featured?: boolean;
  rating: number;
}

export interface TourPackage {
  id: string;
  title: string;
  slug: string;
  destination: string;
  image: string;
  duration: string;
  rating: number;
  reviewCount: number;
  badge?: string;
  category?: string;
  startingPrice?: number;
  currency?: string;
}

export interface FleetVehicle {
  id: string;
  name: string;
  category: string;
  capacity: string;
  suitability: string;
  image: string;
  badge: string;
  features: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
}

export interface JourneyStepItem {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface TrustReason {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location?: string;
  review: string;
  rating: number;
  category: string;
  verified?: boolean;
}
