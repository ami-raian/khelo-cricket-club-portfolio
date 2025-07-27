import Image from "next/image"

export default function MatchGallerySection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">MATCH GALLERY</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="grid gap-4">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Cricket Match"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Cricket Celebration"
              width={400}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div className="grid gap-4">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Cricket Bowling"
              width={400}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Cricket Fielding"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="grid gap-4">
            <Image
              src="/placeholder.svg?height=250&width=400"
              alt="Cricket Stadium"
              width={400}
              height={250}
              className="rounded-lg"
            />
            <Image
              src="/placeholder.svg?height=250&width=400"
              alt="Cricket Wicket Keeping"
              width={400}
              height={250}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
