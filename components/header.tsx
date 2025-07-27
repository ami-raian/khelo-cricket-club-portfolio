"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";

interface HeaderProps {
  isMenuOpen?: boolean;
  setIsMenuOpen?: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  console.log(isScrolled, "isScrolled");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-3">
            <div
              className={`rounded-full transition-all duration-300 ${
                isScrolled ? "bg-gray-100/50" : "bg-white/10 backdrop-blur-sm"
              }`}
            >
              <Image
                src="/sa-sporting-club-logo.jpg"
                alt="Khelo Sporting Club"
                width={56}
                height={56}
                className="w-14 h-14 transition-transform duration-300 transform hover:scale-110 overflow-hidden rounded-full"
              />
            </div>
            <div>
              <h1
                className={`text-xl font-bold drop-shadow-lg transition-colors duration-300 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                SA Sporting Club
              </h1>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {[
              "HOME",
              "CLUB DIRECTORY",
              "PAGES",
              "RESULTS",
              "POINT TABLE",
              "NEWS",
              "CONTACT",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className={`relative font-medium text-sm tracking-wide transition-all duration-300 group ${
                  isScrolled
                    ? "text-gray-900 hover:text-blue-600"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-blue-600" : "bg-yellow-400"
                  }`}
                ></span>
              </a>
            ))}
            <div
              className={`p-2 rounded-full cursor-pointer transition-all duration-300 ${
                isScrolled
                  ? "bg-gray-100/50 hover:bg-gray-200/50"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              <Search
                className={`w-5 h-5 transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-900 hover:text-blue-600"
                    : "text-white hover:text-yellow-400"
                }`}
              />
            </div>
          </nav>

          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? "bg-gray-100/50 hover:bg-gray-200/50"
                : "bg-white/10 hover:bg-white/20"
            }`}
            onClick={() => setIsMenuOpen && setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X
                className={`w-6 h-6 transition-colors duration-300 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 transition-colors duration-300 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`lg:hidden absolute top-full left-0 right-0 backdrop-blur-md border-t shadow-xl ${
              isScrolled
                ? "bg-white/95 border-gray-200/50"
                : "bg-blue-900/95 border-blue-700/30"
            }`}
          >
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {[
                  "HOME",
                  "CLUB DIRECTORY",
                  "PAGES",
                  "RESULTS",
                  "POINT TABLE",
                  "NEWS",
                  "CONTACT",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className={`font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                      isScrolled
                        ? "text-gray-900 hover:bg-gray-100 hover:text-blue-600"
                        : "text-white hover:bg-white/10 hover:text-yellow-400"
                    }`}
                  >
                    {item}
                  </a>
                ))}
                <div
                  className={`pt-4 border-t ${
                    isScrolled ? "border-gray-200" : "border-blue-700/30"
                  }`}
                >
                  <div
                    className={`flex items-center space-x-2 py-2 px-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      isScrolled
                        ? "text-gray-900 hover:bg-gray-100"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Search className="w-5 h-5" />
                    <span className="font-medium">Search</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
