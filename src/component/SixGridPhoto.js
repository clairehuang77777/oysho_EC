import Image from "next/image"

export default function SixGridPhoto({sixPhoto}){
  return (
    <>
        <a target="_blank" rel="noopener noreferrer">
          <Image className="block" src="/h_jogger.png" alt="sixPhoto" width={493} height={830}/>
        </a>
        <a target="_blank" rel="noopener noreferrer">
          <Image className="block" src="/h_classic.png" alt="sixPhoto" width={493} height={830}/>
        </a>
        <a target="_blank" rel="noopener noreferrer">
          <Image className="block" src="/h_relaxed.png" alt="sixPhoto" width={493} height={830}/>
        </a>
        <a target="_blank" rel="noopener noreferrer">
          <Image className="block" src="/h_flare.png" alt="sixPhoto" width={493} height={830}/>
        </a>
        <a target="_blank" rel="noopener noreferrer">
          <Image className="block" src="/h_wideleg.png" alt="sixPhoto" width={493} height={830}/>
        </a>
        <a target="_blank" rel="noopener noreferrer">
          <Image className="block" src="/h_straight.png" alt="sixPhoto" width={493} height={830}/>
        </a>
    </>
  )
}