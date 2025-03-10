"use client";

import Image from "next/image";
import { FaCloudDownloadAlt, FaRegUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
// import image from "../../../../public/assest/picture/Rectangle 1099.png"

const ProfilePage = () => {
  return (
    <div className=" grid lg:grid-cols-12 col-span-1 pt-20">
      <div className="lg:col-span-1">
        <div
          className="min-h-screen bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assest/picture/Rectangle 1099.png')",
          }}
        >
          <div className="relative  text-white p-8">
            <IoHome className="mt-12" />
            <FaRegUser className="mt-12" />
            <FaRegUser className="mt-12" />
            <FaRegUser className="mt-12" />
            <FaRegUser className="mt-12" />
          </div>
        </div>
      </div>
      <div className="lg:col-span-3">
        <Image
          src={"/assest/picture/Mask group.png"}
          alt="Finance Future"
          className="h-[450px] w-[400px] mx-auto"
          width={1000}
          height={1000}
          priority
        />
        <div className="flex text-white justify-between -mt-1 bg-black px-8 py-4">
          <div className="rounded-4xl border p-3">
            <IoHome />
          </div>
          <div className="rounded-4xl border p-3">
            <IoHome />
          </div>
          <div className="rounded-4xl border p-3">
            <IoHome />
          </div>
          <div className="rounded-4xl border p-3">
            <IoHome />
          </div>
          <div className="rounded-4xl border p-3">
            <IoHome />
          </div>
        </div>
      </div>
      <div className="lg:col-span-7  ml-6">
        <div className="">
          <span className="text-sm font-semibold text-gray-500 pt-[100px]">
            INTRODUCTION
          </span>
          <h1 className="text-5xl font-bold text-white mt-4 leading-tight">
            I&apos;m a Creative Developer &<br />
            <span className=" text-white">UI/UX Design Expert</span>
          </h1>
        </div>

        {/* Personal Info */}
        <div className="mb-8">
          <p className="text-lg text-white mb-6">
            24 years / Robert Smith / UK London
          </p>
          <p className="text-white leading-relaxed max-w-2xl">
            Profile, full stack web developer with a passion for metrics and
            besting former best-yet. Proscorped 75 new products features per
            year for Floret Inc. Developed record by 27% and coding by 19%.
            Considering week- or ten user experience across an end-of-programmed
            project, creating a 50% increase for Floret, Inc. Passionate about
            building world sales web applications. One of my sites received a
            2020 Webby for Best Navigation and Structure.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/alamin_ahmed_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-white bg-gradient-to-r from-[#F5BD4D] to-[#F89222] rounded-md shadow hover:opacity-90 transition flex items-center gap-2"
            >
              Download Resume <FaCloudDownloadAlt size={25} />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:col-span-1">
        <div
          className="min-h-screen bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assest/picture/Rectangle 1098.png')",
          }}
        >
          <div className="relative text-white p-8">
            <div className="">
              <span>Design by themefisher</span>
            </div>
            <IoHome className="mt-12" />
            <FaRegUser className="mt-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
