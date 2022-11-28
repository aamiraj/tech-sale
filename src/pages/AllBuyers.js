import React from "react";
import { useLoaderData } from "react-router-dom";

function AllBuyers() {
  const buyers = useLoaderData();
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
            {buyers.map((user, i) => (
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

export default AllBuyers;
