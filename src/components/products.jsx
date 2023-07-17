import { useState } from "react";
import { Transition } from "@headlessui/react";
import Header from "./headers";
import safetyGloves from "../assets/safetyGloves.png";
import fireExtinguisher from "../assets/fireExtinguisher.jpg";
import safetyHelmet from "../assets/safetyHelmet.jpg";
import safetyJacket from "../assets/safetyJacket.jpg";
import earMuffs from "../assets/earMuffs.jpg";
import safetyVest from "../assets/safetyVest.jpg";
import safetyBoots from "../assets/safetyBoots.jpg";
import fireAlarmSystem from "../assets/fireAlarmSystem.jpg";
import fireSprinkler from "../assets/fireSprinkerSystem.jpg";
import protectiveCoverall from "../assets/protectiveCoverall.jpeg";
import fireHoseReel from "../assets/fireHoseReel.jpeg";
import fallArrester from "../assets/fallArrester.jpeg";
import safetyGumBoots from "../assets/safetyGumBoots.png";
import safetyBumpCap from "../assets/safetyBumpCap.png";

const Products = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleDropdown = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  const headings = [
    {
      title: "Safety Gloves",
      subheadings: [
        "Cut Proof PU Safety Gloves",
        "Latex Electrical Safety Gloves",
        "Leather Fire Safety Gloves",
      ],
      image: safetyGloves,
    },
    {
      title: "Fire Extinguishers",
      subheadings: [
        "ABC Type Fire Extinguisher",
        "ABC Powder Type Fire Extinguisher",
        "CO2 Portable Fire Extinguisher",
      ],
      image: fireExtinguisher,
    },
    {
      title: "Safety Helmet",
      subheadings: ["Safety Helmet Ratchet Suspension", "Yellow Safety Helmet"],
      image: safetyHelmet,
    },
    {
      title: "Protective Coverall",
      subheadings: [
        "Light Weight Synthetic Coverall",
        "Fire Protection Coverall",
      ],
      image: protectiveCoverall,
    },
    {
      title: "Safety Jacket",
      subheadings: [
        "Full Sleeves Reflective Safety Jacket",
        "High Visibility Reflective Safety Jacket",
      ],
      image: safetyJacket,
    },
    {
      title: "Safety Boots",
      subheadings: ["Fire Fighting Safety Boots"],
      image: safetyBoots,
    },
    {
      title: "Fire Alarm System",
      subheadings: ["Fire Alarm System Set"],
      image: fireAlarmSystem,
    },
    {
      title: "Fire Sprinkler",
      subheadings: ["Automatic Fire Sprinkler"],
      image: fireSprinkler,
    },
    {
      title: "Safety Bump Cap",
      subheadings: ["Safety Bump White Cap"],
      image: safetyBumpCap,
    },
    {
      title: "Ear Muffs",
      subheadings: ["PVC Hearing Protective Ear Muff"],
      image: earMuffs,
    },
    {
      title: "Safety Gumboots",
      subheadings: ["Black Leather Safety Gumboots"],
      image: safetyGumBoots,
    },
    {
      title: "Safety Vest",
      subheadings: ["Fire Polyester Reflective Safety Vest"],
      image: safetyVest,
    },
    {
      title: "Fall Arrester",
      subheadings: ["Fall Arrest Systems"],
      image: fallArrester,
    },
    {
      title: "Fire Hose Reel",
      subheadings: ["Fire Hose Reel"],
      image: fireHoseReel,
    },
  ];

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-opacity-50 dark:bg-white">
        <h1 className="text-3xl font-bold mb-10 text-center dark:text-black">
          Explore our Products
        </h1>
        <div className="max-w-4xl w-full grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {headings.map((heading, index) => (
            <div
              key={index}
              className="mb-6 flex flex-col items-center"
              onMouseEnter={() => toggleDropdown(index)}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <button
                type="button"
                className="shadow-sm bg-gray-400 dark:text-white p-4 rounded-lg flex flex-col items-center hover:bg-gray-800 focus:outline-none"
              >
                <img
                  src={heading.image}
                  alt={heading.title}
                  className="w-28 h-20 object-cover mb-2 rounded-lg"
                />
                <span className="text-xs font-medium text-center">
                  {heading.title}
                </span>
              </button>
              <Transition
                show={index === openIndex}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <div className="absolute mt-4 w-56 rounded-md shadow-lg">
                  <div
                    className="py-2 bg-white dark:bg-gray-800 rounded-md"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {heading.subheadings.map((subheading, subIndex) => (
                      <div
                        key={subIndex}
                        className="px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {subheading}
                      </div>
                    ))}
                  </div>
                </div>
              </Transition>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
