import officeDesk from "../assets/officeDesk.jpg";
import officeMeeting from "../assets/officeMeeting.jpg";

const AboutUs = () => {
  return (
    <section className="dark:bg-white dark:text-black">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-black sm:text-lg dark:text-black">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">
            Driven by Purpose, Defined by Excellence.
          </h2>
          <p className="mb-4">
            DYNESTER is name that combines the words DYNAMIC and SERVICE to
            create unique and memorable name for a service provider. DYNESTER
            can be interpreted as a service provider that offers dynamic and
            energetic services with expertise.Our company, founded in 2019,
            specializes in providing cutting-edge technology solutiions such as
            CFD/CAE, software development, mobile app developement & IT
            Services. We also Trade & Distribute industrial safety & Fire Safety
            Products while offering maintenance and installation services. Our
            experiende professionas are dedicated to delivering the highest
            quality products, service and support to our clients, helping them
            optimize their operation and improve their botteom line through the
            power of technology and support service.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src={officeDesk}
            alt="office content 1"
          />
          {/* Courtesy of Djordje Petrovic from Pexels */}
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={officeMeeting}
            alt="office content 2"
          />
          {/*Courtesy of Marcus Aurelius from Pexels */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
