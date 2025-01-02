import Image from "next/image";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { FaIndianRupeeSign } from "react-icons/fa6";

export default function Products(){
    return(
        <>
        <section className="sm:flex-col">
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

        



            {/* second div grids */}
             <div className="grid  sm:grid-cols-1 mt-20 sm:mt-7 md:grid-cols-3 ml-20 sm:ml-28 sm:pl-44 md:pl-14  space-y-4 md:space-y-0 md:space-x-7 lg:mt-4 pr-14">
                            {/* grid-1 */}
                            <div className="">
                            <Image src="/bright.png"  alt="" height={348} width={348} className=" md:h-[325px] w-[320px] md:ml-7"/>
                                <div className="flex flex-col mt-4 ml-8">
                                <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Air Force 1 Mid &apos;07</h2>
                                <p className="text-[#757575]">Men &apos;s Shoes</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-8">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">10 795.00</p>
                          
                                </div>
                            </div>
                            {/* grid-2 */}
                            <div className="">
                                <Image src="/blue.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Court Vision Low Next Nature</h2>
                                <p className="text-[#757575]">Men &apos;s Shoes</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">4 995.00</p>
                          
                                </div>                          
                                 </div>
                            {/* grid-3 */}
                            <div className="">
                                <Image src="/pink.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Air Force 1 PLT.AF.ORM</h2>
                                <p className="text-[#757575]">Women &apos;s Shoes</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">8 695.00</p>
                          
                                </div>                           </div>
                            {/* grid-4 */}
                            <div className="">
                                <Image src="/line.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Air Force 1 React</h2>
                                <p className="text-[#757575]">Men &apos;s Shoes</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">13 295.00</p>
                          
                                </div>
                            </div>
                            {/* grid-5 */}
                            <div className="">
                                <Image src="/same.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Promo Exclusion</p>    
                                <h2 className="font-semibold" >Air Jordan 1 Elevate Low</h2>
                                <p className="text-[#757575]">Men &apos;s Shoes</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">11 895.00</p>
                          
                                </div>                           </div>
                            {/* grid-6 */}
                            <div className="">
                                <Image src="/blac.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Standard Issue</h2>
                                <p className="text-[#757575]">Men &apos;s Jersey</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">2 895.00</p>
                          
                                </div>                           </div>

                            {/* grid-7 */}
                            <div className="">
                                <Image src="/mal.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Promo Exclusion</p>    
                                <h2 className="font-semibold" >Nike Dunk Low Retro SE</h2>
                                <p className="text-[#757575]">Men &apos;s Shoes</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">9 695.00</p>
                          
                                </div>
                            </div>
                            {/* grid-8 */}
                            <div className="">
                                <Image src="/bme.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Sustainable Materials</p>    
                                <h2 className="font-semibold" >Nike Dri-FIT UV Hyverse</h2>
                                <p className="text-[#757575]">Men &apos;s Short-Sleeve Fitness Top</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">2 495.00</p>
                          
                                </div>                           </div>
                            {/* grid-9 */}
                            <div className="">
                                <Image src="/gre.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Court Vision Low</h2>
                                <p className="text-[#757575]">Men &apos;s Shoes</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">5 695.00</p>
                          
                                </div>                           </div>
                            {/* grid-10 */}
                            <div className="">
                                <Image src="/greme.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Dri-FIT Ready</h2>
                                <p className="text-[#757575]">Men &apos;s Short-Sleeve Fitness Top</p>
                                <p className="text-[#757575]">3 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">2 495.00</p>
                          
                                </div>
                            </div>
                            {/* grid-11 */}
                            <div className="">
                                <Image src="/redlin.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Air Force 1 Mid  &apos;07</h2>
                                <p className="text-[#757575]">Men &apos;s Shoes</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">10 795.00</p>
                          
                                </div>                           </div>
                            {/* grid-12  */}
                            <div className="">
                                <Image src="/pinlin.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Air Force 1 LV8 3</h2>
                                <p className="text-[#757575]">Older Kids &apos; Shoe</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">7 495.00</p>
                          
                                </div>                           </div>
                               {/* grid-13 */}
                               <div className="">
                                <Image src="/olds.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike SB Zoom Janoski OG+</h2>
                                <p className="text-[#757575]">Shoes</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">8 595.00</p>
                          
                                </div>
                            </div>
                            {/* grid-14 */}
                            <div className="">
                                <Image src="/orann.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Dri-FIT Run Division Rise 365</h2>
                                <p className="text-[#757575]">Men &apos;s Running Tank</p>
                                <p className="text-[#757575]">2 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">3 495.00</p>
                          
                                </div>                           </div>
                            {/* grid-15  */}
                            <div className="">
                                <Image src="/grewh.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Air Force 1 Mid  &apos;07</h2>
                                <p className="text-[#757575]">Men &apos;s Shoes</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">10 795.00</p>
                          
                                </div>                           </div>
                               {/* grid-16 */}
                               <div className="">
                                <Image src="/blumen.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Air Force 1 Mid  &apos;07</h2>
                                <p className="text-[#757575]">Men &apos;s Shoes</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">10 795.00</p>
                          
                                </div>
                            </div>
                            {/* grid-17 */}
                            <div className="">
                                <Image src="/bootsh.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Blazer Low Platform</h2>
                                <p className="text-[#757575]">Men &apos;s Shoes</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">8 195.00</p>
                          
                                </div>                           </div>
                               {/* grid-18 */}
                               <div className="">
                                <Image src="/greme.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Pro Dri-FIT</h2>
                                <p className="text-[#757575]">Men &apos;s Tight-Fit Sleeveless Top</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">1 495.00</p>
                          
                                </div>
                            </div>
                            {/* grid-19 */}
                            <div className="">
                                <Image src="/bootblue.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Air Force 1 Mid &#39;07</h2>
                                <p className="text-[#757575]">Men &apos;s Shoes</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">10 795.00</p>
                          
                                </div>                           </div>
                            {/* grid-20  */}
                            <div className="">
                                <Image src="/woclo.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Swoosh</h2>
                                <p className="text-[#757575]">Women &apos;s Medium-support Sports </p>
                                <p className="text-[#757575]">2 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">3 095.00</p>
                          
                                </div>                           </div>

                               {/* grid-21 */}
                               <div className="">
                                <Image src="/bab.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Mini kid</h2>
                                <p className="text-[#757575]">Kid &apos;s Shoes</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">10 795.00</p>
                          
                                </div>
                            </div>
                            {/* grid-22 */}
                            <div className="">
                                <Image src="/kifsho.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Air Max SC</h2>
                                <p className="text-[#757575]">Women &apos;s Shoes</p>
                                <p className="text-[#757575]">2 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">5 995.00</p>
                          
                                </div>                           </div>
                            {/* grid-23  */}
                            <div className="">
                                <Image src="/kisho.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Dunk Low Retro</h2>
                                <p className="text-[#757575]">Men &apos;s Shoes</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">8 695.00</p>
                          
                                </div>                           </div>


                            {/* grid-24  */}
                            <div className="">
                                <Image src="/kid.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Outdoor Play</h2>
                                <p className="text-[#757575]">Older Kids &apos; Woven Jacket</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">3 895.00</p>
                          
                                </div>                           </div>
                               {/* grid-25 */}
                               <div className="">
                                <Image src="/short.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Sportswear Trend</h2>
                                <p className="text-[#757575]">Older Kids &apos; Woven Shorts</p>
                                <p className="text-[#757575]">2 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">2 495.00</p>
                          
                                </div>
                            </div>
                            {/* grid-26 */}
                            <div className="">
                                <Image src="/slasho.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike Blazer Low  &apos;77 Jumbo</h2>
                                <p className="text-[#757575]">Women &apos;s Shoes</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">8 595.00</p>
                          
                                </div>                           </div>
                            {/* grid-27  */}
                            <div className="">
                                <Image src="/lshoe.png"  alt="" height={348} width={348} className=""/>
                                <div className="flex flex-col mt-4  mr-4">
                                 <p className="text-[#9E3500] font-semibold">Just In</p>    
                                <h2 className="font-semibold" >Nike SB Force 58</h2>
                                <p className="text-[#757575]">Skate Shoe</p>
                                <p className="text-[#757575]">1 Colour</p>
                               
                                </div>
                                <div className="flex mt-5 ml-1 mb-14">
                                <p className="font-semibold">MRP :</p>
                                <FaIndianRupeeSign className="text-[16px] mt-1 ml-1" />
                                <p className="font-semibold">5 995.00</p>
                          
                                </div>                           </div>
                        </div>
                        </div>

                        {/* final box */}
                        <div className="h-[259px] bg-">
                          
                            <div className="sm:ml-[20px] md:ml-[340px]">
                            <div className="bg-[#E5E5E5]  h-[2px] md:mb-12"></div>
                                <h2 className="font-semibold text-[18px] md:text-[22px] ml-4 sm:ml-6">Related Categories</h2>
                                <div className="mt-6 ml-5 sm:ml-6 ">
                                    <button className=" h-[26px]  md:h-[34px] w-[160px] text-[12px] hover:bg-[#E5E5E5]  mb-4 mr-2 rounded-[20px] border-[2px] border-[#E5E5E5] ">Best Selling Products</button>
                                    <button className=" h-[26px]  md:h-[34px] w-[104px] text-[12px] hover:bg-[#E5E5E5]  mb-4 mr-2 rounded-[20px] border-[2px] border-[#E5E5E5] ">Best Shoes</button>
                                    <button className=" h-[26px]  md:h-[34px] w-[165px] text-[12px] hover:bg-[#E5E5E5]  mb-4 mr-2 rounded-[20px] border-[2px] border-[#E5E5E5] ">New Basketball Shoes</button>
                                    <button className=" h-[26px]  md:h-[34px] w-[151px] text-[12px] hover:bg-[#E5E5E5]  mb-4 mr-2 rounded-[20px] border-[2px] border-[#E5E5E5] ">New Football Shoes</button>
                                    <button className=" h-[26px]  md:h-[34px] w-[139px] text-[12px] hover:bg-[#E5E5E5]  mb-4 mr-2 rounded-[20px] border-[2px] border-[#E5E5E5] ">New Men &apos;s Shoes</button>
                                    <button className=" h-[26px]  md:h-[34px] w-[153px] text-[12px] hover:bg-[#E5E5E5]  mb-4 mr-2 rounded-[20px] border-[2px] border-[#E5E5E5] ">New Running Shoes</button>
                                    <button className=" h-[26px]  md:h-[34px] w-[140px] text-[12px] hover:bg-[#E5E5E5]  mb-4 mr-2 rounded-[20px] border-[2px] border-[#E5E5E5] ">Best Men &apos;s Shoes</button>
                                    <button className=" h-[26px]  md:h-[34px] w-[145px] text-[12px] hover:bg-[#E5E5E5]  mb-4 mr-2 rounded-[20px] border-[2px] border-[#E5E5E5] ">New Jordan Shoes</button>
                                    <button className=" h-[26px]  md:h-[34px] w-[159px] text-[12px] hover:bg-[#E5E5E5]  mb-4 mr-2 rounded-[20px] border-[2px] border-[#E5E5E5] ">Best Women &apos;s Shoes</button>
                                    <button className=" h-[26px]  md:h-[34px] w-[155px] text-[12px] hover:bg-[#E5E5E5]  mb-4 mr-2 rounded-[20px] border-[2px] border-[#E5E5E5] ">Best Training & Gym</button>
                                </div>
                            </div>
                        </div>
        </section>
        </>
    )
}