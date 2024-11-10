// import { useEffect, useState } from 'react';
// import { Link,NavLink ,useLocation } from 'react-router-dom';

// const Header = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [islogin, setIslogin] = useState("fa-regular fa-user");
//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname === "/Login") {
//       setIslogin('');
//     } else {
//       setIslogin("fa-regular fa-user");
//     }
//   }, [location, islogin]);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//       <>
//         <header>
//       <nav className='top-0 z-20'>
//         <div className="header">
//           <NavLink to="/"  className="block  duration-200 
//              mr-36 "   >
//           <p style={{fontFamily:'inherit', fontWeight:'100', fontSize:'16px',marginTop:'2px'}}>
//            Enjoy your<br />
//            <span style={{fontFamily:'inherit',fontWeight:'500', fontSize:'30px',color:'orange'}}>MEAL</span>
//            </p>
//           </NavLink>

//           <NavLink
//             to="/Pretzels"
//             className= {({isActive}) =>
//               `respon block py-2 pr-4 pl-3 duration-200 
//           ${isActive ? "text-orange-300": "text-grey-700"} block duration-200 flex items-center hover:text-orange-300 lg:p-0`
//              }>
//             Pretzels
//           </NavLink>

//           <NavLink
//             to="/Waffles"
//             className= {({isActive}) =>
//               `respon block py-2 pr-4 pl-3 duration-200 
//           ${isActive ? "text-orange-300": "text-grey-700"} block duration-200 flex items-center hover:text-orange-300 lg:p-0`
//              }>
//             Waffles
//           </NavLink>

//           <NavLink
//             to="/Sauce&Toppings"
//             className= {({isActive}) =>
//               `respon block py-2 pr-4 pl-3 duration-200 
//           ${isActive ? "text-orange-300": "text-grey-700"} block duration-200 flex items-center  hover:text-orange-300 lg:p-0`
//              }>
//             Sauce & Toppings
//           </NavLink>

//           <NavLink
//             to="/GiftBoxes"
//             className= {({isActive}) =>
//               `respon block py-2 pr-4 pl-3 duration-200 
//           ${isActive ? "text-orange-300": "text-grey-700"} block duration-200 flex items-center  hover:text-orange-300 lg:p-0`
//              }>
//             Gift Boxes
//           </NavLink>

//           <NavLink
//             to="/Recipes"
//             className= {({isActive}) =>
//               `respon block py-2 pr-4 pl-3 duration-200 
//           ${isActive ? "text-orange-300": "text-grey-700"} block duration-200 flex items-center hover:text-orange-300 lg:p-0`
//              }>
//             Recipes
//           </NavLink>

//           <Link
//             to="/Login"
//             className="respon block py-2 ml-28  pl-2 duration-200 flex items-center lg:border-0 hover:text-orange-300 lg:p-0"
//           >
//             <i className={islogin}></i>
//           </Link>

//           <Link
//             to='/Search'
//             className="block py-2 pl-1 duration-200 flex items-center lg:border-0 hover:text-orange-300 lg:p-0"
//           >
//             <i onClick={toggleSidebar} className="fa-solid fa-magnifying-glass"></i>
//           </Link>
//           <Link
//             to="/Shop"
//             className="py-2  pl-3 duration-200 flex items-center lg:p-0"
//           >
//             <button className="shop">Shop Now</button>
//           </Link>
//             <Link className="ham none py-2 pl-[450px] duration-200 flex items-center lg:border-0 hover:text-orange-300 lg:p-0" > <i className=" fa fa-reorder" ></i>
//           </Link>
//         </div>
//       </nav>
//       </header>
//     </>
//   );
// }

// export default Header;

import { useEffect, useState } from 'react';
import { Link,NavLink ,useLocation } from 'react-router-dom';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [islogin, setIslogin] = useState("fa-regular fa-user");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/Login") {
      setIslogin('');
    } else {
      setIslogin("fa-regular fa-user");
    }
  }, [location, islogin]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
    <header>
      <nav className='top-0 z-20'>
        <div className="header">
        <NavLink to="/"  className="block  duration-200 
             mr-36 "   >
          <p style={{fontFamily:'inherit', fontWeight:'100', fontSize:'16px',marginTop:'2px'}}>
           Enjoy your<br />
           <span style={{fontFamily:'inherit',fontWeight:'500', fontSize:'30px',color:'orange'}}>MEAL</span>
           </p>
          </NavLink>

          <NavLink
            to="/Pretzels"
            className= {({isActive}) => 
              `respon block py-2 pr-4 pl-3 duration-200 
          ${isActive ? "text-orange-300": "text-grey-700"} block duration-200 flex items-center hover:text-orange-300 lg:p-0`
             }>
            Pretzels
          </NavLink>

          <NavLink
            to="/Waffles"
            className= {({isActive}) =>
              `respon block py-2 pr-4 pl-3 duration-200 
          ${isActive ? "text-orange-300": "text-grey-700"} block duration-200 flex items-center hover:text-orange-300 lg:p-0`
             }>
            Waffles
          </NavLink>

          <NavLink
            to="/Sauce&Toppings"
            className= {({isActive}) =>
              `respon block py-2 pr-4 pl-3 duration-200 
          ${isActive ? "text-orange-300": "text-grey-700"} block duration-200 flex items-center  hover:text-orange-300 lg:p-0`
             }>
            Sauce & Toppings
          </NavLink>

          <NavLink
            to="/GiftBoxes"
            className= {({isActive}) =>
              `respon block py-2 pr-4 pl-3 duration-200 
          ${isActive ? "text-orange-300": "text-grey-700"} block duration-200 flex items-center  hover:text-orange-300 lg:p-0`
             }>
            Gift Boxes
          </NavLink>

          <NavLink
            to="/Recipes"
            className= {({isActive}) =>
              `respon block py-2 pr-4 pl-3 duration-200 
          ${isActive ? "text-orange-300": "text-grey-700"} block duration-200 flex items-center hover:text-orange-300 lg:p-0`
             }>
            Recipes
          </NavLink>

          <Link
            to="/Login"
            className="respon block py-2 ml-28  pl-2 duration-200 flex items-center lg:border-0 hover:text-orange-300 lg:p-0"
          >
            <i className={islogin}></i>
          </Link>

          <Link
            to='/Search'
            className="block py-2 pl-1 duration-200 flex items-center lg:border-0 hover:text-orange-300 lg:p-0"
          >
            <i onClick={toggleSidebar} className="fa-solid fa-magnifying-glass"></i>
          </Link>
          
          <Link
            to="/Shop"
            className="py-2  pl-3 duration-200 flex items-center lg:p-0"
          >

            <button className="shop">Shop Now</button>
          </Link>
          <Link className="ham none py-2 pl-[450px] duration-200 flex items-center lg:border-0 hover:text-orange-300 lg:p-0" > <i className=" fa fa-reorder" ></i>
          </Link>
        </div>
      </nav>
      </header>
    </>
  );
}

export default Header;

