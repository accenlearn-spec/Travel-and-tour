-- 003_constraints.sql
-- Special PostgreSQL constraints and partial unique indexes

-- 1. Tour Departures Seat Availability Constraints
ALTER TABLE tour_departures
  ADD CONSTRAINT check_available_seats_non_negative CHECK (available_seats >= 0),
  ADD CONSTRAINT check_available_seats_max CHECK (available_seats <= total_seats);

-- 2. Duplicate Active Booking Prevention Partial Unique Index
CREATE UNIQUE INDEX idx_unique_active_booking
ON bookings (user_id, tour_departure_id)
WHERE status IN (
  'INITIATED',
  'RESERVED',
  'PAYMENT_PENDING',
  'CONFIRMED'
);
