"use client"
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { four } from "@/sanity/lib/queries";
import Link from "next/link";

 const Gear =() =>{

const [product,setProduct] =useState<Product[]>([])

useEffect(() => {
    async function fetchproduct(){
        const fetchedProduct :Product [] =await client.fetch(four)
        setProduct(fetchedProduct)
    }
    fetchproduct()

},[])

    
    return(
<div className=" max-w-6xl  mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold mb-6 ">Gear Up</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" >

{ product.map((product) => (
        <div key={product._id}
        className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
                 <Link href={`/product/${product.slug.current}`}>
            {product.image && (
                <Image
                src={urlFor(product.image).url()}
                alt="image"
                width={250}
                height={250}
                className="w-full h-60 object-cover rounded-md"
                />
            )}
            <div className="flex justify-between">
            <h2 className="text-lg font-semibold mt-4">
                {product.productName}
            </h2>
           <p className="text-gray-500 mt-2  hover:text-green-500"> 
            {product.price ? `$${product.price}` :"price nnot available"}</p>
            </div>
       
            <h2 className="text-gray-400 text-[15px]  mt-4">
                {product.category}
            </h2>
            </Link>
        </div>
    ))
}
</div>
</div>
  );
};
export default Gear;