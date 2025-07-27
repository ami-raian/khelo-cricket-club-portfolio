import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">SUBSCRIBE OUR NEWSLETTER</h2>
        <p className="text-blue-200 mb-8">Subscribe to our newsletter for getting regular updates.</p>
        <div className="flex max-w-md mx-auto">
          <Input type="email" placeholder="Your email..." className="flex-1 bg-white text-black" />
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8">SUBSCRIBE</Button>
        </div>
      </div>
    </section>
  )
}
