import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return(
        <>
        <header className="flex justify-between gap-x-5 h-11 w-auto bg-[#F5F5F5]" >
            <Image src="/logo.png" height={50} width={50} alt="logo" className="h-7 w-7 mt-2 ml-12"/>
            <ul className=" hidden md:block  ">
                <li className="flex mr-16 mt-2 space-x-7">
                    <Link href="" className="hover:text-white hover:bg-black rounded-md   text-[#111111]">Find a Store</Link>
                    <div className="h-6 mt- bg-black w-[2px]"></div>
                    <Link href="" className=" hover:text-white hover:bg-black rounded-md     text-[#111111]">Help</Link>
                    <div className="h-6 mt- bg-black w-[2px]"></div>
                    <Link href="" className=" hover:text-white hover:bg-black rounded-md   text-[#111111]">Join Us</Link>
                    <div className="h-6 mt- bg-black w-[2px]"></div>
                    <Link href="" className=" hover:text-white hover:bg-black rounded-md  text-[#111111]">Sign In</Link>
                </li>
            </ul>
        </header>

        </>
    )
}