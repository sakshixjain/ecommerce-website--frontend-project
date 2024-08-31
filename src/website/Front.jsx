
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import HoverImage from './HoverImage';
import Skeleton from './Skeleton';
import './mouseover.css';

function Front() {
  const [loading, setLoading] = useState(true);

  const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };
  useEffect(() => {
    // Simulate a loading delay for demonstration purposes
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const receipes= document.querySelectorAll('.receipe');
    const images= document.querySelectorAll('#image');
    const observerOptions = {
      threshold: 0.2, // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });
    receipes.forEach((section) => {
      observer.observe(section);
    });
    images.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      receipes.forEach((section) => {
        observer.unobserve(section);
      });
      images.forEach((section) => {
        observer.observe(section);
      });
    };
  }, []);

  return (
    <>
      <Link className="items-center font-medium" to="/"></Link>
      <div className="bd">
        <div className="inside">
          <div id="background">
            {loading ? (
              <>
                <Skeleton width="60%" height="52px" />
                <Skeleton width="80%" height="23px" />
                <Skeleton width="30%" height="40px" />
                <Skeleton width="70%" height="20px" />
              </>
            ) : (
              <>
                <p
                  className="slide-in-left"
                  style={{
                    fontSize: '52px',
                    color: 'white',
                    fontWeight: '600',
                    fontFamily:
                      "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                  }}
                >
                  SUMMERTIME SNACKING
                </p>
                <p
                  className="slide-in-right"
                  style={{
                    fontSize: '23px',
                    wordWrap: 'break-word',
                    marginBottom: '50px',
                    color: 'white',
                  }}
                >
                  Get the perfect grab and go snack to make your <br /> memorable
                  summer
                </p>
                <button
                  className="shop slide-in-left"
                  style={{ marginBottom: '50px' }}
                >
                  Shop Now
                </button>
                <br />
                <p
                  className="slide-in-right"
                  style={{
                    fontSize: '20px',
                    padding: '12px',
                    color: 'white',
                  }}
                >
                  Handcraft Recipes{' '}
                  <i
                    className="fa-solid fa-hotdog"
                    style={{ color: 'rgb(250, 206, 96)' }}
                  ></i>
                </p>
                <p
                  className="slide-in-left"
                  style={{
                    fontSize: '20px',
                    padding: '12px',
                    color: 'white',
                  }}
                >
                  Highest quality ingredients{' '}
                  <i
                    className="fa-solid fa-hotdog"
                    style={{ color: 'rgb(250, 206, 96)' }}
                  ></i>
                </p>
                <p
                  className="slide-in-right"
                  style={{
                    fontSize: '20px',
                    padding: '12px',
                    color: 'white',
                  }}
                >
                  No artificial flavours, colors & preservations{' '}
                  <i
                    className="fa-solid fa-hotdog"
                    style={{ color: 'rgb(250, 206, 96)' }}
                  ></i>
                </p>
                <p
                  className="slide-in-left"
                  style={{
                    fontSize: '20px',
                    padding: '12px',
                    color: 'white',
                  }}
                >
                  Easy to heat & eat{' '}
                  <i
                    className="fa-solid fa-hotdog"
                    style={{ color: 'rgb(250, 206, 96)' }}
                  ></i>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <br />
      {/* Sections with Entrance Animations */}
      <div className={`animationn section`}>
        <h1>SHOP OUR BESTSELLERS</h1>
      </div>

      <div id="image" className={`animationn`}>
        <div className='polard'>
          <HoverImage
            initialSrc={`/images/EH_CALM_WEB4_53a353c9-1027-4baa-912e-d3fcc9ab2e7d.webp`}
            hoverSrc={`/images/latest1.webp`}
            alt="Pretzel Lovers Box"
            className=" rounded-t-2xl object-cover"
          />
          <div className='container c1'>
          <h1>
          Sweet & Salty super pack  &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
          </h1>
          </div>
        </div>
        <div className='polard'>
          <HoverImage
            initialSrc={`/images/EH_CALM_WEB5_fd187f9c-c331-4e88-a022-46f0dbfb5d93.webp`}
            hoverSrc={`/images/latest1.webp`}
            alt="Pretzel Lovers Box"
            className=" rounded-t-2xl object-cover"
          />
          <h1 className="container c1">
          Sweet & Salty super pack  &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
          </h1>
        </div>
        <div className='polard'>
          <HoverImage
            initialSrc={`/images/EH_Mega_KeepCalm_Tray.webp`}
            hoverSrc={`/images/latest1.webp`}
            alt="Pretzel Lovers Box"
            className="rounded-t-2xl object-cover"
          />
          <h1 className="container c1">
          Sweet & Salty super pack  &nbsp; &nbsp; &nbsp;  4.8  <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i> <br /><br/> $99.54
          </h1>
        </div>
      </div>

      <div className="section2">
        <br />
        <button className="shop" style={{ marginTop: '90px' }}>
          Shop Now
        </button>
      </div>

      <div className={`animationn section`}>
        <h1>GIFTS BY PRICE</h1>
      </div>
      <div id="image" className={`animationn`}>
        <NavLink to="/GiftBoxes" className="w-[350px] h-[360px] rounded-3xl bg-white border gifts">
          <img
            src="/images/PretzelLoversBox_Est2018_TSP_de281bea-b36a-4c8a-a85a-61508861039c.webp"
            alt=""
            className="h-[350px] w-full rounded-t-lg object-cover"
          />
          <div className="p-8 text-center">
            <h1 className="inline-flex m-2 text-3xl font-bold justify-center">Under $35</h1>
          </div>
        </NavLink>
        <NavLink to="/GiftBoxes" className="w-[350px] h-[360px] rounded-3xl bg-white border gifts">
          <img
            src="/images/PretzelLoversBox_Est2018_TSP_de281bea-b36a-4c8a-a85a-61508861039c.webp"
            alt=""
            className="h-[350px] w-full rounded-t-lg object-cover"
          />
          <div className="p-8 text-center">
            <h1 className="inline-flex m-2 text-3xl font-bold justify-center">$35 to $50</h1>
          </div>
        </NavLink>
        <NavLink to="/GiftBoxes" className="w-[350px] h-[360px] rounded-3xl bg-white border gifts">
          <img
            src="/images/PretzelLoversBox_Est2018_TSP_de281bea-b36a-4c8a-a85a-61508861039c.webp"
            alt=""
            className="h-[350px] w-full rounded-t-lg object-cover"
          />
          <div className="p-8 text-center">
            <h1 className="inline-flex m-2 text-3xl font-bold justify-center">Above $50</h1>
          </div>
        </NavLink>
      </div>
      <NavLink to="/GiftBoxes" className="section2">
        <br />
        <button className="shop1">Shop All</button>
      </NavLink>

      <div className={`animationn section`}>
        <h1>SHOP FOR EVERY MOMENT</h1>
      </div>

      <div id="image" className={`animationn`}>
        <NavLink
          to="/GiftBoxes"
          className="box-border h-[650px] w-[440px] rounded-3xl bg-white text-center imag"
        >
          <fieldset>
            <img
              src="/images/gift1.webp"
              className="h-[430px] w-[600px] rounded-3xl"
            />
          </fieldset>
          <h1 className="text-2xl text-blue-950 p-5">Buy more, Save more</h1>
          <h1 className="text-4xl font-bold text-blue-950">Corporate Gifting</h1>
          <button className="shop-img">Shop Gifts</button>
        </NavLink>
        <NavLink
          to="/GiftBoxes"
          className="box-border h-[650px] w-[440px] rounded-3xl bg-white text-center imag"
        >
          <fieldset>
            <img
              src="/images/gift2.webp"
              className="h-[430px] w-[600px] rounded-3xl"
            />
          </fieldset>
          <h1 className="text-2xl text-blue-950 p-5">
            Find us in a Store near you
          </h1>
          <h1 className="text-4xl font-bold text-blue-950">Grocery</h1>
          <button className="shop-img">Learn more</button>
        </NavLink>
        <NavLink
          to="/GiftBoxes"
          className="box-border h-[650px] w-[440px] rounded-3xl bg-white text-center imag"
        >
          <fieldset>
            <img
              src="/images/gift3.webp"
              className="h-[430px] w-[600px] rounded-3xl"
            />
          </fieldset>
          <h1 className="text-2xl text-blue-950 p-5">A delicious gift</h1>
          <h1 className="text-4xl font-bold text-blue-950">For Every Occasion</h1>
          <button className="shop-img">Shop Gifts</button>
        </NavLink>
      </div>
      <br />
      <div>
        <div className="review">
          <i
            className="fas fa-star"
            style={{ fontSize: '40px', color: 'yellow', paddingTop: '400px' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '40px', color: 'yellow', paddingTop: '400px' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '40px', color: 'yellow', paddingTop: '400px' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '40px', color: 'yellow', paddingTop: '400px' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '40px', color: 'yellow', paddingTop: '400px' }}
          ></i>
        </div>
        <div className={`animationn section`}>
          <h1>40K+ REVIEWS</h1>
        </div>
 
       <div
      className="image-gallery-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`image-gallery ${isHovered ? 'paused' : 'start-animation'}`}>
      
          <div className="image-item" >
            <img src="/images/gift3.webp" alt="Cinque Terre" className="image-scroll" />
            <div className="caption">
            <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow'}}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
              <p>Cinque Terre</p>
            </div>
          </div>
          <div className="image-item" >
            <img src="/images/gift3.webp" alt="Cinque Terre" className="image-scroll" />
            <div className="caption">
            <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow'}}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
              <p>Cinque Terre</p>
            </div>
          </div>
          <div className="image-item" >
            <img src="/images/gift3.webp" alt="Cinque Terre" className="image-scroll" />
            <div className="caption">
            <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow'}}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
              <p>Cinque Terre</p>
            </div>
          </div>
          <div className="image-item" >
            <img src="/images/gift3.webp" alt="Cinque Terre" className="image-scroll" />
            <div className="caption">
            <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow'}}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
              <p>Cinque Terre</p>
            </div>
          </div>
          <div className="image-item" >
            <img src="/images/gift3.webp" alt="Cinque Terre" className="image-scroll" />
            <div className="caption">
            <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow'}}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
              <p>Cinque Terre</p>
            </div>
          </div>
          <div className="image-item" >
            <img src="/images/gift3.webp" alt="Cinque Terre" className="image-scroll" />
            <div className="caption">
            <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow'}}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
              <p>Cinque Terre</p>
            </div>
          </div>
          <div className="image-item" >
            <img src="/images/gift3.webp" alt="Cinque Terre" className="image-scroll" />
            <div className="caption">
            <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow'}}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
              <p>Cinque Terre</p>
            </div>
          </div>
          <div className="image-item" >
            <img src="/images/gift3.webp" alt="Cinque Terre" className="image-scroll" />
            <div className="caption">
            <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow'}}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
              <p>Cinque Terre</p>
            </div>
          </div>
          <div className="image-item" >
            <img src="/images/gift3.webp" alt="Cinque Terre" className="image-scroll" />
            <div className="caption">
            <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow'}}
          ></i>
          <i
            className="fas fa-star"
            style={{ fontSize: '20px', color: 'yellow' }}
          ></i>
              <p>Cinque Terre</p>
            </div>
          </div>

      </div>
    </div>


      </div>
      <br />
      <br />

      <div className={`animationn section mt-20`}>
        <h1>FIND THE PERFECT RECIPES</h1>
      </div>
      <div className="boxer">
        <div id="image">
          <NavLink to="/Recipes" className={`animationn receipe`}>
            <figure>
              <img
                src="/images/RECIPE.webp"
                alt=""
                className="w-[550px] h-[400px] rounded-3xl"
              />
            </figure>
            <h1 className="text-xl -top-28 relative">
              <i className="fa-solid fa-cake-candles"></i> 25 June, 2021
            </h1>
            <br />
            <h1 className="text-3xl font-bold bx -top-28 relative " >
              Red, White, and Blue Pretzel Trifle
            </h1>
            <br />
            <h1 className="text-xl ax -top-28 relative">
              For the whipped cream: 1 1/2 cups heavy cream 6 Tbsp sugar 1 <br />
              tsp vanilla extract For the Pudding Layer (optional): 4 oz white <br />
              chocolate instant pudding mix(dry) 2 cups cold milk For the Trifl
            </h1>
          </NavLink>
          <NavLink to="/Recipes" className={`animationn receipe`}>
            <figure>
              <img
                src="/images/RECIPE2.webp"
                alt=""
                className="w-[550px] h-[400px] rounded-3xl"
              />
            </figure>
            <h1 className="text-xl -top-28 relative">
              <i className="fa-solid fa-cake-candles"></i> 25 June, 2021
            </h1>
            <br />
            <h1 className="text-3xl font-bold bx -top-28 relative">
              Mini Red, White and Blue Waffles Trifles
            </h1>
            <br />
            <h1 className="text-xl ax -top-28 relative">
              For the whipped cream: 1 1/2 cups heavy cream 6 Tbsp sugar 1{' '}
              <br />
              tsp vanilla extract For the Pudding Layer (optional): 4 oz white{' '}
              <br />
              chocolate instant pudding mix(dry) 2 cups cold milk For the Trifl
            </h1>
          </NavLink>
        </div>
        <div className="boxer1 text-center justify-center">
          <button className="shopping mr-96 ml-[410px] text-center justify-center">
            View Recipes
          </button>
        </div>
      </div>
      <div className={`animationn section`}>
        <h1>LOOK FOR US IN STORES!</h1>
      </div>
      <div>

      </div>
    </>
  );
}

export default Front;
