import React from "react";
import { useLoaderData } from "react-router-dom";

function AllSellers() {
  const sellers = useLoaderData();
  //console.log(allUsers);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((user, i) => (
              <tr key={i}>
                <td>{user?.name}</td>
                <td>{user.email}</td>
                <td>{user.role.toUpperCase()}</td>
                <td>{user.verified ? "Verified" : "Not Verified"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllSellers;
