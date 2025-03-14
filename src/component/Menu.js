"use client"
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Menu(){
  const router = useRouter()

  return (
  <motion.div className="menu-area bg-white w-[300px] h-[800px] absolute top-20 fixed z-999" initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="menu-text flex flex-col items-center">
        <button className="link mt-5 mb-3 text-lg cursor-pointer" onClick={() => router.push('/main')}>ALL</button>
        <button className="link mt-5 mb-3 text-lg cursor-pointer" onClick={() => router.push('/main/flare')}>flare</button>
        <button className="link mt-5 mb-3 text-lg cursor-pointer" onClick={() => router.push('/main/jogger')}>jogger</button>
        <button className="link mt-5 mb-3 text-lg cursor-pointer" onClick={() => router.push('/main/straight')}>straight</button>
        <button className="link mt-5 mb-3 text-lg cursor-pointer" onClick={() => router.push('/main/wideleg')}>wideleg</button>
        <button className="link mt-5 mb-3 text-lg cursor-pointer" onClick={() => router.push('/main/ski')}>ski</button>
        <button className="link mt-5 mb-3 text-lg cursor-pointer" onClick={() => router.push('/main/warm')}>warm</button>
      </div>
    </motion.div>
  )
}