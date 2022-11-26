import React, { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import formatDate from "../utilities/formatDate";
import formatPrice from "../utilities/formatPrice";
import { AuthContext } from "../contexts/UserContext";

function LaptopCard({ laptop }) {
  const { user } = useContext(AuthContext);

  const {
    _id,
    img,
    product,
    seller,
    location,
    resalePrice,
    originalPrice,
    yearsOfUse,
    postedTime,
    verifiedUser,
  } = laptop;

  const handleSubmit = (e) => {
    console.log(user);
    e.preventDefault();
    const form = e.target;

    const buyerInfo = {
      name: user?.displayName,
      email: user.email,
      product: product,
      price: resalePrice,
      phone: form.phone.value,
      meetingLocation: form.meetingLocation.value,
    };

    console.log(buyerInfo);

    form.reset();
  };

  return (
    <div>
      {/* main section here  */}
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
          <p className="inline-block">
            Seller: {seller}
            {verifiedUser && (
              <span className="badge badge-secondary p-1 mx-2">
                <FaCheck></FaCheck>
              </span>
            )}
          </p>

          <div className="card-actions justify-end">
            <label htmlFor={_id} className="btn">
              Book Now
            </label>

            {/* Modal section here  */}
            <input type="checkbox" id={_id} className="modal-toggle" />
            <div className="modal">
              <div className="modal-box ">
                <form onSubmit={handleSubmit} className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered my-1"
                    value={user?.displayName}
                    disabled
                  />
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    className="input input-bordered my-1"
                    value={user.email}
                    disabled
                  />
                  <label className="label">
                    <span className="label-text">Product</span>
                  </label>
                  <textarea
                    className="textarea"
                    value={product}
                    disabled
                  ></textarea>
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered my-1"
                    value={formatPrice(resalePrice)}
                    disabled
                  />
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    name="phone"
                    type="text"
                    className="input input-bordered my-1"
                    placeholder="Give Your Phone Number"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Meeting Location</span>
                  </label>
                  <input
                    name="meetingLocation"
                    type="text"
                    className="input input-bordered my-1"
                    placeholder="Where do you get this product?"
                    required
                  />
                  <div className="modal-action">
                    <label htmlFor={_id} className="btn">
                      Close
                    </label>
                    <button
                      type="submit"
                      htmlFor={_id}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaptopCard;
