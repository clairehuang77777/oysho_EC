"use client"
import Image from "next/image"
import Menu from "@/component/Menu"
import { useState } from "react"


export default function NavBar(){
  const [menuShow, setMenuShow] = useState(false) 

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
          <div className="logo w-20 pl-[20px] text-xl">OYSHO</div>
          <div className="search flex flex-row justify-end w-full">
            <div className="search-icon">
              <Image src="/search.png" alt="search" width={25} height={25}></Image>
            </div>
              <div className="search-text pl-3 border-b w-[100px]">Search</div>
          </div>
          <div className="account-and-cart flex flex-row justify-start w-144 pl-[65px] items-center">
            <div className="account flex flex-row justify-start items-center">
              <div className="account-icon">
                <Image src="/account.png" alt="account" width={25} height={25}></Image>
              </div>
              <div className="account-text pl-3">Account</div>
            </div>
            <div className="cart flex flex-row justify-start pl-5 pr-5 items-center">
              <div className="cart-icon">
                <Image src="/cart.png" alt="search" width={30} height={30}></Image>
              </div>
              <div className="cart-text pl-3">Cart</div>
            </div>
          </div>
        </div>
  )
}