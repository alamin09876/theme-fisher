"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="m-4 grid lg:grid-cols-12 col-span-1  gap-4">
      <div className="lg:col-span-4 "></div>
      <div className="lg:col-span-8 ">
        <div className="text-white font-extrabold  text-3xl lg:pl-10 pl-1 mt-12 mb-10">
          <p>Contact</p>
        </div>
        <div className=" flex  ">
          <div className="max-w-3xl w-full mx-auto ">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="relative">
                    <label className="block text-sm font-semibold text-white mb-2">
                      First Name<span className="text-white">*</span>
                    </label>
                    <div
                      className="w-full rounded-md transition-all duration-200 text-white
              focus-within:bg-gradient-to-r focus-within:from-[#F5BD4D] focus-within:to-[#F89222] p-[2px]"
                    >
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full p-2 border border-transparent bg-black rounded-md 
                     focus:outline-none transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-semibold text-white mb-2">
                      Email<span className="text-white">*</span>
                    </label>
                    <div
                      className="w-full rounded-md transition-all duration-200 text-white
              focus-within:bg-gradient-to-r focus-within:from-[#F5BD4D] focus-within:to-[#F89222] p-[2px]"
                    >
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-transparent bg-black rounded-md 
                     focus:outline-none transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="relative">
                    <label className="block text-sm font-semibold text-white mb-2">
                      Last Name<span className="text-white">*</span>
                    </label>
                    <div
                      className="w-full rounded-md transition-all duration-200 text-white
              focus-within:bg-gradient-to-r focus-within:from-[#F5BD4D] focus-within:to-[#F89222] p-[2px]"
                    >
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full p-2 border border-transparent bg-black rounded-md 
                     focus:outline-none transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-semibold text-white mb-2">
                      Phone<span className="text-white">*</span>
                    </label>
                    <div
                      className="w-full rounded-md transition-all duration-200 text-white
              focus-within:bg-gradient-to-r focus-within:from-[#F5BD4D] focus-within:to-[#F89222] p-[2px]"
                    >
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-2 border border-transparent bg-black rounded-md 
                     focus:outline-none transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-6">
                <label className="block text-sm font-semibold text-white mb-2">
                  Message<span className="text-white">*</span>
                </label>
                <div
                  className="w-full rounded-md transition-all duration-200 text-white
          focus-within:bg-gradient-to-r focus-within:from-[#F5BD4D] focus-within:to-[#F89222] p-[2px] mb-10"
                >
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2  bg-black rounded-md 
                 focus:outline-none resize-y transition-all duration-200"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#F5BD4D] to-[#F89222] 
             hover:opacity-90 text-white px-6 py-3 rounded-md font-semibold
             transition-all duration-200 focus:ring-2 focus:ring-[#F89222] focus:ring-offset-2 mb-10"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
