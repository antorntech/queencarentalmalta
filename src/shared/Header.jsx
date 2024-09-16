import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const menuLeft = [
    {
      label: "About Us",
      path: "/aboutus",
    },
    {
      label: "Discover Malta",
      path: "/discover",
    },
    {
      label: "Fleet",
      path: "/fleet",
    },
  ];

  const menuRight = [
    {
      label: "Long-Term Lease",
      path: "/longtermform",
    },
    {
      label: "Contact Us",
      path: "/contactus",
    },
  ];

  const mainMenu = [
    {
      label: "About Us",
      path: "/aboutus",
    },
    {
      label: "Discover Malta",
      path: "/discover",
    },
    {
      label: "Fleet",
      path: "/fleet",
    },
    {
      label: "Long-Term Lease",
      path: "/longtermform",
    },
    {
      label: "Contact Us",
      path: "/contactus",
    },
  ];
  return (
    <div className="w-full px-5 py-1">
      {/* desktop menu */}
      <div className="max-w-screen-xl mx-auto hidden md:flex justify-between items-center">
        <div className="flex items-center gap-8">
          {menuLeft.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-700 text-[16px] font-semibold transition duration-300"
                    : "text-black text-[16px] font-[500] hover:text-red-600 transition duration-300"
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>
        <div>
          <Link to="/">
            <img src="/images/logo-dark.png" alt="" />
          </Link>
        </div>
        <div className="flex items-center gap-8">
          {menuRight.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-700 text-[16px] font-semibold transition duration-300"
                    : "text-black text-[16px] font-[500] hover:text-red-600 transition duration-300"
                }
              >
                {item.label}
              </NavLink>
            );
          })}
          <button className="px-5 py-2 bg-gradient-to-l from-[#D00000] to-[#9D0208] text-white rounded-md shadow-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
