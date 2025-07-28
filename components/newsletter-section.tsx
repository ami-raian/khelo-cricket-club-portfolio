import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  return (
    <section className="py-6 bg-[url('/images/image1.jpg')] bg-cover bg-center bg-no-repeat text-white max-w-5xl mx-auto rounded-lg translate-y-20 relative overflow-hidden">
      {/* Applying the blur effect to the background */}
      <div className="absolute inset-0 bg-black opacity-50 filter blur-sm z-0"></div>

      <div className="container mx-auto text-center relative z-10">
        <p className="text-3xl font-bold">SUBSCRIBE OUR NEWSLETTER</p>

        <div className="flex max-w-md mx-auto mt-4">
          <Input
            type="email"
            placeholder="Your email..."
            className="flex-1 bg-white text-black"
          />
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 ml-4">
            SUBSCRIBE
          </Button>
        </div>
      </div>
    </section>
  );
}
