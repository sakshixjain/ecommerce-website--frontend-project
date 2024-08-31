import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import HoverImage from '../website/HoverImage'
function Shop() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
    <div>

     <h1 className='text-3xl text-blue-950 text-center font-semibold my-8 mt-36'>Need help finding the perfect gift?</h1>
     <h1 className='text-lg text-blue-950 text-center' >Tell us the Occasion for Personalized goft suggestions!</h1>
     </div>
     <div className='text-center '>
      <select name=""className='w-72 h-12 text-lg border-4 rounded-xl'>
        <option value="">Occasion?</option>
        <option value="">All Gift Boxes</option>
        <option value="">Happy Birthday</option>
        <option value="">Thank You</option>
        <option value="">Congratulations</option>
        <option value="">Any Occasion</option>
        <option value="">Just for Fun</option>
        <option value="">Oprah's Favorite Things</option>
        <option value="">Gear & Gifts</option>
      </select>
    <select name=""  className='w-72 h-12 text-lg border-4 m-7 rounded-xl'>
      <option value="">Budget?</option>
      <option value="">Under $50</option>
      <option value="">Above $50</option>
    </select>
      <button className='shop-img'>Find</button>
     </div>
     <div className='flex justify-end my-8 mt-8 p-8 text-lg mr-16 '>
      <h1>Sort By: Featured  </h1>
      <select>
        <option></option>
        <option value="">Featured</option>
        <option value="">Best Selling</option>
        <option value="">Price, Low to High</option>
        <option value="">Price, High to Low</option>
      </select>
     </div>
     <div className='box1 '>
     <div className='w-64 h-auto border-2 rounded-xl mx-20  text-xs py-4 mt-24 px-5 fixed top-50 bottom-32 '>
      <ul>
      <NavLink
          to="/Chat"
              className={({isActive}) =>
                  `block py-2 pr-4 pl-3 duration-200 
              ${isActive ? "text-orange-300": "text-grey-700"} lg:border-0 hover:text-orange-300 lg:p-0`
              }
          >
              Shop by All Gift Boxes
          </NavLink>
        {/* <p className='text-xl text-blue-950 font-semibold'>Shop by All Gift Boxes</p> */}
        <a>All Gift Boxes</a>
        <a>Happy Birthday</a>
        <a>Thank You</a>
        <a>Congratulations</a>
        <a>Any Occasion</a>
        <a>Just for Fun</a>
        <a>Oprah's Favorite Things</a>
        <a>Gear & Gifts</a>
      </ul> 
     </div>
    <div className='box2 my-24'>
     
     <div id='image2'>
      <h1 className='text-left mt-3  mb-12 w-full text-4xl font-bold text-blue-950 '>Happy Birthday</h1>
      
     <div className=' polard2' >
     <HoverImage
            initialSrc="/images/EH_BDAY_25_WEB3.webp"
            hoverSrc="/images/LATE1.webp"
            className="rounded-t-2xl object-cover mouseOver1"
          />
    <h1 className="container c3">
      Sweet & Salty super pack  &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
</div>
<div  className=' polard2' >
   <HoverImage
            initialSrc="/images/EH_BDAY_25_WEB4.webp"
            hoverSrc="/images/LATE2.webp"
            className=" rounded-t-2xl object-cover mouseOver1"
          />
    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
</div>
<div className=' polard2' >
   <HoverImage
            initialSrc="/images/EH_BDAY_25_WEB5.webp"
            hoverSrc="/images/LATE2.webp"
            className="rounded-t-2xl object-cover mouseOver1"
          />

    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
</div>
<div className=' polard2' > <HoverImage
            initialSrc="/images/EH_CALM_WEB4_53a353c9-1027-4baa-912e-d3fcc9ab2e7d.webp"
            hoverSrc="/images/LATE2.webp"
            className=" rounded-t-2xl object-cover mouseOver1"
          />

    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
</div>
<div className=' polard2' > <HoverImage
            initialSrc="/images/EH_CALM_WEB5_fd187f9c-c331-4e88-a022-46f0dbfb5d93.webp"
            hoverSrc="/images/LATE2.webp"
            className="rounded-t-2xl object-cover mouseOver1"
          />

    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
 </div>
 <br />
  <h1 className='text-4xl mt-16 mb-8 font-bold w-full text-blue-950 '>Thank You</h1>
  <div className=' polard2' >
     <HoverImage
            initialSrc="/images/EH_Mega_KeepCalm_Tray.webp"
            hoverSrc="/images/LATE2.webp"
            className="rounded-t-2xl object-cover mouseOver1"
          />

    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
 </div> 
 <div className=' polard2' >
     <HoverImage
            initialSrc="/images/EH_BDAY_25_WEB3.webp"
            hoverSrc="/images/LATE1.webp"
            className="rounded-t-2xl object-cover mouseOver1"
          />
    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
