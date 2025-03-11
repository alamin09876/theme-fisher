"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosClose, IoIosMenu } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import image from "../../../../public/assest/logo/Daryl Smith.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="px-4 md:px-8 bg-black">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="z-50">
              <Image
                src={image}
                alt="Daryl Smith"
                className="h-[40px] w-[150px] mt-3"
                width={1000}
                height={1000}
                priority
              />
              <div className="text-xs my-2">
                <p className="text-white">UI/UX designer</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/services" className="text-white">
                <div className="flex gap-2 items-center">
                  <div className="text-white hover:bg-gradient-to-r from-[#F5BD4D] to-[#F89222] rounded p-2">
                    <IoHomeOutline className="text-lg" />
                  </div>
                  <p className="mt-1">Home</p>
                </div>
              </Link>
            </nav>

            {/* Desktop Contact Button */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="px-8 py-2 border border-[#F5BD4D] rounded-full text-white hover:text-[#F89222] transition-colors"
              >
                Talk to me
              </Link>
            </div>

            {/* Mobile Hamburger Menu */}
            <button
              className="md:hidden text-white z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <IoIosClose className="w-8 h-8" />
              ) : (
                <IoIosMenu className="w-8 h-8" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 right-0 bg-black py-4 px-4 space-y-6">
              {/* Home Component */}
              <div className="border-b border-gray-700 pb-4">
                <Link
                  href="/services"
                  className="flex items-center gap-2 text-white"
                >
                  <IoHomeOutline className="text-xl" />
                  <span className="text-lg">Home</span>
                </Link>
              </div>

              {/* Contact Button */}
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-between px-6 py-3 border border-[#F5BD4D] text-white rounded-full hover:bg-gradient-to-r from-[#F5BD4D] to-[#F89222]"
                >
                  <span>Contact Me</span>
                  <IoIosArrowForward className="ml-2" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
