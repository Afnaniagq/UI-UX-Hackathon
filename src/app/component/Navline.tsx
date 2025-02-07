import Link from "next/link";


export default function Navline(){
    return(

<div className=" md:h-[58px] md:w-full bg-[#F5F5F5] shadow-[#E5E5E5] max-w-screen-2xl mx-auto container " >
<h1 className="text-center text-18px text-black flex font-semibold justify-center pt-2">Hello Nike App</h1>

<div className="flex justify-center ">
<p  className="text-[14px] hidden md:block"> Download the app to acess everything Nike.</p>
<Link href="" className="sm:text-center underline text-[14px] font-semibold hover:text-blue-600">Get Your Great</Link>
</div>
</div>
    )
}