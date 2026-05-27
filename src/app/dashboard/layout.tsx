import { AsideComponentDashboard } from "@/components/dashboard/AsideComponentDashboard";

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
    <div className="grid grid-cols-4">
      <AsideComponentDashboard />
      {/* for render components as slot */}
      <div className="grid col-span-3 w-full">
        <div className="bg-red-100">{children}</div>
        {/* slot product */}
        <div className="bg-red-300">{products}</div>
        {/* slot blog */}
        <div className="bg-red-600"> {blogs}</div>
        {/* slot setting */}
        <div className="bg-red-900">{setting}</div>
      </div>
    </div>
  );
}
