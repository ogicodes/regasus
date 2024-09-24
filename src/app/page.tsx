import ContactModal from "@/components/ContactModal/ContactModal";

export default function Home() {
  return (
    <section className="flex items-center justify-center">
      <h1 className="text-4xl">Our Story</h1>
      <ContactModal />
    </section>
  );
}