</div>
<div  className=' polard2' >
   <HoverImage
            initialSrc="/images/EH_BDAY_25_WEB4.webp"
            hoverSrc="/images/LATE2.webp"
            className=" rounded-t-2xl object-cover mouseOver1"
          />
    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
</div>
<div className=' polard2' >
   <HoverImage
            initialSrc="/images/EH_BDAY_25_WEB5.webp"
            hoverSrc="/images/LATE2.webp"
            className="rounded-t-2xl object-cover mouseOver1"
          />

    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
</div>
<div className=' polard2' > <HoverImage
            initialSrc="/images/EH_CALM_WEB4_53a353c9-1027-4baa-912e-d3fcc9ab2e7d.webp"
            hoverSrc="/images/LATE2.webp"
            className=" rounded-t-2xl object-cover mouseOver1"
          />

    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
</div>
<h1 className='text-4xl mt-16 mb-8 font-bold w-full text-blue-950 '>Congratulations</h1>
<div className=' polard2' > 
  <HoverImage
            initialSrc="/images/SweetSalty_Pan.webp"
            hoverSrc="/images/LATE2.webp"
            className="rounded-t-lg object-cover mouseOver1"
          />
    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
 </div> 
 <div className=' polard2' >
     <HoverImage
            initialSrc="/images/EH_BDAY_25_WEB3.webp"
            hoverSrc="/images/LATE1.webp"
            className="rounded-t-2xl object-cover mouseOver1"
          />
    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
</div>
<div  className=' polard2' >
   <HoverImage
            initialSrc="/images/EH_BDAY_25_WEB4.webp"
            hoverSrc="/images/LATE2.webp"
            className=" rounded-t-2xl object-cover mouseOver1"
          />
    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
</div>
<div className=' polard2' >
   <HoverImage
            initialSrc="/images/EH_BDAY_25_WEB5.webp"
            hoverSrc="/images/LATE2.webp"
            className="rounded-t-2xl object-cover mouseOver1"
          />

    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
</div>
<div className=' polard2' > <HoverImage
            initialSrc="/images/EH_CALM_WEB4_53a353c9-1027-4baa-912e-d3fcc9ab2e7d.webp"
            hoverSrc="/images/LATE2.webp"
            className=" rounded-t-2xl object-cover mouseOver1"
          />

    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
</div>
<div className=' polard2' >
     <HoverImage
            initialSrc="/images/EH_BDAY_25_WEB3.webp"
            hoverSrc="/images/LATE1.webp"
            className="rounded-t-2xl object-cover mouseOver1"
          />
    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
</div>
<div  className=' polard2' >
   <HoverImage
            initialSrc="/images/EH_BDAY_25_WEB4.webp"
            hoverSrc="/images/LATE2.webp"
            className=" rounded-t-2xl object-cover mouseOver1"
          />
    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
</div>
<div className=' polard2' >
   <HoverImage
            initialSrc="/images/EH_BDAY_25_WEB5.webp"
            hoverSrc="/images/LATE2.webp"
            className="rounded-t-2xl object-cover mouseOver1"
          />

    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
</div>
<div className=' polard2' > <HoverImage
            initialSrc="/images/EH_CALM_WEB4_53a353c9-1027-4baa-912e-d3fcc9ab2e7d.webp"
            hoverSrc="/images/LATE2.webp"
            className=" rounded-t-2xl object-cover mouseOver1"
          />

    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
</div> 
      <div className=' polard2' >
     <HoverImage
            initialSrc="/images/EH_BDAY_25_WEB3.webp"
            hoverSrc="/images/LATE1.webp"
            className="rounded-t-2xl object-cover mouseOver1"
          />
    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
</div>
<div  className=' polard2' >
   <HoverImage
            initialSrc="/images/EH_BDAY_25_WEB4.webp"
            hoverSrc="/images/LATE2.webp"
            className=" rounded-t-2xl object-cover mouseOver1"
          />
    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
</div>
<div className=' polard2' >
   <HoverImage
            initialSrc="/images/EH_BDAY_25_WEB5.webp"
            hoverSrc="/images/LATE2.webp"
            className="rounded-t-2xl object-cover mouseOver1"
          />

    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
</div>
<div className=' polard2' > <HoverImage
            initialSrc="/images/EH_CALM_WEB4_53a353c9-1027-4baa-912e-d3fcc9ab2e7d.webp"
            hoverSrc="/images/LATE2.webp"
            className=" rounded-t-2xl object-cover mouseOver1"
          />
    <h1 className="container c3">
      Sweet & Salty super pack   &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
    </h1>
</div>
 </div>
   </div>
     </div>
    </>

  )
}

export default Shop