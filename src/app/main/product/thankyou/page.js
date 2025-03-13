"use client"
import NavBar from "@/component/NavBar"
import { useRouter } from "next/navigation"

export default function CardPage(){
  const router = useRouter()

  return (
    <>
    <div className="container mx-auto flex flex-col items-center">
          <NavBar/>
        <div className="thank-you flex flex-col relative top-[160px] w-[600px] items-center">
          <div className="thank-you text mt-[200px]">Thank you for your purchase!</div>
          <button className="backToMain mt-[50px] mb-20 border border-black rounded-md pl-5 pr-5 pt-3 pb-3 bg-black text-white cursor-pointer" onClick={()=>router.push('/main')} type="submit">Back to main</button>
        </div>
        </div>
    </>
  )
}