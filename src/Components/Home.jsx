import React, { useEffect, useRef } from 'react'
import pdf from './resmue/resmue.pdf'
import image from '../../Images/hero/hero.avif'
import Typed from 'typed.js'

const Home = () => {
 
  const typedRef = useRef(null)
  useEffect(() => {
  
    const options = {
      strings:['Welcome to my Profile','My Name is Akash Malvi','I am a Full Stack Developer','Android Developer (React Native)' ],
      typeSpeed:50,
      backSpeed:50,
      loop:true,
    }

    const type = new Typed(typedRef.current , options)
  
    return () => {
type.destroy()
    }
  }, [])
  
  return (

    <>
    <div id='home' data-aos="fade-right" data-aos-duration='3000' className="flex mt-[20vh] gap-20  ml-[10%] mr-[10%] items-center">
<div className=" mt-4 bg-transperent w-[620px] justify-between p-5 text-center border-[1px] rounded-2xl border-yellow-300  shadow-yellow-300 shadow-2xl">
    <h1 className='text-5xl  mb-3'ref={typedRef} ></h1>
    <a href={pdf} download='resmue.pdf' className="bg-transparent border-2 px-2 py-1 border-yellow-300 mt-9 rounded text-yellow-400 font-extrabold  hover:bg-yellow-700">Dowonload Now</a>
</div>
<div className="right w-[300px]   animate-pulse  ">
  <img className='rounded-[50%] img border-yellow-400   shadow-yellow-300 shadow-2xl border-4 ' src={` ${image}`} alt="hero" />
</div>

    </div>
    </>
  )
}

export default Home