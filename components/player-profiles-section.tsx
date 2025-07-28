import Image from "next/image";

export default function PlayerProfilesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Player"
              width={200}
              height={200}
              className="rounded-lg mx-auto mb-4"
            />
            <div className="text-4xl font-bold text-yellow-500 mb-2">18</div>
            <h3 className="text-xl font-semibold">VIRAT KOHLI</h3>
            <p className="text-gray-600">Captain</p>
          </div>
          <div className="text-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Player"
              width={200}
              height={200}
              className="rounded-lg mx-auto mb-4"
            />
            <div className="text-4xl font-bold text-yellow-500 mb-2">11</div>
            <h3 className="text-xl font-semibold">MS DHONI</h3>
            <p className="text-gray-600">Wicket Keeper</p>
          </div>
          <div className="text-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Player"
              width={200}
              height={200}
              className="rounded-lg mx-auto mb-4"
            />
            <div className="text-4xl font-bold text-yellow-500 mb-2">09</div>
            <h3 className="text-xl font-semibold">JASPRIT BUMRAH</h3>
            <p className="text-gray-600">Fast Bowler</p>
          </div>
        </div>
      </div>
    </section>
  );
}
