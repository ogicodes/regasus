import ServiceCard from "@/components/Services/Card";
import { ServiceItems } from "@/content/services";
import { CardGrid } from "@/components/Services/Card";

const Services = () => {
  const defineGrid = (idx: number): CardGrid => {
    if (idx % 6 === 1 || idx % 6 === 5) {
      return "span";
    }
    return "none";
  };

  return (
    <section className="flex flex-col">
      <h1 className="text-6xl uppercase tracking-tight">Services</h1>
      <p className="mt-8 text-[#ECE0D1]/20 uppercase text-md tracking-wide">
        something more than just <br />
        creative direction
      </p>
      <section className="my-32 flex flex-col gap-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
          {ServiceItems.map((item, idx) => (
            <ServiceCard key={item.id} item={item} grid={defineGrid(idx)} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Services;
