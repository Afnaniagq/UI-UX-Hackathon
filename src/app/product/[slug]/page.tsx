import { client } from "@/sanity/lib/client";
import React from "react";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { FaIndianRupeeSign } from 'react-icons/fa6';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
         _id,
         productName,
         description,
         _type,
         image,
         price,

        }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-16 mb-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product?.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.productName}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl font-bold">{product.productName}</h1>

          <p className=' text-[18px]  mt-7'>{product.description}</p>
          <div className="flex  hover:text-green-500">

          <FaIndianRupeeSign className="text-[32px] mt-3 ml-1" />
          <p className='text-[32px] font-semibold'>{product.price}</p>
          </div>
          <Link href="/cart">  <button className="bg-[#111111] rounded-[30px] text-[#FFFFFF] h-11 w-[174px] relative hover:translate-y-2"> 
     <FiShoppingCart className="flex items-center ml-3  size-6  justify-center absolute"/>
     Add to Cart </button></Link>

        </div>
      </div>
    </div>
  );
}



