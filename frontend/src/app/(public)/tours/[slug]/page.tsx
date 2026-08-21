export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Tour: {slug}</h1>
    </main>
  );
}
