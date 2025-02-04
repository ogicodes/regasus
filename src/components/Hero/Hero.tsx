export default function Hero() {
  return (
    <section className="w-dvw h-dvh bg-fixed bg-center bg-no-repeat bg-auto bg-mobile-hero-pattern md:bg-quarter-hero-pattern flex justify-center items-center">
      <h1 className="text-[150px] font-cloister hidden md:flex -mt-40">
        Regasus
      </h1>
      <div className="flex flex-col justify-center items-baseline">
        <h1 className="text-8xl font-cloister mb-30 md:hidden">Regasus</h1>
        <h3 className="text-3xl mb-4 md:hidden">
          A digital first <br />
          creative studio
        </h3>
        <p className="md:hidden">(since 2018)</p>
      </div>
    </section>
  );
}
