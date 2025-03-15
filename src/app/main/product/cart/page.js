"use client"
import CartItem from "@/component/CartItem"
import NavBar from "@/component/NavBar"
import { useState, useEffect,useContext } from "react"
import { CartContext } from "@/context/CartContext"
import { useRouter } from "next/navigation"

export default function CartPage(){
  const router = useRouter()
  const [cartItemDetail,setCartItemDetail]=useState([])
  // const [totalPrice, setTotalPrice] = useState(0)
  const {totalPrice, setTotalPrice}=useContext(CartContext)
  const {cartItemState, setCartItemState}=useContext(CartContext)
  const {totalCartItem, setTotalCartItem}=useContext(CartContext)
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  useEffect(()=>{
    const cartItem = JSON.parse(localStorage.getItem("cart")) ||[]
  //取得一個陣列,要轉成字串 [70000101,70000102]
    console.log(cartItem)
    //把陣列內容去取回所有資料
    async function getCartItemDeatil(){
      const productDetail = await Promise.all(
        cartItem.map(async (id) => {
        const res = await fetch(`${API_URL}/api/productDetail/${id}`)
        return res.json()
        })
      )
      console.log(productDetail)
      setCartItemDetail(productDetail)
    }

    getCartItemDeatil()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cartItemState, API_URL])

  //更新購物車數字
  useEffect(()=>{
      setTotalCartItem(cartItemDetail.length)
      console.log(totalCartItem)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cartItemDetail])

  // //印出現在購物車有多少商品
  //   setTotalCartItem(cartItemDetail.length)

  const productPrice= []

  //計算總價
  useEffect(()=>{
    function getProductSum(){
      for (let i =0 ; i < cartItemDetail.length; i++){
      productPrice.push(cartItemDetail[i].productprice)}

      const sumWithInitial = productPrice.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 0)

      setTotalPrice(sumWithInitial)
      }
  
    getProductSum()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cartItemDetail])
  

  return (
    <div className="container mx-auto flex flex-col items-center">
      <NavBar/>
        <div className="shopping-cart flex flex-col relative top-[160px] w-[600px]">
          <div className="shopping-cart-top flex flex-col aligns-start">
            <div className="shopping-cart-top-title text-xl pb-5 border-b-1 black">Shopping Basket</div>
            <div className="shopping-cart-top-cart-section flex flex-col pt-10 pb-30 overflow-auto">
            {cartItemDetail.map((itemDetail)=>(
               <CartItem key={itemDetail.productuniqueid} addProducts={itemDetail}/> 
            ))
            }
            </div>
          </div>
          <div className="shopping-cart-middlebutn flex flex-rows">
            <div className="shopping-cart-middlebutn-totalprice  flex flex-rows justify-end items-end">
              <div className="shopping-cart-middlebutn-totalprice-text mr-3">Total NTD</div>
              <div className="shopping-cart-middlebutn-totalprice-price">{totalPrice}</div>
            </div>
          </div>
          <div className="shopping-cart-butn flex flex-rows justify-end">
            <button className="shopping-cart-btn mb-20 border border-black rounded-md pl-5 pr-5 pt-3 pb-3 bg-black text-white cursor-pointer" onClick={()=>router.push("/main/product/checkout")}>Continue</button>
          </div>
        </div>
    </div>
  )
}