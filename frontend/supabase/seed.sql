-- seed.sql
-- Deterministic seed data for Travel & Tour Booking Platform

-- 1. Destinations
INSERT INTO destinations (id, name, slug, description, country, state_region, image)
VALUES
  ('d1000000-0000-0000-0000-000000000001', 'Kerala', 'kerala', 'Gods Own Country featuring lush backwaters, tea gardens, and beaches.', 'India', 'Kerala', 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944'),
  ('d1000000-0000-0000-0000-000000000002', 'Goa', 'goa', 'Tropical paradise famous for golden sand beaches, nightlife, and Portuguese architecture.', 'India', 'Goa', 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2'),
  ('d1000000-0000-0000-0000-000000000003', 'Rajasthan', 'rajasthan', 'Land of kings with majestic forts, vibrant culture, and desert safaris.', 'India', 'Rajasthan', 'https://images.unsplash.com/photo-1477587458883-47145ed94245')
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  country = EXCLUDED.country,
  state_region = EXCLUDED.state_region,
  image = EXCLUDED.image;

-- 2. Categories
INSERT INTO categories (id, name, slug, description)
VALUES
  ('c1000000-0000-0000-0000-000000000001', 'Adventure', 'adventure', 'Thrilling treks, water sports, and wilderness expeditions.'),
  ('c1000000-0000-0000-0000-000000000002', 'Beach', 'beach', 'Relaxing coastal getaways, sun-soaked shores, and ocean cruises.'),
  ('c1000000-0000-0000-0000-000000000003', 'Cultural', 'cultural', 'Immersive historical tours, heritage walks, and local traditions.'),
  ('c1000000-0000-0000-0000-000000000004', 'Nature', 'nature', 'Wildlife safaris, eco-tours, and scenic mountain retreats.')
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description;

-- 3. Tours
INSERT INTO tours (id, title, slug, description, destination_id, category_id, duration_days, duration_nights, base_price, status, featured)
VALUES
  (
    't1000000-0000-0000-0000-000000000001',
    'Kerala Backwater & Tea Garden Explorer',
    'kerala-backwater-tea-garden-explorer',
    'Experience peaceful Alleppey houseboat cruises and Munnar tea plantation treks.',
    'd1000000-0000-0000-0000-000000000001',
    'c1000000-0000-0000-0000-000000000004',
    6,
    5,
    799.00,
    'PUBLISHED',
    true
  ),
  (
    't1000000-0000-0000-0000-000000000002',
    'Goa Sun, Surf & Heritage Tour',
    'goa-sun-surf-heritage-tour',
    'Discover North & South Goa beaches, water sports, and UNESCO world heritage churches.',
    'd1000000-0000-0000-0000-000000000002',
    'c1000000-0000-0000-0000-000000000002',
    4,
    3,
    499.00,
    'PUBLISHED',
    true
  ),
  (
    't1000000-0000-0000-0000-000000000003',
    'Royal Rajasthan Forts & Desert Safari',
    'royal-rajasthan-forts-desert-safari',
    'Explore Jaipur, Udaipur palaces, and camping under the stars in Jaisalmer dunes.',
    'd1000000-0000-0000-0000-000000000003',
    'c1000000-0000-0000-0000-000000000003',
    8,
    7,
    1199.00,
    'PUBLISHED',
    true
  )
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  destination_id = EXCLUDED.destination_id,
  category_id = EXCLUDED.category_id,
  duration_days = EXCLUDED.duration_days,
  duration_nights = EXCLUDED.duration_nights,
  base_price = EXCLUDED.base_price,
  status = EXCLUDED.status,
  featured = EXCLUDED.featured;

-- 4. Tour Images
INSERT INTO tour_images (id, tour_id, image_url, display_order, is_primary)
VALUES
  ('i1000000-0000-0000-0000-000000000001', 't1000000-0000-0000-0000-000000000001', 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944', 1, true),
  ('i1000000-0000-0000-0000-000000000002', 't1000000-0000-0000-0000-000000000002', 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2', 1, true),
  ('i1000000-0000-0000-0000-000000000003', 't1000000-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1477587458883-47145ed94245', 1, true)
ON CONFLICT (id) DO UPDATE SET
  image_url = EXCLUDED.image_url,
  display_order = EXCLUDED.display_order,
  is_primary = EXCLUDED.is_primary;

-- 5. Tour Itinerary Days
INSERT INTO tour_itinerary_days (id, tour_id, day_number, title, description, activities)
VALUES
  (
    '11000000-0000-0000-0000-000000000001',
    't1000000-0000-0000-0000-000000000001',
    1,
    'Arrival in Kochi & Heritage Walk',
    'Arrive at Cochin International Airport, check in to hotel, explore Fort Kochi and Chinese Fishing Nets.',
    '["Airport pickup", "Hotel check-in", "Fort Kochi walking tour", "Welcome dinner"]'::jsonb
  ),
  (
    '11000000-0000-0000-0000-000000000002',
    't1000000-0000-0000-0000-000000000001',
    2,
    'Scenic Drive to Munnar Tea Gardens',
    'Drive through misty hills and cascading waterfalls to Munnar. Visit tea museum.',
    '["Munnar drive", "Cheeyappara waterfalls visit", "Tea museum tour"]'::jsonb
  ),
  (
    '11000000-0000-0000-0000-000000000003',
    't1000000-0000-0000-0000-000000000002',
    1,
    'Arrival in Goa & Beachside Sunset',
    'Check into resort near Calangute, relax on the beach, and enjoy live music.',
    '["Hotel check-in", "Beach relaxation", "Sunset lounge evening"]'::jsonb
  ),
  (
    '11000000-0000-0000-0000-000000000004',
    't1000000-0000-0000-0000-000000000003',
    1,
    'Jaipur Pink City Explorer',
    'Visit Hawa Mahal, City Palace, and Amber Fort.',
    '["Amber Fort tour", "City Palace museum", "Local market bazaar"]'::jsonb
  )
ON CONFLICT (tour_id, day_number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  activities = EXCLUDED.activities;

-- 6. Tour Departures
INSERT INTO tour_departures (id, tour_id, departure_date, return_date, total_seats, available_seats, price, status)
VALUES
  (
    'dep00000-0000-0000-0000-000000000001',
    't1000000-0000-0000-0000-000000000001',
    '2026-10-01',
    '2026-10-07',
    20,
    15,
    799.00,
    'UPCOMING'
  ),
  (
    'dep00000-0000-0000-0000-000000000002',
    't1000000-0000-0000-0000-000000000001',
    '2026-11-15',
    '2026-11-21',
    20,
    20,
    849.00,
    'UPCOMING'
  ),
  (
    'dep00000-0000-0000-0000-000000000003',
    't1000000-0000-0000-0000-000000000002',
    '2026-09-10',
    '2026-09-14',
    15,
    10,
    499.00,
    'UPCOMING'
  ),
  (
    'dep00000-0000-0000-0000-000000000004',
    't1000000-0000-0000-0000-000000000003',
    '2026-12-01',
    '2026-12-09',
    12,
    8,
    1199.00,
    'UPCOMING'
  )
ON CONFLICT (id) DO UPDATE SET
  departure_date = EXCLUDED.departure_date,
  return_date = EXCLUDED.return_date,
  total_seats = EXCLUDED.total_seats,
  available_seats = EXCLUDED.available_seats,
  price = EXCLUDED.price,
  status = EXCLUDED.status;
