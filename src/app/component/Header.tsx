import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
import { LucideMenuSquare } from "lucide-react";
  

export default function Header(){
    return(
        <div className="">
        <header className="flex lg:justify-between gap-x-2 md:gap-x-5 w-[375px] sm:w-[400px] md:w-[769px]  lg:w-full  max-w-screen-2xl mx-auto container bg-[#F5F5F5]">
            <Image src="/logo.png" height={50} width={50} alt="logo" className="max-w-full h-auto mt-2 ml-7 sm:ml-9 md:ml-12"/>
            <ul className=" ">
                <li className="flex ml-12 sm:ml-11 md:mr-16 mt-4 md:mt-2 space-x-4 md:space-x-7  text-xs font-semibold sm:text-sm">
                <Link href="/" className="hover:text-white  text-[8px]  sm:text-[15px] hover:bg-black rounded-md  text-[#111111]">Find a Store</Link>
                <div className="h-4 mt- bg-black w-[2px] hidden md:block"></div>
                <Link href="/help" className=" hover:text-white  text-[8px]  sm:text-[15px] hover:bg-black rounded-md    text-[#111111]">Help</Link>
                <div className="h-4 mt- bg-black w-[2px] hidden md:block"></div>
                <Link href="/join" className=" hover:text-white  text-[8px]  sm:text-[15px] hover:bg-black rounded-md  text-[#111111]">Join Us</Link>
                <div className="h-4 mt- bg-black w-[2px] hidden md:block"></div>
                <Link href="/sign-in" className=" hover:text-white  text-[8px]  sm:text-[15px] hover:bg-black rounded-md text-[#111111]">Sign In</Link>
                 </li>
            </ul>
          
          

        </header>
        </div>
    )
}