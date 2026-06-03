import { ProductDetailModalComponent } from "@/components/modal/ProductDetailModalComponent";

export default async function ProductDetailModal({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params;
  const data = await fetchDetail(uuid);

  return (
    <div>
      <ProductDetailModalComponent
        thumbnail={data.thumbnail}
        priceOut={data.priceOut}
        name={data.name}
        description={data.description}
        uuid={data.uuid}
      />
    </div>
  );
}

export async function fetchDetail(uuid: string) {
  try {
    const res = await fetch(
      `https://hw-intercetpion.vercel.app/api/product/${uuid}`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data?.data;
  } catch (error) {
    throw new Error(`Failed to fetch product details: ${error}`);
  }
}
