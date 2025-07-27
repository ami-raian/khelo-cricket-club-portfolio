import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="h-screen w-full bg-[url('/header-full-image.png')] bg-cover bg-center opacity-100 text-white relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
      <div className="px-4 relative z-10 flex items-center justify-center h-full">
        <div className="flex basis-[100%] items-center justify-start text-left">
          <div className="space-y-8 basis-[40%] ml-44">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight space-y-6">
              Welcome to
              <br />
              <p className="text-5xl lg:text-6xl font-extrabold">
                <span className="text-yellow-400"> SA SPORTING</span> CLUB
              </p>
            </h1>
            <p className="text-xl text-blue-100 max-w-lg">
              We dominate with righteous integration and divine men who are so
              inspired and dominated by the charm of pleasure of the moment.
            </p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold p-8 text-xl">
              BOOK A TICKET
            </Button>
          </div>

          <div className="flex justify-center basis-[60%]">
            <Image
              src="/hero-image.png"
              alt="Cricket Player"
              width={1200}
              height={1400}
              className="z-10 absolute bottom-0 right-0 h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
