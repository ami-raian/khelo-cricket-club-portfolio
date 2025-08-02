import { Trophy } from "lucide-react";

export default function ChampionAwardsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          CHAMPION AWARDS
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">IPL CHAMPIONSHIP</h3>
            <div className="text-3xl font-bold text-yellow-400">05</div>
          </div>
          <div className="text-center">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">WORLD CUP</h3>
            <div className="text-3xl font-bold text-yellow-400">07</div>
          </div>
          <div className="text-center">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">T20 WORLD CUP</h3>
            <div className="text-3xl font-bold text-yellow-400">06</div>
          </div>
          <div className="text-center">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">CHAMPIONS TROPHY</h3>
            <div className="text-3xl font-bold text-yellow-400">03</div>
          </div>
        </div>
      </div>
    </section>
  );
}
