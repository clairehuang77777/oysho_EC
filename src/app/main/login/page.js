import NavBar from "@/component/NavBar"

export default function LoginPagePage(){

  return (
    <>
    <div className="container mx-auto flex flex-col items-center">
          <NavBar/>
        <div className="account-login flex flex-col relative top-[160px] w-[500px] items-center">
          <div className="thank-you text text-2xl">Member login</div>
          <div className="account-login-section flex flex-col mt-10 justify-start">
              <div className="account-input mt-10">
                <label htmlFor="account"></label>
                <input className="border-b-1 border-grey w-[500px] mt-3 text-2xl pl-3 pt-2 pb-2" type="text" name="account" id="account" placeholder="Account "></input>
              </div>
              <div className="password-input mt-10">
                <label htmlFor="password"></label>
                <input className="border-b-1 border-grey w-[500px] mt-3 text-2xl pl-3 pt-2 pb-2" type="password" name="password" id="password" placeholder="Password"></input>
              </div>
              <button type="submit" className="login-submit-btn mt-20 border border-black rounded-md pl-5 pr-5 pt-3 pb-3 bg-black text-white cursor-pointer text-2xl">Login</button>
            </div>
          
        </div>
        </div>
    </>
  )
}