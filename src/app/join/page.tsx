import Image from "next/image";
import Link from "next/link";

export default function Join(){
    return(
        <>
        <section className="bg-[#FFFFFF] w-[380px] h-[833px]  flex flex-col pt-6 items-center max-w-screen-2xl mx-auto container">
        <Image src="/nav.png" alt="" height={50} width={60} className="h-[17px] mt-3"/>
        <h1 className="font-bold text-[18px] mt-7">BECOME A NIKE MEMBER</h1>
        <p className="text-center text-[#7E7E7E] text-[14px]  mt-7 pl-12 pr-12 flex items-center">Create your Nike Member profile and get first access to the very best of Nike products&#39; inspiration and community.</p>
        <div className="space-y-3 mt-[14px]">
          
        <input type="search" placeholder=   " Email address" className=" h-10 w-[324px] pl-5  text-[#CCCC] flex text-[13px] rounded-[3px] bg-[#FFFFF] border-[1px] border-[#CCCC]" />
        <input type="search" placeholder=   " Password" className=" h-10 w-[324px] pl-5  text-[#CCCC] flex text-[13px]  bg-[#FFFFF] border-[1px] border-[#CCCC] rounded-[3px]" />
        <input type="search" placeholder=   " First Name" className=" h-10 w-[324px] pl-5  text-[#CCCC] flex text-[13px]  bg-[#FFFFF] border-[1px] border-[#CCCC] rounded-[3px]" />
        <input type="search" placeholder=   " Last Name" className=" h-10 w-[324px] pl-5  text-[#CCCC] flex text-[13px]  bg-[#FFFFF] border-[1px] border-[#CCCC] rounded-[3px]" />
        <input type="search" placeholder=   " Date of Birth" className=" h-10 w-[324px] pl-5  text-[#CCCC] flex text-[13px]  bg-[#FFFFF] border-[1px] border-[#CCCC] rounded-[3px]" />  
        <p className="text-[11px] text-[#7E7E7E] ml-2" >Get a Nike Member Reward every year on your Birthday.</p>
        <input type="search" placeholder=   " India" className=" h-10 w-[324px] pl-5  text-[#CCCC] flex text-[13px]  bg-[#FFFFF] border-[1px] border-[#CCCC] rounded-[3px]" />
        <div className="flex space-x-4">
        <input type="search" placeholder=   " Male" className=" h-[40px] w-[153.89px] pl-5  text-[#CCCC] flex text-[13px]  bg-[#FFFFF] border-[1px] border-[#CCCC] rounded-[3px]" />
        <input type="search" placeholder=   " Female" className=" h-[40px] w-[153.89px] pl-5  text-[#CCCC] flex text-[13px]  bg-[#FFFFF] border-[1px] border-[#CCCC] rounded-[3px]" />
        </div>
        </div>
        <div className="flex ">
        <input type="checkbox" placeholder=   " " className=" h-5 w-5 rounded-[3px] mt-[14px] ml-8 bg-[#FFFFF] border-[1px] border-[#CCCC] " />  
        <p className="text-[#7E7E7E] text-[11px] mt-[14px] pl-3 pr-9">Sign up for emails to get updates from Nike on products&#39; offers and your Member benefits</p>
        </div>
        <p className="text-[#7E7E7E] text-[11px] mt-[20px] px-14">By creating an account&#39; you agree to Nike&#39;s Privacy Policy and Terms of Use.</p>

        <button className="h-[40px] w-[324px] bg-black text-white mt-[20px] hover:text-[20px]">JOIN US</button>
        <div className="flex justify-center mt-[15px] text-[11px]">
            <p  className="text-[12px] hidden md:block text-[#7E7E7E]"> Already a Member?</p>
            <Link href="/sign-in" className="sm:text-center underline text-[142x] font-semibold hover:text-blue-600">Sign in</Link>
            </div>
        </section>
        </>
    )
}