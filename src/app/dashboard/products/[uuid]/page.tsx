import { ProductType } from "@/lib/product-v2/product";
import React, { use } from "react";
import { fetchDetail } from "../../@products/products/(..)products/[uuid]/page";
import ProductDetailComponent from "@/components/products/ProductDetailComponent";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ uuid: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const uuid = (await params)?.uuid;

  // fetch post information
  const post = await fetch(
    `${process.env.BASE_ISHOP_API_URL}/products/${uuid}`,
  ).then((res) => res.json());

  return {
    title: post?.name,
    description: post?.description,
    openGraph: {
      images: post?.thumbnail,
    },
  };
}
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params;
  const data: ProductType = await fetchDetail(uuid);

  return <ProductDetailComponent data={data} />;
}
