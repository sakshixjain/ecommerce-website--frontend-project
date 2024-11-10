// import  { useRef } from 'react'
// import './footer.css'
// function Footer() {

//   const inputRef= useRef(null);
 
//   function handleref(){
//     inputRef.current.focus();
//     inputRef.current.value=("...@gmail.com");
//   }
//   return (
//     <>
//     <div id="box">
//    <div className="section">
//        <h1 style={{marginTop:'40px'}}>OH HEY-LET'S BE INBOX FRIENDS</h1>
//    </div>
//    <p style={{ fontSize: '21px', textAlign: 'center', color: 'black' }}>Subscribe to our email list to receive exclusive offers, promotions, <br /> new product releases,  giveaways, and more!</p>
//    <br />
//     <div id="input">

//    <input type="email" name="" placeholder="Email (required)" className='inputi' required ref={inputRef}/>
//    <button className="shop2" onClick={handleref}>Join</button>
// </div>
// </div>
// <footer>
   
//    <div className="foot-panel">
//        <div>
//    <ul>
//      <p>Customer Experience</p>
//        <a style={{ wordWrap: 'break-word', color: 'white' }}>Need help? We’re here for you, <br /> and ready to answer your <br /> questions.</a>
//        <a>Contact Us</a>
//        <a><i className="fa-solid fa-phone-volume"></i> 857-347-4438</a>
//        <a><i className="fa-regular fa-envelope"></i> hello@esprovisions.com</a>
//        <button className="shop3"> <i className="fa-solid fa-universal-access"></i> Accessibility</button>
//    </ul>
//    </div>
//    <div>
//    <ul>
//        <p>Products</p>
//          <a>Shop all</a>
//          <a>Pretzels</a>
//          <a>Liege Belgian Waffles</a>
//          <a>Sauce & Toppings</a>
//          <a>Gift Boxes</a>
//          <a>Find Us</a>
//          <a>Corporate Gifts</a>
//      </ul>
//    </div>
//    <div>
//      <ul>
//        <p>Company</p>
//          <a>FAQ</a>
//          <a>Recipes</a>
//          <a>Blog</a>
//          <a>Reviews</a>
//          <a>Referral</a>
//          <a>Press</a>
//          <a>Food Service Direct</a>
//          <a>Careers</a>
//      </ul>
//    </div>
//    <div>
//      <ul>
//        <p>Accounts</p>
//        <a>My Accounts</a>
//          <a>Subscribe To Our Email <br />List</a>
//          <a>Unsubscribe</a>
//          <a>Sign Up For Our Text <br /> Alerts</a>
//          <a>Send A Gift Messages</a>
//      </ul>
//    </div>
//    <div>
//      <ul>
//        <p>Policies</p>
//          <a>Shipping Policy</a>
//          <a>Refund Policy</a>
//          <a>Privacy Policy</a>
//          <a>Term of Service</a>
//          <a>Accessibility Policy</a>
//          <a>Promotion Exclusions</a>
//      </ul>
//      </div>
//    </div>
//       <hr style={{ marginLeft: '80px', marginRight: '80px' }} />
//    <div className="foot-panel2">

//    <div className="icon">
          
//        <i className="fa-brands fa-instagram ic"></i>
//        <i className="fa-brands fa-x-twitter ic"></i>
//        <i className="fa-brands fa-facebook ic"></i>
//        <i className="fa-brands fa-youtube ic"></i>
//        <i className="fa-brands fa-linkedin ic"></i>
//       </div> 
//  <div to="/"  className="hidden foot-resp duration-200 
//              mr-36 "   >
//           <p style={{fontFamily:'inherit', fontWeight:'100', fontSize:'16px',marginTop:'2px'}}>
//            Enjoy your<br />
//            <span style={{fontFamily:'inherit',fontWeight:'500', fontSize:'30px',color:'orange'}}>MEAL</span>
//            </p>
//           </div>
     
//      <p className='icon-p icon-para'>2024 Eastern Standard Provisions</p>
 
// </div>
// </footer>
// </>
//   )
// }

