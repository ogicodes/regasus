"use client";
import { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const HeroCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  return (
    <section className=" max-w-3xl mx-auto embla">
      <div className="overflow-hidden" ref={emblaRef}>
        <div
          className="flex"
          style={{
            touchAction: "pan-y pinch-zoom",
            marginLeft: "calc(var(--slide-spacing) * -1)",
          }}
        >
          {slides.map((index) => (
            <div
              className="transform min-w-0"
              style={{
                flex: "0 0 var(--slide-size)",
                paddingLeft: "var(--slide-spacing)",
              }}
              key={index}
            >
              <div
                className="rounded-[1.8rem] text-4xl font-semibold flex items-center justify-center select-none"
                style={{
                  boxShadow: "inset 0 0 0 0.2rem var(--detail-medium-contrast)",
                  height: "var(--slide-height)",
                }}
              >
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
