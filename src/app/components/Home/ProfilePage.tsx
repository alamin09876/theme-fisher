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

// Motion animation for icons
const iconMotion = {
  initial: { scale: 1, opacity: 0.8, color: "#ffffff" },
  hover: { scale: 1.2, opacity: 1, color: "#F89222" },
};

const ProfilePage = () => {
  return (
    <div className="grid lg:grid-cols-12 col-span-1 pt-20">
      <div className="lg:col-span-1">
        <div
          className="min-h-screen bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assest/picture/Rectangle 1099.png')",
          }}
        >
          <div className="relative text-white p-8">
            <motion.div variants={iconMotion} whileHover="hover">
              <IoHome className="mt-12" />
            </motion.div>
            <motion.div variants={iconMotion} whileHover="hover">
              <FaRegUser className="mt-12" />
            </motion.div>
            <motion.div variants={iconMotion} whileHover="hover">
              <IoBriefcaseOutline className="mt-12" />
            </motion.div>
            <motion.div variants={iconMotion} whileHover="hover">
              <RiImageEditLine className="mt-12" />
            </motion.div>
            <motion.div variants={iconMotion} whileHover="hover">
              <BsEnvelope className="mt-12" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="lg:col-span-3">
        <Image
          src={"/assest/picture/Mask group.png"}
          alt="Finance Future"
          className="h-[450px] w-[400px] mx-auto"
          width={1000}
          height={1000}
          priority
        />
        {/* Social Icons with Motion */}
        <div className="flex text-white justify-between -mt-1 bg-black px-8 py-4">
          <motion.div
            variants={iconMotion}
            whileHover="hover"
            className="rounded-4xl border p-3"
          >
            <SlSocialFacebook />
          </motion.div>
          <motion.div
            variants={iconMotion}
            whileHover="hover"
            className="rounded-4xl border p-3"
          >
            <SlSocialLinkedin />
          </motion.div>
          <motion.div
            variants={iconMotion}
            whileHover="hover"
            className="rounded-4xl border p-3"
          >
            <SlSocialPintarest />
          </motion.div>
          <motion.div
            variants={iconMotion}
            whileHover="hover"
            className="rounded-4xl border p-3"
          >
            <FaInstagram />
          </motion.div>
          <motion.div
            variants={iconMotion}
            whileHover="hover"
            className="rounded-4xl border p-3"
          >
            <LuTwitter />
          </motion.div>
        </div>
      </div>

      {/* Introduction */}
      <div className="lg:col-span-7 ml-6">
        <div>
          <span className="text-sm font-semibold text-[#F89222] pt-[12] pl-10">
            INTRODUCTION
          </span>
          <h1 className="text-5xl font-bold text-white mt-4 leading-tight pl-10">
            I&apos;m a Creative Developer &<br />
            <span className="text-white ">UI/UX Design Expert</span>
          </h1>
        </div>

        {/* Personal Info */}
        <div className="mb-8">
          <p className="text-lg text-white mb-6 pl-10">
            24 years / Robert Smith / UK London
          </p>
          <p className="text-white leading-relaxed max-w-2xl pl-10">
            Prolific, full stack web developer with a passion for metrics and
            beating former &quot;best-yets. Prototyped 25 new product features
            per year for Flexor, Inc. Decreased rework by 22% and costs by 15%.
            Consistently receive high user experience scores for all web
            development projects, including a 55% increase for Flexor, Inc.
            Passionate about building world class web applications. One of my
            sites received a 2020 Webby for Best Navigation and Structure.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start pl-10">
            <a
              href="/alamin_ahmed_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-white bg-gradient-to-r from-[#F5BD4D] to-[#F89222] rounded-md shadow hover:opacity-90 transition flex items-center gap-2"
            >
              Download Resume <TbArrowDownToArc size={25} />
            </a>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="lg:col-span-1">
        <div
          className="min-h-screen bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assest/picture/Rectangle 1098.png')",
          }}
        >
          <div className="relative text-white p-10">
            <div className="fixed -right-72 top-3/4 -rotate-90 origin-bottom-left text-gray-400 text-sm">
              © design by themefisher developed by gethugothemes
            </div>

            <motion.div variants={iconMotion} whileHover="hover">
              <div className="mt-[390px] text-white hover:bg-gradient-to-r from-[#F5BD4D] to-[#F89222] rounded-4xl px-2 py-1">
                <p>Fr</p>
              </div>
            </motion.div>
            <motion.div variants={iconMotion} whileHover="hover">
              <div className="mt-[10] text-white hover:bg-gradient-to-r from-[#F5BD4D] to-[#F89222] rounded-4xl px-2 py-1">
                <p>En</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
