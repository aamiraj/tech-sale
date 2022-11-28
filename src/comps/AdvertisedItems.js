import React from "react";
import { Carousel } from "react-responsive-carousel";
import formatPrice from "../utilities/formatPrice"
function AdvertisedItems({ advertisedLaptops }) {
  return (
    <div className="w-3/4  mx-auto my-8">
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
        {advertisedLaptops.map((laptop, i) => (
          <div key={`content-${i}`} className="sliderContainer">
            <div className="flex justify-center items-center flex-col md:flex-row  shadow-md">
              <div className="w-full md:w-1/4">
                <img
                  className="max-w-full p-2"
                  src={laptop.img}
                  alt="delivery"
                />
              </div>

              <div className="w-full md:w-3/4 p-2">
                <p className="font-semibold text-md">{laptop.product}</p>
                <p className="font-normal text-sm">Only at {formatPrice(laptop.resalePrice)}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default AdvertisedItems;
