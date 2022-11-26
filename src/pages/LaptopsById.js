import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import LaptopCard from "../comps/LaptopCard";
import useTitle from "../hooks/useTitle";

function LaptopsById() {
  const laptops = useLoaderData();
  const [title, setTitle] = useState('')
  useTitle(title)

  return (
    <section className="my-8 mx-auto w-full md:w-3/4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {laptops.map((laptop, i) => (
          <LaptopCard key={i} laptop={laptop} setTitle={(laptop)=>setTitle(laptop.brand)}></LaptopCard>
        ))}
      </div>
    </section>
  );
}

export default LaptopsById;
