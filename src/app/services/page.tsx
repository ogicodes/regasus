import ServiceCard from "@/components/Services/Card";

export interface Item {
  id: number;
  name: string;
  image: string;
}

const ServiceItems: Item[] = [
  {
    id: 0o1,
    name: "social media",
    image:
      "https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg",
  },
  {
    id: 0o2,
    name: "creative",
    image:
      "https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg",
  },
  {
    id: 0o3,
    name: "social media",
    image:
      "https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg",
  },
  {
    id: 0o4,
    name: "social media",
    image:
      "https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg",
  },
  {
    id: 0o5,
    name: "social media",
    image:
      "https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg",
  },
  {
    id: 0o6,
    name: "social media",
    image:
      "https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg",
  },
  {
    id: 0o7,
    name: "social media",
    image:
      "https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg",
  },
];

const Services = () => {
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
            <ServiceCard
              key={item.id}
              item={item}
              grid={idx === 1 || idx === 5 ? "span" : "none"}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Services;
