import React from "react";
import { FaCheck } from "react-icons/fa";
import formatDate from "../utilities/formatDate";
import formatPrice from "../utilities/formatPrice";

function LaptopCard({ laptop, setTitle }) {
  const {
    img,
    product,
    seller,
    location,
    resalePrice,
    originalPrice,
    yearsOfUse,
    postedTime,
    verifiedUser,
    brand
  } = laptop;

  const handleSetTitle = ()=>{setTitle(brand + " Laptops")}
  handleSetTitle()

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl h-full">
        <figure>
          <img src={img} alt="laptop" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product}</h2>
          <h2>Location: {location}</h2>
          <h2>Resale Price: {formatPrice(resalePrice)}</h2>
          <h2>Original Price: {formatPrice(originalPrice)}</h2>
          <h2>Years of Use: {yearsOfUse}</h2>
          <h2>Posted: {formatDate(postedTime)}</h2>
          <p className="inline-block">Seller: {seller}{verifiedUser && <span className="badge badge-secondary p-1 mx-2">
            <FaCheck></FaCheck>
            </span>}</p>
          
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaptopCard;
