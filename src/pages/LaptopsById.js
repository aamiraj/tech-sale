import React from "react";
import { useLoaderData } from "react-router-dom";
import LaptopCard from "../comps/LaptopCard";
import useTitle from "../hooks/useTitle";

function LaptopsById() {
  const laptops = useLoaderData();
  
  useTitle("Laptops for sale")

  return (
    <section className="my-8 mx-auto w-full md:w-3/4">
      <h1 className="text-4xl font-bold text-center my-8">
        Available Laptops
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {laptops.map((laptop, i) => (
          <LaptopCard key={i} laptop={laptop}></LaptopCard>
        ))}
      </div>
    </section>
  );
}

export default LaptopsById;
