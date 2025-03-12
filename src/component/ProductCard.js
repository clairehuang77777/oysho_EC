import Image from "next/image"

export default function ProductCard({product}){
  return (
    <>
    <div className="ProductSection-ProductCard-1 basis-xs ">
      <div className="ProductSection-ProductCard-pic">
        <Image src={product.productsrc} alt="sixPhoto" width={280} height={338}/>
      </div>
      <div className="ProductSection-ProductCard-title font-mono mt-2 mb-2 text-sm w-[280px]">{product.productname} </div>
      <div className="ProductSection-ProductCard-price flex mt-2 font-mono mb-2 text-sm">
        <div className="ProductSection-ProductCard-price-text mr-3">NTD</div>
        <div className="ProductSection-ProductCard-price-num">{product.productprice}</div>
      </div>
      <div className="ProductSection-ProductCard-color text-sm">{product.productcolor}</div>
    </div>
    </>
  )
}