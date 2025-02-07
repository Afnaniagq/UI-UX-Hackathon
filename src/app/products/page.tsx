"use client"
import { ChevronLeft, ChevronRight, Link } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts, four } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";



export default function Featured(){

const [product,setProduct] =useState<Product[]>([])

useEffect(() => {
    async function fetchproduct(){
        const fetchedProduct :Product [] =await client.fetch(allProducts)
        setProduct(fetchedProduct)
    }
    fetchproduct()

},[])


    return(
        <>
        <section className=" sm:flex-col  max-w-screen-2xl mx-auto container">
            {/* header line */}
            <header className="h-[51px] w-[140p] bg-[#FFFFF] mt-8 sm:flex-col">
                <div className="flex justify-between">
                    <h1 className="font-medium text-[25px] ml-9 mt-2 ">New (500)</h1>
                    <div className="  hidden lg:block">
                    <div className="flex mr-12 space-x-5 ">
                        <div className="flex">
                        <h2>Hide Filters</h2>
                        <Image src="/fi.png" height={14} width={18} alt="" className="mb-3 ml-2" />
                        </div>
                        <div className="flex">
                        <h2>Sort By</h2>
                        <RiArrowDropDownLine className="text-[26px]" />
                        </div>
                    </div>
                    </div>
                </div>
            </header>


            {/* first side div */}
            <div className="flex">
        <div className="  lg:flex ">
              
            <div className="flex flex-col h-[849px] w-[260px] bg-[#FFFF] text-[15px] mt-4">
                <ul className="ml-9 space-y-3 font-semibold">
                    <li>Shoes</li>
                    <li>Sports Bras</li>
                    <li>Tops & T-Shirts</li>
                    <li>Hoodies & Sweatshirts</li>
                    <li>Jackets</li>
                    <li>Trousers & Tights</li>
                    <li>Shorts</li>
                    <li>Tracksuits</li>
                    <li>Jumpsuits & Rompers</li>
                    <li>Skirts & Dresses</li>
                    <li>Socks</li>
                    <li className="pr-9">Accessories & Equipment</li>
                </ul>
              

                {/* side 1div */}
                <div className="ml-9">
                <div className="bg-[#E5E5E5]  h-[1px] w-48 mt-8"></div>

          {/*Gender   */}
                <div className="flex mt-7 justify-between mr-7">
                
                <h2 className="text-[15px] font-semibold">Gender</h2>
               <RiArrowDropUpLine className="text-[26px]" /></div>
               {/* boxes */}
               <div className="flex flex-col  space-y-2 mt-4">
                {/* checkbox 1 */}
                <div className="flex">
               <input type="checkbox" placeholder=   " " className=" h-5 w-5 rounded-[3px]   bg-[#FFFFF] border-[1px] border-[#CCCC] " />  
               <p className=" text-[13px] pl-3 pr-3 ">Men</p>
               </div>
                 {/*checkbox 2 */}
                 <div className="flex">
                <input type="checkbox" placeholder=   " " className=" h-5 w-5 rounded-[3px]  bg-[#FFFFF] border-[1px] border-[#CCCC] " />  
               <p className=" text-[13px] pl-3 pr-3 ">Women</p>
               </div>
               <div className="flex">
                <input type="checkbox" placeholder=   " " className=" h-5 w-5 rounded-[3px]  bg-[#FFFFF] border-[1px] border-[#CCCC] " />  
               <p className=" text-[13px] pl-3 pr-3 ">Kids</p>
               </div>
       
                </div>
             {/* Kids */}
             <div className="bg-[#E5E5E5]  h-[1px] w-48 mt-8"></div>
                <div className="flex mt-6 justify-between mr-7">
                <h2 className="text-[15px] font-semibold">Kids</h2>
               <RiArrowDropUpLine className="text-[26px]" /></div>
                {/* div 3 Uni */}
                <div className="flex flex-col  space-y-2 mt-4">
                {/* checkbox 1 */}
                <div className="flex">
               <input type="checkbox" placeholder=   " " className=" h-5 w-5 rounded-[3px]   bg-[#FFFFF] border-[1px] border-[#CCCC] " />  
               <p className=" text-[13px] pl-3 pr-3 ">Boys</p>
               </div>
                 {/*checkbox 2 */}
                 <div className="flex">
                <input type="checkbox" placeholder=   " " className=" h-5 w-5 rounded-[3px]  bg-[#FFFFF] border-[1px] border-[#CCCC] " />  
               <p className=" text-[13px] pl-3 pr-3 ">Girls</p>
               </div>
               </div>
           {/*Price  */}
           <div className="bg-[#E5E5E5]  h-[1px] w-48 mt-8"></div>
           <div className="flex mt-6 justify-between mr-7">
                <h2 className="text-[15px] font-semibold">Shop By Price</h2>
               <RiArrowDropUpLine className="text-[26px]" /></div>
                {/* div 3 Uni */}
                <div className="flex flex-col  space-y-2 mt-4">
                {/* checkbox 1 */}
                <div className="flex">
               <input type="checkbox" placeholder=   " " className=" h-5 w-5 rounded-[3px]   bg-[#FFFFF] border-[1px] border-[#CCCC] " />  
               <div className="flex flex-row">
               <p className=" text-[13px] pl-3 ">Under</p>
               <FaIndianRupeeSign className="text-[12px] mt-1 "/>
               <p className="text-[13px] "> 2 500.00</p>
               </div>
               </div>
                 {/*checkbox 2 */}
                 <div className="flex">
                <input type="checkbox" placeholder=   " " className=" h-5 w-5 rounded-[3px]  bg-[#FFFFF] border-[1px] border-[#CCCC] " />  
                <div className="flex ml-2">
                <FaIndianRupeeSign className="text-[12px] mt-1 "/> 
                <p className=" text-[13px] ">2 501.00 -  </p>
                <FaIndianRupeeSign className="text-[12px] mt-1 "/>
                </div>
            
               </div>
               </div>
                </div>

                </div>
                </div>
                  
                <div className=" max-w-6xl  mx-auto px-4 py-8">
                
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6" >
                
                { product.map((product) => (
                
                        <div key={product._id}
                        className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
                            {product.image && (
                                <Image
                                src={urlFor(product.image).url()}
                                alt="image"
                                width={150}
                                height={150}
                                className="w-full h-72 object-cover rounded-md"
                                />
                            )}
                            {/* status */}
                            <p className="text-red-700 font-semibold mt-2">  {product.status}</p>
                            {/* name */}
                            <h2 className="text-base font-semibold">{product.productName} </h2>
                            {/* category */}
                            <p className="text-gray-500">  {product.category}</p>
                            {/* color */}
                            <p className="text-gray-500">  {product.color}</p>
                            {/* price */}

                           <p className="text-black font-semibold mt-4"> 
                            {product.price ? `$${product.price}` :"price nnot available"}</p>
                                 
                             
                        </div>
                   
                    ))
                }
                </div>
                </div>
                </div>
                </section>
                </>
    )
}
        