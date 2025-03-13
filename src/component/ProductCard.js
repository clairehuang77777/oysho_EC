"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import CartButton from "./CartButton"

export default function ProductCard({product}){
  const router = useRouter()

  return (
    <>
    <div className="ProductSection-ProductCard-1 basis-xs block cursor-pointer">
      <div className="ProductSection-ProductCard-pic" onClick={()=>router.push(`/main/product/${product.productuniqueid}`)}>
        <Image src={product.productsrc} alt="sixPhoto" width={280} height={338}/>
      </div>
      <div className="ProductSection-ProductCard-title font-mono mt-2 mb-2 text-sm w-[280px]">{product.productname} </div>
      <div className="product-button-section flex flex-rows">
          <div className="product-price-and-color mr-[150px]">
          <div className="ProductSection-ProductCard-price flex mt-2 font-mono mb-2 text-sm">
            <div className="ProductSection-ProductCard-price-text mr-3">NTD</div>
            <div className="ProductSection-ProductCard-price-num">{product.productprice}</div>
          </div>
          <div className="ProductSection-ProductCard-color text-sm">{product.productcolor}</div>
      </div>
      <div className="product-add-btn">
        <CartButton productID={product.productuniqueid}/>
      </div>
        </div>
    </div>
    </>
  )
}