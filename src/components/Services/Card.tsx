"use client";

import { Item } from "@/app/services/page";
import BottomSheet from "@/components/BottomSheet/BottomSheet";
import { useBottomsheet } from "@/utils/hooks/useBottomsheet";

interface ServiceCardProps {
  grid?: "span" | "none";
  item: Item;
}

const GRIDS = {
  span: "col-span-2",
  none: "",
};

const ServiceCard = ({ grid = "none", item }: ServiceCardProps) => {
  const { id, name, image } = item;
  const gridStyle = GRIDS[grid];
  const { sheetOpen, onOpen, onClose } = useBottomsheet();

  return (
    <>
      <div
        className={`${gridStyle} flex flex-col cursor-pointer`}
        onClick={onOpen}
      >
        <div className="">
          <img
            src={image}
            alt="Service Image"
            className="w-full h-[300px] object-cover"
          />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-[#fafafa]/20">{`00${id}`}</p>
          <p className="text-sm uppercase text-[#fafafa]">{name}</p>
        </div>
      </div>
      <BottomSheet isOpen={sheetOpen} onClose={onClose}>
        <div>
          <h1>{name}</h1>
        </div>
      </BottomSheet>
    </>
  );
};

export default ServiceCard;
