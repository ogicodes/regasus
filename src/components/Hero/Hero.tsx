import HeroCarousel from "./HeroCarousel";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center">
      <HeroCarousel slides={SLIDES} options={OPTIONS}/>
    </section>
  );
}