import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white relative overflow-hidden min-h-[600px]">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to Khelo
              <br />
              <span className="text-yellow-400">CRICKET CLUB</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-lg">
              We dominate with righteous integration and divine men who are so inspired and dominated by the charm of
              pleasure of the moment.
            </p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 text-lg">
              BOOK A TICKET
            </Button>
          </div>
          <div className="relative">
            <div className="absolute top-10 right-10 w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-red-600 rounded-full"></div>
            </div>
            <Image
              src="/placeholder.svg?height=500&width=400"
              alt="Cricket Player"
              width={400}
              height={500}
              className="relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
