"use client";

import { FeaturedWork } from "@/content/FeaturedWork";
import BottomSheet from "@/components/BottomSheet/BottomSheet";
import { useBottomsheet } from "@/utils/hooks/useBottomsheet";
import Image from "next/image";

export type CardGrid = "span" | "none";

interface ClientsCardProps {
  grid?: CardGrid;
  item: FeaturedWork;
}

const GRIDS = {
  span: "md:col-span-2",
  none: "",
};

const ClientsCard = ({ grid = "none", item }: ClientsCardProps) => {
  const { id, name, description } = item;
  const gridStyle = GRIDS[grid];
  const { sheetOpen, onOpen, onClose } = useBottomsheet();

  return (
    <>
      <div
        className={`${gridStyle} flex flex-col cursor-pointer`}
        onClick={onOpen}
      >
        <div className="">
          <Image
            src={item.image ? item.image : item.imageFile ? `/images/0${item.id}.png` : ""}
            alt="Service Image"
            className="w-full h-[300px] object-cover"
            width={4000}
            height={4000}
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
            <Image src={item.image ? item.image : item.imageFile ? `/images/0${item.id}.png` : ""} className="w-[50%]" alt="image" width={4000} height={4000} />
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

export default ClientsCard;