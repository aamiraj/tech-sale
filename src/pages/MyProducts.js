import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/UserContext";

function MyProducts() {
  const { user } = useContext(AuthContext);
  const [userlaptops, setUserLaptops] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setUserLaptops(data));
  }, [user]);

  return (
    <div>
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
                    <button className="btn btn-error btn-xs">Delete</button>
                  </td>
                  <td>
                    <button className="btn btn-info btn-xs">Advertise</button>
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
