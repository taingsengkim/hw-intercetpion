import ProductCardComponent from "@/components/products/ProductCardComponent";
import { ProductType } from "@/lib/product-v2/product";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, use } from "react";

// async function to getProductPage
async function getProducts() {
  try {
    const res = await fetch(`http://localhost:3000/api/product`, {
      cache: "no-store",
    });
    const data = await res?.json();
    console.log("Data from /dashboard/products", data);
    return data;
  } catch (error) {
    throw new Error("Failed to fetching data from /dashboard/products");
  }
}
export default function ProductPageRoute() {
  return (
    <div className="flex gap-5">
      <Link href={"/dashboard/create"}>Create Product</Link>
      <Link href={"/dashboard/edit"}>Edit Product</Link>
      <Suspense fallback={<LoadingSuspenseComponent />}>
        <ProductRenderingProcess />
      </Suspense>
    </div>
  );
}
//loading suspense component
export function LoadingSuspenseComponent() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-orange-500"></div>
      <Image
        width={500}
        height={500}
        alt="suspense loading"
        src="https://dev-portal.motforex.com/_next/image?url=https://cdn.motforex.com/motforex/logo/logo.webp&w=48&q=75"
        className="rounded-full h-20 w-20"
      ></Image>
    </div>
  );
}

function ProductRenderingProcess() {
  const data = use(getProducts());
  console.log("THIS IS DATA", data);
  return (
    <div>
      <h1>All Product</h1>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {data?.data?.content?.map(
            ({ thumbnail, name, priceOut, description, uuid }: ProductType) => (
              <Link key={uuid} href={`/dashboard/products/${uuid}`}>
                <ProductCardComponent
                  description={description}
                  uuid={uuid}
                  thumbnail={thumbnail}
                  name={name}
                  priceOut={priceOut}
                />
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
