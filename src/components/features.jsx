import angleBracket from "../assets/angleBracket.svg";
import helmet from "../assets/helmet.svg";
import users from "../assets/users.svg";
import rupee from "../assets/rupee.svg";
// import services from "../assets/services.svg";

const Features = () => {
  return (
    <section className="dark:bg-white dark:text-black">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold dark:bg-white dark:text-black">
            Our Expertise
          </h2>
          <p className="dark:text-black sm:text-xl">
            Our services range from providing software solutions to protective
            equipments. We also provide staffing services and Vyapar App
            services for small businesses.
          </p>
        </div>
        <div className="space-y-8  md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 "></div>
            <div className="flex flex-row">
              <h3 className="mb-2 text-xl font-bold dark:text-black">
                Software/Website Development
              </h3>
              <img
                className="items-center ml-4 mb-4 "
                src={angleBracket}
                style={{ width: "35px", height: "30px" }}
                alt="angleBrackets"
              />
            </div>
            <p className="dark:text-black">
              We specialize in delivering personalized software/website
              development services that are specifically designed to meet the
              individualized needs of our clients.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12"></div>
            <div className="flex flex-row">
              <h3 className="mb-2 text-xl font-bold dark:text-black">
                Industrial Safety
              </h3>
              <img
                className="items-center ml-4 mb-4 "
                src={helmet}
                style={{ width: "35px", height: "30px" }}
                alt="safetyHelmet"
              />
            </div>
            <p className="dark:text-black">
              Our expertise lies in the trading, distribution, installation, and
              maintenance of an extensive array of industrial safety and fire
              safety products.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12"></div>
            <div className="flex flex-row">
              <h3 className="mb-2 text-xl font-bold dark:text-blak">
                Staffing Services
              </h3>
              <img
                className="items-center ml-4 mb-4 "
                src={users}
                style={{ width: "35px", height: "30px" }}
                alt="peopleStaff"
              />
            </div>
            <p className="dark:text-black">
              We provide comprehensive staffing services encompassing both
              industrial safety and other related industries.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12"></div>
            <div className="flex flex-row">
              <h3 className="mb-2 text-xl font-bold dark:text-black">
                Vyapar App
              </h3>
              <img
                className="items-center ml-4 mb-4 "
                src={rupee}
                style={{ width: "20px", height: "30px" }}
                alt="indianRupeeSymbol"
              />
            </div>
            <p className="dark:text-black">
              Vyapar offers GST-compliant billing, inventory tracking,
              accounting, GST reporting, online store creation, and E-way bill
              generation.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12"></div>
            <div className="flex flex-row">
              <h3 className="mb-2 text-xl font-bold dark:text-black">
                AMC Services
              </h3>
              <img
                className="items-center ml-4 mb-4 "
                style={{ width: "35px", height: "30px" }}
                alt="amcSymbol"
                src="https://img.icons8.com/ios-filled/50/fire-element.png"
              />
            </div>
            <p className="dark:text-black">Automatic Fire Control System</p>{" "}
            <p>Fire Extinguishers</p> <p> Fire Hydrant Systems</p>
          </div>
          {/* <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12"></div>
            <div className="flex flex-row">
              <h3 className="mb-2 text-xl font-bold dark:text-black">
                Services
              </h3>
              <img
                className="items-center ml-4 mb-4 "
                src={services}
                style={{ width: "35px", height: "30px" }}
                alt="servicesSymbol"
              />
            </div>
            <p className="dark:text-black">Computational Fluid Dynamics(CFD)</p>{" "}
            <p>Computer Aided Engineering(CAE)</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Features;
