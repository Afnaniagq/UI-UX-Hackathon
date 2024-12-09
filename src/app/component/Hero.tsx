import Image from "next/image";

export default function Hero(){
    return(
           <>
           <div className="md:h-[977px] md:w-[1344px]">
           <Image src="/hero.png" alt="pic" height={990} width={1280} className="ml-[45px] h-[275px] w-[300px] md:ml-[75px]  md:h-[667px] md:w-[1280px]" />
           <div className="text-center mr-20 mt-14">
          <p className="font-semibold">First Look</p>
          <h1 className="font-semibold  ml-9 text-[30px] md:text-[60px]">NIKE AIR MAX PULSE</h1>
          <p className="text-wrap pl-7 md:pl-[380px] md:pr-[380px]">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          —designed to push you past your limits and help you go to the max.</p>
          <div className="space-x-5 mt-12">
          <button className="bg-black text-[14px] rounded-full h-9 w-28 text-white  hover:text-[16px]">Notify Me</button>
          <button className="bg-black  text-[14px]  rounded-full h-9 w-32  text-white  hover:text-[16px]">Shop Air Max</button>
          </div>
          </div>
           </div>


           </>
    )
}