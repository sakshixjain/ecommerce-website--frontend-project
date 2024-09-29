import React from 'react'

function Waffles() {
  return (
    <div>
      <div>
      <h1 className='text-gray-800 text-5xl m-48 text-left ml-8 font-bold'>Liege Belgian Waffles</h1>
      <p className='ml-32 text-lg'>Soft brioche-style Liège Belgian waffles made real butter and imported Belgian pearl sugar for a sweet caramelized crunch in every bite. Just heat and eat.</p>
        </div>
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
    </div>
  
  )
}

export default Waffles
