import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

function AddaProduct() {
  const { user, userVerified } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const d = new Date();
    const postedTime = d.toISOString();

    const addedProduct = {
      seller: user?.displayName || "",
      email: user.email,
      product: form.product.value,
      img: form.photo.value,
      brand: form.brand.value,
      location: form.location.value,
      resalePrice: form.resalePrice.value,
      originalPrice: form.originalPrice.value,
      yearsOfUse: form.yearsOfUse.value,
      postedTime: postedTime,
      verifiedUser: userVerified
    };

    //console.log(addedProduct)
    fetch("https://tech-sale-server.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product added successful.");
          navigate("/dashboard/myproducts")
        }
      })
      .catch((error) => {
        toast.error("Something wrong happaned.");
        console.log(error.message);
      });
    //form.reset();
  };
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <h1 className="text-4xl font-bold text-center my-8">
        Want to add a product to sell!
      </h1>
      <form onSubmit={handleSubmit} className="form-control w-3/4 mx-auto">
        <label htmlFor="product" className="input-group my-4">
          Product Name
        </label>
        <input
          name="product"
          type="text"
          className="input input-bordered"
          required
        />
        <label htmlFor="brand" className="input-group my-4">
          Brand
        </label>
        <select name="brand" className="select select-bordered">
          <option disabled defaultValue>
            Which brand?
          </option>
          <option value="HP">HP</option>
          <option value="Dell">Dell</option>
          <option value="Asus">Asus</option>
          <option value="Acer">Acer</option>
          <option value="Lenovo">Lenovo</option>
          <option value="Apple">Apple</option>
        </select>
        <label htmlFor="photo" className="input-group my-4">
          Photo
        </label>
        <input
          name="photo"
          type="text"
          className="input input-bordered"
          required
        />
        <label htmlFor="location" className="input-group my-4">
          Location
        </label>
        <input
          name="location"
          type="text"
          className="input input-bordered"
          required
        />
        <label htmlFor="resalePrice" className="input-group my-4">
          Resale Price
        </label>
        <input
          name="resalePrice"
          type="number"
          className="input input-bordered"
          required
        />
        <label htmlFor="originalPrice" className="input-group my-4">
          Original Price
        </label>
        <input
          name="originalPrice"
          type="number"
          className="input input-bordered"
          required
        />
        <label htmlFor="yearsOfUse" className="input-group my-4">
          Years of use
        </label>
        <input
          name="yearsOfUse"
          type="number"
          className="input input-bordered"
          required
        />

        <button type="submit" className="btn btn-outline btn-info my-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddaProduct;
