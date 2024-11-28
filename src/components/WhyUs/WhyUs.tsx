import Image from 'next/image'
import krista from "../../../public/images/krista.jpg";

export default function WhyUs() {
  return (
    <section className="flex flex-col items-end my-12">
      <h2 className="text-6xl ">Why</h2>
      <h2 className="text-6xl font-cloister">Regasus</h2>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <Image
            src={krista}
            alt="Picture of Krista"
            className="w-full h-[260px] md:w-[400px] md:h-[400px] object-contain mt-4 md:order-last"
          />
          <p className="py-4 md:p-4 text-justify ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            justo sem, tempor non porta ac, pulvinar nec nulla. Aliquam maximus
            nec quam et cursus. Maecenas tincidunt consectetur orci vitae
            aliquet. Aliquam euismod tellus ut congue congue. Integer laoreet
            orci ut leo tincidunt feugiat. Praesent id mi sit amet dolor
            ultricies ultrices. Nullam leo ligula, hendrerit eu ipsum eu,
            sollicitudin pretium lectus. In condimentum vestibulum enim. Ut
            gravida ligula porta ipsum pretium feugiat. Integer vel mauris
            ligula. Morbi vulputate tempor pretium. Aliquam at posuere urna.
            Duis tempus nisl diam, rutrum tincidunt massa condimentum ut. Aenean
            volutpat feugiat lacus at accumsan. Maecenas ullamcorper sagittis
            quam.
          </p>
        </div>
      </div>
    </section>
  );
}
