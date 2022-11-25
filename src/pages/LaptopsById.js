import React from 'react'
import { useLoaderData } from 'react-router-dom'
import LaptopCard from '../comps/LaptopCard'

function LaptopsById() {
    const laptops = useLoaderData()
  return (
    <section className='my-8 mx-auto w-full md:w-3/4'><div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
    {laptops.map((laptop, i)=><LaptopCard key={i} laptop={laptop}></LaptopCard>)}
</div></section>
    
  )
}

export default LaptopsById