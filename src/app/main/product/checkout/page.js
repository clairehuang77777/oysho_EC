"use client"
import NavBar from "@/component/NavBar"
import { useContext } from "react"
import { CartContext } from "@/context/CartContext"

export default function CheckoutPage(){
  const {totalPrice}=useContext(CartContext)
  console.log(totalPrice)

  return (
    <div className="container mx-auto flex flex-col items-center">
          <NavBar/>
        <div className="checkout flex flex-col relative top-[160px] w-[600px]">
          <div className="checkout-top flex flex-col aligns-start">
            <div className="shopping-cart-top-title text-xl pb-5 border-b-1 black">Check out Details</div>
            <div className="1row-input flex flex-rows mt-10 justify-center">
              <div className="name-input">
              <label htmlFor="name"></label>
                <input className="border-b-1 border-grey  w-[250px] " type="text" name="cheese" id="name" placeholder="Name"></input>
              </div>
              <div className="surname-input  ml-10">
                <label htmlFor="surname"></label>
                <input className="border-0 w-[250px] border-b-1 border-grey" type="text" name="surname" id="surname" placeholder="surname"></input>
              </div>
            </div>
            <div className="2row-input flex flex-rows mt-10 justify-center">
              <div className="email-input">
                <label htmlFor="email"></label>
                <input className="border-0 w-[250px] border-b-1 border-grey" type="text" name="email" id="email" placeholder="email"></input>
              </div>
              <div className="confirmEmail-input  ml-10">
                <label htmlFor="confirmEmail"></label>
                <input className="border-0 w-[250px] border-b-1 border-grey" type="text" name="confirmEmail" id="confirmEmail" placeholder="confirmEmail"></input>
              </div>
              </div>
            <div className="3row-input flex flex-rows mt-10 justify-center">
            <div className="phone-input">
                <label htmlFor="phone"></label>
                <input className="border-0 w-[250px] border-b-1 border-grey" type="text" name="phone" id="phone" placeholder="phone"></input>
              </div>
              <div className="country-input ml-10">
                <label htmlFor="country"></label>
                <input className="border-0  w-[250px] border-b-1 border-grey" type="text" name="country" id="country" defaultValue="Taiwan"></input>
                </div>
            </div>
            <div className="4ow-input flex flex-rows mt-10 justify-center">
              <div className="address-input">
                <label htmlFor="address"></label>
                  <input className="border-0 w-[540px] border-b-1 border-grey" type="text" name="address" id="address" placeholder="shipping address"></input>
              </div>
            </div>
          </div>
          <div className="checkout-middlebutn flex flex-rows mt-20 mb-10 text-xl justify-end">
              <div className="checkout-middlebutn-totalprice-text mr-3">Total NTD</div>
              <div className="checkout-middlebutn-totalprice-price">{totalPrice}</div>
          </div>
          <div className="checkout-butn flex flex-rows justify-end">
            <button className="checkout-btn mb-20 border border-black rounded-md pl-5 pr-5 pt-3 pb-3 bg-black text-white cursor-pointer">Pay with Card</button>
          </div>
        </div>
        </div>
  )
}