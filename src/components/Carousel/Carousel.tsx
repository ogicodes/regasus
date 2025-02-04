"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import BottomSheet from "@/components/BottomSheet/BottomSheet";
import { useBottomsheet } from "@/utils/hooks/useBottomsheet";
import { ServiceItem } from "@/content/services";
import Image from "next/image";

type PropType = {
  options?: EmblaOptionsType;
  ServiceItems: ServiceItem[];
};

export default function Carousel({ options, ServiceItems }: PropType) {
  const [ emblaRef ] = useEmblaCarousel(options);
  const { sheetOpen, onOpen, onClose } = useBottomsheet();

  return (
    <section className="max-w-7xl">
      <h3 className="flex justify-center text-5xl my-4 font-light">SERVICES</h3>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4 touch-pan-y touch-pinch-zoom">
          {ServiceItems.map((item) => (
            <div
              className="transform-gpu flex-shrink-0 w-full min-w-0 pl-4"
              key={item.id}
            >
              <div
                onClick={onOpen}
                className=" shadow-[inset_0_0_0_0.2rem] text-4xl font-semibold flex items-center justify-center h-[19rem] select-none bg-white"
              >
                <Image
                  src={item.image}
                  alt="placeholder"
                  className="w-auto h-auto object-contain mt-4 md:order-last"
                  width={40}
                  height={40}
                />
              </div>
              <BottomSheet isOpen={sheetOpen} onClose={onClose}>
                <div className="h-full overflow-y-auto">
                  <h2 className="text-6xl tracking-tight uppercase">{item.name}</h2>
                  <div className="mt-16 flex md:flex-row flex-col gap-16">
                    <Image src={item.image} className="w-[50%]" alt="image" width={40} height={40} />
                    <div>
                      <h3 className="text-3xl tracking-tighter uppercase">
                        {item.name}
                      </h3>
                      <p className="mt-8 text-md tracking-tight whitespace-pre">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </BottomSheet>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
