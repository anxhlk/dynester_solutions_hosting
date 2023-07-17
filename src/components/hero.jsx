import hero_illustration from "../assets/hero_illustration.svg";

const Hero = () => {
  return (
    <section className="dark:bg-white dark:text-black">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black">
            Elevating Businesses to New Heights.
          </h1>
          <p className="max-w-2xl mb-6 font-medium text-black lg:mb-8 md:text-lg lg:text-xl dark:text-black">
            A trusted provider of industrial safety, staffing, website
            development, and the Vyapar app, empowering businesses to thrive.
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={hero_illustration} alt="hero_illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
