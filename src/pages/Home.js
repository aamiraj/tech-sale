import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Carousel1 from "../assets/1.png";
import Carousel3 from "../assets/2.png";
import Carousel2 from "../assets/3.png";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Delivery from "../assets/delivery.jpg";
import About from "../assets/aboutus.png";
import useTitle from "../hooks/useTitle";
import AdvertisedItems from "../comps/AdvertisedItems";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const [categories] = useFetch("http://localhost:5000/categories");
  //console.log(categories);
  useTitle("Tech Sale || A store for used laptops");

  const { data: advertisedLaptops = [] } = useQuery({
    queryKey: ["advertisedLaptops"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products?advertised=${true}`
      );
      const data = await res.json();
      //console.log(data);
      return data;
    },
  });

  return (
    <>
      {/* carousel section starts */}
      <section>
        <div>
          <Carousel
            autoPlay
            infiniteLoop
            interval={3000}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
          >
            <div key="content-0" className="sliderContainer">
              <img className="sliderImage" src={Carousel1} alt="casousel" />
              <div className="imageOverlay"></div>
              <div className="paraOverlay">
                <h1 className="text-4xl md:text-8xl font-bold p-4">
                  Need A Laptop
                </h1>
                <h3 className="text-xl md:text-2xl font-medium p-1">
                  You can buy all kinds of used laptops
                </h3>
                <p className="text-lg md:text-xl font-normal p-6 mx-6 hidden md:block">
                  Here we provide used brand-laptops at a reasonable price, get
                  them for your personal usage or business at a cheap rate.
                </p>
                <Link to="/courses" className="btn btn-primary my-4">
                  Buy Now
                </Link>
              </div>
            </div>
            <div key="content-1" className="sliderContainer">
              <img className="sliderImage" src={Carousel2} alt="casousel" />
              <div className="imageOverlay"></div>
              <div className="paraOverlay">
                <h1 className="text-4xl md:text-8xl font-bold p-4">
                  Have An Unused Laptop
                </h1>
                <h3 className="text-xl md:text-2xl font-medium p-1">
                  Sell them here at your claimed price
                </h3>
                <p className="text-lg md:text-xl font-normal p-6 mx-6 hidden md:block">
                  You can now sell your unused laptops here, just take a picture
                  of your laptops, describe its condition and place it at your
                  claimed price.
                </p>
                <Link to="/courses" className="btn btn-primary my-4">
                  Sell Now
                </Link>
              </div>
            </div>
            <div key="content-2" className="sliderContainer">
              <img className="sliderImage" src={Carousel3} alt="casousel" />
              <div className="imageOverlay"></div>
              <div className="paraOverlay">
                <h1 className="text-4xl md:text-8xl font-bold p-4">
                  Advertise Your Sell
                </h1>
                <h3 className="text-xl md:text-2xl font-medium p-1">
                  We are now giving the opurtunity to sell your laptop quickly
                </h3>
                <p className="text-lg md:text-xl font-normal p-6 mx-6 hidden md:block">
                  You can now advertise on this website with premium
                  subscription, simply go to your products and select to
                  adverrise and it will show on the home page.
                </p>
                <Link to="/courses" className="btn btn-primary my-4">
                  Advertise Now
                </Link>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
      {/* carousel section ends */}

      {/* advertise items here  */}
      <section>
        {advertisedLaptops.length && (
          <AdvertisedItems
            advertisedLaptops={advertisedLaptops}
          ></AdvertisedItems>
        )}
      </section>

      {/* choose brands here  */}
      <section className="my-8 w-full md:w-3/4 mx-auto">
        <h1 className="my-8 mx-auto text-center text-4xl font-bold">
          Choose Your Brands
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, i) => (
            <Link
              to={`/categories/${category.id}`}
              key={i}
              className="flex justify-center items-center p-4 hover:shadow-md"
            >
              <p className="px-2">{category.name}</p>
              <img className="w-8" src={category.img} alt="category"></img>
            </Link>
          ))}
        </div>
      </section>

      {/* new service here  */}
      <section className="my-8 w-full md:w-3/4 mx-auto p-4">
        <h1 className="my-8 mx-auto text-center text-4xl font-bold">
          Take Our New Service
        </h1>
        <div className="flex justify-center items-center flex-col md:flex-row  shadow-md">
          <img className="w-full md:w-1/4 p-2" src={Delivery} alt="delivery" />
          <div className="w-full md:w-3/4 p-2">
            <p className="font-semibold text-md">
              Deliver to your location with Shipy
            </p>
            <p className="font-normal text-sm">
              We also provide delivery service to our trusted clients. Over
              1000+ stuffs are working hard to deliver your products anywhere in
              BD. Use our service to ease your workload, let us handle delivery.
            </p>
            <button type="button" className="btn btn-primary my-2">
              Use Our Service
            </button>
          </div>
        </div>
      </section>

      {/* about us here  */}
      <section className="my-8 w-full md:w-3/4 mx-auto p-4">
        <h1 className="my-8 mx-auto text-center text-4xl font-bold">
          About Us
        </h1>
        <div className="flex justify-center items-stretch  flex-col md:flex-row  shadow-md">
          <div className="w-full md:w-1/2">
            <img
              className="p-4 max-h-full h-full block object-cover"
              src={About}
              alt="about"
            />
          </div>

          <div className="w-full md:w-1/2 p-2">
            <p className="font-semibold text-2xl">Our Story</p>
            <p className="font-normal text-md">
              Tech Sale is a platform on which you can buy and sell used
              laptops! We help people buy and sell laptops of different brands
              and also provide delivery services. With 6 brands our solutions
              are built to be safe, smart, and convenient for our customers.
            </p>
            <p>
              Every month, hundreds of people use Tesh Sale to find and sell
              used laptops and more through classified ads. To sell new items or
              sell used items quickly, Tech Sale offers Ad Promotion features.
              Tech Sale has an extensive collection of new and used goods,
              making it easier for users to quickly buy new items or buy used
              items at their desired location. To buy online, users easily can
              reach their desired products through filtering options. Shipy is
              the e-commerce service of Tech Sale, serving necessary appliances
              with a 100% guarantee of safety and saving valuable time for
              buyers and sellers in online shopping. For businesses, Tech Sale
              has introduced the Membership service, which helps them expand
              their businesses online. Members will have their virtual shop with
              a Tech Sale URL with free promotions of their goods. With
              different membership categories, businesses can flourish as
              verified members and authorized dealers. With millions of unique
              monthly visitors, thousands of interested buyers, and thousands of
              active dealers on our platform, Tech Sale is one of the Largest
              Marketplace in Bangladesh.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
