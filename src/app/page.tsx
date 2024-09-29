import PickerGallery from "@/components/PickerGallery/PickerGaller";
import WhyUs from "@/components/WhyUs/WhyUs";

export default function Home() {

  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-4xl">Our Story</h1>

      {/* access the cloister font this way! */}
      <h1 className="text-4xl font-cloister mb-32">Our Story</h1>
      <h2 className="text-2xl">Hero</h2>
      <WhyUs />
      <PickerGallery />
    </section>
  );
}
