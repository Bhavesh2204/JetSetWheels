import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Nav = () => {
  const location = useLocation();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl text-yellow-300" to="/Home">JetSetWheels</Link>
      </div>
      <div className="flex justify-center items-center w-screen">
        <ul className="menu menu-horizontal px-1">
          {location.pathname === '/Branding' ? (
            <li><ScrollLink to="brands-section" smooth={true} duration={500} offset={-89}>Brands</ScrollLink></li>
          ) : (
            <li><Link to="/Branding">Brands</Link></li>
          )}
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/ContactUs">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
