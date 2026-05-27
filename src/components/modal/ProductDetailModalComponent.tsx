"use client";

import Image from "next/image";
import { ProductType } from "@/lib/product-v2/product";
import { Badge, Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ProductDetailModalComponent({
  thumbnail,
  priceOut,
  name,
  description,
  uuid,
}: ProductType) {
  const [openModal, setOpenModal] = useState(true);

  const router = useRouter();

  function onCloseModal() {
    setOpenModal(false);
    router.back();
  }

  return (
    <Modal show={openModal} size="4xl" onClose={onCloseModal} popup dismissible>
      <ModalHeader />

      <ModalBody>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border bg-gray-50">
            <div className="relative h-[350px] w-full">
              <Image src={thumbnail} alt={name} fill className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <Badge color="success" size="sm">
                  Available
                </Badge>

                <p className="text-2xl font-bold text-blue-600">${priceOut}</p>
              </div>

              <div>
                <h1 className="text-3xl font-bold text-gray-900">{name}</h1>

                <p className="mt-4 leading-7 text-gray-600">{description}</p>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <Button className="w-full">Add to Cart</Button>

              <Button color="light" className="w-full" onClick={onCloseModal}>
                Close
              </Button>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}
