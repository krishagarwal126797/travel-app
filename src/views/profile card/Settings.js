import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-page">
      {/* Header Section */}
      <header className="settings-header">
        <div className="header-content">
          <h1 className="header-title">Settings</h1>
          <p className="header-description">
            Manage your account settings and preferences with ease.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="settings-content">
        {/* Account Information */}
        <section className="settings-section">
          <h2 className="section-title">Account Information</h2>
          <form className="settings-form">
            <div className="form-group">
              <label>Username</label>
              <input type="text" placeholder="Enter your username" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
          </form>
        </section>

        {/* Privacy Settings */}
        <section className="settings-section">
          <h2 className="section-title">Privacy Settings</h2>
          <form className="settings-form">
            <div className="form-group">
              <label>
                <input type="checkbox" /> Make my profile private
              </label>
            </div>
            <div className="form-group">
              <label>
                <input type="checkbox" /> Hide my activity status
              </label>
            </div>
          </form>
        </section>

        {/* Notification Preferences */}
        <section className="settings-section">
          <h2 className="section-title">Notification Preferences</h2>
          <form className="settings-form">
            <div className="form-group">
              <label>
                <input type="checkbox" /> Email Notifications
              </label>
            </div>
            <div className="form-group">
              <label>
                <input type="checkbox" /> App Notifications
              </label>
            </div>
          </form>
        </section>

        {/* Contact Form */}
        <section className="settings-section contact-section">
          <h2 className="section-title">Contact Support</h2>
          <form className="settings-form">
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Describe your issue or question"></textarea>
            </div>
            <button className="cta-button">Send Message</button>
          </form>
        </section>

        {/* Save Changes */}
        <div className="save-changes">
          <button className="cta-button">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
