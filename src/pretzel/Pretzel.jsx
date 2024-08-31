import React from 'react'
import HoverImage from '../website/HoverImage'
function Pretzel() {
  return (
    <>
     <div className='flex justify-end my-8 mt-24 p-8 text-lg mr-16 '>
      <h1>Sort By: Featured  </h1>
      <select>
        <option></option>
        
        <option value="">Best Selling</option>
        <option value="">Price, Low to High</option>
        <option value="">Price, High to Low</option>
      </select>
     
     <h1>Sort By: Featured  </h1>
      <select>
        <option></option>
       
        <option value="">Best Selling</option>
        <option value="">Price, Low to High</option>
        <option value="">Price, High to Low</option>
      </select>
     </div>
      <div>
    <h1 className='text-gray-800 text-5xl text-left font-bold ml-32'>  Liège Belgian Waffles</h1>
    <br />
    <p className='ml-32 text-lg'>Soft brioche-style Liège Belgian waffles made with real butter and imported Belgian pearl sugar for a sweet <br /> caramelized crunch in every bite. Just heat and eat.</p>
  </div>
    <div className='pretzel flex justify-self-start space-x-10 ml-32 mt-8'>
     <div className='polard1'>
     <HoverImage
            initialSrc="/images/pret.webp"
            hoverSrc="/images/latest2.webp"
            className=" rounded-t-2xl object-cover mouseOver3"
          />
    <h1 className="container p1">
      Sweet & Salty super pack <br/> $99.54
    </h1>
</div>
<div className=' polard1'>
     <HoverImage
            initialSrc="/images/pret.webp"
            hoverSrc="/images/latest3.webp"
            className=" rounded-t-2xl object-cover mouseOver3"
          />
    <h1 className="container p1">
      Sweet & Salty super pack <br/> $99.54
    </h1>
</div>
<div className='polard1'>
<HoverImage
            initialSrc="/images/pret.webp"
            hoverSrc="/images/latest1.webp"
            className=" rounded-t-lg object-cover mouseOver3"
          />
    <h1 className="container p1">
      Sweet & Salty super pack <br/> $99.54
    </h1>
</div> 

 </div> 
 <div>
 <p className='ml-32 text-xl font-semibold text-gray-600 mt-28 text-center'>Soft brioche-style Liège Belgian waffles made with real butter and imported Belgian pearl sugar for a sweet <br /> caramelized crunch in every bite. Just heat and eat.</p>
 </div>
    
    </>

  )
}

export default Pretzel