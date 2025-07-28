import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full bg-[url('/header-full-image.png')] bg-cover bg-center opacity-100 text-white overflow-hidden h-fit">
      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div> */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="flex basis-[100%] items-center justify-start text-left container mx-auto pt-20 px-4 lg:px-0">
          <div className="space-y-4 2xl:space-y-6 basis-[40%]">
            <p className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold leading-tight">
              Welcome to
            </p>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold">
              <span className="text-yellow-400"> SA SPORTING</span> CLUB
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
              height={891}
              className="z-10 h-[600px] lg:h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
