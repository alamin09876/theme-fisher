"use client";
import Image from "next/image";
import { useState } from "react";
import { FaLink } from "react-icons/fa";
import image from "../../../../public/assest/portfolio/Rectangle 12660.png";
import imageOne from "../../../../public/assest/portfolio/Rectangle 12662.png";
import imageFour from "../../../../public/assest/portfolio/Rectangle 12663.png";
import imageFive from "../../../../public/assest/portfolio/Rectangle 12664.png";
import imageSix from "../../../../public/assest/portfolio/Rectangle 12665.png";
import imageSeven from "../../../../public/assest/portfolio/Rectangle 12666.png";
import imageTwo from "../../../../public/assest/portfolio/Rectangle 12667.png";
import imageThree from "../../../../public/assest/portfolio/Rectangle 12668.png";
// ... keep other image imports the same ...

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");
  const categories = [
    "All",
    "Graphic Design",
    "Mobile App",
    "Photography",
    "UI/UX Design",
  ];

  return (
    <div className="mx-0 my-4 lg:m-4 grid lg:grid-cols-12 col-span-1 gap-4">
      <div className="lg:col-span-4 rounded-lg"></div>
      <div className="lg:col-span-8 rounded-lg">
        <div className="lg:pl-10 p-4">
          <h2 className="text-3xl text-white py-10 font-extrabold">
            Portfolio
          </h2>

          {/* Mapped Categories */}
          <div className="space-y-4 md:space-y-0 mb-8">
            {/* Mobile: Two rows */}
            <div className="md:hidden flex flex-col gap-4">
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {categories.slice(0, 3).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`text-sm whitespace-nowrap px-3 py-1 ${
                      activeTab === category
                        ? "text-[#F89222] font-semibold border-b-[3px] border-[#F89222]"
                        : "text-gray-400 hover:text-gray-300 transition-colors"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {categories.slice(3).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`text-sm whitespace-nowrap px-3 py-1 ${
                      activeTab === category
                        ? "text-[#F89222] font-semibold border-b-[3px] border-[#F89222]"
                        : "text-gray-400 hover:text-gray-300 transition-colors"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop: Single row */}
            <div className="hidden md:flex items-center gap-6 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`text-lg whitespace-nowrap ${
                    activeTab === category
                      ? "text-[#F89222] font-semibold border-b-2 border-[#F89222]"
                      : "text-gray-400 hover:text-gray-300 transition-colors"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Static Image Blocks */}
        <div className="flex flex-col lg:flex-row justify-center gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Finance Future */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg w-full">
              <Image
                src={image}
                alt="Finance Future"
                className="w-full lg:w-[375px] h-[321px] mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
              <div className="absolute inset-0 bg-[#171B1A] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute right-6 top-7 p-2 bg-[#171B1A] rounded-full transition-transform duration-300 group-hover:scale-110">
                  <FaLink className="text-xs text-white" />
                </div>
                <div className="block">
                  <p className="text-white text-2xl font-semibold text-center mb-4">
                    Figma Mockup
                  </p>
                  <p className="text-white text-sm font-semibold text-center">
                    Figma mockup PSD editable
                  </p>
                </div>
              </div>
            </div>

            {/* Investment Growth */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg w-full">
              <Image
                src={imageOne}
                alt="Investment Growth"
                className="w-full lg:w-[375px] h-[447px] mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
              <div className="absolute inset-0 bg-[#171B1A] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute right-6 top-7 p-2 bg-[#171B1A] rounded-full transition-transform duration-300 group-hover:scale-110">
                  <FaLink className="text-xs text-white" />
                </div>
                <div className="block">
                  <p className="text-white text-2xl font-semibold text-center mb-4">
                    Figma Mockup
                  </p>
                  <p className="text-white text-sm font-semibold text-center">
                    Figma mockup PSD editable
                  </p>
                </div>
              </div>
              {/* ... same hover effect structure ... */}
            </div>

            {/* Market Analysis */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg w-full">
              <Image
                src={imageTwo}
                alt="Market Analysis"
                className="w-full lg:w-[375px] h-[204px] mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
              <div className="absolute inset-0 bg-[#171B1A] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute right-6 top-7 p-2 bg-[#171B1A] rounded-full transition-transform duration-300 group-hover:scale-110">
                  <FaLink className="text-xs text-white" />
                </div>
                <div className="block">
                  <p className="text-white text-2xl font-semibold text-center mb-4">
                    Figma Mockup
                  </p>
                  <p className="text-white text-sm font-semibold text-center">
                    Figma mockup PSD editable
                  </p>
                </div>
              </div>
              {/* ... same hover effect structure ... */}
            </div>

            {/* Stock Trends */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg w-full">
              <Image
                src={imageThree}
                alt="Stock Trends"
                className="w-full lg:w-[375px] h-[204px] mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
              <div className="absolute inset-0 bg-[#171B1A] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute right-6 top-7 p-2 bg-[#171B1A] rounded-full transition-transform duration-300 group-hover:scale-110">
                  <FaLink className="text-xs text-white" />
                </div>
                <div className="block">
                  <p className="text-white text-2xl font-semibold text-center mb-4">
                    Website design
                  </p>
                  <p className="text-white text-sm font-semibold text-center">
                    Fitness Studio Website
                  </p>
                </div>
              </div>
              {/* ... same hover effect structure ... */}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Crypto Insights */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg w-full">
              <Image
                src={imageFour}
                alt="Crypto Insights"
                className="w-full lg:w-[375px] h-[248px] mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
              <div className="absolute inset-0 bg-[#171B1A] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute right-6 top-7 p-2 bg-[#171B1A] rounded-full transition-transform duration-300 group-hover:scale-110">
                  <FaLink className="text-xs text-white" />
                </div>
                <div className="block">
                  <p className="text-white text-2xl font-semibold text-center mb-4">
                    Figma Mockup
                  </p>
                  <p className="text-white text-sm font-semibold text-center">
                    Figma mockup PSD editable
                  </p>
                </div>
              </div>
              {/* ... same hover effect structure ... */}
            </div>

            {/* Economic Outlook */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg w-full">
              <Image
                src={imageFive}
                alt="Economic Outlook"
                className="w-full lg:w-[375px] h-[220px] mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
              <div className="absolute inset-0 bg-[#171B1A] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute right-6 top-7 p-2 bg-[#171B1A] rounded-full transition-transform duration-300 group-hover:scale-110">
                  <FaLink className="text-xs text-white" />
                </div>
                <div className="block">
                  <p className="text-white text-2xl font-semibold text-center mb-4">
                    Figma Mockup
                  </p>
                  <p className="text-white text-sm font-semibold text-center">
                    Figma mockup PSD editable
                  </p>
                </div>
              </div>
              {/* ... same hover effect structure ... */}
            </div>

            {/* Trading Strategies */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg w-full">
              <Image
                src={imageSix}
                alt="Trading Strategies"
                className="w-full lg:w-[375px] h-[220px] mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
              <div className="absolute inset-0 bg-[#171B1A] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute right-6 top-7 p-2 bg-[#171B1A] rounded-full transition-transform duration-300 group-hover:scale-110">
                  <FaLink className="text-xs text-white" />
                </div>
                <div className="block">
                  <p className="text-white text-2xl font-semibold text-center mb-4">
                    Figma Mockup
                  </p>
                  <p className="text-white text-sm font-semibold text-center">
                    Figma mockup PSD editable
                  </p>
                </div>
              </div>
              {/* ... same hover effect structure ... */}
            </div>

            {/* Business Forecast */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg w-full">
              <Image
                src={imageSeven}
                alt="Business Forecast"
                className="w-full lg:w-[375px] h-[260px] mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
              <div className="absolute inset-0 bg-[#171B1A] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute right-6 top-7 p-2 bg-[#171B1A] rounded-full transition-transform duration-300 group-hover:scale-110">
                  <FaLink className="text-xs text-white" />
                </div>
                <div className="block">
                  <p className="text-white text-2xl font-semibold text-center mb-4">
                    Figma Mockup
                  </p>
                  <p className="text-white text-sm font-semibold text-center">
                    Figma mockup PSD editable
                  </p>
                </div>
              </div>
              {/* ... same hover effect structure ... */}
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg w-full">
              <Image
                src={imageThree}
                alt="Stock Trends"
                className="w-full lg:w-[375px] h-[204px] mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
              <div className="absolute inset-0 bg-[#171B1A] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute right-6 top-7 p-2 bg-[#171B1A] rounded-full transition-transform duration-300 group-hover:scale-110">
                  <FaLink className="text-xs text-white" />
                </div>
                <div className="block">
                  <p className="text-white text-2xl font-semibold text-center mb-4">
                    Photography
                  </p>
                  <p className="text-white text-sm font-semibold text-center">
                    Photography Project
                  </p>
                </div>
              </div>
              {/* ... same hover effect structure ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
