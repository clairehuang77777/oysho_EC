"use client"
import Image from "next/image"
import { useEffect, useContext } from "react"
import { CartContext } from "@/context/CartContext"

export default function CartItem({addProducts}){
  const {cartItemState, setCartItemState} = useContext(CartContext)
  const addItem = localStorage.getItem("cart")
  console.log(addItem) //[72000103,73000102,71000101,71000103]



  const deleteCartItem = (deleteItemID) =>{
    //取得
    let originalItem = JSON.parse(localStorage.getItem("cart"))||[]
    console.log(originalItem)
    localStorage.removeItem("cart")
    const newItem = originalItem.filter((Item)=> Item != deleteItemID)
    console.log(newItem)
    localStorage.setItem("cart", JSON.stringify(newItem))
    setCartItemState(newItem)
  }

  return (
          <div className="shopping-cart-top-cart-content flex flex-rows m-3">
            <div className="cart-content-left w-1/4">
              <Image src={addProducts.productsrc} alt="product" width={100} height={100}/>
            </div>
            <div className="cart-content-middle w-1/2 flex flex-col">
              <div className="cart-content-middle-title">{addProducts.productname}</div>
              <button className="cart-content-middle-deleteBtn mt-7 border border-grey rounded-md pl-3 pr-3 pt-1 pb-1 w-1/4 text-grey cursor-pointer" onClick={()=>deleteCartItem(addProducts.productuniqueid)}>delete</button>
            </div>
            <div className="cart-content-right w-1/4 pl-10 flex flex-rows">
              <div className="cart-content-middle-price-text">NTD</div>
              <div className="cart-content-middle-price-num">{addProducts.productprice}</div>
            </div>
          </div>
  )
}