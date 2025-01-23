import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminSidebar.css';

const AdminSidebar = () => {
  const sidebarOptions = [
    { path: '/admin/dashboard', label: 'Dashboard' },
    { path: '/admin/tours', label: 'Tours' },
    { path: '/admin/customers', label: 'Customers' },
    { path: '/admin/partners', label: 'Partners' },
    { path: '/admin/profitloss', label: 'Profit/Loss' },
    { path: '/admin/destinations', label: 'Destinations' },
  ];

  return (
    <div className="admin-sidebar">
      <h3 className="sidebar-title">Admin Panel</h3>
      <ul className="sidebar-menu">
        {sidebarOptions.map((option, index) => (
          <li key={index} className="sidebar-item">
            <NavLink
              to={option.path}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
              }
            >
              {option.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminSidebar;
