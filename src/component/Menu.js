"use client"
import { useRouter } from 'next/navigation'

export default function Menu(){
  const router = useRouter()

  return (
  <div className="menu-area bg-[#FFFFFF] w-[300px] h-[800px] absolute top-10">
      <div className="menu-text flex flex-col items-center">
        <button className="link mt-5 mb-3 text-lg cursor-pointer" onClick={() => router.push('/main')}>ALL</button>
        <button className="link mt-5 mb-3 text-lg cursor-pointer" onClick={() => router.push('/main/flare')}>flare</button>
        <button className="link mt-5 mb-3 text-lg cursor-pointer" onClick={() => router.push('/main/jogger')}>jogger</button>
        <button className="link mt-5 mb-3 text-lg cursor-pointer" onClick={() => router.push('/main/straight')}>straight</button>
        <button className="link mt-5 mb-3 text-lg cursor-pointer" onClick={() => router.push('/main/wideleg')}>wideleg</button>
        <button className="link mt-5 mb-3 text-lg cursor-pointer" onClick={() => router.push('/main/ski')}>ski</button>
        <button className="link mt-5 mb-3 text-lg cursor-pointer" onClick={() => router.push('/main/warm')}>warm</button>
      </div>
    </div>
  )
}