import { NavLink } from "react-router-dom";
import { FaBars, FaChevronRight, FaChevronLeft, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch, BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Sidebar.css";

const routes = [
  { path: "/", name: "Dashboard", icon: <FaHome /> },
  { path: "/users", name: "Users", icon: <FaUser /> },
  { path: "/messages", name: "Messages", icon: <MdMessage /> },
  { path: "/analytics", name: "Analytics", icon: <BiAnalyse /> },
  { path: "/order", name: "Order", icon: <BsCartCheck /> },
  // {
  //   path: "/file-manager",
  //   name: "File Manager",
  //   icon: <AiTwotoneFileExclamation />,
  //   subRoutes: [
  //     { path: "/file-manager/profile", name: "Profile", icon: <FaUser /> },
  //     { path: "/file-manager/2fa", name: "2FA", icon: <FaLock /> },
  //     { path: "/file-manager/billing", name: "Billing", icon: <FaMoneyBill /> },
  //   ],
  // },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    subRoutes: [
      { path: "/settings/profile", name: "Profile", icon: <FaUser /> },
      { path: "/settings/2fa", name: "2FA", icon: <FaLock /> },
      { path: "/settings/billing", name: "Billing", icon: <FaMoneyBill /> },
    ],
  },
  { path: "/saved", name: "Saved", icon: <AiFillHeart /> },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <section className="sidebar_container">
      <motion.div className={`sidebar ${isOpen ? "expanded" : ""}`}>
        <div className="top_section">
          <div className="toggle-btn" onClick={toggleSidebar}>
            {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
          </div>
          {isOpen && <h4 className="logo">Travel Tinder</h4>}
        </div>

        <div className="search">
          <BiSearch className="search_icon" />
          {isOpen && <input type="text" placeholder="Search..." />}
        </div>

        <section className="routes">
          {routes.map((route, index) => (
            <div key={index}>
              <div className="link menu" onClick={() => route.subRoutes && setActiveMenu(activeMenu === route.name ? null : route.name)}>
                <div className="icon">{route.icon}</div>
                {isOpen && <span className="link_text">{route.name}</span>}
                {route.subRoutes && isOpen && (
                  <span className={`arrow ${activeMenu === route.name ? "open" : ""}`}>▼</span>
                )}
              </div>

              {route.subRoutes && activeMenu === route.name && (
                <motion.div className="menu_container">
                  {route.subRoutes.map((subRoute, subIndex) => (
                    <NavLink to={subRoute.path} key={subIndex} className="link">
                      <div className="icon">{subRoute.icon}</div>
                      {isOpen && <span className="link_text">{subRoute.name}</span>}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </section>
  );
};

export default SideBar;
