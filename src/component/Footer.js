export default function Footer(){
  return (
    <div className="footer w-full bg-[#D9D9D9]">
      <div className="footer-top flex flex-col mt-20 item-start w-full pl-10">
        <label htmlFor="email">
          <p className="text-2xl">Join the Oysho Community</p></label>
        <input className="mt-10 border-b border-black-100 h-[20px] w-[450px] focus:outline-none text-xl" id="email" name="email" type="text"></input>
        <div className="footer-top-btn-area flex flex-row items-end nt-3">
          <button className="rounded-lg m-2 pt-2 pb-2 pl-4 pr-4 border-1 mt-2" ype="submit">Join</button>
          <button className="underline pl-15 mb-3"type="submit">Unsubsribe me</button>
        </div>
      </div>
      <div className="footer-button flex flex-row pl-10 pt-5">
        <a className="" href="https://www.facebook.com">facebook</a>
        <a className="pl-5" href="https://www.twitter.com">facebook</a>
      </div>
  </div>
  )
}
