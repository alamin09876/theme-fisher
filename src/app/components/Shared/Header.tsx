"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import image from "../../../../public/assest/logo/Daryl Smith.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="px-8 bg-black">
          <div className="flex justify-between items-center h-20">
            <Link
              href="/"
              className={`text-2xl font-bold ${
                isScrolled ? "text-blue-600" : "text-white"
              }`}
            >
              <Image
                src={image}
                alt="Finance Future"
                className="h-[40px] w-[150px] mx-auto mt-3"
                width={1000}
                height={1000}
                priority
              />
              <div className="text-xs my-2">
                <p>UI/UX designer</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/services" className="text-white">
                <div className="flex gap-2 ">
                  <div className=" text-white hover:bg-gradient-to-r from-[#F5BD4D] to-[#F89222] rounded p-2">
                    <IoHomeOutline />
                  </div>

                  <p className="mt-1">Home</p>
                </div>
              </Link>
            </nav>

            <div className="hidden md:block">
              <Link
                href="/contact"
                className={`px-8 py-2 border border-[#F5BD4D] rounded-4xl text-white  hover:text-[#F89222] flex`}
              >
                Talk to me{" "}
              </Link>
            </div>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden bg-blue-600 py-4">
              <Link
                href="/services"
                className="block py-2 w-full mx-10 text-white"
              >
                Home
              </Link>

              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className={`px-20 py-2 border text-white rounded border-white hover:bg-white hover:text-blue-700 flex items-center`}
                >
                  Contact Us{" "}
                  <span className="mt-1 ml-4">
                    <IoIosArrowForward />
                  </span>
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
