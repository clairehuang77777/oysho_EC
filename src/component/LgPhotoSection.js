import Image from "next/image"

export default function LgPhotoSection(){
  return (
    <div className="basis-s flex flex-row self-center gap-2 mb-5" >
      <div className="flex flex-col">
        <Image src="/bnw_viewall.jpg" alt="sixPhoto" width={200} height={355}/>
        <p className="mt-3 mb-3 text-center text-lg">View all</p>
      </div>
      <div className="flex flex-col">
        <Image src="/bnw_flare.jpg" alt="sixPhoto" width={200} height={355}/>
        <p className="mt-3 mb-3 text-center text-lg">flare</p>
      </div>
      <div className="flex flex-col">
        <Image src="/bnw_jogger.jpg" alt="sixPhoto" width={200} height={355}/>
        <p className="mt-3 mb-3 text-center text-lg">jogger</p>
      </div>
      <div className="flex flex-col">
        <Image src="/bnw_straight.jpg" alt="sixPhoto" width={200} height={355}/>
        <p className="mt-3 mb-3 text-center text-lg">straight</p>
      </div> 
      <div className="flex flex-col">
        <Image src="/bnw_wideleg.jpg" alt="sixPhoto" width={200} height={355}/>
        <p className="mt-3 mb-3 text-center text-lg">wideleg</p>
      </div>
      <div className="flex flex-col">
        <Image src="/bnw_ski.jpg" alt="sixPhoto" width={200} height={355}/>
        <p className="mt-3 mb-3 text-center text-lg">ski</p>
      </div>
      <div className="flex flex-col">
        <Image src="/bnw_warm.jpg" alt="sixPhoto" width={200} height={355}/>
        <p className="mt-3 mb-3 text-center text-lg">warm</p>
      </div>
    </div>
  )
}