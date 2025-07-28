import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function WhoWeAreSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 text-white overflow-hidden">
      {/* Background Image with Overlay for better text readability */}
      <div className="absolute inset-0 bg-[url('/header-full-image.png')] bg-cover bg-center bg-no-repeat"></div>

      <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[500px]">
        {/* Left Content Area */}
        <div className="space-y-6 text-center lg:text-left">
          <p className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            OUR CRICKET JOURNEY
          </p>
          <div className="space-y-4 text-gray-200 text-lg">
            <p>
              At the heart of our club lies an unwavering passion for cricket.
              From the roar of the crowd to the thrill of a perfectly timed
              shot, we live and breathe the game. Our journey began with a
              simple goal: to foster a community where every player, regardless
              of skill level, can thrive and share in the joy of cricket.
            </p>
            <p>
              We believe in the spirit of sportsmanship, dedication, and
              continuous improvement. Our training programs are designed to hone
              skills, build resilience, and cultivate a deep understanding of
              the game's nuances. We celebrate every victory, learn from every
              challenge, and always strive for excellence on and off the field.
            </p>
            <p>
              Beyond the boundaries, we are a family. We support each other,
              push each other to be better, and create lasting memories. Join us
              as we continue to write our story, one match, one wicket, and one
              unforgettable moment at a time. Experience the true essence of
              cricket with us.
            </p>
          </div>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            EXPLORE OUR LEGACY
          </Button>
        </div>

        {/* Right Image Area with subtle animation */}
        <div className="relative flex justify-center items-center h-[400px] md:h-[500px] lg:h-[600px] mt-8 lg:mt-0">
          <div className="relative w-full h-full max-w-[600px] max-h-[600px]">
            <Image
              src="/latest-news.jpg"
              alt="Cricket player hitting a shot"
              width={600}
              height={450}
              className="rounded-xl shadow-2xl object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
            />
            <Image
              src="/card-image1.jpg"
              alt="Cricket stadium with crowd"
              width={400}
              height={300}
              className="rounded-xl shadow-2xl object-cover absolute -bottom-8 -right-8 md:-bottom-16 md:-right-16 lg:-bottom-12 lg:-right-12 w-[60%] h-[60%] border-4 border-white transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
