import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const [btnName, setBtnName] = useState("Login");
  const [showNav, setShowNav] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="bg-white">
      <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-md">
        <div className="p-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            BiteZone
          </Link>
        </div>
        {/* Hamburger menu button for mobile */}
        <div className="md:hidden p-4">
          <button onClick={toggleNav}>
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {/* Navigation links */}
        <ul className={`flex gap-6 md:flex ${showNav ? "flex" : "hidden"}`}>
          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-blue-500">
              Cart ({cartItems.length})
            </Link>
          </li>
        </ul>
        {/* Login/Logout button */}
        <button
          className="hidden md:block p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          onClick={() => {
            btnName === "Logout" ? setBtnName("Login") : setBtnName("Logout");
          }}
        >
          {btnName}
        </button>
      </nav>
    </div>
  );
}

export default Header;
