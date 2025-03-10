import Image from "next/image";
import image from "../../../../public/assest/portfolio/Rectangle 12660.png";
import imageOne from "../../../../public/assest/portfolio/Rectangle 12662.png";
import imageFour from "../../../../public/assest/portfolio/Rectangle 12663.png";
import imageFive from "../../../../public/assest/portfolio/Rectangle 12664.png";
import imageSix from "../../../../public/assest/portfolio/Rectangle 12665.png";
import imageSeven from "../../../../public/assest/portfolio/Rectangle 12666.png";
import imageTwo from "../../../../public/assest/portfolio/Rectangle 12667.png";
import imageThree from "../../../../public/assest/portfolio/Rectangle 12668.png";

const Portfolio = () => {
  return (
    <div className="m-4 grid lg:grid-cols-12 col-span-1 gap-4">
      <div className="lg:col-span-4 rounded-lg"></div>
      <div className="lg:col-span-8 rounded-lg">
        <div className="flex justify-center gap-6">
          <div className="flex flex-col gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={image}
                alt="Finance Future"
                className="w-[340px] h-[321px] mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
              <div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">
                  Finance Future
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={imageOne}
                alt="Investment Growth"
                className="w-[332px] h-[447px] mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
              <div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">
                  Investment Growth
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={imageTwo}
                alt="Market Analysis"
                className="w-[332px] h-[204px] mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
              <div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">
                  Market Analysis
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={imageThree}
                alt="Stock Trends"
                className="w-[332px] h-[204px] mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
              <div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Stock Trends</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={imageFour}
                alt="Crypto Insights"
                className="w-[332px] h-[248px] mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
              <div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">
                  Crypto Insights
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={imageFive}
                alt="Economic Outlook"
                className="w-[332px] h-[220px] mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
              <div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">
                  Economic Outlook
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={imageSix}
                alt="Trading Strategies"
                className="w-[332px] h-[220px] mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
              <div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">
                  Trading Strategies
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={imageSeven}
                alt="Business Forecast"
                className="w-[332px] h-[260px] mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
              <div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">
                  Business Forecast
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={imageThree}
                alt="Stock Trends"
                className="w-[332px] h-[204px] mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
              <div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Stock Trends</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
