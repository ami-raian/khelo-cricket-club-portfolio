"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Calendar,
  MapPin,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function MatchInfoSection() {
  const youtubeVideos = [
    {
      id: "uYyR56LRSBA",
      title: "Rainbow CC vs Dhakaiya Royal CC | LIVE | 31th Match",
      thumbnail:
        "/placeholder.svg?height=180&width=320&text=Live Match Highlights",
      duration: "2:45",
      views: "12K",
      date: "2 days ago",
    },
    {
      id: "R_COkhDAnFg",
      title: "Cricket Highlights - Epic Match Moments",
      thumbnail: "/placeholder.svg?height=180&width=320&text=Epic Moments",
      duration: "5:23",
      views: "25K",
      date: "1 week ago",
    },
    {
      id: "VIDEO_ID_3",
      title: "SA Sporting Club - Training Session Highlights",
      thumbnail: "/placeholder.svg?height=180&width=320&text=Training Session",
      duration: "3:12",
      views: "8.5K",
      date: "3 days ago",
    },
    {
      id: "VIDEO_ID_4",
      title: "Interview with SA Sporting Club Captain",
      thumbnail: "/placeholder.svg?height=180&width=320&text=Captain Interview",
      duration: "8:45",
      views: "15K",
      date: "5 days ago",
    },
    {
      id: "VIDEO_ID_5",
      title: "Best Wickets from SA Sporting Club Season",
      thumbnail: "/placeholder.svg?height=180&width=320&text=Best Wickets",
      duration: "4:18",
      views: "32K",
      date: "1 week ago",
    },
  ];

  const recentMatches = [
    {
      id: 1,
      venue: "Wankhede Stadium",
      date: "May 15, 2024",
      team1: {
        name: "Chennai Super Kings",
        color: "bg-yellow-500",
        score: "185/6",
      },
      team2: { name: "Mumbai Indians", color: "bg-blue-600", score: "178/8" },
      result: "CSK Won by 7 runs",
      status: "completed",
    },
    {
      id: 2,
      venue: "Eden Gardens",
      date: "May 10, 2024",
      team1: {
        name: "Kolkata Knight Riders",
        color: "bg-purple-600",
        score: "195/4",
      },
      team2: { name: "Delhi Capitals", color: "bg-blue-500", score: "189/7" },
      result: "KKR Won by 6 runs",
      status: "completed",
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
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            MATCH CENTER
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Watch highlights, check recent results, and stay updated with the
            latest cricket action
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-start">
          {/* Video Highlights Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-red-500 to-red-600 rounded-lg">
                <Play className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Match Highlights
              </h3>
            </div>

            <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
              <CardContent className="p-0">
                {/* Main Video Player */}
                <div className="relative">
                  <div className="aspect-video bg-black rounded-t-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${currentVideo.id}?rel=0&modestbranding=1`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>

                  {/* Video Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="text-white font-bold text-lg mb-2">
                      {currentVideo.title}
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {currentVideo.views} views
                      </span>
                      <span>{currentVideo.date}</span>
                      <span className="bg-red-600 px-2 py-1 rounded text-white text-xs">
                        {currentVideo.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Video Navigation */}
                <div className="p-6 bg-gradient-to-r from-slate-800 to-blue-800">
                  <div className="flex items-center gap-4">
                    <Button
                      size="sm"
                      className="bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-full p-2"
                      onClick={handlePrev}
                      aria-label="Previous video"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>

                    <div className="flex-1 overflow-x-auto scrollbar-hide">
                      <div className="flex gap-3">
                        {youtubeVideos.map((video, index) => (
                          <div
                            key={video.id}
                            className={`flex-shrink-0 relative cursor-pointer transition-all duration-300 ${
                              index === currentVideoIndex
                                ? "ring-2 ring-yellow-400 scale-105"
                                : "hover:scale-105 opacity-70 hover:opacity-100"
                            }`}
                            onClick={() => setCurrentVideoIndex(index)}
                          >
                            <div className="w-32 h-20 rounded-lg overflow-hidden bg-gray-800">
                              <Image
                                src={video.thumbnail || "/placeholder.svg"}
                                alt={video.title}
                                width={128}
                                height={80}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                              {video.duration}
                            </div>
                            {index === currentVideoIndex && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                                  <Play className="w-4 h-4 text-white ml-0.5" />
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      size="sm"
                      className="bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-full p-2"
                      onClick={handleNext}
                      aria-label="Next video"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Match Results */}
          {/* <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Recent Results
              </h3>
            </div>

            <div className="space-y-4">
              {recentMatches.map((match, index) => (
                <Card
                  key={match.id}
                  className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group"
                >
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-slate-800 to-blue-800 p-4">
                      <div className="flex items-center justify-between text-sm text-blue-200 mb-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{match.venue}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{match.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-4 h-4 rounded-full ${match.team1.color}`}
                            ></div>
                            <span className="font-semibold text-gray-800">
                              {match.team1.name}
                            </span>
                          </div>
                          <div className="text-lg font-bold text-gray-800">
                            {match.team1.score}
                          </div>
                        </div>

                        <div className="text-center">
                          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            VS
                          </span>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-4 h-4 rounded-full ${match.team2.color}`}
                            ></div>
                            <span className="font-semibold text-gray-800">
                              {match.team2.name}
                            </span>
                          </div>
                          <div className="text-lg font-bold text-gray-800">
                            {match.team2.score}
                          </div>
                        </div>

                        <div className="text-center pt-4 border-t border-gray-200">
                          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                            <Trophy className="w-4 h-4" />
                            {match.result}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center pt-4">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                View All Results
              </Button>
            </div>
          </div> */}
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-0">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {youtubeVideos.length}
            </div>
            <div className="text-gray-600 font-medium">Video Highlights</div>
          </Card>

          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-0">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">
              {recentMatches.length}
            </div>
            <div className="text-gray-600 font-medium">Recent Matches</div>
          </Card>

          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-0">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-2">92K</div>
            <div className="text-gray-600 font-medium">Total Views</div>
          </Card>

          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-0">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-pink-600 mb-2">15</div>
            <div className="text-gray-600 font-medium">Matches This Season</div>
          </Card>
        </div> */}
      </div>
    </section>
  );
}
