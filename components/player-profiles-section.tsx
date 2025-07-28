"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Award, Target } from "lucide-react";

export default function PlayerProfilesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const players = [
    {
      id: 1,
      name: "SHAKIB AL HASAN",
      number: "75",
      position: "All-Rounder",
      image: "/sa-sporting-club/img4.jpg",
      stats: {
        matches: 250,
        runs: "6,400",
        average: "36.70",
      },
      description: "The best all-rounder in Bangladesh cricket history",
      achievements: [
        "ICC Player of the Year",
        "Bangladesh's All-Time Highest Wicket-Taker",
        "World Cup Hero",
      ],
    },
    {
      id: 2,
      name: "MUSHFIQUR RAHIM",
      number: "15",
      position: "Wicket Keeper & Batsman",
      image: "/sa-sporting-club/img6.jpg",
      stats: {
        matches: 200,
        runs: "7,000",
        average: "39.50",
      },
      description: "The backbone of Bangladesh's middle order",
      achievements: [
        "Bangladesh's Most Capped Player",
        "World Cup Semi-Finalist",
      ],
    },
    {
      id: 3,
      name: "TAMIM IQBAL",
      number: "3",
      position: "Opening Batsman",
      image: "/sa-sporting-club/img2.jpg",
      stats: {
        matches: 220,
        runs: "8,000",
        average: "41.12",
      },
      description: "Bangladesh's top run-scorer in ODIs and Test cricket",
      achievements: [
        "Bangladesh's Leading Run Scorer",
        "First Bangladeshi to score a World Cup century",
      ],
    },
    {
      id: 4,
      name: "RIKELME BACHHAP",
      number: "10",
      position: "Batting Allrounder",
      image: "/sa-sporting-club/img3.jpg",
      stats: {
        matches: 215,
        runs: "3,850",
        average: "24.91",
      },
      description: "Bangladesh's versatile all-rounder with flair for big hits",
      achievements: [
        "Asia Cup Winner",
        "First Bangladeshi to take a hat-trick in an ODI",
      ],
    },
    {
      id: 5,
      name: "RIADH HOSSAIN",
      number: "14",
      position: "Batting Allrounder",
      image: "/sa-sporting-club/img4.jpg",
      stats: {
        matches: 75,
        runs: "2,400",
        average: "33.45",
      },
      description:
        "All-rounder with explosive batting and handy bowling skills",
      achievements: ["T20 World Cup Winner", "IPL Player of the Year"],
    },
    {
      id: 6,
      name: "NAFIS IQBAL",
      number: "28",
      position: "Bowler",
      image: "/sa-sporting-club/img5.jpg",
      stats: {
        matches: 118,
        wickets: "132",
        average: "28.36",
      },
      description:
        "Leading bowler for Bangladesh with his aggressive pace attack",
      achievements: [
        "Fastest Bangladeshi Bowler to 100 wickets",
        "Asia Cup Best Bowler",
      ],
    },
    {
      id: 7,
      name: "SABIR HOSSAIN",
      number: "19",
      position: "All-Rounder",
      image: "/sa-sporting-club/img6.jpg",
      stats: {
        matches: 90,
        runs: "2,700",
        wickets: "80",
        average: "33.50",
      },
      description:
        "An all-rounder who delivers crucial performances in pressure situations",
      achievements: [
        "Man of the Match in the 2018 Asia Cup Final",
        "Leading Wicket-Taker in T20I",
      ],
    },
    {
      id: 8,
      name: "MUSTAFIZUR RAHMAN",
      number: "8",
      position: "Fast Bowler",
      image: "/sa-sporting-club/img2.jpg",
      stats: {
        matches: 100,
        wickets: "140",
        average: "22.05",
      },
      description: "Bangladesh's death-over specialist with a deadly yorker",
      achievements: [
        "ICC Emerging Player of the Year",
        "Bangladesh's Best Bowler in ICC T20 World Cup",
      ],
    },
    {
      id: 9,
      name: "SHEIKH MAHADI HASAN",
      number: "22",
      position: "All-Rounder",
      image: "/sa-sporting-club/img5.jpg",
      stats: {
        matches: 120,
        runs: "1,800",
        average: "25.25",
      },
      description:
        "All-rounder who brings energy to both batting and bowling departments",
      achievements: [
        "ICC T20 World Cup Player of the Tournament",
        "Bangladesh's Best Debutant",
      ],
    },
    {
      id: 10,
      name: "MOHAMMED SAIFUDDIN",
      number: "27",
      position: "Bowler & All-Rounder",
      image: "/sa-sporting-club/img4.jpg",
      stats: {
        matches: 80,
        runs: "1,200",
        wickets: "65",
        average: "26.40",
      },
      description:
        "Bowler and all-rounder known for his stunning match-winning performances",
      achievements: [
        "Player of the Series in 2019 ODI Series vs West Indies",
        "First Bangladeshi to hit a six off the last ball to win a match",
      ],
    },
    {
      id: 11,
      name: "SABIR ISLAM",
      number: "21",
      position: "Batsman",
      image: "/sa-sporting-club/img3.jpg",
      stats: {
        matches: 90,
        runs: "3,250",
        average: "38.77",
      },
      description:
        "Bangladesh's elegant middle-order batsman with solid technique",
      achievements: [
        "Top Scorer in Bangladesh's 2020 World Cup Campaign",
        "Highest Runs in a Domestic T20 Tournament",
      ],
    },
  ];

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % players.length);
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [isAutoPlaying, players.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? players.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % players.length);
  };

  const getVisiblePlayers = () => {
    const visibleCount = 3;
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % players.length;
      result.push({ ...players[index], displayIndex: i });
    }
    return result;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            STAR PLAYERS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Meet our exceptional team of cricket stars who bring passion, skill,
            and dedication to every match
          </p>
        </div>

        {/* Player Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            onClick={handlePrevious}
            size="lg"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-gray-200 text-gray-800 shadow-xl rounded-full w-14 h-14 backdrop-blur-sm border-0"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            onClick={handleNext}
            size="lg"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-gray-200 text-gray-800 shadow-xl rounded-full w-14 h-14 backdrop-blur-sm border-0"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Player Cards */}
          <div className="grid md:grid-cols-3 gap-8 px-16">
            {getVisiblePlayers().map((player, index) => (
              <Card
                key={`${player.id}-${currentIndex}`}
                className={`group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm transform hover:scale-100 ${
                  index === 1 ? "md:scale-110 z-10" : "md:scale-95"
                }`}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <CardContent className="p-0">
                  {/* Player Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={player.image || "/placeholder.svg"}
                      alt={player.name}
                      width={300}
                      height={400}
                      className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-110"
                    />

                    {/* Jersey Number */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">
                        {player.number}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-3">
                          <Star className="w-5 h-5 text-yellow-400" />
                          <span className="text-sm font-medium">
                            {player.position}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold mb-2">
                          {player.name}
                        </h3>

                        <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                          {player.description}
                        </p>

                        {/* Player Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-yellow-400">
                              {player.stats.matches}
                            </div>
                            <div className="text-xs text-gray-300">Matches</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-yellow-400">
                              {player.stats.runs || player.stats.wickets}
                            </div>
                            <div className="text-xs text-gray-300">
                              {player.stats.runs ? "Runs" : "Wickets"}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-yellow-400">
                              {player.stats.average}
                            </div>
                            <div className="text-xs text-gray-300">Average</div>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="flex flex-wrap gap-1">
                          {player.achievements
                            .slice(0, 2)
                            .map((achievement, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-blue-600/80 text-white px-2 py-1 rounded-full backdrop-blur-sm"
                              >
                                {achievement}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Basic Info (Always Visible) */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {player.name}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {player.position}
                    </p>

                    {/* Achievement Icons */}
                    <div className="flex justify-center gap-2 mt-3">
                      <div className="p-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <div className="p-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {players.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Team Stats */}
        {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-0">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {players.length}
            </div>
            <div className="text-gray-600 font-medium">Star Players</div>
          </Card>

          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-0">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
            <div className="text-gray-600 font-medium">Championships</div>
          </Card>

          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-0">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Matches Played</div>
          </Card>

          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-0">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-pink-600 mb-2">95%</div>
            <div className="text-gray-600 font-medium">Win Rate</div>
          </Card>
        </div> */}
      </div>
    </section>
  );
}
