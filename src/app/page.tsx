import React from "react";
import Image from "next/image";
import Hero from "./component/Hero";
import { PiGreaterThanBold } from "react-icons/pi";
import { FaLessThan } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { ChevronLeft, ChevronRight, CircleChevronRight } from "lucide-react";
import Navline from "./component/Navline";
import Shoes from "./component/Shoes";
import Gear from "./component/Gear";

export default function Home(){
    return(
        <>
        <Navline/> 
        <Hero/> 
        <Shoes/>
     {/* section # 2 */}
        <section className="mt-0  max-w-screen-2xl mx-auto container">
           
                <h2 className="ml-[30px] mb-4 md:ml-[75px] md:mb-6 text-2xl font-bold">Featured</h2>
                <Image src="/ho2.png" alt="pic" height={990} width={1280} className=" w-full px-7 md:px-20" />
                {/* ml-[40px] w-[300px] h-auto md:w-[650px] lg:ml-[70px] lg:w-[1280px]  */}
                <div className="text-center  mt-14 space-y-5">
          <h1 className="font-semibold text-[20px] md:text-[35px] lg:text-[60px]">STEP INTO WHAT FEELS GOOD</h1>
          <p className="text-wrap pl-5 pr-9  lg:pl-[380px] lg:pr-[380px]">Cause everyone should know the feeling of running in that perfect pair.</p>
         
          <button className="bg-black text-[14px] rounded-[30px] h-9 w-32 text-white  hover:text-[16px]">Find Your Shoe</button>
        
         


            </div>
        </section>
        {/*Four grid   */}
        <Gear/>

            {/* section 3 */}
            <section className="mt-24 max-w-screen-2xl mx-auto container">
            <div className="">
                <h2 className="ml-[30px] mb-4 md:ml-[75px] md:mb-6 text-2xl font-bold">Don&#39;t Miss</h2>
                <Image src="/ho3.png" alt="pic" height={990} width={1280} className="ml-[40px] w-[300px] h-auto md:w-[650px] lg:ml-[70px] lg:w-[1280px]  " />
                <div className="text-center  mt-14 space-y-5">
          <h1 className="font-semibold text-[30px] md:text-[60px]">FLIGHT ESSENTIALS</h1>
          <p className="text-wrap  pl-10 pr-10  lg:pl-[380px] lg:pr-[380px]">Your built-to-last&#39; all-week wears—but with style only Jordan Brand can deliver.</p>
         
          <button className="bg-black text-[16px] rounded-[30px] h-12 w-28  text-white  hover:text-[16px]">Shop</button>
        
          </div>
             </div>
        </section>

        {/* section 4 final */}
        <section className="mt-16 max-w-screen-2xl mx-auto container">
            <div className="">
                <h2 className="ml-[75px] text-[23px] mb-6 font-semibold">The Essentials</h2>
                 <div className="grid space-y-7 md:space-y-0 md:grid-cols-3 pr-[68px] pl-[73px]">
                   <div className="relative">
                    <Image src="/glast1.png" alt="pic" height={420} width={420} className=""/>
                    <button className=" absolute h-10 bg-[#FFFF] w-24 bottom-12 left-24 transform -translate-x-1/2 text-black py-2 px-4 rounded-[30px] shadow-lg hover:bg-[#9F9F9F] ">Men&#39;s</button>
                    </div>
                    <div className="relative">
                    <Image src="/glast2.png" alt="pic" height={420} width={420} className=""/>
                    <button className=" absolute h-10 bg-[#FFFF] w-24 bottom-12 left-24 transform -translate-x-1/2 text-black py-2 px-4 rounded-[30px] shadow-lg hover:bg-[#9F9F9F] ">Women&#39;s</button>
                    </div>
                    <div className="relative">
                    <Image src="/glast3.png" alt="pic" height={420} width={420} className=""/>
                    <button className=" absolute h-10 bg-[#FFFF] w-24 bottom-12 left-24 transform -translate-x-1/2 text-black py-2 px-4 rounded-[30px] shadow-lg hover:bg-[#9F9F9F] ">Kid&#39;s</button>
                    </div>
                    
                    
                 </div>
               
             </div>
        </section>

        {/* last white div */}
        <div className="max-w-screen-2xl mx-auto container">

        <div className=" text-center  mb-24  md:w-[700px] ml-20 sm:ml-24 md:ml-16  lg:ml-72 lg:justify-between md:h-[192px] mt-36 flex flex-col   space-y-9 md:space-y-0 md:flex-row md:space-x-9 ">
          <ul className="space-y-4 ">
            <li className="font-bold mr-8 lg:mr-32 flex  items-start">Icons</li>
            <li className="text-[#757575] flex  items-start">Air Force 1</li>
            <li  className="text-[#757575] flex  items-start">Huarache</li>
            <li  className="text-[#757575] flex  items-start">Air Max 90</li>
            <li  className="text-[#757575] flex  items-start">Air Max 95</li>
          </ul>

          <ul className="space-y-4">
            <li className="font-bold mr-8 lg:mr-32 flex  items-start">Shoes</li>
            <li  className="text-[#757575] flex  items-start">All Shoes</li>
            <li  className="text-[#757575] flex  items-start">Custom Shoes</li>
            <li  className="text-[#757575] flex  items-start">Jordan Shoes</li>
            <li  className="text-[#757575] flex  items-start">Running Shoes</li>
          </ul>
        
          <ul className="space-y-4">
            <li className="font-bold mr-8 lg:mr-32 flex  items-start">Clothing</li>
            <li  className="text-[#757575] flex  items-start">All Clothing</li>
            <li  className="text-[#757575] flex  items-start">Modest Wear</li>
            <li  className="text-[#757575] flex  items-start">Hoodies & Pullovers</li>
            <li  className="text-[#757575] flex  items-start">Shirts & Tops</li>
          </ul>
      
          <ul className="space-y-4 ">
            <li className="font-bold mr-8 lg:mr-40 flex  items-start">Kidsn&apos;</li>
            <li  className="text-[#757575] flex  items-start">Infant & Toddler Shoes</li>
            <li  className="text-[#757575] flex  items-start">Kidsn&apos; Shoes</li>
            <li  className="text-[#757575] flex  items-start">Kidsn&apos; Jordan Shoes</li>
            <li  className="text-[#757575] flex  items-start">Kidsn&apos; Basketball Shoes</li>
          </ul>
     
          </div>
          </div>
        </>
    )
}