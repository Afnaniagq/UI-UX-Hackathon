import Link from "next/link";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { Search } from 'lucide-react';


export default function Navbar(){
    return(
        <>
        <nav className=" h-[60px]  w-auto bg-[#FFFFFF] ">
           <div className="flex justify-between  ">
            <Image src="/nav.png" height={100} width={100} alt="logo" className="ml-9 mt-3 h-5 w-20" />
            <ul className=" hidden md:block  ">
                <li className="space-x-6 ml-56 mt-4">
                    <Link href="" className="text-black text-[15px]  " >New & Featured</Link>
                    <Link href="" className="text-black text-[15px]  " >Men</Link>
                    <Link href="" className="text-black text-[15px]  " >Women</Link>
                    <Link href="" className="text-black text-[15px]  " >Kids</Link>
                    <Link href="" className="text-black text-[15px]  " >Sale</Link>
                    <Link href="" className="text-black text-[15px]  " >SNKRS</Link>
                </li>
            </ul>
            <div className="hidden md:block">
            <div className=" flex  relative  ">
               
            <input type="search" placeholder=   " Search" className=" h-12 pl-10 ml-20 mt-2 mr-5 flex items-end text-[11px]  bg-[#F5F5F5] rounded-full text-black" />
           
            <Search  className="absolute transform translate-y-5 translate-x-24"/>
            <FaRegHeart  className=" mt-4 mr-5"  size={24}/>
            <BiShoppingBag className=" mt-4 mr-11"  size={24} />
            </div>
            </div>
            </div>
        </nav>
        <div className=" md:h-[58px] md:w-full bg-[#F5F5F5] shadow-[#E5E5E5] " >
            <h1 className="text-center text-18px text-black flex font-semibold justify-center pt-2">Hello Nike App</h1>
            
            <div className="flex justify-center ">
            <p  className="text-[14px] hidden md:block"> Download the app to acess everything Nike.</p>
            <Link href="" className="sm:text-center underline text-[14px] font-medium">Get Your Great</Link>
            </div>
        </div>
        </>
    )
}