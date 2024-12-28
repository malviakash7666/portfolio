import React from 'react'
import skills from '../../Data/skills.json'

const Skills = () => {
  return (
    <>
       <h1 className='text-3xl mt-10 ml-10 font-bold '>SKILLS</h1>
      <div id='skills'  className='w-[500px] text-center ml-[20%] grid-cols-2 justify-center grid  gap-3  flex-wrap p-10   '>
       {skills.map((data,id)=>(
        

     <div data-aos="flip-left"   key={data.id} className=' justify-center border-2 rounded-xl flex-row border-yellow-300 shadow-2xl shadow-yellow-300 flex-wrap  block p-4 bg-black'  >
       <img  src={`images/${data.imageSrc}`} alt="" className='w-[25%] ml-[36%]   '    />
       <h1 className='text-2xl'>{data.title}</h1>
       </div>
       ))}
      </div>
    </>
  )
}

export default Skills