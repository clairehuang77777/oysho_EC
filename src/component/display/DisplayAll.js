import ProductCard from "@/component/ProductCard"
import SixGridPhoto from "@/component/SixGridPhoto"
import { useEffect, useState } from "react"



export default function DisplayAll(){
    const [allProduct, setAllProduct] = useState([])
    
    useEffect(() => {
      async function fetchAllProduct() {
        const API_URL = process.env.NEXT_PUBLIC_API_URL
        const res = await fetch(`${API_URL}/api/all`)
        const products = await res.json()
        console.log(products)
        setAllProduct(products)
      }
      fetchAllProduct()
    }, [])
  return (
    <>
    <div className="SixGridSection grid grid-cols-3 place-items-center gap-0">
        <SixGridPhoto />
    </div>
    <div className="ProductSection grid grid-cols-3 place-items-center gap-8 mt-10 mb-20">
        {allProduct.map((product) => (<ProductCard key={product.productuniqueid} product={product}/>))
        }
    </div>
    </>
  )
}