import { AsideComponentDashboard } from "@/components/dashboard/AsideComponentDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Dashboard - SEO",
  description: "This dashboard handles internal process background.",
  openGraph: {
    images: [
      "https://i.pinimg.com/736x/e4/fe/ee/e4feee1e16642479b056c8ee7513b43a.jpg",
    ],
  },
};

export default function DashboardLayout({
  children,
  products,
  blogs,
  setting,
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  blogs: React.ReactNode;
  setting: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] min-h-screen bg-slate-50 text-slate-800">
      <AsideComponentDashboard />
      <main className="p-6 md:p-8 space-y-6 overflow-y-auto">
        <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
          {children}
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm xl:col-span-2">
            {products}
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            {blogs}
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm xl:col-span-3">
            {setting}
          </div>
        </div>
      </main>
    </div>
  );
}
