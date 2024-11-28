import { featuredWorkItems } from "@/content/FeaturedWork";
import { CardGrid } from "@/components/Services/Card";
import ClientsCard from "@/components/Clients/card";

const Clients = () => {
  const defineGrid = (idx: number): CardGrid => {
    if (idx % 6 === 1 || idx % 6 === 5) {
      return "span";
    }
    return "none";
  };

  return (
    <section className="flex flex-col">
      <h1 className="text-6xl uppercase tracking-tight">Clients</h1>
      <p className="mt-8 text-[#ECE0D1]/20 uppercase text-md tracking-wide">
        something more than just <br />
        creative direction
      </p>
      <section className="my-32 flex flex-col gap-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
          {featuredWorkItems.map((item, idx) => (
            <ClientsCard key={item.id} item={item} grid={defineGrid(idx)} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Clients;
