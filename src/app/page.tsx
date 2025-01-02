import React from "react";
import Image from "next/image";
import Hero from "./component/Hero";
import { PiGreaterThanBold } from "react-icons/pi";
import { FaLessThan } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { ChevronLeft, ChevronRight, CircleChevronRight } from "lucide-react";
import Navline from "./component/Navline";

export default function Home(){
    return(
        <>
        <Navline/> 
        <Hero/> 
        <section className="h-[604px] w-full  mt-14">
            <div className="h-[52px] md:w-[1400px] bg-[#FFFFFF] flex md:justify-between ml-5">
                <p className="ml-8 sm:ml-16 text-[18px] md:text-[22px] font-medium">Best of Air Max</p>
               <div className="hidden md:block ">
                <div className="flex mr-[45px]">
                <p className="mt-3 mr-3">Shop</p>
                <div className="bg-[#F5F5F5] rounded-full mr-3 h-11 w-11 mt-1 flex items-center justify-center">
                <ChevronLeft size={24} strokeWidth={1.25} className="text-[#CCCCCC]"/>
               
                </div>
                <div className="bg-[#E5E5E5] rounded-full mr-3 h-11 w-11 mt-1 flex items-center justify-center">
                <ChevronRight size={24} color="#353131" strokeWidth={1.25} className="text-[#111111]"/>
                </div>
                </div>
               
            </div>
            </div>
 {/* section #1 */}
            <div className="grid  md:grid-cols-3  space-y-4 md:space-y-0 ">
 {/* grid-1 */}
                <div className="">
                    <Image src="/gri1.png"  alt="" height={400} width={400} className="w-[250px] ml-16 sm:ml-[70px] md:ml-20 sm:w-[200px] md:w-[400px]"/>
                    <div className="flex md:justify-between mt-4 font-semibold  ml-16 sm:ml-[70px] md:mr-4">
                    <h2 className="md:ml-3">Nike Air Max Pulse</h2>
                    <div className="flex gap-2">
                    <FaIndianRupeeSign className="mt-1" />
                    <span>13 995</span>
                   
                    </div>
                    </div>
                    <p className="text-[#CCCCCC] ml-16 sm:ml-[70px] md:ml-20">Women&#39;s Shoes</p>
                </div>
   {/* grid-2  space-x-4 */}
                <div className="">
                    <Image src="/gri2.png"  alt="" height={490} width={490} className=" w-[250px] ml-16 sm:ml-[70px] md:ml-12 sm:w-[200px] md:w-[400px]"/>
                    <div className="flex md:justify-between mt-4 font-semibold ml-16 sm:ml-[70px] md:mr-8"> 
                    <h2 >Nike Air Max Pulse</h2>
                    <div className="flex gap-2">
                    <FaIndianRupeeSign className="mt-1" />
                    <span>13 995</span>
                   
                    </div>
                    </div>
                    <p className="text-[#CCCCCC] ml-16 sm:ml-[70px]">Men&#39;s Shoes</p>
                </div>
 {/* grid-3  space-x-4 */}
                <div className="">
                    <Image src="/gri3.png"  alt="" height={490} width={490} className="w-[250px] ml-16 sm:ml-[70px] md:ml-4 sm:w-[200px] md:w-[400px]"/>
                    <div className="flex md:justify-between mt-4 font-semibold  ml-16 sm:ml-[70px] md:mr-16">
                    <h2 >Nike Air Max Pulse</h2>
                    <div className="flex gap-2">
                    <FaIndianRupeeSign className="mt-1" />
                    <span>16 995</span>
                   
                    </div>
                    </div>
                    <p className="text-[#CCCCCC] ml-16 sm:ml-[70px]">Men&#39;s Shoes</p>
                </div>
            </div>
        </section>

        {/* section # 2 */}
        <section className="mt-[600px] md:mt-0">
           
                <h2 className="ml-[75px] md:mb-6 text-[23px] font-semibold">Featured</h2>
                <Image src="/ho2.png" alt="pic" height={990} width={1280} className="ml-[40px] w-[300px] h-auto md:w-[650px] lg:ml-[70px] lg:w-[1280px]  " />
                <div className="text-center  mt-14 space-y-5">
          <h1 className="font-semibold text-[20px] md:text-[35px] lg:text-[60px]">STEP INTO WHAT FEELS GOOD</h1>
          <p className="text-wrap pl-5 pr-9  lg:pl-[380px] lg:pr-[380px]">Cause everyone should know the feeling of running in that perfect pair.</p>
         
          <button className="bg-black text-[14px] rounded-[30px] h-9 w-32 text-white  hover:text-[16px]">Find Your Shoe</button>
        
         


            </div>
        </section>
        {/*Four grid   */}
        <h2 className="text-[18px] md:text-[25px] font-bold ml-[78px] my-10">Gear up</h2>
         
            
                  {/* shop men */}
                  <div className="flex">
                  <div className="hidden md:hidden lg:block ">
                  <div className="flex mb-2 ml-[450px]">
                <p className="mt-3 mr-6">Shop Men&#39;s</p>
               
                <div className="bg-[#F5F5F5] rounded-full mr-3 h-11 w-11 mt-1 flex items-center justify-center">
                <ChevronLeft size={24} strokeWidth={1.25} className="text-[#CCCCCC]"/>
               
                </div>
                <div className="bg-[#E5E5E5] rounded-full mr-3 h-11 w-11 mt-1 flex items-center justify-center">
                <ChevronRight size={24} color="#353131" strokeWidth={1.25} className="text-[#111111]"/>
                </div>
                </div>
                </div>
                 {/* shop women */}
                 <div className="hidden md:hidden lg:block ">
                 <div className="flex mb-2 ml-[410px]">
                <p className="mt-3 mr-6">Shop women&#39;s</p>
                
                <div className="bg-[#F5F5F5] rounded-full mr-3 h-11 w-11 mt-1 flex items-center justify-center">
                <ChevronLeft size={24} strokeWidth={1.25} className="text-[#CCCCCC]"/>
               
                </div>
                <div className="bg-[#E5E5E5] rounded-full mr-3 h-11 w-11 mt-1 flex items-center justify-center">
                <ChevronRight size={24} color="#353131" strokeWidth={1.25} className="text-[#111111]"/>
                </div>
                </div>
                </div>
                </div>
        <div className="grid  grid-cols space-y-9 md:space-y-0 md:grid-cols-2 lg:grid-cols-4 pl-11 md:ml-16 mr-16 space-x-5 ">
           
                {/* grid-1 */}
                <div className="div">
                    <Image src="/grid1.png"  alt="" height={350} width={295} className=""/>
                    <div className="flex justify-between mt-4 font-bold mr-6">
                    <h2 className="text-[14px]">Nike Dri-FIT ADV TechKnit Ultra</h2>
                    <div className="flex gap-2">
                    <FaIndianRupeeSign className="mt-1" />
                    <span>3 895</span>
                   
                    </div>
                    </div>
                    <p className="text-[#CCCCCC]  pr-7">Men&apos;s Short-Sleeve</p>
                    <p className="text-[#CCCCCC]  pr-7">Running Top</p>
                </div>

                {/* grid-2 */}
                <div className="div">
                    <Image src="/grid2.png"  alt="" height={330} width={310} className=""/>
                    <div className="flex justify-between mt-4 font-semibold mr-9">
                    <h2 className="text-[15px]">Nike Dri-FIT Challenger</h2>
                    <div className="flex gap-2">
                    <FaIndianRupeeSign className="mt-1" />
                    <span>2 495</span>
                   
                    </div>
                    </div>
                    <p className="text-[#CCCCCC]">Men&apos;s 18cm (approx.) 2-</p>
                    <p className="text-[#CCCCCC]  pr-7">in-1 Versatile Shorts</p> 
                   
                </div>

                
           
                {/* grid-3 */}
                
                <div className="div">
                    <Image src="/grid3.png"  alt="" height={330} width={310} className=""/>
                    <div className="flex justify-between mt-4 font-semibold mr-">
                    <h2 className="text-[14px] " >Nike Dri-FIT ADV Run Division</h2>
                    <div className="flex gap-2">
                    <FaIndianRupeeSign className="mt-1" />
                    <span>5 295</span>
                   
                    </div>
                    </div>
                    <p className="text-[#CCCCCC]">Women run division</p>
                    <p className="text-[#CCCCCC]  pr-7">Running Wear</p>
                </div>
                {/*grid-4  */}
                <div className="div">
                    <Image src="/gridl.png"  alt="" height={330} width={310} className=""/>
                    <div className="flex justify-between mt-4 font-semibold mr-9">
                    <h2 className="text-[16px]">Nike Fast</h2>
                    <div className="flex gap-2">
                    <FaIndianRupeeSign className="mt-1" />
                    <span>3 795</span>
                   
                    </div>
                    </div>
                    <p className="text-[#CCCCCC]">Womenn&apos;s Long-Sleeve</p>
                    <p className="text-[#CCCCCC]  pr-7">Running Top</p>
                </div>
            </div>

            {/* section 3 */}
            <section className="mt-24">
            <div className="">
                <h2 className="ml-[75px] md:ml-[75px] text-[23px] mb-6 font-semibold">Don&#39;t Miss</h2>
                <Image src="/ho3.png" alt="pic" height={990} width={1280} className="ml-[40px] w-[300px] h-auto md:w-[650px] lg:ml-[70px] lg:w-[1280px]  " />
                <div className="text-center  mt-14 space-y-5">
          <h1 className="font-semibold text-[30px] md:text-[60px]">FLIGHT ESSENTIALS</h1>
          <p className="text-wrap  pl-10 pr-10  lg:pl-[380px] lg:pr-[380px]">Your built-to-last&#39; all-week wears—but with style only Jordan Brand can deliver.</p>
         
          <button className="bg-black text-[14px] rounded-[30px] h-9 w-20  text-white  hover:text-[16px]">Shop</button>
        
          </div>
             </div>
        </section>

        {/* section 4 final */}
        <section className="mt-16">
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

        <div className="text-center  mb-24  md:w-[700px] ml-20 sm:ml-24 md:ml-16  lg:ml-72 lg:justify-between md:h-[192px] mt-36 flex flex-col   space-y-9 md:space-y-0 md:flex-row md:space-x-9 ">
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
    
        </>
    )
}