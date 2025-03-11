"use client"

import ProductCard from "@/component/ProductCard"
import SixGridPhoto from "@/component/SixGridPhoto"
import LgPhotoSection from "@/component/LgPhotoSection"
import Image from "next/image"
import Footer from "@/component/Footer"
import Menu from "@/component/Menu"
import { useState } from "react"



export default function MainPage(){
  const [menuShow, setMenuShow] = useState(false) 

  return (
    <div className="container mx-auto flex flex-col items-center">
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
      <div className="filterBar w-full flex flex-row-reverse items-center
 mt-10 mb-1 h-[80px]">
        <div className="filter flex flex-row justify-start ">
          <div className="filter-icon">
              <Image src="/filter.png" alt="filter" width={25} height={25}></Image>
            </div>
            <div className="filter-text pl-3">Filter</div>
          </div>
        </div>
      
        <div className="LgPhotoSection flex flex-row self-center gap-2">
          <LgPhotoSection />
        </div>
        <div className="SixGridSection grid grid-cols-3 place-items-center gap-0">
          <SixGridPhoto />
        </div>
        <div className="ProductSection grid grid-cols-3 place-items-center gap-8 mt-10 mb-20">
          <ProductCard />
        </div>
        <div className="FooterSection flex flex-col h-[360px] w-full bg-[#D9D9D9] justify-start item-start">
          <Footer />
        </div>
    </div>
  )
}