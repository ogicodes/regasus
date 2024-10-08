import Hero from "@/components/Hero/Hero";
import PickerGallery from "@/components/PickerGallery/PickerGaller";
import WhyUs from "@/components/WhyUs/WhyUs";
import Carousel from '@/components/Carousel/Carousel'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {

  return (
    <section className="flex flex-col items-center justify-center">
      <Hero />
      <Carousel slides={SLIDES} options={OPTIONS} />
      <WhyUs />
      <PickerGallery />
    </section>
  );
}
