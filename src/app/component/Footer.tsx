import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaCameraRetro } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer(){
    return(
        <>
        <div className="h-auto lg:h-[390px] bg-[#111111] w-full flex  bottom-0 max-w-screen-2xl mx-auto container ">
            <div className="flex flex-col  md:flex-row">
                <ul className="text-white space-y-4 ml-9 md:ml-14 pt-14">
                    <li className="">Find A Store</li>
                    <li className="">Become A Member</li>
                    <li className="">Sign Up for Email</li>
                    <li className="">Send Us Feedback</li>
                    <li className="">Student Discounts</li>
                </ul>
                
                <ul className="text-white space-y-4 ml-9 md:ml-36 pt-14 md:block">
                    <li>Get Help</li>
                    <li className="text-[#7E7E7E] ">Order Status</li>
                    <li className="text-[#7E7E7E] ">Delivery</li>
                    <li className="text-[#7E7E7E] ">Returns</li>
                    <li className="text-[#7E7E7E] ">Payment Options</li>
                    <li className="text-[#7E7E7E] ">Contact Us On Nike.com Inquiries</li>
                    <li className="text-[#7E7E7E] ">Contact Us On All Other Inquiries</li>
                </ul>

                <ul  className="text-white space-y-4 mb-7 md:mb-0 ml-9 pt-14">
                    <li >About Nike</li>
                    <li  className="text-[#7E7E7E]">News</li>
                    <li  className="text-[#7E7E7E]">Careers</li>
                    <li  className="text-[#7E7E7E]">Investors</li>
                    <li  className="text-[#7E7E7E]">Sustainability</li>
                </ul>
                </div>
          <div className="flex flex-col md:flex-col   lg:flex-row pt-14 space-y-4 md:space-y-4   md:mr-[10px] lg:ml-[320px] space-x-5">
            <div className="bg-[#7E7E7E]  rounded-full h-11 w-12 pt-2 mt-4 pl-2 ml-4">
           <FaTwitter  className="text-black text-[29px] hover:text-[32px] hover:text-blue-500"/>
           </div>
           <div className="bg-[#7E7E7E]  rounded-full h-11 w-12 pt-2 pl-2 ">
           <FaFacebookF  className="text-black text-[29px] hover:text-[32px]  hover:text-blue-700"/>
           </div>
           <div className="bg-[#7E7E7E]  rounded-full h-11 w-12 pt-2 pl-2 ">
           <TfiYoutube  className="text-black text-[29px] hover:text-[32px]  hover:text-red-600"/>
           </div>
           <div className="bg-[#7E7E7E]  rounded-full h-11 w-12 pt-2 pl-2 ">
           <FaCameraRetro  className="text-black text-[29px] hover:text-[32px]   hover:text-yellow-400"/>
           </div>
           </div>
          
               </div>
               {/* location  */}
               <div className="bg-[#111111] h-16 flex justify-between space-x-6 bottom-0 left-0  max-w-screen-2xl mx-auto container ">
               <div className="flex space-x-6">
                <FaLocationDot className="text-white text-[21px] ml-[49px]  hover:text-red-500"/>
          
                <p className="text-white size-12  text-[18px] ">India</p>
                <p className="text-[#7E7E7E]"> &copy;2023 Nike, Inc. All Rights Reserved </p>
                </div>
                <div className="hidden md:block">
                    <ul className="text-[#7E7E7E] flex mr-28 space-x-6">
                        <li>Guides</li>
                        <li>Terms of Sale</li>
                        <li>Terms of Use</li>
                        <li>Nike Privacy Policy</li>
                    </ul>
                    </div>  
                </div>
              
          
            
          
           
        </>
    )
}