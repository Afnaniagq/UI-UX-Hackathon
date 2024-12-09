import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaCameraRetro } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer(){
    return(
        <>
        <div className="md:h-[390px] bg-[#111111] w-full flex  ">
            <div className="flex flex-col  md:flex-row">
                <ul className="text-white space-y-4 ml-14 pt-14">
                    <li className="">Find A Store</li>
                    <li className="">Become A Member</li>
                    <li className="">Sign Up for Email</li>
                    <li className="">Send Us Feedback</li>
                    <li className="">Student Discounts</li>
                </ul>
                
                <ul className="text-white space-y-4 ml-14 md:ml-36 pt-14 md:block">
                    <li>Get Help</li>
                    <li className="text-[#7E7E7E] ">Order Status</li>
                    <li className="text-[#7E7E7E] ">Delivery</li>
                    <li className="text-[#7E7E7E] ">Returns</li>
                    <li className="text-[#7E7E7E] ">Payment Options</li>
                    <li className="text-[#7E7E7E] ">Contact Us On Nike.com Inquiries</li>
                    <li className="text-[#7E7E7E] ">Contact Us On All Other Inquiries</li>
                </ul>

                <ul  className="text-white space-y-4 mb-7 md:mb-0 ml-14 pt-14">
                    <li >About Nike</li>
                    <li  className="text-[#7E7E7E]">News</li>
                    <li  className="text-[#7E7E7E]">Careers</li>
                    <li  className="text-[#7E7E7E]">Investors</li>
                    <li  className="text-[#7E7E7E]">Sustainability</li>
                </ul>
                </div>
          <div className="flex flex-col  md:flex-row pt-14 space-y-4 md:space-y-0 md:ml-[320px] space-x-5">
            <div className="bg-[#7E7E7E]  rounded-full h-11 w-12 pt-2 pl-2 ml-4">
           <FaTwitter  className="text-black text-[29px] "/>
           </div>
           <div className="bg-[#7E7E7E]  rounded-full h-11 w-12 pt-2 pl-2 ">
           <FaFacebookF  className="text-black text-[29px]"/>
           </div>
           <div className="bg-[#7E7E7E]  rounded-full h-11 w-12 pt-2 pl-2 ">
           <TfiYoutube  className="text-black text-[29px]"/>
           </div>
           <div className="bg-[#7E7E7E]  rounded-full h-11 w-12 pt-2 pl-2 ">
           <FaCameraRetro  className="text-black text-[29px]"/>
           </div>
           </div>
          
               </div>
               <div className="bg-[#111111] h-16 flex justify-between space-x-6">
               <div className="flex space-x-6">
                <FaLocationDot className="text-white text-[21px] ml-[49px]"/>
          
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