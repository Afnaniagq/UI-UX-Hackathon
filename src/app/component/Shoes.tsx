"use client"
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts, four } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

 const Shoes =() =>{

const [product,setProduct] =useState<Product[]>([])

useEffect(() => {
    async function fetchproduct(){
        const fetchedProduct :Product [] =await client.fetch(four)
        setProduct(fetchedProduct)
    }
    fetchproduct()

},[])

    
    return(
<div className=" max-w-7xl    mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold mb-6 ">Best of Air Max</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" >

{ product.map((product) => (
        <div key={product._id}
        className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
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
            <h2 className="text-[17px] font-semibold mt-4">
                {product.productName}
            </h2>
           <p className="text-gray-500 mt-4"> 
            {product.price ? `$${product.price}` :"price nnot available"}</p>
            </div>
            <h2 className="text-gray-400 text-[15px]  mt-4">
                {product.category}
            </h2>


        </div>
    ))
}
{/* <div className="h-[52px] md:w-[1400px] bg-[#FFFFFF] flex md:justify-between ml-5">
    <p className="ml-8 sm:ml-16 text-[18px] md:text-[22px] font-medium">Best of Air Max</p>
   <div className="hidden md:block ">
    <div className="flex mr-[45px]">
    <p className="mt-3 mr-3">Shop</p>
    <div className="bg-[#F5F5F5] rounded-full mr-3 h-11 w-11 mt-1 flex items-center justify-center ">
    <ChevronLeft size={24} strokeWidth={1.25} className="text-[#CCCCCC]"/>
   
    </div>
    <div className="bg-[#E5E5E5] rounded-full mr-3 h-11 w-11 mt-1 flex items-center justify-center">
    <ChevronRight size={24} color="#353131" strokeWidth={1.25} className="text-[#111111]"/>
    </div>
    </div>
   
</div>
</div>
{/* section #1 */}
{/* <div className="grid  md:grid-cols-3  space-y-4 md:space-y-0  "> */}
{/* grid-1 */}
    {/* <div className="">
        <Image src="/gri1.png"  alt="" height={400} width={400} className="w-[250px] ml-16 sm:ml-[70px] md:ml-20 sm:w-[200px] md:w-[400px]"/>
        <div className="flex md:justify-between mt-4 font-semibold  ml-16 sm:ml-[70px] md:mr-4">
        <h2 className="md:ml-3">Nike Air Max Pulse</h2>
        <div className="flex gap-2  hover:text-green-600">
        <FaIndianRupeeSign className=" mt-1" />
        <span>13 995</span>
       
        </div>
        </div>
        <p className="text-[#CCCCCC] ml-16 sm:ml-[70px] md:ml-20">Women&#39;s Shoes</p>
    </div> */}
{/* grid-2  space-x-4 */}
    {/* <div className="">
        <Image src="/gri2.png"  alt="" height={490} width={490} className=" w-[250px] ml-16 sm:ml-[70px] md:ml-12 sm:w-[200px] md:w-[400px]"/>
        <div className="flex md:justify-between mt-4 font-semibold ml-16 sm:ml-[70px] md:mr-8"> 
        <h2 >Nike Air Max Pulse</h2>
        <div className="flex gap-2  hover:text-green-600">
        <FaIndianRupeeSign className=" mt-1" />
        <span>13 995</span>
       
        </div>
        </div>
        <p className="text-[#CCCCCC] ml-16 sm:ml-[70px]">Men&#39;s Shoes</p>
    </div> */}
{/* grid-3  space-x-4 */}
    {/* <div className="">
        <Image src="/gri3.png"  alt="" height={490} width={490} className="w-[250px] ml-16 sm:ml-[70px] md:ml-4 sm:w-[200px] md:w-[400px]"/>
        <div className="flex md:justify-between mt-4 font-semibold  ml-16 sm:ml-[70px] md:mr-16">
        <h2 >Nike Air Max Pulse</h2>
        <div className="flex gap-2  hover:text-green-600">
        <FaIndianRupeeSign className=" mt-1" />
        <span>16 995</span>
       
        </div>
        </div>
        <p className="text-[#CCCCCC] ml-16 sm:ml-[70px]">Men&#39;s Shoes</p>
    </div>
</div>  */}
</div>
</div>
  );
};
export default Shoes;