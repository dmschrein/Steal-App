import React from "react";
import Image, {StaticImageData} from 'next/image';
import services1 from "@/public/assets/icon/membership.png";
import services2 from "@/public/assets/icon/association.png";
import services3 from "@/public/assets/icon/group-club.png"

// Type for the image object that can handle both StaticImageData and URLs
type ImageInfo = {
  src: StaticImageData | string;
  alt: string;
};

// Define a type for the service object
type Service = {
  id: number;
  title: string;
  description: string; 
  image: ImageInfo;
};

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Advanced Recommender System",
      description:
        "Leverage cutting-edge technology with our Advanced Recommender System designed to connect you to the right products and deals.",
      image: {
        src: services1, // Assuming services1 is a StaticImageData
        alt: "Recommender System Service Icon",
      },
    },
    {
      id: 2,
      title: "Loyalty Programs",
      description:
        "Benefit when you shop small with personalized discounts, special offers, and perks such as free shipping or exclusive early access to new products.",
      image: {
        src: services2, // Direct URL (adjust if using Image component)
        alt: "Comprehensive Data Analytics Icon",
      },
    },
    {
      id: 3,
      title: "Quality Endorsement Seal",
      description:
        "This service not only reinforces the reliability of your brand and products but also promotes your commitment to excellence and customer satisfaction.",
      image: {
        src: services3, // Direct URL (adjust if using Image component)
        alt: "Quality Endorsement Seal Icon",
      },
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <div className="mt-20 text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          We support small businesses that want to save you money
        </h2>
        <p className="text-neutralGrey">
          Our mission is to support quality businesses by leveling the playing field
        </p>
      </div>

      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-[#bea2f4] w-14 h-14 mx-auto mb-4 rounded-tl-3xl rounded-br-3xl">
                {typeof service.image.src === 'string' ? (
                  <Image src={service.image.src} alt={service.image.alt} className="-ml-5" />
                ) : (
                  <Image 
                    src={service.image.src} 
                    alt={service.image.alt} 
                    width={56} 
                    height={56} 
                    className="-ml-5"
                  />
                )}
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
