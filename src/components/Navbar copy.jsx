import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { menuData } from "./menuData"; // Import the centralized data structure
import Search from "./Search";

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (item) => {
    if (activeDropdown === item) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(item);
      setActiveSubDropdown(null);
    }
  };

  const handleSubDropdownToggle = (item) => {
    if (activeSubDropdown === item) {
      setActiveSubDropdown(null);
    } else {
      setActiveSubDropdown(item);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  return (
    <nav className="relative z-20 h-[65px] w-full bg-white">
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="text-lg font-bold text-gray-900 md:hidden">
          TRADELINKERS
        </div>
        <button className="lg:hidden" onClick={toggleMobileMenu}>
          <HiMenu className="h-6 w-6" />
        </button>
      </div>

      <div
        className={`text-sm font-semibold lg:relative lg:flex lg:h-auto lg:items-center lg:justify-evenly lg:pt-0 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="bg-gray-300 pl-4 md:bg-white md:pl-0 lg:flex lg:items-center">
          {menuData.map((menu, index) => (
            <li key={index} className="relative">
              {menu.path ? (
                <NavLink
                  to={menu.path}
                  exact
                  activeClassName="active"
                  className="block py-2 lg:px-4 lg:py-0"
                >
                  {menu.title}
                </NavLink>
              ) : (
                <>
                  <button
                    onClick={() => handleDropdownToggle(menu.title)}
                    className="block py-2 focus:outline-none lg:px-4 lg:py-0"
                  >
                    {menu.title}
                  </button>
                  {activeDropdown === menu.title && (
                    <ul className="mt-2 text-xs text-gray-600 hover:text-gray-800 lg:absolute lg:left-0 lg:top-full lg:mt-0">
                      {menu.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="relative">
                          {subItem.path ? (
                            <NavLink
                              to={subItem.path}
                              className="expandItems"
                              activeClassName="active"
                            >
                              {subItem.title}
                            </NavLink>
                          ) : (
                            <>
                              <button
                                onClick={() =>
                                  handleSubDropdownToggle(subItem.title)
                                }
                                className="expandItems"
                              >
                                {subItem.title}
                              </button>
                              {activeSubDropdown === subItem.title && (
                                <ul className="mt-2 xs:pl-4 md:pl-0 lg:absolute lg:left-full lg:top-0 lg:mt-0">
                                  {subItem.subSubMenu.map(
                                    (subSubItem, subSubIndex) => (
                                      <li key={subSubIndex}>
                                        <NavLink
                                          to={subSubItem.path}
                                          className="expandItems"
                                          activeClassName="active"
                                        >
                                          {subSubItem.title}
                                        </NavLink>
                                      </li>
                                    ),
                                  )}
                                </ul>
                              )}
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
          <li className="block py-2 lg:px-4 lg:py-0">
            <Search />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
