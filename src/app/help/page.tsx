import { Search, ThumbsDown, ThumbsUp } from "lucide-react";

export default function Help(){
    return(
        <>
        <section className="h-[1975px] md:h-[1225px]   w-[330px] md:w-full max-w-screen-2xl mx-auto container bg-[#FFFFFF]">
           
            {/* first search div */}
            <div className=" h-[132px]   md:w-auto lg:pl-[485px] lg:mt-14  lg:flex-row">
                <h1 className="text-[23px] lg:text-[32px] font-semibold ml-24 lg:ml-36">GET HELP</h1>
                <div className=" flex  relative mt-5 ">
           
            <Search  className="absolute transform translate-y-5 text-[#757575] translate-x-64 lg:translate-x-96 h-[16.72px] w-[16.72px] "/>
                <input type="search" placeholder="What can we help you with?" className="h-12 lg:-14 w-[250px] lg:w-[457.33px] ml-10 lg:ml-0 pl-5  text-[#CCCC] flex text-[13px]  bg-[#FFFFF] border-[1px] border-[#CCCC] rounded-[9px]" />
                
            </div>
            </div>
            {/* main big div */}
            <div className=" h-[1042px]  flex  flex-col  md:flex-row lg:justify-center ">
            {/*left div  */}
            <div className=" h-[1024px] w-[300px] md:w-[500px] lg:w-[939px] space-y-4">
                <h2 className="font-semibold text-[10px] lg:text-[28px] mt-3">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
                <p className=" text-[10px]  lg:text-[15px]">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                <p className=" text-[10px] lg:text-[15px] ml-9">Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
                <p className=" text-[10px] lg:text-[15px] ml-9">If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</p>
                <p className=" text-[10px] lg:text-[15px] ml-9">Apple Pay</p>
                <p className=" text-[10px] lg:text-[15px]"><a href="#" className="underline font-medium  text-[10px] lg:text-[15px]">Nike Members </a>can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join us today.</p>

             {/* buttons   */}
             <div className="flex gap-4">
               <a href="/join">
             <button className="bg-black text-[11px] lg:text-[14px] rounded-full h-[34px] lg:h-[39px] w-[92px] lg:w-[106px] text-white  hover:text-[16px]" >JOIN US</button>
             </a> 
             <a href="/products">
             <button className="bg-black text-[11px] lg:text-[14px]  rounded-full h-[34px] lg:h-[39px] w-[110px] lg:w-[129px]  text-white  hover:text-[16px]">SHOP NIKE</button>
             </a>
             </div>
             {/* FAQ */}
             <div className="mt-2 ">
                <h2 className="text-[10px]   lg:text-[20px] font-semibold ">FAQs</h2>
                <h3 className="text-[10px]   font-semibold lg:text-[16px]">Does my card need international purchases enabled?</h3>
                <p className="text-[10px]   lg:text-[16px] mt-3">Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>

                <p className="text-[10px]   mt-4 lg:text-[16px]">Please note, some banks may charge <a className="text-[10px]   underline font-semibold" href="#">a small transaction fee </a>for international orders.</p>

                <h3 className="text-[10px]   font-semibold  lg:text-[16px] mt-4">Can I pay for my order with multiple methods?</h3>
                <p className="text-[10px]   mt-3  lg:text-[16px]">No, payment for Nike orders can't be split between multiple payment methods.</p>

                <h3 className="text-[10px]   font-semibold  lg:text-[16px] mt-4">What payment method is accepted for SNKRS orders?</h3>
                <p className="text-[10px]   mt-3  lg:text-[16px]">You can use any accepted credit card to pay for your SNKRS order.</p>

                <h3 className="text-[10px]   font-semibold  lg:text-[16px] mt-4">Why don't I see Apple Pay as an option?</h3>
                <p className="text-[10px]   mt-3  lg:text-[16px]">To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
             </div>

             {/* para  */}
             <p className="text-[10px] lg:text-[15px] mt-4">Was this answer helpful?</p>

              {/* like & dislike  */}

             <div className="flex gap-1">
             <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" className="hover:text-blue-500"><path fill="currentColor" d="M15.056 9.004q.692-2.14.693-3.754c0-2.398-.939-4.247-2.5-4.247c-.847 0-1.109.504-1.437 1.747c.018-.065-.163.634-.215.821q-.152.539-.527 1.831a.3.3 0 0 1-.03.065L8.174 9.953a5.9 5.9 0 0 1-2.855 2.326l-1.257.482a1.75 1.75 0 0 0-1.092 1.967l.686 3.539a2.25 2.25 0 0 0 1.673 1.757l8.25 2.022a4.75 4.75 0 0 0 5.733-3.44l1.574-6.173a2.75 2.75 0 0 0-2.665-3.43z"></path></svg>

             <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" className="hover:text-blue-500"><path fill="currentColor" d="M15.056 14.183q.692 2.139.693 3.753c0 2.398-.939 4.247-2.5 4.247c-.8 0-1.078-.45-1.383-1.546l-.27-1.022q-.15-.538-.526-1.83a.3.3 0 0 0-.03-.066l-2.866-4.485a5.9 5.9 0 0 0-2.855-2.327l-1.257-.481A1.75 1.75 0 0 1 2.97 8.458l.686-3.538a2.25 2.25 0 0 1 1.673-1.758l8.25-2.021a4.75 4.75 0 0 1 5.733 3.44l1.574 6.172a2.75 2.75 0 0 1-2.665 3.43z"></path></svg>

             </div>
 
             <p className="text-[#757575]  text-[10px] lg:text-[16px]">RELATED</p>
             <div className="flex flex-col ml-[16px] space-y-4">
             <a href="#" className="underline  text-[10px] lg:text-[16px] font-medium">WHAT ARE NIKE'S DELIVERY OPTIONS?</a>
             <a href="#" className="underline  text-[10px] lg:text-[16px] font-medium">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</a>
             </div>

             
            </div>
            {/* second section of div contact */}
            {/* <div className="hidden md:block lg:h-[1024px] w-[1px] bg-[#757575] "></div> */}
           

            {/*right div  */}
            <div className="h-[1024px] w-[313.25px] flex justify-center mt-8 lg:mt-0">
                <div className="flex flex-col items-center">
                <h2 className="font-semibold  text-[22px] lg:text-[28px]">CONTACT US</h2>
                <div className="flex items-center flex-col">
             First icon 
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" className=" mt-5 hover:text-gray-500"><path fill="currentColor" d="M16.73 2.065H7.27a2.386 2.386 0 0 0-2.24 2.5v14.87a2.386 2.386 0 0 0 2.24 2.5h9.46a2.386 2.386 0 0 0 2.24-2.5V4.565a2.386 2.386 0 0 0-2.24-2.5m1.24 17.37a1.39 1.39 0 0 1-1.24 1.5H7.27a1.39 1.39 0 0 1-1.24-1.5V4.565a1.39 1.39 0 0 1 1.24-1.5H8.8v.51a1 1 0 0 0 1 1h4.4a1 1 0 0 0 1-1v-.51h1.53a1.39 1.39 0 0 1 1.24 1.5Z"/><path fill="currentColor" d="M10 18.934h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1"/></svg>
               
                <p className="text-[10px] lg:text-[16px] font-semibold mt-2">000 800 919 0566</p>
                <p className="text-[10px] lg:text-[16px] ">Products & Orders: 24 hours a day,</p>
                <p className="text-[10px] lg:text-[16px] "> 7 days a week</p>
                <p className="text-[10px] lg:text-[16px] ">Company Info & Enquiries: 07:30 -</p>
                <p className="text-[10px] lg:text-[16px] "> 16:30, Monday - Friday</p>
              Second icon

                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 24 24 " className="mt-16 hover:text-blue-400"><path fill="currentColor" d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M8 12a1 1 0 1 1 1-1a1 1 0 0 1-1 1m4 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1m4 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1"/></svg>
                <p className="text-[10px] lg:text-[16px] mt-3 font-semibold">24 hours a day</p>
                <p className="text-[10px] lg:text-[16px]">7 days a week</p>
              Third icon 
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 100 100" className="mt-16 hover:text-yellow-300"><path fill="currentColor" d="M85.944 20.189H14.056a2.56 2.56 0 0 0-2.556 2.557v5.144c0 .237.257.509.467.619l37.786 21.583a.63.63 0 0 0 .318.083a.63.63 0 0 0 .324-.088L87.039 28.53c.206-.115.752-.419.957-.559c.248-.169.504-.322.504-.625v-4.601a2.56 2.56 0 0 0-2.556-2.556m2.237 15.457a.64.64 0 0 0-.645.004L66.799 47.851a.637.637 0 0 0-.145.985l20.74 22.357a.63.63 0 0 0 .467.204a.64.64 0 0 0 .639-.639V36.201a.64.64 0 0 0-.319-.555M60.823 51.948a.636.636 0 0 0-.791-.118l-8.312 4.891a3.24 3.24 0 0 1-3.208.021l-7.315-4.179a.64.64 0 0 0-.751.086L12.668 78.415a.64.64 0 0 0 .114 1.02c.432.254.849.375 1.273.375h71.153a.64.64 0 0 0 .585-.385a.64.64 0 0 0-.118-.689zm-26.489-2.347a.64.64 0 0 0-.115-1.023L12.453 36.146a.638.638 0 0 0-.953.556v32.62a.637.637 0 0 0 1.073.468z"/></svg>

                <p className="text-[16px] mt-3 font-semibold">We'll reply within</p>
                <p className="text-[16px] ">five business days</p>
              Fourth icon

                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" className="mt-16 hover:text-red-500"><path fill="currentColor" d="M6.14 4.648A8.34 8.34 0 0 1 12 2.25c2.196 0 4.304.861 5.86 2.398c1.409 1.39 2.143 2.946 2.337 4.562c.193 1.602-.152 3.21-.81 4.718c-1.306 3-3.902 5.728-6.392 7.503a1.71 1.71 0 0 1-1.99 0c-2.49-1.775-5.086-4.504-6.393-7.503c-.657-1.508-1.001-3.116-.809-4.719c.194-1.615.928-3.17 2.337-4.561m8.713 3.791a.75.75 0 0 0-1.216-.878l-2.467 3.416l-1.005-1.148a.75.75 0 1 0-1.13.987l1.38 1.576c.443.507 1.244.47 1.639-.077z"/></svg>


                <p  className="text-[15px] mt-3 font-semibold">STORE LOCATOR</p>
                <p  className="text-[15px]  mb-44 lg:mb-0">Find Nike retail stores near you</p>

                
                </div>
                </div>
                
               
            
            </div>
                
            </div>
        

        </section>
        
        </>
    )
}