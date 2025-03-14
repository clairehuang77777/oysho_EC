"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

export default function LgPhotoSection(){
  const [mouseIn, setMouseIn] = useState(false)
  const [mouseIn2, setMouseIn2] = useState(false)
  const [mouseIn3, setMouseIn3] = useState(false)
  const [mouseIn4, setMouseIn4] = useState(false)
  const [mouseIn5, setMouseIn5] = useState(false)
  const [mouseIn6, setMouseIn6] = useState(false)
  const [mouseIn7, setMouseIn7] = useState(false)
  console.log(mouseIn)

  return (
    <div className="basis-s flex flex-row self-center gap-2 mb-5" >
        <div className="flex flex-col">
          <Link className="block cursor-pointer" href="/main" 
          onMouseEnter={()=>setMouseIn(true)} 
          onMouseLeave={()=>setMouseIn(false)}>
            <Image src="/bnw_viewall.jpg" alt="sixPhoto" width={200} height={355} alt="photo"/>
            <p className="mt-3 mb-3 text-center text-lg">View all</p>
            <motion.div className="button-line w-[200px] h-[3px] bg-black origin-left" 
            initial={{ scaleX:0 }} 
            animate={ mouseIn ? {scaleX:1} : {scaleX:0 }} 
            transition={{duration:0.2}} 
            ></motion.div>
          </Link>
        </div>
      
      <Link href="/main/flare" onMouseEnter={()=>setMouseIn2(true)} 
          onMouseLeave={()=>setMouseIn2(false)}>
        <div className="flex flex-col">
          <Image src="/bnw_flare.jpg" alt="sixPhoto" width={200} height={355}/>
          <p className="mt-3 mb-3 text-center text-lg">flare</p>
          <motion.div className="button-line w-[200px] h-[3px] bg-black origin-left" 
            initial={{ scaleX:0 }} 
            animate={ mouseIn2 ? {scaleX:1} : {scaleX:0 }} 
            transition={{duration:0.2}} 
            ></motion.div>
        </div>
      </Link>
      <Link href="/main/jogger" onMouseEnter={()=>setMouseIn3(true)} 
          onMouseLeave={()=>setMouseIn3(false)}>
        <div className="flex flex-col">
          <Image src="/bnw_jogger.jpg" alt="sixPhoto" width={200} height={355}/>
          <p className="mt-3 mb-3 text-center text-lg">jogger</p>
          <motion.div className="button-line w-[200px] h-[3px] bg-black origin-left" 
            initial={{ scaleX:0 }} 
            animate={ mouseIn3 ? {scaleX:1} : {scaleX:0 }} 
            transition={{duration:0.2}} 
            ></motion.div>
        </div>
      </Link>
      <Link href="/main/straight" onMouseEnter={()=>setMouseIn4(true)} 
          onMouseLeave={()=>setMouseIn4(false)}>
        <div className="flex flex-col">
          <Image src="/bnw_straight.jpg" alt="sixPhoto" width={200} height={355}/>
          <p className="mt-3 mb-3 text-center text-lg">straight</p>
          <motion.div className="button-line w-[200px] h-[3px] bg-black origin-left" 
            initial={{ scaleX:0 }} 
            animate={ mouseIn4 ? {scaleX:1} : {scaleX:0 }} 
            transition={{duration:0.2}} 
            ></motion.div>
        </div> 
      </Link>
      <Link href="/main/wideleg" onMouseEnter={()=>setMouseIn5(true)} 
          onMouseLeave={()=>setMouseIn5(false)}>
      <div className="flex flex-col">
        <Image src="/bnw_wideleg.jpg" alt="sixPhoto" width={200} height={355}/>
        <p className="mt-3 mb-3 text-center text-lg">wideleg</p>
        <motion.div className="button-line w-[200px] h-[3px] bg-black origin-left" 
            initial={{ scaleX:0 }} 
            animate={ mouseIn5 ? {scaleX:1} : {scaleX:0 }} 
            transition={{duration:0.2}} 
            ></motion.div>
      </div>
      </Link>
      <Link href="/main/ski" onMouseEnter={()=>setMouseIn6(true)} 
          onMouseLeave={()=>setMouseIn6(false)}>
        <div className="flex flex-col">
          <Image src="/bnw_ski.jpg" alt="sixPhoto" width={200} height={355}/>
          <p className="mt-3 mb-3 text-center text-lg">ski</p>
          <motion.div className="button-line w-[200px] h-[3px] bg-black origin-left" 
            initial={{ scaleX:0 }} 
            animate={ mouseIn6 ? {scaleX:1} : {scaleX:0 }} 
            transition={{duration:0.2}} 
            ></motion.div>
        </div>
      </Link>
      <Link href="/main/warm" onMouseEnter={()=>setMouseIn7(true)} 
          onMouseLeave={()=>setMouseIn7(false)}>
      <div className="flex flex-col">
        <Image src="/bnw_warm.jpg" alt="sixPhoto" width={200} height={355}/>
        <p className="mt-3 mb-3 text-center text-lg">warm</p>
        <motion.div className="button-line w-[200px] h-[3px] bg-black origin-left" 
            initial={{ scaleX:0 }} 
            animate={ mouseIn7? {scaleX:1} : {scaleX:0 }} 
            transition={{duration:0.2}} 
            ></motion.div>
      </div>
      </Link>
    </div>
  )
}