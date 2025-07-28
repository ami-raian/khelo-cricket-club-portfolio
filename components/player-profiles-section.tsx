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
      name: "VIRAT KOHLI",
      number: "18",
      position: "Captain & Batsman",
      image: "/sa-sporting-club/img4.jpg",
      stats: {
        matches: 254,
        runs: "12,169",
        average: "52.37",
      },
      description:
        "Former Indian captain and one of the greatest batsmen of all time",
      achievements: [
        "ICC ODI Player of the Year",
        "Padma Shri",
        "Arjuna Award",
      ],
    },
    {
      id: 2,
      name: "MS DHONI",
      number: "07",
      position: "Wicket Keeper",
      image: "/sa-sporting-club/img6.jpg",
      stats: {
        matches: 350,
        runs: "10,773",
        average: "50.57",
      },
      description: "Legendary wicket-keeper and former Indian captain",
      achievements: ["World Cup Winner", "IPL Champion", "Padma Bhushan"],
    },
    {
      id: 3,
      name: "JASPRIT BUMRAH",
      number: "93",
      position: "Fast Bowler",
      image: "/sa-sporting-club/img2.jpg",
      stats: {
        matches: 72,
        wickets: "128",
        average: "24.12",
      },
      description: "Premier fast bowler known for his unique bowling action",
      achievements: [
        "ICC Test Player of the Year",
        "Arjuna Award",
        "Leading Wicket Taker",
      ],
    },
    {
      id: 4,
      name: "ROHIT SHARMA",
      number: "45",
      position: "Opening Batsman",
      image: "/sa-sporting-club/img3.jpg",
      stats: {
        matches: 243,
        runs: "9,825",
        average: "48.96",
      },
      description: "Current Indian captain and explosive opening batsman",
      achievements: [
        "Double Century Record",
        "IPL Champion",
        "Asia Cup Winner",
      ],
    },
    {
      id: 5,
      name: "HARDIK PANDYA",
      number: "33",
      position: "All-Rounder",
      image: "/sa-sporting-club/img4.jpg",
      stats: {
        matches: 66,
        runs: "1,386",
        wickets: "58",
      },
      description:
        "Dynamic all-rounder with explosive batting and bowling skills",
      achievements: ["T20 World Cup Winner", "IPL Champion", "Emerging Player"],
    },
    {
      id: 6,
      name: "KL RAHUL",
      number: "01",
      position: "Wicket Keeper Batsman",
      image: "/sa-sporting-club/img2.jpg",
      stats: {
        matches: 42,
        runs: "2,321",
        average: "45.50",
      },
      description: "Versatile wicket-keeper batsman with elegant stroke play",
      achievements: [
        "Fastest IPL Century",
        "Orange Cap Winner",
        "Test Debut Century",
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
      <div className="container mx-auto px-4">
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
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 shadow-xl rounded-full w-14 h-14 backdrop-blur-sm border-0"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            onClick={handleNext}
            size="lg"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 shadow-xl rounded-full w-14 h-14 backdrop-blur-sm border-0"
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
                className={`group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm transform hover:scale-105 ${
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
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
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
        </div>
      </div>
    </section>
  );
}
