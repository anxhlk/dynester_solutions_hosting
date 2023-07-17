import vyaparLogo from "../assets/vyaparLogo.png";
import vyaparHero from "../assets/vyaparHero.png";
import Header from "./headers";

const VyaparApp = () => {
  return (
    <>
      <Header />
      <div className="dark:bg-white min-h-screen dark:text-black">
        <header className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-center">
            <img src={vyaparLogo} alt="Vyapar Logo" className="h-12 mr-2" />
            <h1 className="text-4xl font-bold">Vyapar App</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center">
              <div className="w-full p-6">
                <h2 className="text-2xl font-semibold mb-4">About Vyapar</h2>
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-1/2">
                    <p className="dark:text-black">
                      Vyapar is a comprehensive business accounting software
                      designed specifically for small and medium-sized
                      businesses in India. It offers a range of features to
                      simplify financial management and streamline business
                      operations.
                    </p>
                    <p className="dark:text-black mt-4">
                      With Vyapar, businesses can efficiently manage inventory,
                      create and send professional invoices, track expenses,
                      generate financial reports, and ensure GST compliance. The
                      software provides a user-friendly interface and powerful
                      tools that help businesses stay organized, save time, and
                      make informed decisions.
                    </p>
                  </div>
                  <div className="w-full sm:w-1/2 mt-6 sm:mt-0">
                    <img
                      src={vyaparHero}
                      alt="About Vyapar"
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full p-6">
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc list-inside dark:text-black">
                  <li className="mb-2">
                    <span className="font-semibold">Inventory management:</span>{" "}
                    Keep track of stock levels, manage product variations, and
                    receive low-stock alerts.
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">
                      Invoicing and billing:
                    </span>{" "}
                    Create professional invoices, customize templates, and get
                    paid faster with online payment integration.
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Expense tracking:</span>{" "}
                    Record and categorize expenses, attach receipts, and
                    generate expense reports.
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Financial reporting:</span>{" "}
                    Generate insightful reports on sales, purchases, expenses,
                    and more to gain valuable business insights.
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">
                      GST-compliant invoicing:
                    </span>{" "}
                    Generate GST-compliant invoices and easily file GST returns.
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">
                      Mobile and desktop accessibility:
                    </span>{" "}
                    Access Vyapar on both mobile devices and desktop computers
                    for convenience and flexibility.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap justify-center mt-8">
              <div className="w-full sm:w-1/2 lg:w-1/3 p-6 flex justify-center items-center">
                <div className="mr-4">
                  <a
                    href="https://vyaparapp.in/desktop/download/?referrer_code=MNW306"
                    className="inline-block dark:bg-white dark:text-black font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download Now
                  </a>
                </div>
                <div>
                  <a
                    href="https://vyaparapp.in/pricing?referrer_code=MNW306"
                    className="inline-block dark:bg-white dark:text-black font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Pricing
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center font-bold text-xl animate-jump animate-infinite animate-duration-[2000ms] text-blue-500">
              <span>Get 1-3 Months Extra Validity</span>
              <span> Use the CODE : MNW306</span>
            </div>
          </div>
        </main>
        <footer className="py-10 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-7xl mx-auto">
            <p className="text-gray-700 dark:black">
              &copy; {new Date().getFullYear()} Vyapar App. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default VyaparApp;
