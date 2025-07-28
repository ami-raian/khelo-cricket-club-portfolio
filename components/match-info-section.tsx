"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function MatchInfoSection() {
  const youtubeVideos = [
    {
      id: "uYyR56LRSBA", // From SA SPORTING CLUB: Rainbow CC vs Dhakaiya Royal CC
      title: "Rainbow CC vs Dhakaiya Royal CC | LIVE | 31th Match",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: "R_COkhDAnFg", // From previous request: Cricket Highlights - Epic Match Moments
      title: "Cricket Highlights - Epic Match Moments",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: "VIDEO_ID_3", // Placeholder for another video from the channel
      title: "SA Sporting Club - Training Session Highlights",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: "VIDEO_ID_4", // Placeholder for another video from the channel
      title: "Interview with SA Sporting Club Captain",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: "VIDEO_ID_5", // Placeholder for another video from the channel
      title: "Best Wickets from SA Sporting Club Season",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handlePrev = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? youtubeVideos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === youtubeVideos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentVideo = youtubeVideos[currentVideoIndex];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto flex basis-[100%] items-center justify-between gap-8 ">
        <div className="basis-[50%]">
          {/* Last Match Highlights Carousel */}
          <Card className="bg-gradient-to-br from-blue-800 to-blue-600 text-white p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <div className="w-full aspect-video mb-4 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${currentVideo.id}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {currentVideo.title}
              </h3>

              {/* Carousel Navigation */}
              <div className="flex items-center justify-center gap-4 w-full">
                <Button
                  size="icon"
                  className="bg-white/20 hover:bg-white/30 rounded-full"
                  onClick={handlePrev}
                  aria-label="Previous video"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <div className="flex-1 overflow-x-auto scrollbar-hide">
                  <div className="flex gap-4 py-2">
                    {youtubeVideos.map((video, index) => (
                      <div
                        key={video.id}
                        className={`flex-shrink-0 w-32 h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${
                          index === currentVideoIndex
                            ? "border-yellow-400"
                            : "border-transparent"
                        }`}
                        onClick={() => setCurrentVideoIndex(index)}
                      >
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          width={128}
                          height={72}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  size="icon"
                  className="bg-white/20 hover:bg-white/30 rounded-full"
                  onClick={handleNext}
                  aria-label="Next video"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Match Results */}
        <div className="flex flex-col gap-6 basis-[50%] h-full w-full">
          <Card className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6">
            <div className="text-center">
              <div className="text-sm text-blue-200 mb-2">Wankhede Stadium</div>
              <div className="text-sm text-blue-200 mb-4">May 15, 2024</div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                  <span>Chennai</span>
                </div>
                <div className="text-2xl font-bold">2-2</div>
                <div className="flex items-center space-x-2">
                  <span>Mumbai</span>
                  <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6">
            <div className="text-center">
              <div className="text-sm text-blue-200 mb-2">Eden Gardens</div>
              <div className="text-sm text-blue-200 mb-4">May 10, 2024</div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                  <span>Kolkata</span>
                </div>
                <div className="text-2xl font-bold">3-2</div>
                <div className="flex items-center space-x-2">
                  <span>Delhi</span>
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6">
            <div className="text-center">
              <div className="text-sm text-blue-200 mb-2">
                M. Chinnaswamy Stadium
              </div>
              <div className="text-sm text-blue-200 mb-4">April 28, 2024</div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                  <span>Bangalore</span>
                </div>
                <div className="text-2xl font-bold">3-2</div>
                <div className="flex items-center space-x-2">
                  <span>Hyderabad</span>
                  <div className="w-8 h-8 bg-orange-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
