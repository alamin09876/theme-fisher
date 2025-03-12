"use client";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="mx-0 my-4 lg:m-4 grid lg:grid-cols-12 col-span-1 gap-4">
      <div className="lg:col-span-4"></div>
      <div className="lg:col-span-8 lg:pl-10 p-0">
        <div className="text-white mb-3 text-3xl px-4 lg:px-0">
          <p>Skills</p>
        </div>

        <div className="px-4 lg:px-0">
          <div className="text-white mb-3 flex justify-between w-full lg:w-[685px]">
            <p>UI/UX Design</p>
            <p className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] text-transparent bg-clip-text font-bold">
              95%
            </p>
          </div>
          <div className="flex items-center justify-start w-full">
            <div className="w-full lg:w-[685px] rounded-full bg-[#2f240e]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "95%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] h-full rounded-full text-white font-medium p-2 text-xs text-center"
              />
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-6">
          <div className="text-white mb-3 flex justify-between w-full lg:w-[685px]">
            <p>Photography</p>
            <p className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] text-transparent bg-clip-text font-bold">
              90%
            </p>
          </div>
          <div className="flex items-center justify-start w-full">
            <div className="w-full lg:w-[685px] rounded-full bg-[#2f240e]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "90%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] h-full rounded-full text-white font-medium p-2 text-xs text-center"
              />
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-6">
          <div className="text-white mb-3 flex justify-between w-full lg:w-[685px]">
            <p>Creativity</p>
            <p className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] text-transparent bg-clip-text font-bold">
              80%
            </p>
          </div>
          <div className="flex items-center justify-start w-full">
            <div className="w-full lg:w-[685px] rounded-full bg-[#2f240e]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] h-full rounded-full text-white font-medium p-2 text-xs text-center"
              />
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-6">
          <div className="text-white mb-3 flex justify-between w-full lg:w-[685px]">
            <p>Team Work</p>
            <p className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] text-transparent bg-clip-text font-bold">
              95%
            </p>
          </div>
          <div className="flex items-center justify-start w-full">
            <div className="w-full lg:w-[685px] rounded-full bg-[#2f240e]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "95%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] h-full rounded-full text-white font-medium p-2 text-xs text-center"
              />
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-6">
          <div className="text-white mb-3 flex justify-between w-full lg:w-[685px]">
            <p>Web Design</p>
            <p className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] text-transparent bg-clip-text font-bold">
              95%
            </p>
          </div>
          <div className="flex items-center justify-start w-full">
            <div className="w-full lg:w-[685px] rounded-full bg-[#2f240e]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "95%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] h-full rounded-full text-white font-medium p-2 text-xs text-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
