import React from 'react'
import {features} from "../constants";
import images from "../assets/images"
import '../index.css'

const Feature = () => 
   (
    <section className='text-white text-center '>
     <div className=' grid grid-rows-2 gap-10 m-auto w-3/5 sm:grid-cols-2 '>

{features.map((feature)=>(
<div key={feature.id} className='w-full'>
      <img src={feature.icon} alt="images"  className=' w-[60px] h-[60px] object-contain m-auto'/>
    
<h2 className='text-lg font-raleway my-4'>{feature.title}</h2>
<p className='leading-normal text-[14px] font-opensans text-white/50'>{feature.content}</p>

</div>


))}


</div>
    
    </section>
  )


export default Feature