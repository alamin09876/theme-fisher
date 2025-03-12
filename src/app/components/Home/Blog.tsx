import Image from "next/image";
import image from "../../../../public/assest/blog/Rectangle 12660.png";
import imageOne from "../../../../public/assest/blog/Rectangle 12662.png";
import imageThree from "../../../../public/assest/blog/Rectangle 12663.png";
import imageFour from "../../../../public/assest/blog/Rectangle 12664.png";
import imageFive from "../../../../public/assest/blog/Rectangle 12665.png";
import imageTwo from "../../../../public/assest/blog/Rectangle 12667.png";

const Blog = () => {
  return (
    <div className="mx-0 my-4 lg:m-4 grid lg:grid-cols-12 col-span-1 gap-4">
      <div className="lg:col-span-4 rounded-lg"></div>
      <div className="lg:col-span-8 rounded-lg">
        <div className="px-4 lg:pl-10">
          <h2 className="text-3xl text-white py-10 font-extrabold">Blog</h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-6 px-4 lg:px-0">
          <div className="flex flex-col gap-6 w-full lg:w-auto">
            <div className="group overflow-hidden shadow-lg mb-10 w-full">
              <Image
                src={image}
                alt="Finance Future"
                className="w-full lg:w-[375px] h-[320px] mx-auto object-cover"
                width={1000}
                height={1000}
                priority
              />
              <div className="text-start bg-black px-4 py-6 w-full lg:w-[375px] mx-auto">
                <p className="text-white text-xs font-medium mt-4">
                  Photography | 28 Apr 2022
                </p>
                <p className="text-white text-lg font-semibold mt-4">
                  The artist vocation is to send light <br /> into the human
                  heart.
                </p>
                <p className="text-white text-sm font-semibold mt-4">
                  Lorem Ipsum is simply dummy text the <br /> printing
                  typesetting industry.
                  <br /> Lorem Ipsum has been...
                </p>
                <p className="text-white text-sm font-semibold mt-4">
                  -- Posted By Daryl Smith --
                </p>
              </div>
            </div>

            <div className="group overflow-hidden shadow-lg mb-10 w-full">
              <Image
                src={imageOne}
                alt="Finance Future"
                className="w-full lg:w-[375px] h-[320px] mx-auto object-cover"
                width={1000}
                height={1000}
                priority
              />
              <div className="text-start bg-black px-4 py-6 w-full lg:w-[375px] mx-auto">
                <p className="text-white text-xs font-medium mt-4">
                  Photography | 28 Apr 2022
                </p>
                <p className="text-white text-lg font-semibold mt-4">
                  The artist vocation is to send light <br /> into the human
                  heart.
                </p>
                <p className="text-white text-sm font-semibold mt-4">
                  Lorem Ipsum is simply dummy text the <br /> printing
                  typesetting industry.
                  <br /> Lorem Ipsum has been...
                </p>
                <p className="text-white text-sm font-semibold mt-4">
                  Posted By Daryl Smith
                </p>
              </div>
            </div>

            <div className="group overflow-hidden shadow-lg mb-10 w-full">
              <Image
                src={imageTwo}
                alt="Finance Future"
                className="w-full lg:w-[375px] h-[220px] mx-auto object-cover"
                width={1000}
                height={1000}
                priority
              />
              <div className="text-start bg-black px-4 py-6 w-full lg:w-[375px] mx-auto">
                <p className="text-white text-xs font-medium mt-4">
                  Photography | 28 Apr 2022
                </p>
                <p className="text-white text-lg font-semibold mt-4">
                  The artist vocation is to send light <br /> into the human
                  heart.
                </p>
                <p className="text-white text-sm font-semibold mt-4">
                  Lorem Ipsum is simply dummy text the <br /> printing
                  typesetting industry.
                  <br /> Lorem Ipsum has been...
                </p>
                <p className="text-white text-sm font-semibold mt-4">
                  Posted By Daryl Smith
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full lg:w-auto">
            <div className="group overflow-hidden shadow-lg mb-10 w-full">
              <Image
                src={imageThree}
                alt="Finance Future"
                className="w-full lg:w-[375px] h-[240px] mx-auto object-cover"
                width={1000}
                height={1000}
                priority
              />
              <div className="text-start bg-black px-4 py-6 w-full lg:w-[375px] mx-auto">
                <p className="text-white text-xs font-medium mt-4">
                  Photography | 28 Apr 2022
                </p>
                <p className="text-white text-lg font-semibold mt-4">
                  The artist vocation is to send light <br /> into the human
                  heart.
                </p>
                <p className="text-white text-sm font-semibold mt-4">
                  Lorem Ipsum is simply dummy text the <br /> printing
                  typesetting industry.
                  <br /> Lorem Ipsum has been...
                </p>
                <p className="text-white text-sm font-semibold mt-4">
                  Posted By Daryl Smith
                </p>
              </div>
            </div>

            <div className="group overflow-hidden shadow-lg mb-10 w-full">
              <Image
                src={imageFour}
                alt="Finance Future"
                className="w-full lg:w-[375px] h-[220px] mx-auto object-cover"
                width={1000}
                height={1000}
                priority
              />
              <div className="text-start bg-black px-4 py-6 w-full lg:w-[375px] mx-auto">
                <p className="text-white text-xs font-medium mt-4">
                  Photography | 28 Apr 2022
                </p>
                <p className="text-white text-lg font-semibold mt-4">
                  The artist vocation is to send light <br /> into the human
                  heart.
                </p>
                <p className="text-white text-sm font-semibold mt-4">
                  Lorem Ipsum is simply dummy text the <br /> printing
                  typesetting industry.
                  <br /> Lorem Ipsum has been...
                </p>
                <p className="text-white text-sm font-semibold mt-4">
                  Posted By Daryl Smith
                </p>
              </div>
            </div>

            <div className="group overflow-hidden shadow-lg mb-10 w-full">
              <Image
                src={imageFive}
                alt="Finance Future"
                className="w-full lg:w-[375px] h-[220px] mx-auto object-cover"
                width={1000}
                height={1000}
                priority
              />
              <div className="text-start bg-black px-4 py-6 w-full lg:w-[375px] mx-auto">
                <p className="text-white text-xs font-medium mt-4">
                  Photography | 28 Apr 2022
                </p>
                <p className="text-white text-lg font-semibold mt-4">
                  The artist vocation is to send light <br /> into the human
                  heart.
                </p>
                <p className="text-white text-sm font-semibold mt-4">
                  Lorem Ipsum is simply dummy text the <br /> printing
                  typesetting industry.
                  <br /> Lorem Ipsum has been...
                </p>
                <p className="text-white text-sm font-semibold mt-4">
                  Posted By Daryl Smith
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
