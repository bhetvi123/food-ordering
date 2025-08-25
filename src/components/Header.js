import { useEffect, useState, useContext } from "react";
import { HEADERLOGO_URL } from "../utils/constants";
import { Link } from "react-router"; // ✅ fix here
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-white shadow-md px-6 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src={HEADERLOGO_URL}
          alt="Logo"
          className="w-12 h-12 object-contain"
        />
        <h1 className="text-xl font-bold text-[#733E48]">Food Villa</h1>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-6 items-center text-gray-700 font-medium">
          <li>
            <span className="text-sm">
              Online:{" "}
              <span className={onlineStatus ? "text-green-600" : "text-red-500"}>
                {onlineStatus ? "Yes" : "No"}
              </span>
            </span>
          </li>
          <li>
            <Link to="/" className="hover:text-[#733E48] transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:text-[#733E48] transition-colors">
              Grocery
            </Link>
          </li>
          <li>
            <Link to="/contactme" className="hover:text-[#733E48] transition-colors">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/aboutme" className="hover:text-[#733E48] transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="relative hover:text-[#733E48] transition-colors"
            >
              Cart
              <span className="ml-1 text-sm bg-[#733E48] text-white px-2 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            </Link>
          </li>

          {/* Login Button */}
          <li>
            <button
              onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
              className="bg-[#733E48] text-white px-4 py-1 rounded hover:bg-[#5e2f3c] transition"
            >
              {btnName}
            </button>
          </li>

          {/* User Name */}
          <li className="text-[#733E48] font-semibold">{loggedInUser}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
