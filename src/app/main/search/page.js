"use client"
import NavBar from "@/component/NavBar"
import ProductCard from "@/component/ProductCard"
import { useRef, useState } from "react"

export default function SearchPage(){
  const selectedProducts = []
  const inputRef = useRef(null)
  const [searchedProduct, setSearchedProduct] = useState([])

  const API_URL = process.env.NEXT_PUBLIC_API_URL


  async function queryProductResult() {
    const keyword = inputRef.current.value
    console.log(keyword)

    if(!keyword){
      console.log("keyword為空")
    }

    const res = await fetch(`${API_URL}/api/search/${keyword}`)
    const selectedProducts = await res.json()
    console.log(selectedProducts)
    setSearchedProduct(selectedProducts)
  }
  
    

  return (
    <>
    <div className="container mx-auto flex flex-col items-center">
          <NavBar/>
        <div className="search flex flex-col relative top-[160px] w-[1200px] items-center">
          <div className="search-section flex flex-rows mt-10 justify-start h-[50px] items-center">
              <div className="search">
                <label htmlFor="search"></label>
                <input ref={inputRef} className="border-b-1 border-grey w-[800px] mt-3 text-2xl pl-3 pt-2 pb-2" type="text" name="search" id="search" placeholder="Type some keywords"></input>
              </div>
              <button type="submit" className="search-btn border rounded-md pl-1 pr-1 pt-2 pb-2 mt-3 ml-4 cursor-pointer text-xl" onClick={()=>queryProductResult()}>Search</button>
            </div>
        <div className="bar-under-search mt-10 mb-10 w-[900px] h-[1px] bg-gray-300"></div>
        <div className="selectedProductArea grid grid-cols-3 place-items-center gap-8 mt-10 mb-20">
          {searchedProduct.length > 0 ? 
            (searchedProduct.map((product)=>(
              <ProductCard key={product.productuniqueid} product={product}/>
              ))
            ) : (
            <p>Theres no search result</p>)
          }
        </div>
      </div>
    </div>
    </>
  )
}