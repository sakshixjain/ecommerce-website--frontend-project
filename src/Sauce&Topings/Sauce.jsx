import React from 'react'

function Sauce() {
  return (
    
    <div>
      <h1 className='text-gray-800 text-5xl mt-48 ml-20 text-left justify-center items-center font-bold' >Sauces & Toppings</h1>
      <p className='ml-20 text-lg mt-4'>Artfully blended gourmet sauces and toppings.</p>
      <div className='box-sauce -mt-40'>
        <div id='image-sauce'>
      <div className="box-border h-[310px] w-[310px] rounded-3xl text-center imag "
        >
          <fieldset>
            <img
              src="/images/sauce1.webp"
              className="h-[250px] w-[270px] rounded-3xl"
            />
          </fieldset>
          <h1 className="text-xl -mt-4 text-left text-blue-950 font-semibold  sauce p-5">Maui Onion Mustard</h1>
        </div>
        <div 
          className="box-border h-[310px] w-[310px] rounded-3xl text-center imag"
        >
          <fieldset>
            <img
              src="/images/sauce2.webp"
              className="h-[250px] w-[270px] rounded-3xl"
            />
          </fieldset>
          <h1 className="text-xl -mt-4 text-left text-blue-950 font-semibold  sauce p-5">White Cheddar Cheese Sauce</h1>
        
        </div>
        <div 
          className="box-border h-[310px] w-[310px] rounded-3xl text-center imag"
        >
          <fieldset>
            <img
              src="/images/sauce3.webp"
              className="h-[250px] w-[270px] rounded-3xl"
            />
          </fieldset>
          <h1 className="text-xl -mt-4 text-left text-blue-950 font-semibold  sauce p-5">French Toast Sugar</h1>
        
        </div>
        <div 
          className="box-border h-[310px] w-[310px] rounded-3xl text-center imag"
        >
          <fieldset>
            <img
              src="/images/sauce4.webp"
              className="h-[250px] w-[270px] rounded-3xl"
            />
          </fieldset>
          <h1 className="text-xl -mt-4 text-left text-blue-950 font-semibold  sauce p-5">Peanut Butter Caramel Sauce</h1>
        
        </div>
        <div 
          className="box-border h-[310px] w-[310px] rounded-3xl text-center imag"
        >
          <fieldset>
            <img
              src="/images/sauce5.webp"
              className="h-[250px] w-[270px] rounded-3xl"
            />
          </fieldset>
          <h1 className="text-xl -mt-4 text-left text-blue-950 font-semibold sauce p-5">Chilli Lime Pretzel Sauce</h1>   
        </div>
        <div 
          className="box-border h-[310px] w-[310px] rounded-3xl text-center imag"
        >
          <fieldset>
            <img
              src="/images/sauce6.webp"
              className="h-[250px] w-[270px] rounded-3xl"
            />
          </fieldset>
          <h1 className="text-xl -mt-4 text-left text-blue-950 font-semibold  sauce p-5">Sweet Love Sprinkles</h1>      
        </div>
</div>
      </div>
    </div>
  )
}

export default Sauce
