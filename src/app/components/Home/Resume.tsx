"use client";
import { motion } from "framer-motion";
import { PiGraduationCap } from "react-icons/pi";

const Resume = () => {
  const resume = [
    {
      date: "2016-2020",
      university: "Harvard University",
      subtitle: "B.A. and M.S., Computer Science",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aa ea commodis neum eligendi lorem. Nipen en meneur erullis, pedo quem quis venim totem voluptae.",
    },
    {
      date: "2014-2016",
      university: "Hohana University",
      subtitle: "Bachelor Degree",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aa ea commodis neum eligendi lorem. Nipen en meneur erullis, pedo quem quis venim totem voluptae.",
    },
  ];

  return (
    <section id="education" className="bg-[#171B1A] dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 lg:pl-10">
          <div className="lg:col-span-4" />

          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="px-4 lg:px-0">
                <h2 className="text-3xl font-extrabold text-white">Resume</h2>
              </div>
              <div className="text-xl text-white mb-8 flex gap-2 mt-4 px-4 lg:px-0">
                <span className="mt-1">
                  <PiGraduationCap className="text-[#F89222]" />
                </span>
                <span>Education</span>
              </div>

              <div className="space-y-12 px-4 lg:px-0">
                {resume.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute left-0 top-0 h-full flex">
                      <div className="w-px bg-[#646464]" />
                      <div className="w-px bg-[#646464] ml-[1px]" />
                    </div>

                    <div className="absolute left-[-2px] top-0 w-2 h-2 bg-[#646464]" />

                    <p className="text-white text-sm w-fit mb-2 border rounded text-center p-2 bg-black">
                      {edu.date}
                    </p>
                    <div className="text-white text-sm w-full mb-2 border rounded p-4 bg-black">
                      <h3 className="text-sm lg:text-base text-[#F89222] mb-1">
                        {edu.university}
                      </h3>
                      <p className="text-gray-300 text-xs lg:text-sm mb-3">
                        {edu.subtitle}
                      </p>
                      <hr className="my-4" />
                      <p className="text-gray-400 leading-relaxed text-xs lg:text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
