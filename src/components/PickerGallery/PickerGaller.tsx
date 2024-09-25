"use client";

import { useRef } from "react";
import { ServiceItems } from "@/content/services";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";

const PickerGallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleGalleryItem = (index: number) => {
    if (galleryRef.current) {
      const element = galleryRef.current.children[index] as HTMLElement;
      if (element) {
        const offset = element.offsetLeft;
        galleryRef.current.scrollTo({ left: offset - 150, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="flex flex-col md:flex-row justify-center items-center w-full md:h-svh mb-16 md:mb-0">
      <div className="w-full md:w-2/3">
        <div
          ref={galleryRef}
          className="flex flex-col md:flex-row md:overflow-x-auto gap-8 md:gap-16 w-full md:scrollbar-hide"
        >
          <div className="w-full flex justify-center items-center md:hidden">
            <h1 className="text-3xl uppercase tracking-tight">what we do</h1>
          </div>
          {ServiceItems.map((item, idx) => (
            <div
              key={item.id}
              className={`w-full md:w-[400px] flex-shrink-0 transition-transform ${idx >= 3 && "hidden md:block"}`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[260px] md:w-[400px] md:h-[640px] object-cover"
              />
              <div className="mt-4 flex w-full gap-8 justify-between md:justify-start">
                <p className="text-sm text-[#757575]">{`00${item.id}`}</p>
                <p className="text-sm text-[#fafafa] uppercase tracking-tight">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:flex w-1/3 flex-col items-end">
        {ServiceItems.map((item, idx) => (
          <Button
            key={item.id}
            className="relative mb-2 flex justify-start max-w-[300px] w-full uppercase font-light tracking-tight"
            variant="light"
            radius="none"
            onClick={() => handleGalleryItem(idx)}
            startContent={
              <p className="w-[40px] mr-4 text-sm text-[#757575]">{`00${item.id}`}</p>
            }
            endContent={
              <ArrowRight
                className="absolute right-0 mr-4"
                color="#757575"
                size={16}
              />
            }
          >
            {item.name}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default PickerGallery;
