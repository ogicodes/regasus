"use client";

import { ServiceItem } from "@/content/services";
import BottomSheet from "@/components/BottomSheet/BottomSheet";
import { useBottomsheet } from "@/utils/hooks/useBottomsheet";

export type CardGrid = "span" | "none";

interface ServiceCardProps {
  grid?: CardGrid;
  item: ServiceItem;
}

const GRIDS = {
  span: "md:col-span-2",
  none: "",
};

const ServiceCard = ({ grid = "none", item }: ServiceCardProps) => {
  const { id, name, image, description } = item;
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
        <div className="h-full overflow-y-auto">
          <h2 className="text-6xl tracking-tight uppercase">{name}</h2>
          <div className="mt-16 flex md:flex-row flex-col gap-16">
            <img src={image} className="w-[50%]" />
            <div>
              <h3 className="text-3xl tracking-tighter uppercase">{name}</h3>
              <p className="mt-8 text-md tracking-tight whitespace-pre">
                {description}
              </p>
            </div>
          </div>
        </div>
      </BottomSheet>
    </>
  );
};

export default ServiceCard;
