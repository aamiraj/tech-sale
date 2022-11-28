import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import { useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

function MyProducts() {
  const { user } = useContext(AuthContext);

  const { data: userlaptops = [], refetch } = useQuery({
    queryKey: ["userlaptops"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products?email=${user.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/products?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Product delete successful");
          refetch();
        }
      });
  };

  const handleAdvertise = (id) => {
    fetch(`http://localhost:5000/products?id=${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ title: "Corrected post" }),
    })
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Item advertised successfully on Home page.");
        }
      })
      .catch((error) => {
        toast.error("Something wrong happened. Try again.");
      });
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="overflow-x-auto w-full">
        
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Advertise</th>
            </tr>
          </thead>
          <tbody>
            {userlaptops.map((laptop, i) => (
              <tr key={i}>
                <td>{laptop.product}</td>
                <td>{laptop.resalePrice}</td>
                <td>{laptop.sold ? "Sold" : "Unsold"}</td>
                <td>
                  <button
                    onClick={() => handleDelete(laptop._id)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleAdvertise(laptop._id)}
                    className="btn btn-info btn-xs"
                  >
                    Advertise
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyProducts;
