import React from 'react'
import project from '../../Data/projects.json'
const Projects = () => {
  return (
    <>
    <h1 className='text-4xl uppercase'>Projects</h1>
    
    <div id='projects' className='grid grid-cols-3  p-5  items-center  ' >
      {project.map((data)=> (
<div className="flex justify-center items-center  " key={data.key}>

<div data-aos="flip-right"   className="card items-center p-3 flex border-4 shadow-2xl  shadow-yellow-300 border-yellow-300 justify-center bg-black text-white w-[70%]" key={data.id} >
  <img src={`${data.imageSrc}`} className="card-img-top border-2 border-yellow-300" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.description}</p>
   <div className='flex  items-center mt-3'>
   <a href={data.demo} className="btn btn-primary  mr-4 
    ">Demo</a>
    <a href={data.source} className="btn hover:bg-yellow-500 bg-yellow-400
    ">Code</a>
   </div>
  </div>
</div>

</div>

      ))}
    </div>
    </>
  )
}

export default Projects