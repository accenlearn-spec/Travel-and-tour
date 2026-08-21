export default async function BookingDeparturePage({
  params,
}: {
  params: Promise<{ slug: string; departureId: string }>;
}) {
  const { slug, departureId } = await params;
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">
        Booking Tour: {slug} (Departure: {departureId})
      </h1>
    </main>
  );
}
