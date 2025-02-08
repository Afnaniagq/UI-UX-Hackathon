import Image from "next/image";

export default function Hero(){
    return(
           <>
           <div className="md:h-[977px] w-full  max-w-screen-2xl mx-auto container">
           <Image src="/hero.png" alt="pic" height={500} width={500} className=" w-full  md:px-12 " />
           <div className="text-center ml-1 mt-14">
          <p className="font-semibold">First Look</p>
          <h1 className="font-semibold  sm:ml-9 text-[23px] sm:text-[30px] md:text-[60px]">NIKE AIR MAX PULSE</h1>
          <p className="text-wrap  text-[10px] sm:text-[16px] pl-14 pr-16 md:pl-[380px] md:pr-[380px]">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          —designed to push you past your limits and help you go to the max.</p>
          <div className="space-x-5 mt-12">
          <button className="bg-black text-[14px] rounded-full h-9 w-28 text-white  hover:text-[16px]">Notify Me</button>
          <button className="bg-black  text-[14px]  rounded-full h-9 w-32  text-white  hover:text-[16px]">Shop Air Max</button>
          </div>
          </div>
           </div>
{/* 
           className=" h-auto w-[320px]   sm:h-[275px] sm:w-[550px]   md:h-[667px] md:w-[1280px]  ml-7 sm:ml-[9px]  md:ml-[75px] " /> */}
           </>
    )
}