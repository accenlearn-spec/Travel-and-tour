export const ROUTES = {
  home: "/",

  destinations: "/destinations",
  destination: (slug: string) => `/destinations/${slug}`,

  tours: "/tours",
  tour: (slug: string) => `/tours/${slug}`,

  categories: "/categories",
  category: (slug: string) => `/categories/${slug}`,

  search: "/search",

  login: "/account/login",
  register: "/account/register",

  booking: (tourSlug: string, departureId: string) =>
    `/booking/${tourSlug}/${departureId}`,

  myTrips: "/account/my-trips",

  profile: "/account/profile",
} as const;
