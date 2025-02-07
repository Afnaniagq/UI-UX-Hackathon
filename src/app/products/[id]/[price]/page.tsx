import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart } from "react-icons/fi";
import { FaIndianRupeeSign } from 'react-icons/fa6';




const ProductId = ({params} :{params :{id:string ;image:string ;price:any}}) => {
    //  const path=params.id.toLowerCase() 
    // const productName = decodeURIComponent(path); // Decodes the URL parameter (handles %20)
    const productName = decodeURIComponent(params.id);  //decodeURI for removing white space/%20
    const price=decodeURIComponent(params.price)
     const imagePath=`/${productName}.png`
     console.log(productName)
   
  return (
    <>
    <section className="flex  flex-col lg:flex-row max-w-screen-2xl mx-auto container mb-24">
      {/* left */}
    <div className="mt-[110px] ml-6 lg:ml-48">
     
      <Image src={imagePath} alt={imagePath} height={653} width={653} className='h-[310px] w-[310px] lg:h-[500px] lg:w-[500px]'></Image>
     
      </div>
      {/* right */}
      <div className="w-96  mt-[110px]  ml-4 lg:ml-32">
        <div className="">
      <h2 className='text-5xl font-medium  '>{productName}</h2>
      </div>
        <p className='text-[15px] text  mt-7'>Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
        <div className="flex mt-6 mb-6">
        <FaIndianRupeeSign className="text-[32px] mt-3 ml-1" />
      <p className='text-[32px] font-semibold'>{price}</p>
        </div>
        <Link href="/cart">  <button className="bg-[#111111] rounded-[30px] text-[#FFFFFF] h-11 w-[174px] relative"> 
           <FiShoppingCart className="flex items-center ml-3  size-6 justify-center absolute"/>
           Add to Cart </button></Link>
      </div>
      </section>
    </>
  )
}

export default  ProductId
