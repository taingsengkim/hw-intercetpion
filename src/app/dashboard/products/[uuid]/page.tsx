import { ProductType } from "@/lib/product-v2/product";
import React, { use } from "react";
import { fetchDetail } from "../../@products/products/(..)products/[uuid]/page";
import ProductDetailComponent from "@/components/products/ProductDetailComponent";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params;
  const data: ProductType = await fetchDetail(uuid);

  return <ProductDetailComponent data={data} />;
}
