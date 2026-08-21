export default async function TripDetailPage({
  params,
}: {
  params: Promise<{ bookingId: string }>;
}) {
  const { bookingId } = await params;
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Trip Details: {bookingId}</h1>
    </main>
  );
}
