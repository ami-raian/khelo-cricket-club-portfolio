"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
  Trophy,
  Users,
  Calendar,
  Send,
} from "lucide-react";

export default function Footer() {
  const footerImages = [
    {
      icon: "/placeholder.svg?height=80&width=120&text=BCB Logo",
      name: "Bangladesh Cricket Board",
    },
    {
      icon: "/placeholder.svg?height=80&width=120&text=Sponsor 1",
      name: "Main Sponsor",
    },
    {
      icon: "/placeholder.svg?height=80&width=120&text=Sponsor 2",
      name: "Official Partner",
    },
    {
      icon: "/placeholder.svg?height=80&width=120&text=Sponsor 3",
      name: "Equipment Partner",
    },
    {
      icon: "/placeholder.svg?height=80&width=120&text=Sponsor 4",
      name: "Media Partner",
    },
    {
      icon: "/placeholder.svg?height=80&width=120&text=Sponsor 5",
      name: "Training Partner",
    },
    {
      icon: "/placeholder.svg?height=80&width=120&text=SA Club",
      name: "SA Sporting Club",
    },
    {
      icon: "/placeholder.svg?height=80&width=120&text=League Logo",
      name: "Premier League",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Players", href: "#players" },
    { name: "Matches", href: "#matches" },
    { name: "Gallery", href: "#gallery" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
    { name: "Membership", href: "#membership" },
  ];

  const matchInfo = [
    { name: "Fixtures", href: "#fixtures" },
    { name: "Results", href: "#results" },
    { name: "Point Table", href: "#table" },
    { name: "Live Scores", href: "#live" },
    { name: "Statistics", href: "#stats" },
    { name: "Match Center", href: "#center" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { icon: Twitter, href: "#", color: "hover:text-sky-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Youtube, href: "#", color: "hover:text-red-500" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=Cricket Pattern')] bg-repeat opacity-20"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="container mx-auto py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Club Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    SA SPORTING CLUB
                  </h3>
                  <p className="text-sm text-gray-300">Excellence in Cricket</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                SA Sporting Club is a premier cricket organization dedicated to
                developing talent, promoting sportsmanship, and achieving
                excellence in competitive cricket across all levels.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  <span>Founded in 2010</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Users className="w-4 h-4 text-yellow-400" />
                  <span>50+ Active Players</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-4 h-4 text-yellow-400" />
                  <span>15+ Championships Won</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 duration-200 text-sm py-1 hover:translate-x-1 transform transition-transform"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Match Information */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-4">
                Match Center
              </h4>
              <div className="space-y-2">
                {matchInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block text-gray-300 hover:text-yellow-400 duration-200 text-sm py-1 hover:translate-x-1 transform transition-transform"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Next Match Info */}
              <Card className="bg-gradient-to-r from-blue-800/50 to-purple-800/50 border-blue-700/50 p-4 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-xs text-blue-200 mb-1">Next Match</div>
                  <div className="text-sm font-semibold text-white mb-2">
                    SA Club vs Royal CC
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-300">
                    <Calendar className="w-3 h-3" />
                    <span>Dec 15, 2024</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-4">
                Get In Touch
              </h4>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>SA Sporting Club Ground</p>
                    <p>Mohammedpur, Dhaka, Bangladesh</p>
                    <p>Bangladesh - 1000</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-gray-300">
                    +880 1730-433773
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-gray-300">
                    sasporting.club@gmail.com
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-gray-300">
                    Mon-Sat: 6:00 AM - 8:00 PM
                  </span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h5 className="font-semibold text-white">Stay Updated</h5>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-yellow-400"
                  />
                  <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-4">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-3">
                <h5 className="font-semibold text-white">Follow Us</h5>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsors Section */}
        {/* <div className="border-t border-white/10">
          <div className="container mx-auto py-12">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-white mb-2">
                Our Partners & Sponsors
              </h4>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
              {footerImages.map((image, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-20 h-16 flex items-center justify-center mb-2">
                    <Image
                      src={image.icon || "/placeholder.svg"}
                      alt={image.name}
                      width={80}
                      height={64}
                      className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <span className="text-xs text-gray-400 text-center group-hover:text-gray-300 transition-colors">
                    {image.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-300">
                  © 2025 SA SPORTING CLUB. All rights reserved.
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Designed with ❤️ for cricket enthusiasts
                </p>
              </div>

              <div className="flex gap-6 text-xs text-gray-400">
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
