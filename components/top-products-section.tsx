import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function TopProductsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">TOP PRODUCTS</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Cricket Jersey"
                width={200}
                height={200}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">T-SHIRT CREAM PINK</h3>
              <p className="text-yellow-600 font-bold">$29.99</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Cricket Jersey"
                width={200}
                height={200}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">T-SHIRT DARK BLUE</h3>
              <p className="text-yellow-600 font-bold">$34.99</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Cricket Cap"
                width={200}
                height={200}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">SPORTS BACK CAP</h3>
              <p className="text-yellow-600 font-bold">$19.99</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Cricket Jersey"
                width={200}
                height={200}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">T-SHIRT LOL RED</h3>
              <p className="text-yellow-600 font-bold">$24.99</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
