"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Search,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  isMenuOpen?: boolean;
  setIsMenuOpen?: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "HOME", href: "/" },
    // { name: "CLUB DIRECTORY", href: "#directory" },
    // { name: "PAGES", href: "#pages" },
    // { name: "RESULTS", href: "#results" },
    // { name: "POINT TABLE", href: "#table" },
    // { name: "NEWS", href: "#news" },
    { name: "CONTACT", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/sasportingclubbd/",
      color: "hover:text-blue-500",
    },
    // { icon: Twitter, href: "#", color: "hover:text-sky-400" },
    // { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@SASPORTINGCLUB",
      color: "hover:text-red-500",
    },
  ];

  const currentMenuOpen =
    isMenuOpen !== undefined ? isMenuOpen : mobileMenuOpen;
  const setCurrentMenuOpen = setIsMenuOpen || setMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-3 px-4 lg:px-0">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="group">
              <div
                className={`rounded-full transition-all duration-300 p-1 ${
                  isScrolled
                    ? "bg-gradient-to-r from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200"
                    : "bg-white/20 backdrop-blur-sm group-hover:bg-white/30"
                }`}
              >
                <Image
                  src="/sa-sporting-club-logo.jpg"
                  alt="SA Sporting Club"
                  width={56}
                  height={56}
                  className="w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 transform group-hover:scale-110 rounded-full object-cover"
                />
              </div>
            </Link>
            <div>
              <h1
                className={`text-lg sm:text-xl font-bold drop-shadow-lg transition-colors duration-300 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                SA Sporting Club
              </h1>
              <p
                className={`text-xs transition-colors duration-300 ${
                  isScrolled ? "text-gray-600" : "text-blue-200"
                }`}
              >
                Excellence in Cricket
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6"></nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium text-sm tracking-wide transition-all duration-300 group px-2 py-1 ${
                  isScrolled
                    ? "text-gray-900 hover:text-blue-600"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-blue-600" : "bg-yellow-400"
                  }`}
                ></span>
              </Link>
            ))}
            {/* Social Links */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    isScrolled
                      ? "bg-gray-100/50 hover:bg-gray-200/50 text-gray-700"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  } ${social.color}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Search Button */}
            {/* <button
              className={`p-2 rounded-full cursor-pointer transition-all duration-300 ${
                isScrolled
                  ? "bg-gray-100/50 hover:bg-gray-200/50 text-gray-900 hover:text-blue-600"
                  : "bg-white/10 hover:bg-white/20 text-white hover:text-yellow-400"
              }`}
            >
              <Search className="w-5 h-5" />
            </button> */}

            {/* Join Button */}
            {/* <Button
              className={`transition-all duration-300 ${
                isScrolled
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  : "bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50"
              }`}
              variant={isScrolled ? "default" : "outline"}
            >
              Join Now
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? "bg-gray-100/50 hover:bg-gray-200/50"
                : "bg-white/10 hover:bg-white/20"
            }`}
            onClick={() => setCurrentMenuOpen(!currentMenuOpen)}
          >
            {currentMenuOpen ? (
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
        {currentMenuOpen && (
          <div
            className={`lg:hidden absolute top-full left-0 right-0 backdrop-blur-md border-t shadow-xl transition-all duration-300 ${
              isScrolled
                ? "bg-white/95 border-gray-200/50"
                : "bg-gradient-to-r from-blue-900/95 via-blue-800/95 to-purple-900/95 border-blue-700/30"
            }`}
          >
            <nav className="container mx-auto py-6 px-4">
              <div className="flex flex-col space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`font-medium py-3 px-4 rounded-lg transition-all duration-300 ${
                      isScrolled
                        ? "text-gray-900 hover:bg-gray-100 hover:text-blue-600"
                        : "text-white hover:bg-white/10 hover:text-yellow-400"
                    }`}
                    onClick={() => setCurrentMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Actions */}
                <div
                  className={`pt-4 mt-4 border-t space-y-3 ${
                    isScrolled ? "border-gray-200" : "border-blue-700/30"
                  }`}
                >
                  {/* Search */}
                  <button
                    className={`flex items-center space-x-3 w-full py-3 px-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      isScrolled
                        ? "text-gray-900 hover:bg-gray-100"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Search className="w-5 h-5" />
                    <span className="font-medium">Search</span>
                  </button>

                  {/* Social Links */}
                  <div className="flex items-center justify-center space-x-4 py-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                          isScrolled
                            ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
                            : "bg-white/10 hover:bg-white/20 text-white"
                        } ${social.color}`}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>

                  {/* Join Button */}
                  <Button
                    className={`w-full transition-all duration-300 ${
                      isScrolled
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        : "bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50"
                    }`}
                    variant={isScrolled ? "default" : "outline"}
                  >
                    Join Now
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
