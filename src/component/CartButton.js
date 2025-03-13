"use client"
import { useRouter } from 'next/navigation'

export default function CartButton({productID}){
  const router = useRouter()
  const addToCart = () => {
    //取得現有localStorage購物車內容
    const cart = JSON.parse(localStorage.getItem("cart"))||[]
    console.log(cart)
    //把新的push上去
    cart.push(productID)
    console.log(cart)
    //更新購物車內容
    localStorage.setItem("cart",JSON.stringify(cart))
    console.log(cart)
    //跳轉到cart頁面
    router.push('/main/product/cart')
  }
  return (
    <button className="addSubmitBtn rounded-md border border-black pl-10 pr-10 pt-3 pb-3 block cursor-pointer" type="submit" onClick={addToCart}>add</button>
  )
}