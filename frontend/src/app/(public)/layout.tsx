import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuickContactFloating } from "@/components/common/QuickContactFloating";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
      <QuickContactFloating />
    </div>
  );
}
