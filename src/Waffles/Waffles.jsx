import React from 'react'
import HoverImage from '../website/HoverImage'
function Waffles() {
  return (
    <div>
      <div>
    <h1 className='text-gray-800 text-5xl mt-48 text-left font-bold ml-32'>Liege Belgian Waffles</h1>
    <br />
    <p className='ml-32 text-lg'>Soft brioche-style Liège Belgian waffles made with real butter and imported Belgian pearl sugar for a sweet <br /> caramelized crunch in every bite. Just heat and eat.</p>
  </div>
    <div className='pretzel flex justify-self-start space-x-10 ml-32 mt-8'>
    
<div className='polard1 '>
<HoverImage
            initialSrc="/images/waffle-pho.webp"
            hoverSrc="/images/pret.webp"
            className=" rounded-t-lg object-cover mouseOver3"
          />
    <h1 className="container p1">
    Sweet & Salty super pack  &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
</div> 
 </div> 
 <div>
 <p className='ml-32 text-xl font-semibold text-gray-600 mt-28 text-center'>Soft brioche-style Liège Belgian waffles made with real butter and imported Belgian pearl sugar for a sweet <br /> caramelized crunch in every bite. Just heat and eat.</p>
 </div>
  </div>
  
  
  
  )
}

export default Waffles
