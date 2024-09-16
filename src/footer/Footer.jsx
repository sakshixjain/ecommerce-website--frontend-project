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
       <a style={{ wordWrap: 'break-word', color: 'white' }}>Need help? We’re here for you, <br /> and ready to answer your <br /> questions.</a>
       <a>Contact Us</a>
       <a><i className="fa-solid fa-phone-volume"></i> 857-347-4438</a>
       <a><i className="fa-regular fa-envelope"></i> hello@esprovisions.com</a>
       <button className="shop3"> <i className="fa-solid fa-universal-access"></i> Accessibility</button>
   </ul>
   </div>
   <div>
   <ul>
       <p>Products</p>
         <a>Shop all</a>
         <a>Pretzels</a>
         <a>Liege Belgian Waffles</a>
         <a>Sauce & Toppings</a>
         <a>Gift Boxes</a>
         <a>Find Us</a>
         <a>Corporate Gifts</a>
     </ul>
   </div>
   <div>
     <ul>
       <p>Company</p>
         <a>FAQ</a>
         <a>Recipes</a>
         <a>Blog</a>
         <a>Reviews</a>
         <a>Referral</a>
         <a>Press</a>
         <a>Food Service Direct</a>
         <a>Careers</a>
     </ul>
   </div>
   <div>
     <ul>
       <p>Accounts</p>
       <a>My Accounts</a>
         <a>Subscribe To Our Email <br />List</a>
         <a>Unsubscribe</a>
         <a>Sign Up For Our Text <br /> Alerts</a>
         <a>Send A Gift Messages</a>
     </ul>
   </div>
   <div>
     <ul>
       <p>Policies</p>
         <a>Shipping Policy</a>
         <a>Refund Policy</a>
         <a>Privacy Policy</a>
         <a>Term of Service</a>
         <a>Accessibility Policy</a>
         <a>Promotion Exclusions</a>
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
     <p className='icon-p'>2024 Eastern Standard Provisions</p>
 
</div>
</footer>
</>
  )
}

export default Footer
