"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
} from "lucide-react";

export default function MatchGallerySection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const images = [
    {
      id: 1,
      src: "/sa-sporting-club-logo.jpg",
      alt: "Cricket Match Action Shot 1",
      title: "Championship Final - Winning Moment",
      description:
        "The decisive moment when Mumbai Indians secured their victory",
    },
    {
      id: 2,
      src: "/group-images/groupImage1.jpg",
      alt: "Cricket Match Action Shot 2",
      title: "Perfect Bowling Delivery",
      description: "An incredible yorker that changed the game's momentum",
    },
    {
      id: 3,
      src: "/sa-sporting-club/img1.jpg",
      alt: "Cricket Match Action Shot 3",
      title: "Spectacular Catch",
      description: "One of the best catches of the tournament",
    },
    {
      id: 4,
      src: "/sa-sporting-club/img2.jpg",
      alt: "Cricket Match Action Shot 4",
      title: "Century Celebration",
      description: "Player celebrating after scoring a magnificent century",
    },
    {
      id: 5,
      src: "/group-images/groupImage3.jpg",
      alt: "Cricket Match Action Shot 5",
      title: "Team Victory Dance",
      description: "The entire team celebrating their championship win",
    },
    {
      id: 6,
      src: "/sa-sporting-club/img3.jpg",
      alt: "Cricket Match Action Shot 6",
      title: "Stadium Atmosphere",
      description: "Packed stadium with fans cheering for their team",
    },
    {
      id: 7,
      src: "/sa-sporting-club/img4.jpg",
      alt: "Cricket Match Action Shot 7",
      title: "Power Hit Six",
      description: "Massive six that went out of the stadium",
    },
    {
      id: 8,
      src: "/sa-sporting-club/img5.jpg",
      alt: "Cricket Match Action Shot 8",
      title: "Wicket Keeper's Brilliance",
      description: "Lightning-fast stumping that dismissed the batsman",
    },
    {
      id: 9,
      src: "/group-images/groupImage2.jpg",
      alt: "Cricket Match Action Shot 9",
      title: "Captain's Leadership",
      description: "Team captain motivating players during crucial moments",
    },
    {
      id: 10,
      src: "/sa-sporting-club/img6.jpg",
      alt: "Cricket Match Action Shot 10",
      title: "Captain's Leadership",
      description: "Team captain motivating players during crucial moments",
    },
  ];

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1
      );
    }
  };

  const GalleryImage = ({
    image,
    index,
  }: {
    image: (typeof images)[0];
    index: number;
  }) => (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white h-full">
      <div className="relative overflow-hidden">
        <Image
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          width={600}
          height={400}
          className={`w-full  ${
            index === 0 || index === 5 || index === 8 || index === 9
              ? "h-[543.98px]"
              : "h-64"
          } object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm`}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <h3 className="font-bold text-lg mb-1">{image.title}</h3>
            <p className="text-sm text-gray-200 line-clamp-2">
              {image.description}
            </p>
          </div>
        </div>

        {/* View Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Button
            onClick={() => openModal(index)}
            size="lg"
            className="bg-white/90 text-black hover:bg-white transform scale-0 group-hover:scale-100 transition-all duration-300 shadow-xl backdrop-blur-sm"
          >
            <Eye className="w-5 h-5 mr-2" />
            View Image
          </Button>
        </div>

        {/* Image Number Badge */}
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
          {index + 1}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="py-20">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16 px-4 lg:px-0">
            <p className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              MATCH GALLERY
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed text-justify">
              Witness the passion, dedication, and triumphant moments that
              define SA Sporting Club. From breathtaking catches to championship
              victories, each image tells the story of our cricket journey and
              the unbreakable spirit of our team
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`${
                  index === 1 || index === 4 || index === 8 ? "col-span-2" : ""
                } ${
                  index === 5 || index === 0 || index === 8 || index === 9
                    ? "row-span-2"
                    : ""
                }`}
              >
                <GalleryImage image={image} index={index} />
              </div>
            ))}
          </div>

          {/* Gallery Stats */}
          {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {images.length}
              </div>
              <div className="text-gray-600 font-medium">Total Images</div>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Matches Covered</div>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-pink-600 mb-2">4K</div>
              <div className="text-gray-600 font-medium">HD Quality</div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Full Screen Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          {/* Close Button */}
          <Button
            onClick={closeModal}
            size="sm"
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white border-white/20 z-10 backdrop-blur-sm"
          >
            <X className="w-5 h-5" />
          </Button>

          {/* Navigation Buttons */}
          <Button
            onClick={prevImage}
            size="sm"
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20 z-10 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            onClick={nextImage}
            size="sm"
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20 z-10 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Image Counter */}
          <div className="absolute top-6 left-6 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            {selectedImageIndex + 1} / {images.length}
          </div>

          {/* Action Buttons */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
            <Button
              size="sm"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button
              size="sm"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Main Image */}
          <div className="relative max-w-7xl max-h-[80vh] mx-4">
            <Image
              src={images[selectedImageIndex].src || "/placeholder.svg"}
              alt={images[selectedImageIndex].alt}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-bold mb-2">
                {images[selectedImageIndex].title}
              </h3>
              <p className="text-gray-200 text-sm">
                {images[selectedImageIndex].description}
              </p>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-md overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImageIndex(index)}
                className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                  index === selectedImageIndex
                    ? "border-white shadow-lg scale-110"
                    : "border-white/30 hover:border-white/60"
                }`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={64}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
