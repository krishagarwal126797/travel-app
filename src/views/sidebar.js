import React from 'react';
import { FaHome, FaUser, FaCog, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <FaHome className="sidebar-icon" />
          {/* <span className="sidebar-text">Home</span> */}
        </li>
        <li className="sidebar-item">
          <FaUser className="sidebar-icon" />
          {/* <span className="sidebar-text">Profile</span> */}
        </li>
        <li className="sidebar-item">
          <FaCog className="sidebar-icon" />
          {/* <span className="sidebar-text">Settings</span> */}
        </li>
        <li className="sidebar-item">
          <FaQuestionCircle className="sidebar-icon" />
          {/* <span className="sidebar-text">Help</span> */}
        </li>
        <li className="sidebar-item">
          <FaSignOutAlt className="sidebar-icon" />
          {/* <span className="sidebar-text">Logout</span> */}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
