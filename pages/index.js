import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  return(
  
     <div className='h-[100vh] w-[100vw] flex flex-wrap items-center justify-center text-white pl-4 gap-8 relative'>
       <Image src='/12.jpg' layout='fill'/>
      <div className='backdrop-blur-sm absolute top-16 text-4xl font-thin ' >Glassmorphism cards using tailwind css :</div>
       <div className='backdrop-blur-sm bg-black/30 w-[400px] h-[250px] shadow-xl shadow-black rounded-xl flex flex-row hover:scale-110 '>
        <div className='basis-1/2 text-center font-light mt-4'>
          <div className='text-3xl mb-4'>Music</div>
          <div>Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion.</div>
        </div>
        <div className='flex items-center justify-center'>
          <Image src='/18.jpg' height={250} width={200} className='rounded-r-xl'/>
        </div>
       </div>
       <div className='backdrop-blur-sm bg-black/30 w-[400px] h-[250px] shadow-xl shadow-black rounded-xl flex flex-row hover:scale-110'>
        <div className='basis-1/2 text-center font-light mt-4'>
          <div className='text-3xl mb-4'>Music</div>
          <div>Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion.</div>
        </div>
        <div>
          <Image src='/18.jpg' height={250} width={200} className='rounded-r-xl '/>
        </div>
       </div>
       <div className='backdrop-blur-sm bg-black/30 w-[400px] h-[250px] shadow-xl shadow-black rounded-xl flex flex-row hover:scale-110'>
        <div className='basis-1/2 text-center font-light mt-4'>
          <div className='text-3xl mb-4'>Music</div>
          <div>Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion.</div>
        </div>
        <div>
          <Image src='/18.jpg' height={250} width={200} className='rounded-r-xl'/>
        </div>
       </div>
     </div>
   
  )
}
