import Image from "next/image";
import Link from "next/link";

export default function Sign(){
    return(
        <>
        <section className="bg-[#FFFF] h-[489px] w-[380px] flex flex-col pt-6 items-center sm:ml-7 md:ml-[240px] lg:ml-[515.5px] mb-11">
            <Image src="/nav.png" height={50} width={50} alt="" />
            <h1  className="font-bold text-[22px] mt-7 px-20 text-center">YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
            <div className="space-y-3 mt-[14px]">
            <input type="search" placeholder=   " Email address" className=" h-10 w-[324px] pl-5  text-[#CCCC] flex text-[14px] rounded-[3px] bg-[#FFFFF] border-[1px] border-[#CCCC]" />
            <input type="search" placeholder=   " Password" className=" h-10 w-[324px] pl-5  text-[#CCCC] flex text-[14px]  bg-[#FFFFF] border-[1px] border-[#CCCC] rounded-[3px]" />
            </div>
            <div className="flex ">
        <input type="checkbox" placeholder=   " " className=" h-5 w-5 rounded-[3px] mt-[19px]  bg-[#FFFFF] border-[1px] border-[#CCCC] " />  
        <p className="text-[#7E7E7E] text-[13px] mt-[19px] pl-3 pr-3 ">Keep me signed in</p>
        <p className="text-[#BCBCBC] text-[13px] mt-[19px] pl-2">Forgotten your password?</p>
        </div>
        <p className="text-[#7E7E7E] text-[12px] mt-[18px] pl-12 pr-12 flex text-center  ">By logging in&#39; you agree to Nike&#39;s Privacy Policy Terms of Use.</p>
        
        <button className="h-[40px] w-[324px] bg-black text-white mt-[20px] text-[11px] hover:text-[15px]">SIGN IN</button>
        <div className="flex justify-center mt-[15px] space-x-1 text-[11px]">
            <p  className="text-[12px] hidden md:block text-[#7E7E7E]"> Not a Member?</p>
            <Link href="" className="sm:text-center underline text-[142x] font-semibold hover:text-blue-600">Join us</Link>
            </div>
         
        </section>
        <div className="h-[250px] "></div>
    </>
    )
}