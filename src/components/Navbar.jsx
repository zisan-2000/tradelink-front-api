import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Search from "./Search";

function Navbar() {
  const [menuData, setMenuData] = useState([]);
  const [subMenuData, setSubMenuData] = useState([]);
  const [subSubMenuData, setSubSubMenuData] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fetching Menu Data
  useEffect(() => {
    fetch("http://localhost:8000/menus/") // Adjust the URL as necessary
      .then((response) => response.json())
      .then((data) => setMenuData(data))
      .catch((error) => console.error("Error fetching menu data:", error));

    // Fetching SubMenu Data
    fetch("http://localhost:8000/sub-menus/") // Adjust the URL as necessary
      .then((response) => response.json())
      .then((data) => setSubMenuData(data))
      .catch((error) => console.error("Error fetching submenu data:", error));

    // Fetching SubSubMenu Data
    fetch("http://localhost:8000/sub-sub-menus/") // Adjust the URL as necessary
      .then((response) => response.json())
      .then((data) => setSubSubMenuData(data))
      .catch((error) =>
        console.error("Error fetching subsubmenu data:", error),
      );
  }, []);

  const handleDropdownToggle = (menuId) => {
    if (activeDropdown === menuId) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menuId);
      setActiveSubDropdown(null);
    }
  };

  const handleSubDropdownToggle = (subMenuId) => {
    if (activeSubDropdown === subMenuId) {
      setActiveSubDropdown(null);
    } else {
      setActiveSubDropdown(subMenuId);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  // Filtering submenus based on the menu relationship
  const getSubMenusForMenu = (menuId) => {
    return subMenuData.filter((subMenu) => subMenu.menu === menuId);
  };

  // Filtering sub-sub-menus based on the submenu relationship
  const getSubSubMenusForSubMenu = (subMenuId) => {
    return subSubMenuData.filter(
      (subSubMenu) => subSubMenu.sub_menu === subMenuId,
    );
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
          {menuData.map((menu) => (
            <li key={menu.id} className="relative">
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
                    onClick={() => handleDropdownToggle(menu.id)}
                    className="block py-2 focus:outline-none lg:px-4 lg:py-0"
                  >
                    {menu.title}
                  </button>
                  {activeDropdown === menu.id && (
                    <ul className="mt-2 text-xs text-gray-600 hover:text-gray-800 lg:absolute lg:left-0 lg:top-full lg:mt-0">
                      {getSubMenusForMenu(menu.id).map((subItem) => (
                        <li key={subItem.id} className="relative">
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
                                  handleSubDropdownToggle(subItem.id)
                                }
                                className="expandItems"
                              >
                                {subItem.title}
                              </button>
                              {activeSubDropdown === subItem.id && (
                                <ul className="mt-2 xs:pl-4 md:pl-0 lg:absolute lg:left-full lg:top-0 lg:mt-0">
                                  {getSubSubMenusForSubMenu(subItem.id).map(
                                    (subSubItem) => (
                                      <li key={subSubItem.id}>
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
