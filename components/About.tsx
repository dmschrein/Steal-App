import React from "react";
import Image from "next/image";
import aboutImg from "@/public/assets/aboutImg.png"; // Assuming StaticImageData type is used here
import icon1 from "@/public/assets/icon/icon1.png"
import icon2 from "@/public/assets/icon/icon2.png"
import icon3 from "@/public/assets/icon/icon3.png"
import icon4 from "@/public/assets/icon/icon4.png"

const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            {/* Use Image component for optimized handling */}
            <Image
              src={aboutImg}
              alt="About Us Image"
              layout="responsive"
              width={700}
              height={500}
            />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl font-semibold mb-4 md:w-4/5">
              Empowering Small Businesses Through Fair Trade
            </h2>
            <p className="md:w-3/4 text-sm mb-8">
              While consumers want to support small businesses, 88% said higher
              prices are one of their top three barriers to doing so, with 69%
              selecting it as their number one barrier.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* company stats  */}
      <div className="bg-neutralSilver px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-black font-semibold mb-2 md:w-2/3">
              56% of consumers are prioritizing making purchases
              <br />{" "}
              <span className="text-primary">from small businesses</span>
            </h2>
            <p>
              We&aposre redefining online shopping, where every business, regardless
              of its size, has a fair chance to succeed and every consumer can
              access the true variety and potential the market has to offer.
            </p>
          </div>

          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            {/* Include sample icons with Image component where applicable */}
            {/* Image component requires an explicit height and width, which you can adjust accordingly. */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Image
                  src={icon1}
                  alt="Icon 1"
                  width={64}
                  height={64}
                />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    Meaningful
                  </h4>
                  <p>Companies</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={icon2}
                  alt="Icon 2"
                  width={64}
                  height={64}
                />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    Competitive
                  </h4>
                  <p>Offers</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Image
                  src={icon3}
                  alt="Icon 3"
                  width={64}
                  height={64}
                />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    Authentic
                  </h4>
                  <p>Reviews</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={icon4}
                  alt="Icon 4"
                  width={64}
                  height={64}
                />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    Safe and Convenient
                  </h4>
                  <p>Transactions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
