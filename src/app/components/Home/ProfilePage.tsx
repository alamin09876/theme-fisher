"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BsEnvelope } from "react-icons/bs";
import { FaInstagram, FaRegUser } from "react-icons/fa";
import { IoBriefcaseOutline, IoHome } from "react-icons/io5";
import { LuTwitter } from "react-icons/lu";
import { RiImageEditLine } from "react-icons/ri";
import {
  SlSocialFacebook,
  SlSocialLinkedin,
  SlSocialPintarest,
} from "react-icons/sl";
import { TbArrowDownToArc } from "react-icons/tb";

const iconMotion = {
  initial: { scale: 1, opacity: 0.8, color: "#ffffff" },
  hover: { scale: 1.2, opacity: 1, color: "#F89222" },
};

const ProfilePage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 col-span-1 pt-10 lg:pt-20">
      {/* Left Sidebar - Hidden on mobile */}
      <div className="hidden lg:block lg:col-span-1">
        <div
          className="min-h-screen bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('/assest/picture/Rectangle 1099.png')",
          }}
        >
          <div className="relative text-white p-8">
            {[
              IoHome,
              FaRegUser,
              IoBriefcaseOutline,
              RiImageEditLine,
              BsEnvelope,
            ].map((Icon, i) => (
              <motion.div
                key={i}
                variants={iconMotion}
                whileHover="hover"
                className="mt-12"
              >
                <Icon className="mx-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Picture Section */}
      <div className="lg:col-span-3 px-4 lg:px-0">
        <Image
          src={"/assest/picture/Mask group.png"}
          alt="Profile"
          className="h-auto w-full max-w-[400px] mx-auto"
          width={400}
          height={450}
          priority
        />
        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-2 lg:justify-between bg-black px-4 lg:px-8 py-4 text-white">
          {[
            SlSocialFacebook,
            SlSocialLinkedin,
            SlSocialPintarest,
            FaInstagram,
            LuTwitter,
          ].map((SocialIcon, i) => (
            <motion.div
              key={i}
              variants={iconMotion}
              whileHover="hover"
              className="rounded-full border p-2 lg:p-3"
            >
              <SocialIcon className="text-sm lg:text-base" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-7 px-4 lg:ml-6 lg:px-0">
        <div className="text-center lg:text-left">
          <span className="text-sm font-semibold text-[#F89222]">
            INTRODUCTION
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mt-4 leading-tight">
            I&apos;m a Creative Developer &<br className="hidden lg:block" />
            <span className="text-white"> UI/UX Design Expert</span>
          </h1>
        </div>

        <div className="mb-8 mt-6">
          <p className="text-base lg:text-lg text-white mb-4 lg:mb-6">
            24 years / Robert Smith / UK London
          </p>
          <p className="text-white leading-relaxed text-sm lg:text-base max-w-2xl">
            Prolific, full stack web developer with a passion for metrics and
            beating former &quot;best-yets. Prototyped 25 new product features
            per year for Flexor, Inc. Decreased rework by 22% and costs by 15%.
            Consistently receive high user experience scores for all web
            development projects, including a 55% increase for Flexor, Inc.
            Passionate about building world class web applications. One of my
            sites received a 2020 Webby for Best Navigation and Structure.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start">
            <a
              href="/alamin_ahmed_cv.pdf"
              className="px-6 py-3 text-white bg-gradient-to-r from-[#F5BD4D] to-[#F89222] rounded-md shadow hover:opacity-90 transition flex items-center gap-2"
            >
              Download Resume{" "}
              <TbArrowDownToArc className="text-lg lg:text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Hidden on mobile */}
      <div className="hidden lg:block lg:col-span-1">
        <div
          className="min-h-screen bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('/assest/picture/Rectangle 1098.png')",
          }}
        >
          <div className="relative text-white p-10">
            <div className="fixed -right-72 top-3/4 -rotate-90 origin-bottom-left text-gray-400 text-sm">
              © design by themefisher developed by gethugothemes
            </div>
            <div className="space-y-4 mt-[390px]">
              {["Fr", "En"].map((lang, i) => (
                <motion.div key={i} variants={iconMotion} whileHover="hover">
                  <div className="text-white hover:bg-gradient-to-r from-[#F5BD4D] to-[#F89222] rounded-full px-2 py-1">
                    <p>{lang}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
