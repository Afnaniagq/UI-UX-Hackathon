import Link from "next/link";
import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { LucideMenuSquare, Menu, Search } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"





export default function Navbar(){
    return(
        <>
        <nav className=" h-[60px] w-[330px] md:w-[650px] lg:w-auto bg-[#FFFFFF]  max-w-screen-2xl mx-auto container  ">
           <div className="flex justify-between  ">
            <Image src="/nav.png" height={100} width={100} alt="logo" className="ml-9 mt-3 h-5 w-14" />
            <ul className="hidden lg:block  ">
                <li className="space-x-6 ml-[313px] mt-4 font-semibold">
                    <Link href="/products" className="text-black text-[15px] hover:bg-slate-600 rounded hover:text-white " >New & Featured</Link>
                    <Link href="" className="text-black text-[15px]   hover:bg-slate-600 rounded hover:text-white " >Men</Link>
                    <Link href="" className="text-black text-[15px]   hover:bg-slate-600 rounded hover:text-white " >Women</Link>
                    <Link href="" className="text-black text-[15px]   hover:bg-slate-600 rounded hover:text-white " >Kids</Link>
                    <Link href="" className="text-black text-[15px]   hover:bg-slate-600 rounded hover:text-white " >Sale</Link>
                    <Link href="" className="text-black text-[15px]   hover:bg-slate-600 rounded hover:text-white " >SNKRS</Link>
                </li>
            </ul>
            <Sheet>
      <SheetTrigger className="lg:hidden  size-10 mx-2"><Menu   /></SheetTrigger>
        <SheetContent >
          <h2 className="pl-4 text-[25px] font-serif  text-slate-700 font-bold ">List</h2>
          <div className="bg-red-500 h-[2px] w-[390px] "></div>
          <ul className="">
                <li className="flex flex-col space-y-5 mt-4 font-semibold">
                    <Link href="/products" className="text-black text-[15px] hover:bg-slate-600 rounded hover:text-white " >New & Featured</Link>
                    <Link href="" className="text-black text-[15px]   hover:bg-slate-600 rounded hover:text-white " >Men</Link>
                    <Link href="" className="text-black text-[15px]   hover:bg-slate-600 rounded hover:text-white " >Women</Link>
                    <Link href="" className="text-black text-[15px]   hover:bg-slate-600 rounded hover:text-white " >Kids</Link>
                    <Link href="" className="text-black text-[15px]   hover:bg-slate-600 rounded hover:text-white " >Sale</Link>
                    <Link href="" className="text-black text-[15px]   hover:bg-slate-600 rounded hover:text-white " >SNKRS</Link>
                </li>
            </ul>
           
        
        </SheetContent>
      </Sheet>
            <div className="hidden lg:block">
            <div className=" flex  relative  ">
               
            <input type="search" placeholder=   " Search" className=" h-10 w-[180px] pl-10  text-[#CCCC] ml-20 mt-2 mr-5 flex items-end text-[11px]  bg-[#F5F5F5] rounded-full " />
           
            <Search  className="absolute transform translate-y-5 translate-x-24 h-[16.72px] w-[16.72px] "/>
            <IoMdHeartEmpty  className=" mt-4 mr-5 w-6 h-6" />
            <AiOutlineShopping className=" mt-4 mr-11 w-6 h-6" />
            </div>
            </div>
            </div>
        </nav>
       
        </>
    )
}