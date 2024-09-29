import Hero from "@/components/Hero/Hero";
import PickerGallery from "@/components/PickerGallery/PickerGaller";
import WhyUs from "@/components/WhyUs/WhyUs";

export default function Home() {

  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-4xl">Our Story</h1>

      {/* access the cloister font this way! */}
      <h1 className="text-4xl font-cloister mb-32">Our Story</h1>
      <Hero />
      <WhyUs />
      <PickerGallery />
    </section>
  );
}
