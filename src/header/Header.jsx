import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
      <nav className='fixed top-0 left-0 right-0 z-20'>
        <div className="header">
          <Link to="/" className="block duration-200 flex items-center mr-36 lg:border-0 hover:text-orange-300 lg:p-0">
            <i className="fa-solid fa-radio"></i>
          </Link>

          <Link
            to="/Pretzels"
            className="block py-2 pr-4 pl-3 duration-200 text-grey-700 hover:text-orange-300 lg:p-0"
          >
            Pretzels
          </Link>

          <Link
            to="/Waffles"
            className="block py-2 pr-4 pl-3 duration-200 text-grey-700 hover:text-orange-300 lg:p-0"
          >
            Waffles
          </Link>

          <Link
            to="/Sauce&Toppings"
            className="block py-2 pr-4 pl-3 duration-200 text-grey-700 hover:text-orange-300 lg:p-0"
          >
            Sauce & Toppings
          </Link>

          <Link
            to="/GiftBoxes"
            className="block py-2 pr-4 pl-3 duration-200 text-grey-700 hover:text-orange-300 lg:p-0"
          >
            Gift Boxes
          </Link>

          <Link
            to="/Recipes"
            className="block py-2 pr-4 pl-3 duration-200 text-grey-700 hover:text-orange-300 lg:p-0"
          >
            Recipes
          </Link>

          <Link
            to="/Login"
            className="block py-2 ml-20 pr-2 pl-2 duration-200 flex items-center lg:border-0 hover:text-orange-300 lg:p-0"
          >
            <i className={islogin}></i>
          </Link>

          <Link
            to='/Search'
            className="block py-2 pr-1 pl-1 duration-200 flex items-center lg:border-0 hover:text-orange-300 lg:p-0"
          >
            <i onClick={toggleSidebar} className="fa-solid fa-magnifying-glass"></i>
          </Link>

          <Link
            to="/Shop"
            className="py-2 pr-4 pl-3 duration-200 flex items-center lg:p-0"
          >
            <button className="shop">Shop Now</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
