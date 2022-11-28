import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

function AllBuyers() {
  //const buyers = useLoaderData();

  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users?role=buyer");
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("User delete successful");
          refetch();
        }
      });
  };
  //console.log(allUsers);
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {buyers?.map((user, i) => (
              <tr key={i}>
                <td>{user?.name}</td>
                <td>{user.email}</td>
                <td>{user.role.toUpperCase()}</td>
                <td>{user.verified ? "Verified" : "Not Verified"}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
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

export default AllBuyers;
