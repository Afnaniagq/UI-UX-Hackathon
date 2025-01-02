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
        <div>
        <header className="flex justify-between gap-x-5 w-full  bg-[#F5F5F5]">
            <Image src="/logo.png" height={50} width={50} alt="logo" className="max-w-full h-auto mt-2 ml-12"/>
            <ul className="hidden md:block ">
                <li className="flex mr-16 mt-2 space-x-7  text-xs font-semibold sm:text-sm">
                <Link href="/" className="hover:text-white hover:bg-black rounded-md  text-[#111111]">Find a Store</Link>
                <div className="h-4 mt- bg-black w-[2px]"></div>
                <Link href="/help" className=" hover:text-white hover:bg-black rounded-md    text-[#111111]">Help</Link>
                <div className="h-4 mt- bg-black w-[2px]"></div>
                <Link href="/join" className=" hover:text-white hover:bg-black rounded-md  text-[#111111]">Join Us</Link>
                <div className="h-4 mt- bg-black w-[2px]"></div>
                <Link href="/sign-in" className=" hover:text-white hover:bg-black rounded-md text-[#111111]">Sign In</Link>
                 </li>
            </ul>
          
           
             <Sheet>
  <SheetTrigger className="md:hidden "><LucideMenuSquare    className=" size-8 mx-6"/></SheetTrigger>
  <SheetContent>
  <ul className=" ">
    <h2 className="text-[18px] text-red-500 font-semibold">List</h2> 
    <div className="h-[2px] w-80 bg-slate-700"></div>
                <li className="flex flex-col mr-16 mt-2 space-y-7  text-xs font-semibold sm:text-sm">
                <Link href="/" className=" text-[#111111]">Find a Store</Link>
            
                <Link href="/help" className="    text-[#111111]">Help</Link>
            
                <Link href="/join" className="  text-[#111111]">Join Us</Link>
            
                <Link href="/sign-in" className=" text-[#111111]">Sign In</Link>
                 </li>
            </ul>
  </SheetContent>
</Sheet> 

        </header>
        </div>
    )
}