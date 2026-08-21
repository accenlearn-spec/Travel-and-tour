export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Destination: {slug}</h1>
    </main>
  );
}
