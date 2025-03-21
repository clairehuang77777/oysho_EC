"use client"
import Image from "next/image"
import Menu from "@/component/Menu"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { CartContext } from "@/context/CartContext"
import { useContext } from "react"
import { Playfair_Display } from "next/font/google";


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"], // 選擇需要的字重，避免載入多餘字體
});

export default function NavBar(){
  const [menuShow, setMenuShow] = useState(false) 
  const router = useRouter()
  // const {totalCartItem, setTotalCartItem} = useContext(CartContext)
  const {totalCartItem, setTotalCartItem}=useContext(CartContext)

  return(
        <div className="navBar w-full flex flex-row justify-start mt-0 mb-3 items-center h-[60px] fixed top-0 bg-[#FFFFFF]">
          <div className="hamburgerBar w-20 pl-[30px] relative">
            <input type="checkbox" id="menu" className="hidden"></input>
            <label htmlFor="menu" onClick={()=>setMenuShow(!menuShow)}>
              <Image id="menu" name="menu" src="/menu.png" alt="search" width={25} height={25}></Image>
            </label>
            {menuShow && (
              <Menu/>
            )}
          </div>
          <div className={`logo w-20 pl-[20px] text-5xl ${playfair.className}`}>OYSHO</div>
          <button className="search flex flex-row justify-end w-full cursor-pointer" onClick={()=>router.push('/main/search')}>
            <div className="search-icon">
              <Image src="/search.png" alt="search" width={25} height={25}></Image>
            </div>
              <div className="search-text pl-3 border-b w-[100px]" >Search</div>
          </button>
          <div className="account-and-cart flex flex-row justify-start w-144 pl-[65px] items-center">
            <button className="account flex flex-row justify-start items-center cursor-pointer" onClick={()=>router.push('/main/login')}>
              <div className="account-icon">
                <Image src="/account.png" alt="account" width={25} height={25}></Image>
              </div>
              <div className="account-text pl-3">Account</div>
            </button>
            <button className="cart flex flex-row justify-start pl-5 pr-5 items-center cursor-pointer" onClick={()=>router.push('/main/product/cart')}>
              <div className="cart-icon relative">
                <div className="total-cart-item bg-black  rounded-[45px] absolute left-4 w-[20px] h-[20px] text-white">{totalCartItem}</div>
                <Image src="/cart.png" alt="search" width={30} height={30}></Image>
              </div>
              <div className="cart-text pl-3">Cart</div>
            </button>
          </div>
        </div>
  )
}