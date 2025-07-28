"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, X, Calendar, MapPin } from "lucide-react";

export default function NewsAndTableSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const newsItems = [
    {
      id: 1,
      image: "/news-images/news.jpg",
      date: "March 30, 2022",
      title: "Independence Cup 2022 | SA Sporting Club | ACE",
      description:
        "SA Sporting Club advances to the Independence Cup 2022 finals after a spectacular victory against ACE. Our team showcased exceptional batting and bowling performances, with key players delivering under pressure. The championship final promises to be an epic showdown as we aim to bring home the prestigious Independence Cup trophy.",
    },
    {
      id: 2,
      image: "/news-images/news1.jpg",
      date: "March 29, 2022",
      title: "Independence Cup 2022 | SA Sporting Club | ACE",
    },
    {
      id: 3,
      image: "/news-images/news2.jpg",
      date: "March 28, 2022",
      title: "Independence Cup 2022 | SA Sporting Club | ACE",
    },
    {
      id: 4,
      image: "/news-images/news3.jpg",
      date: "March 27, 2022",
      title: "Independence Cup 2022 | SA Sporting Club | ACE",
    },
    {
      id: 5,
      image: "/news-images/news4.jpg",
      date: "March 25, 2022",
      title: "Siddiqui Group vs Brac Bank | Independence Cup 2022",
    },
    {
      id: 6,
      image: "/news-images/news5.jpg",
      date: "March 20, 2022",
      title: "Independence Cup 2022 | SA Sporting Club | ACE",
    },
  ];

  const pointsTable = [
    { name: "Mumbai Indians", w: 26, l: 3, pts: 83, color: "bg-blue-600" },
    {
      name: "Chennai Super Kings",
      w: 24,
      l: 5,
      pts: 80,
      color: "bg-yellow-500",
    },
    { name: "Royal Challengers", w: 20, l: 9, pts: 79, color: "bg-red-600" },
    {
      name: "Kolkata Knight Riders",
      w: 22,
      l: 7,
      pts: 75,
      color: "bg-purple-600",
    },
    { name: "Delhi Capitals", w: 22, l: 7, pts: 76, color: "bg-blue-500" },
    { name: "Rajasthan Royals", w: 19, l: 10, pts: 71, color: "bg-pink-600" },
    { name: "Punjab Kings", w: 18, l: 11, pts: 64, color: "bg-red-500" },
    {
      name: "Sunrisers Hyderabad",
      w: 15,
      l: 14,
      pts: 56,
      color: "bg-orange-600",
    },
    { name: "Gujarat Titans", w: 12, l: 17, pts: 48, color: "bg-blue-700" },
    {
      name: "Lucknow Super Giants",
      w: 10,
      l: 19,
      pts: 43,
      color: "bg-cyan-600",
    },
  ];

  const ImageWithHover = ({
    src,
    alt,
    width,
    height,
    className,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  }) => (
    <div className="relative group overflow-hidden rounded-lg">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`transition-all duration-300 group-hover:blur-sm group-hover:scale-105 ${className}`}
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
        <Button
          onClick={() => setSelectedImage(src)}
          size="sm"
          className="bg-white/90 text-black hover:bg-white transform scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg"
        >
          <Eye className="w-4 h-4 mr-2" />
          View
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-1 gap-8 lg:gap-12 xl:gap-16">
            {/* Latest News */}
            <div className="space-y-6 lg:space-y-8">
              <div className="text-center xl:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  LATEST NEWS
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto xl:mx-0"></div>
              </div>

              <div className="space-y-6 lg:space-y-8">
                {/* Featured News */}
                <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <ImageWithHover
                    src={newsItems[0].image || "/placeholder.svg"}
                    alt="Cricket News"
                    width={500}
                    height={300}
                    className="w-full h-48 sm:h-56 lg:h-72 object-cover"
                  />
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center text-xs sm:text-sm text-blue-600 mb-2 sm:mb-3 font-medium">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      {newsItems[0].date}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 text-gray-800 hover:text-blue-600 transition-colors cursor-pointer leading-tight">
                      {newsItems[0].title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                      {newsItems[0].description}
                    </p>
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base">
                      Read More
                    </Button>
                  </CardContent>
                </Card>

                {/* News Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {newsItems.slice(1).map((item) => (
                    <Card
                      key={item.id}
                      className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group"
                    >
                      <ImageWithHover
                        src={item.image || "/placeholder.svg"}
                        alt="Cricket News"
                        width={300}
                        height={200}
                        className="w-full h-32 sm:h-36 lg:h-40 object-cover"
                      />
                      <CardContent className="p-3 sm:p-4 lg:p-6">
                        <div className="flex items-center text-xs text-blue-600 mb-1 sm:mb-2 font-medium">
                          <Calendar className="w-3 h-3 mr-1" />
                          {item.date}
                        </div>
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors leading-tight">
                          {item.title}
                        </h4>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Point Table & Match Fixtures */}
            {/* <div className="space-y-8 lg:space-y-12">
              <div>
                <div className="text-center xl:text-left mb-6 lg:mb-8">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    POINT TABLE
                  </h2>
                  <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto xl:mx-0"></div>
                </div>

                <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-blue-800 to-purple-800 px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
                      <div className="flex justify-between text-xs sm:text-sm font-bold text-white">
                        <span className="flex-1">TEAM</span>
                        <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 text-center">
                          <span className="w-6 sm:w-8">W</span>
                          <span className="w-6 sm:w-8">L</span>
                          <span className="w-8 sm:w-12">PTS</span>
                        </div>
                      </div>
                    </div>

                    <div className="divide-y divide-slate-700">
                      {pointsTable.map((team, index) => (
                        <div
                          key={index}
                          className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 hover:bg-slate-800/50 transition-all duration-200 group"
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 flex-1 min-w-0">
                              <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xs sm:text-sm flex-shrink-0">
                                {index + 1}
                              </div>
                              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                                <div
                                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${team.color} flex-shrink-0`}
                                ></div>
                                <span className="text-white font-medium group-hover:text-blue-300 transition-colors text-xs sm:text-sm lg:text-base truncate">
                                  {team.name}
                                </span>
                              </div>
                            </div>
                            <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 text-xs sm:text-sm text-gray-300 flex-shrink-0">
                              <span className="w-6 sm:w-8 text-center font-semibold">
                                {team.w}
                              </span>
                              <span className="w-6 sm:w-8 text-center font-semibold">
                                {team.l}
                              </span>
                              <span className="w-8 sm:w-12 text-center font-bold text-yellow-400">
                                {team.pts}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <div className="text-center xl:text-left mb-6 lg:mb-8">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    MATCH FIXTURES
                  </h2>
                  <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto xl:mx-0"></div>
                </div>

                <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="text-center space-y-4 sm:space-y-6">
                      <div className="flex items-center justify-center text-xs sm:text-sm text-blue-300 font-medium">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        April 14, 2024
                      </div>

                      <div className="flex items-center justify-between gap-2 sm:gap-4">
                        <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                            <span className="text-white font-bold text-xs sm:text-sm">
                              MI
                            </span>
                          </div>
                          <div className="text-white font-bold text-sm sm:text-base lg:text-lg truncate">
                            Mumbai
                          </div>
                        </div>

                        <div className="text-center px-2 sm:px-4 lg:px-6 flex-shrink-0">
                          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-1">
                            00:00
                          </div>
                          <div className="text-xs text-blue-300 uppercase tracking-wider">
                            Match Time
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 sm:space-x-3 flex-1 justify-end min-w-0">
                          <div className="text-white font-bold text-sm sm:text-base lg:text-lg truncate">
                            Chennai
                          </div>
                          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                            <span className="text-white font-bold text-xs sm:text-sm">
                              CSK
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center text-xs sm:text-sm text-blue-300 pt-3 sm:pt-4 border-t border-slate-700">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                        <span className="truncate">Old Trafford Stadium</span>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 sm:py-3 text-sm sm:text-base">
                        View Match Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="relative max-w-7xl max-h-full w-full">
            <Button
              onClick={() => setSelectedImage(null)}
              size="sm"
              className="absolute -top-8 sm:-top-12 right-0 bg-white/10 hover:bg-white/20 text-white border-white/20 z-10"
            >
              <X className="w-4 h-4" />
            </Button>
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Full screen view"
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
