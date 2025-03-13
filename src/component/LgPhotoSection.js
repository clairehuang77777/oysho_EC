import Image from "next/image"
import Link from "next/link"

export default function LgPhotoSection(){
  return (
    <div className="basis-s flex flex-row self-center gap-2 mb-5" >
        <div className="flex flex-col">
          <Link className="block cursor-pointer" href="/main">
            <Image src="/bnw_viewall.jpg" alt="sixPhoto" width={200} height={355} alt="photo"/>
            <p className="mt-3 mb-3 text-center text-lg">View all</p>
          </Link>
        </div>
      
      <Link href="/main/flare">
        <div className="flex flex-col">
          <Image src="/bnw_flare.jpg" alt="sixPhoto" width={200} height={355}/>
          <p className="mt-3 mb-3 text-center text-lg">flare</p>
        </div>
      </Link>
      <Link href="/main/jogger">
        <div className="flex flex-col">
          <Image src="/bnw_jogger.jpg" alt="sixPhoto" width={200} height={355}/>
          <p className="mt-3 mb-3 text-center text-lg">jogger</p>
        </div>
      </Link>
      <Link href="/main/straight">
        <div className="flex flex-col">
          <Image src="/bnw_straight.jpg" alt="sixPhoto" width={200} height={355}/>
          <p className="mt-3 mb-3 text-center text-lg">straight</p>
        </div> 
      </Link>
      <Link href="/main/wideleg">
      <div className="flex flex-col">
        <Image src="/bnw_wideleg.jpg" alt="sixPhoto" width={200} height={355}/>
        <p className="mt-3 mb-3 text-center text-lg">wideleg</p>
      </div>
      </Link>
      <Link href="/main/ski">
        <div className="flex flex-col">
          <Image src="/bnw_ski.jpg" alt="sixPhoto" width={200} height={355}/>
          <p className="mt-3 mb-3 text-center text-lg">ski</p>
        </div>
      </Link>
      <Link href="/main/warm">
      <div className="flex flex-col">
        <Image src="/bnw_warm.jpg" alt="sixPhoto" width={200} height={355}/>
        <p className="mt-3 mb-3 text-center text-lg">warm</p>
      </div>
      </Link>
    </div>
  )
}