import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function NewsAndTableSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Latest News */}
          <div>
            <h2 className="text-3xl font-bold mb-8">LATEST NEWS</h2>
            <div className="space-y-6">
              <Card className="overflow-hidden">
                <Image
                  src="/latest-news.jpg"
                  alt="Cricket News"
                  width={500}
                  height={300}
                  className="w-full h-72 object-cover"
                />
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">May 20, 2024</div>
                  <h3 className="text-xl font-semibold mb-2">
                    Latest Point Table For The IPL Championship
                  </h3>
                  <p className="text-gray-600">
                    The season is at its peak as we move into the final stages
                    and look to achieve glory...
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="overflow-hidden">
                  <Image
                    src="/card-image1.jpg"
                    alt="Cricket Team"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                  <CardContent className="p-4">
                    <div className="text-xs text-gray-500 mb-1">
                      May 18, 2024
                    </div>
                    <h4 className="text-sm font-semibold">
                      Everything in Cricket Starts The Premier League
                    </h4>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <Image
                    src="/card-image1.jpg"
                    alt="Cricket Stadium"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                  <CardContent className="p-4">
                    <div className="text-xs text-gray-500 mb-1">
                      May 16, 2024
                    </div>
                    <h4 className="text-sm font-semibold">
                      City Tops Chennai in Community Shield Hero
                    </h4>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <Image
                    src="/card-image1.jpg"
                    alt="Cricket Match"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                  <CardContent className="p-4">
                    <div className="text-xs text-gray-500 mb-1">
                      May 14, 2024
                    </div>
                    <h4 className="text-sm font-semibold">
                      Ground Round Baseball Stars Right Here
                    </h4>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Point Table & Match Fixtures */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-8">POINT TABLE</h2>
              <Card className="bg-gradient-to-br from-blue-900 to-blue-700 text-white">
                <CardContent className="p-0">
                  <div className="bg-blue-800 px-6 py-3 flex justify-between text-sm font-semibold">
                    <span>Team</span>
                    <div className="flex space-x-8">
                      <span>W</span>
                      <span>L</span>
                      <span>PTS</span>
                    </div>
                  </div>
                  <div className="divide-y divide-blue-600">
                    {[
                      { name: "Mumbai Indians", w: 26, l: 3, pts: 83 },
                      { name: "Chennai Super Kings", w: 24, l: 5, pts: 80 },
                      { name: "Royal Challengers", w: 20, l: 9, pts: 79 },
                      { name: "Kolkata Knight Riders", w: 22, l: 7, pts: 75 },
                      { name: "Delhi Capitals", w: 22, l: 7, pts: 76 },
                      { name: "Rajasthan Royals", w: 19, l: 10, pts: 71 },
                      { name: "Punjab Kings", w: 18, l: 11, pts: 64 },
                      { name: "Sunrisers Hyderabad", w: 15, l: 14, pts: 56 },
                      { name: "Gujarat Titans", w: 12, l: 17, pts: 48 },
                      { name: "Lucknow Super Giants", w: 10, l: 19, pts: 43 },
                    ].map((team, index) => (
                      <div
                        key={index}
                        className="px-6 py-3 flex justify-between items-center"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-yellow-400 font-bold">
                            {index + 1}
                          </span>
                          <span>{team.name}</span>
                        </div>
                        <div className="flex space-x-8 text-sm">
                          <span>{team.w}</span>
                          <span>{team.l}</span>
                          <span className="font-bold">{team.pts}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">MATCH FIXTURES</h2>
              <Card className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6">
                <div className="text-center">
                  <div className="text-sm text-blue-200 mb-2">
                    April 14, 2024
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                      <span>Mumbai</span>
                    </div>
                    <div className="text-2xl font-bold">00:00</div>
                    <div className="flex items-center space-x-2">
                      <span>Chennai</span>
                      <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-sm text-blue-200">
                    Venue: Old Trafford Stadium
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
