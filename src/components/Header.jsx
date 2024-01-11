import React, { useState } from "react";
import { Link } from "react-router-dom";


function Header() {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="bg-white">
      <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-md">
        <div className="p-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            BiteZone
          </Link>
        </div>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-blue-500">Cart</Link>
          </li>
        </ul>
        <button
          className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
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
