import Image from "next/image"
import NavBar from "@/component/NavBar"
import Link from "next/link"
import CartButton from "@/component/CartButton"


export default async function ProductPage({params}){
  const { id } = params
  
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const res = await fetch(`${API_URL}/api/productDetail/${id}`,{cache : "no-store"})
  console.log(res)
  const product = await res.json()
  console.log(product)
  return (
    <div className="container mx-auto flex flex-col items-center">
      <NavBar/>npm 
      <div className="productPageSection w-full flex flex-rows relative top-[160px]">
        <div className="left-section flex flex-col ml-10 w-2/8 ">
          <div className="left-section-top-btn">
          <Link href="/main/flare">
            <Image className="ml-35" src="/back.png" width={50} height={50} alt="back"/>
          </Link>
          </div>
        </div>
        <div className="center-section w-3/8">
          <div className="center-section-product-pic pl-10 pr-20">
            {product.productsrc ? (
              <Image src={product.productsrc} width={475} height={454} alt="product image"/>
            ): (
              <p>Theres no image</p>
            )}
          </div>
        </div>
        <div className="right-section w-4/8">
          <div className="right-section-product-detail">
            <div className="right-section-product-detail-name text-2xl">{product.productname}</div>
            <div className="right-section-product-detail-price mt-5 flex flex-rows">
              <div className="right-section-product-detail-pricetext text-xl">NTD $</div>
              <div className="right-section-product-detail-pricenum text-xl pl-3">{product.productprice}
              </div>
            </div>
            <div className="right-section-product-detail-color mt-5">{product.productcolor}</div>
          </div>
          <div className="right-section-product-size mt-20"></div>
          <div className="right-section-product-add-to-basket mt-10">
            <CartButton productID={product.productuniqueid}/>
        </div>
      </div>
      </div>
    </div>
  )
}