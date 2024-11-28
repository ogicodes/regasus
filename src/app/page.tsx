import Hero from "@/components/Hero/Hero";
import PickerGallery from "@/components/PickerGallery/PickerGaller";
import WhyUs from "@/components/WhyUs/WhyUs";
import Carousel from '@/components/Carousel/Carousel'
import { EmblaOptionsType } from 'embla-carousel'
import { ServiceItems } from "@/content/services";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }

export default function Home() {

  return (
    <section className="flex flex-col items-center justify-center">
      <Hero />
      <Carousel options={OPTIONS} ServiceItems={ServiceItems} />
      <WhyUs />
      <PickerGallery />
    </section>
  );
}
