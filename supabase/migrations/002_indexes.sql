-- 002_indexes.sql
-- Indexes for query performance optimization

-- Destinations
CREATE INDEX idx_destinations_slug ON destinations(slug);
CREATE INDEX idx_destinations_deleted_at ON destinations(deleted_at);

-- Categories
CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_categories_deleted_at ON categories(deleted_at);

-- Tours
CREATE INDEX idx_tours_slug ON tours(slug);
CREATE INDEX idx_tours_destination_id ON tours(destination_id);
CREATE INDEX idx_tours_category_id ON tours(category_id);
CREATE INDEX idx_tours_status ON tours(status);
CREATE INDEX idx_tours_deleted_at ON tours(deleted_at);

-- Tour Departures
CREATE INDEX idx_tour_departures_tour_id ON tour_departures(tour_id);
CREATE INDEX idx_tour_departures_departure_date ON tour_departures(departure_date);
CREATE INDEX idx_tour_departures_status ON tour_departures(status);

-- Bookings
CREATE INDEX idx_bookings_user_id ON bookings(user_id);
CREATE INDEX idx_bookings_tour_departure_id ON bookings(tour_departure_id);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_created_at ON bookings(created_at);
CREATE INDEX idx_bookings_idempotency_key ON bookings(idempotency_key);

-- Payments
CREATE INDEX idx_payments_booking_id ON payments(booking_id);
CREATE INDEX idx_payments_status ON payments(status);
CREATE INDEX idx_payments_provider_payment_id ON payments(provider_payment_id);

-- Reviews
CREATE INDEX idx_reviews_user_id ON reviews(user_id);
CREATE INDEX idx_reviews_tour_id ON reviews(tour_id);
CREATE INDEX idx_reviews_status ON reviews(status);

-- Notifications
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_read_status ON notifications(read_status);
CREATE INDEX idx_notifications_created_at ON notifications(created_at);

-- Audit Logs
CREATE INDEX idx_audit_logs_actor_id ON audit_logs(actor_id);
CREATE INDEX idx_audit_logs_entity_type ON audit_logs(entity_type);
CREATE INDEX idx_audit_logs_entity_id ON audit_logs(entity_id);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at);