// export default Footer

import  { useRef } from 'react'
import './footer.css'
function Footer() {

  const inputRef= useRef(null);
 
  function handleref(){
    inputRef.current.focus();
    inputRef.current.value=("...@gmail.com");
  }
  return (
    <>
    <div id="box">
   <div className="section">
       <h1 style={{marginTop:'40px'}}>OH HEY-LET'S BE INBOX FRIENDS</h1>
   </div>
   <p style={{ fontSize: '21px', textAlign: 'center', color: 'black' }}>Subscribe to our email list to receive exclusive offers, promotions, <br /> new product releases,  giveaways, and more!</p>
   <br />
    <div id="input">

   <input type="email" name="" placeholder="Email (required)" className='inputi' required ref={inputRef}/>
   <button className="shop2" onClick={handleref}>Join</button>
</div>
</div>
<footer>
   
   <div className="foot-panel">
       <div>
   <ul>
     <p>Customer Experience</p>
     <li> <a style={{ wordWrap: 'break-word', color: 'white' }}>Need help? We’re here for you, <br /> and ready to answer your <br /> questions.</a></li>
     <li> <a>Contact Us</a></li>
     <li><a><i className="fa-solid fa-phone-volume"></i> 857-347-4438</a></li>
     <li> <a><i className="fa-regular fa-envelope"></i> hello@esprovisions.com</a></li>
       <button className="shop3"> <i className="fa-solid fa-universal-access"></i> Accessibility</button>
   </ul>
   </div>
   <div>
   <ul>
       <p>Products</p>
         <li><a>Shop all</a></li>
         <li><a>Pretzels</a></li>
         <li><a>Liege Belgian Waffles</a></li>
         <li><a>Sauce & Toppings</a></li>
         <li><a>Gift Boxes</a></li>
         <li> <a>Find Us</a></li>
         <li> <a>Corporate Gifts</a></li>
     </ul>
   </div>
   <div>
     <ul>
       <p>Company</p>
       <li><a>FAQ</a></li>
       <li><a>Recipes</a></li>
       <li><a>Blog</a></li>
       <li><a>Reviews</a></li>
       <li><a>Referral</a></li>
       <li><a>Press</a></li>
       <li><a>Food Service Direct</a></li>
       <li><a>Careers</a></li>
     </ul>
   </div>
   <div>
     <ul>
       <p>Accounts</p>
       <li><a>My Accounts</a></li>
       <li><a>Subscribe To Our Email <br />List</a></li>
       <li> <a>Unsubscribe</a></li>
       <li><a>Sign Up For Our Text <br /> Alerts</a></li>
       <li><a>Send A Gift Messages</a></li>
     </ul>
   </div>
   <div>
     <ul>
       <p>Policies</p>
       <li> <a>Shipping Policy</a></li>
       <li> <a>Refund Policy</a></li>
       <li> <a>Privacy Policy</a></li>
       <li> <a>Term of Service</a></li>
       <li><a>Accessibility Policy</a></li>
        <li> <a>Promotion Exclusions</a></li>
     </ul>
     </div>
   </div>
   
    <hr style={{ marginLeft: '80px', marginRight: '80px' }} />  
   <div className="foot-panel2">
   <div className="icon">
       <i className="fa-brands fa-instagram ic"></i>
       <i className="fa-brands fa-x-twitter ic"></i>
       <i className="fa-brands fa-facebook ic"></i>
       <i className="fa-brands fa-youtube ic"></i>
       <i className="fa-brands fa-linkedin ic"></i>

   </div>
   <div to="/"  className="block  duration-200 
             mr-36 "   >
          <p style={{fontFamily:'inherit', fontWeight:'100', fontSize:'16px',marginTop:'2px'}}>
           Enjoy your<br />
           <span style={{fontFamily:'inherit',fontWeight:'500', fontSize:'30px',color:'orange'}}>MEAL</span>
           </p>
          </div>
       <p className='icon-p icon-para'>2024 Eastern Standard Provisions</p>
       
</div>
</footer>
</>
  )
}

export default Footer

