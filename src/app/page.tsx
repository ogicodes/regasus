import Hero from "@/components/Hero/Hero";
import PickerGallery from "@/components/PickerGallery/PickerGaller";
import WhyUs from "@/components/WhyUs/WhyUs";

export default function Home() {

  return (
    <section className="flex flex-col items-center justify-center">
      <Hero />
      <WhyUs />
      <PickerGallery />
    </section>
  );
}
