import Image from "next/image";
import image from "../../../../public/assest/blog/Rectangle 12660.png";
import imageOne from "../../../../public/assest/blog/Rectangle 12662.png";
import imageThree from "../../../../public/assest/blog/Rectangle 12663.png";
import imageFour from "../../../../public/assest/blog/Rectangle 12664.png";
import imageFive from "../../../../public/assest/blog/Rectangle 12665.png";
import imageTwo from "../../../../public/assest/blog/Rectangle 12667.png";

const Blog = () => {
  return (
    <div className="m-4 grid lg:grid-cols-12 col-span-1 gap-4">
      <div className="lg:col-span-4 rounded-lg"></div>
      <div className="lg:col-span-8 rounded-lg">
        <div>
          <h2 className="text-5xl text-white py-10">Blog</h2>
        </div>
        <div className="flex justify-center gap-6">
          <div className="flex flex-col gap-6">
            <div className="group overflow-hidden shadow-lg mb-10">
              <Image
                src={image}
                alt="Finance Future"
                className="w-[375px] h-[320px] mx-auto "
                width={1000}
                height={1000}
                priority
              />
              <div className="text-start bg-black px-4 py-6">
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
            <div className=" group overflow-hidden shadow-lg mb-10">
              <Image
                src={imageOne}
                alt="Finance Future"
                className="w-[375px] h-[320px] mx-auto "
                width={1000}
                height={1000}
                priority
              />
              <div className="text-start bg-black px-4 py-6">
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
            <div className=" group overflow-hidden shadow-lg mb-10">
              <Image
                src={imageTwo}
                alt="Finance Future"
                className="w-[375px] h-[220px] mx-auto "
                width={1000}
                height={1000}
                priority
              />
              <div className="text-start bg-black px-4 py-6">
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
          <div className="flex flex-col gap-6">
            <div className=" group overflow-hidden shadow-lg mb-10">
              <Image
                src={imageThree}
                alt="Finance Future"
                className="w-[375px] h-[240px] mx-auto "
                width={1000}
                height={1000}
                priority
              />
              <div className="text-start bg-black px-4 py-6">
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
            <div className=" group overflow-hidden shadow-lg mb-10">
              <Image
                src={imageFour}
                alt="Finance Future"
                className="w-[375px] h-[220px] mx-auto "
                width={1000}
                height={1000}
                priority
              />
              <div className="text-start bg-black px-4 py-6">
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
            <div className=" group overflow-hidden shadow-lg mb-10">
              <Image
                src={imageFive}
                alt="Finance Future"
                className="w-[375px] h-[220px] mx-auto "
                width={1000}
                height={1000}
                priority
              />
              <div className="text-start bg-black px-4 py-6">
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
