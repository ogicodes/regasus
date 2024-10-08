"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

export default function Carousel(props: any) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className="max-w-3xl">
      <h3 className="flex justify-center text-4xl my-4 font-light">SERVICES</h3>
      <div className="overflow-hidden embla__viewport" ref={emblaRef}>
        <div className="flex -ml-4 touch-pan-y touch-pinch-zoom embla__container">
          {slides.map((index: number) => (
            <div
              className="transform-gpu flex-shrink-0 w-full min-w-0 pl-4"
              key={index}
            >
              <div className=" shadow-[inset_0_0_0_0.2rem] text-4xl font-semibold flex items-center justify-center h-[19rem] select-none bg-white">
                <img
                  src="https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg"
                  alt="placeholder"
                  className="w-auto h-auto md:w-[400px] md:h-[400px] object-contain mt-4 md:order-last"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
