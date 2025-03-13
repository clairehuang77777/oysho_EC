"use client"
import NavBar from "@/component/NavBar"
import { useContext, useState } from "react"
import { CartContext } from "@/context/CartContext"
import { useRouter } from "next/navigation"

export default function CardPage(){
  const {totalPrice}=useContext(CartContext)
  console.log(totalPrice)
  const [enterCardPay, setEnterCardPay]=useState(false)
  const router = useRouter()

  function handleCardPay(){
    setEnterCardPay(true)
    setTimeout(()=>{
      router.push("/main/product/thankyou")
    },3000
    )
  }

  return (
    <>
    {enterCardPay && <><div className="cover-image w-full h-dvw bg-black opacity-75 fixed z-99"></div>
    <div className="pop-up-message w-[350px] h-[250px] fixed left-[40%] rounded-lg bg-white z-120 mt-[250px]">
        <p className="loading-text-1 flex flex-rows justify-center self-center text-xl pt-30 ">Processing card....</p>
    </div></>}
  
    <div className="container mx-auto flex flex-col items-center">
          <NavBar/>
        <div className="card flex flex-col relative top-[160px] w-[600px]">
          <div className="card-top flex flex-col aligns-start">
            <div className="card-top-title text-xl pb-5 border-b-1 black">Payment Details</div>
            <div className="1row-input-card flex flex-rows mt-10 justify-start">
              <div className="card-num-input">
              <label htmlFor="card-num">Card Number</label>
                <input className="border-b-1 border-grey w-[550px] mt-3" type="text" name="card-num" id="card-num" placeholder="card number" defaultValue="8847 7585 7585 7585"></input>
              </div>
            </div>
            <div className="2row-input-card flex flex-rows mt-10 justify-start">
              <div className="duedate-input flex flex-col">
                <label htmlFor="duedate">Due Date</label>
                <input className="border-0 w-[240px] border-b-1 border-grey mt-3" type="text" name="duedate" id="duedate" defaultValue="07/29"></input>
              </div>
              <div className="cvc-input flex flex-col ml-20">
                <label htmlFor="cvc">CVC</label>
                <input className="border-0 w-[240px] border-b-1 border-grey mt-3" type="text" name="cvc" id="cvc" defaultValue="948"></input>
              </div>
              </div>

          </div>
          <div className="card-middlebutn flex flex-rows mt-20 mb-10 text-xl justify-end">
              <div className="card-middlebutn-totalprice-text mr-3">Total NTD</div>
              <div className="card-middlebutn-totalprice-price">{totalPrice}</div>
          </div>
          <div className="card-butn flex flex-rows justify-end">
            <button className="card-btn mb-20 border border-black rounded-md pl-5 pr-5 pt-3 pb-3 bg-black text-white cursor-pointer" onClick={()=>handleCardPay()}>Pay with Card</button>
          </div>
        </div>
        </div>
    </>
  )
}