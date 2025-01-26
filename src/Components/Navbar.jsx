import React, { useContext, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = async () => {
    await logOut();
  };

  // Handle theme toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply the theme class to the body
  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  return (
    <div
      className={`navbar ${
        isDarkMode ? "bg-gray-900 text-white" : " bg-sky-800 text-black"
      } shadow-md sticky px-8 top-0 z-50`}
    >
      <div className="navbar-start flex items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-teal-400">
          Crowdcube
        </Link>
        {/* Hamburger Menu */}
        <button
          className="btn btn-ghost lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Center Links */}
      <div
        className={`navbar-center lg:flex ${
          isMenuOpen ? "block" : "hidden"
        } lg:block`}
      >
        <ul className="menu menu-horizontal lg:flex flex-col lg:flex-row px-1 lg:px-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-500 font-bold"
                  : "text-gray-300 hover:text-cyan-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/campaigns"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-500 font-bold"
                  : "text-gray-300 hover:text-cyan-500"
              }
            >
              All Campaigns
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addCampaign"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-500 font-bold"
                  : "text-gray-300 hover:text-cyan-500"
              }
            >
              Add Campaign
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myCampaign"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-500 font-bold"
                  : "text-gray-300 hover:text-cyan-500"
              }
            >
              My Campaign
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/updateCampaign"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-500 font-bold"
                  : "text-gray-300 hover:text-cyan-500"
              }
            >
              Update Campaign
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myDonations"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-500 font-bold"
                  : "text-gray-300 hover:text-cyan-500"
              }
            >
              My Donations
            </NavLink>
          </li>
        </ul>
      </div>

      {/* User Section */}
      <div className="navbar-end flex items-center gap-4">
        <div
          className="cursor-pointer text-2xl"
          onClick={toggleDarkMode}
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
        </div>
        {user && user.email ? (
          <>
            <div className="flex items-center gap-2">
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt="Profile"
                className="w-10 h-10 rounded-full border"
              />
            </div>
            <button
              onClick={handleLogOut}
              className="btn bg-teal-500 text-white font-semibold hover:bg-teal-600 border-none shadow-md hover:shadow-lg transition-all duration-300"
            >
              Log Out
            </button>
          </>
        ) : (
          <NavLink to="/login">
            <button className="btn bg-teal-500 text-white font-semibold hover:bg-teal-600 border-none shadow-md hover:shadow-lg transition-all duration-300">
              Login
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
