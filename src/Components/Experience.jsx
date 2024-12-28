import React from 'react'
import experience from '../../Data/experience.json'

const Experience = () => {
  return (
    <>
    <h1  className='text-3xl mt-10 ml-10 font-bold '>EXPERIENCE</h1>
     <div data-aos="zoom-in" className='p-10 flex flex-col items-center mt-4'>
      
    {
      experience.map((data)=>{
        return (
 
          <div id='Experience' key={data.role} data-aos="zoom-in"  className='flex border-5 border-yellow-400 rounded-xl shadow-2xl shadow-yellow-400  bg-blue-900 m-4 w-[800px] p-5 items-center gap-6 text-center  '>
      <div className="left  "  >
   <img src={`images/${data.imageSrc}`} alt="" />
      </div>
      <div className="right text-2xl   ">
        {data.role}
        <h4 className='text-green-500'>{data.startDate }  { data.endDate}   <span className='text-white'> {data.location} </span> </h4>
        <h5 className='text-yellow-400'>{data.experiences[0]}</h5>
        <h5 className='text-yellow-400'>{data.experiences[1]}</h5>
      </div>
          
            
          </div>
    
        )
      })
    }
    </div>
    </>
  )
}

export default Experience