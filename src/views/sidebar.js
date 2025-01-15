import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
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
  {
    path: "/file-manager",
    name: "File Manager",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      { path: "/file-manager/profile", name: "Profile", icon: <FaUser /> },
      { path: "/file-manager/2fa", name: "2FA", icon: <FaLock /> },
      { path: "/file-manager/billing", name: "Billing", icon: <FaMoneyBill /> },
    ],
  },
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
  const [activeMenu, setActiveMenu] = useState(null); // For toggling submenus

  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: { width: 0, padding: 0, opacity: 0, transition: { duration: 0.2 } },
    show: { width: "140px", padding: "5px 15px", opacity: 1, transition: { duration: 0.2 } },
  };

  const showAnimation = {
    hidden: { height: 0, opacity: 0, transition: { duration: 0.3 } },
    show: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  };

  const handleSubmenuToggle = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <div className="main-container">
      <motion.div
        animate={{ width: isOpen ? "200px" : "50px" }}
        className="sidebar"
      >
        <div className="top_section">
          {isOpen && <motion.h1 className="logo">YourLogo</motion.h1>}
          <FaBars className="bars" onClick={toggle} />
        </div>
        <div className="search">
          <BiSearch className="search_icon" />
          <AnimatePresence>
            {isOpen && (
              <motion.input
                variants={inputAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                placeholder="Search..."
              />
            )}
          </AnimatePresence>
        </div>
        <section className="routes">
          {routes.map((route, index) => (
            <div key={index}>
              <div
                className="link menu"
                onClick={() => route.subRoutes && handleSubmenuToggle(route.name)}
              >
                <div className="icon">{route.icon}</div>
                {isOpen && <div className="link_text">{route.name}</div>}
                {route.subRoutes && isOpen && (
                  <span className={`arrow ${activeMenu === route.name ? "open" : ""}`}>▼</span>
                )}
              </div>
              {route.subRoutes && activeMenu === route.name && (
                <motion.div
                  className="menu_container"
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  {route.subRoutes.map((subRoute, subIndex) => (
                    <NavLink
                      to={subRoute.path}
                      key={subIndex}
                      className="link"
                      activeClassName="active"
                    >
                      <div className="icon">{subRoute.icon}</div>
                      {isOpen && <div className="link_text">{subRoute.name}</div>}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
