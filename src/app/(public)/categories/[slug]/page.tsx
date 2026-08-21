export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Category: {slug}</h1>
    </main>
  );
}
