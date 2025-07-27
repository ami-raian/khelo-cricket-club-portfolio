import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function WhoWeAreSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">WHO WE ARE</h2>
            <div className="space-y-4 text-blue-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur venenatis blandit. Praesent
                vehicula, libero non pretium vulputate, lacus arcu sagittis ligula, non pretium ante quam non massa.
                Aliquam erat volutpat. Morbi imperdiet, mauris ac auctor dictum.
              </p>
              <p>
                Nulla enim arcu, cursus quis, eleifend vitae, congue ut nulla. Duis posuere augue vel cursus pharetra.
                In luctus a, lorem ut faucibus. Aliquam erat volutpat. Morbi imperdiet, mauris ac auctor dictum, nisl
                ligula egestas nulla.
              </p>
              <p>
                Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi
                purus libero, faucibus adipiscing, commodo quis, avida id, est. Sed lectus. Praesent elementum hendrerit
                tortor.
              </p>
            </div>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 mt-6">
              READ MORE
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Cricket Action"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
