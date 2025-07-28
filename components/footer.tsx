import Image from "next/image";

export default function Footer() {
  const footerImages = [
    {
      icon: "/footer/logoImage.png",
    },
    {
      icon: "/footer/logoImage.png",
    },
    {
      icon: "/images/Bangladesh_Cricket_Board_Logo.svg",
    },
    {
      icon: "/footer/footer-image4.png",
    },
    {
      icon: "/footer/footer-image5.png",
    },
    {
      icon: "/footer/footer-image6.png",
    },
    {
      icon: "/sa-sporting-club.png",
    },
    {
      icon: "/images/Bangladesh_Cricket_Board_Logo.svg",
    },
  ];

  return (
    <footer className="text-white bg-[url('/header-full-image.png')] bg-cover bg-center bg-no-repeat pt-20">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 items-center min-h-[100px] py-10">
        {footerImages.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={image.icon}
              alt={`Footer Image ${index + 1}`}
              width={128}
              height={128}
              className="shadow-lg w-32 h-32 overflow-hidden"
            />
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-blue-900/80 to-transparent h-14 flex justify-center items-center">
        <p className="text-center text-white">
          © 2025 SA SPORTING CLUB. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
