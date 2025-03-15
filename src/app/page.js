"use client"

import LgPhotoSection from "@/component/LgPhotoSection"
import Image from "next/image"
import Footer from "@/component/Footer"
import Menu from "@/component/Menu"
import { useState , useEffect } from "react"
import DisplayAll from "@/component/display/DisplayAll"
import DisplayFlaire from "@/component/display/DisplayFlaire"
import NavBar from "@/component/NavBar"

/*Display All的資料要從請求/api/all而來*/



export default function MainPage(){
  const [menuShow, setMenuShow] = useState(false) 

  return (
    <div className="container mx-auto flex flex-col items-center">
    <NavBar/>
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
      < DisplayAll/>
      <div className="FooterSection flex flex-col h-[360px] w-full bg-[#D9D9D9] justify-start item-start">
          <Footer />
        </div>
    </div>
  )
}