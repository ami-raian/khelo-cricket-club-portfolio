import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function MatchInfoSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upcoming Match */}
          <Card className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-6">Upcoming Match</h3>
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">452</div>
                  <div className="text-sm">DAYS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">5</div>
                  <div className="text-sm">HOURS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">28</div>
                  <div className="text-sm">MINUTES</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">40</div>
                  <div className="text-sm">SECONDS</div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-2"></div>
                  <div className="font-semibold">Mumbai</div>
                </div>
                <div className="text-2xl font-bold">VS</div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                  <div className="font-semibold">Chennai</div>
                </div>
              </div>
              <div className="text-sm text-blue-200">
                <div>Wankhede Stadium | October 25, 2024</div>
                <div className="font-semibold text-lg mt-2">19:00:00</div>
              </div>
            </div>
          </Card>

          {/* Last Match Highlights */}
          <Card className="bg-gradient-to-br from-blue-800 to-blue-600 text-white p-8 relative">
            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center">
                <Button size="lg" className="bg-white/20 hover:bg-white/30 rounded-full w-16 h-16 mb-4">
                  <Play className="w-8 h-8" />
                </Button>
                <h3 className="text-xl font-semibold">Last Match Highlights</h3>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Match Results */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
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
              <div className="text-sm text-blue-200 mb-2">M. Chinnaswamy Stadium</div>
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
  )
}
