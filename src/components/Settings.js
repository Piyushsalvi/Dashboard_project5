import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './style/setting.css';;


const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState('enabled');
  const [smsNotifications, setSmsNotifications] = useState('disabled');

  return (
    <div className="settings-container container ">
      <h2 className="header2 pageee">Settings</h2>
      
      <section className="settings-section card mb-4">
        <h3 className="settings-section-title card-header">Account Information</h3>
        <div className="card-body">
          <p className="settings-info"><i className="fas fa-user "></i>Username: <b>Piyush Salvi</b></p>
          <p className="settings-info"><i className="fas fa-envelope "></i>Email:<b> piyushsalvi@gmail.com</b></p>
        </div>
      </section>

      <section className="settings-section card ">
        <h3 className="settings-section-title card-header">Notification Settings</h3>
        <div className="card-body">
          <div className="settings-info">
            <label>Email Notifications:</label>
            <div className="settings-toggle">
              <label className='endis'>
                <input 
                  type="radio" 
                  name="emailNotifications" 
                  value="enabled" 
                  checked={emailNotifications === 'enabled'} 
                  onChange={(e) => setEmailNotifications(e.target.value)} 
                />
                <i className="fas fa-check-circle mr-2"></i>Enabled
              </label>
              <label  className='endis'>
                <input 
                  type="radio" 
                  name="emailNotifications" 
                  value="disabled" 
                  checked={emailNotifications === 'disabled'} 
                  onChange={(e) => setEmailNotifications(e.target.value)} 
                />
                <i className="fas fa-times-circle mr-2"></i>Disabled
              </label>
            </div>
          </div>
          <div className="settings-info">
            <label>SMS Notifications:</label>
            <div className="settings-toggle">
              <label  className='endis'>
                <input 
                  type="radio" 
                  name="smsNotifications" 
                  value="enabled" 
                  checked={smsNotifications === 'enabled'} 
                  onChange={(e) => setSmsNotifications(e.target.value)} 
                />
                <i className="fas fa-check-circle mr-2"></i>Enabled
              </label>
              <label  className='endis'>
                <input 
                  type="radio" 
                  name="smsNotifications" 
                  value="disabled" 
                  checked={smsNotifications === 'disabled'} 
                  onChange={(e) => setSmsNotifications(e.target.value)} 
                />
                <i className="fas fa-times-circle mr-2"></i>Disabled
              </label>
            </div>
          </div>
        </div>
      </section>

      <section className="settings-section card mb-4">
        <h3 className="settings-section-title card-header">Preferences</h3>
        <div className="card-body">
          <p className="settings-info"><i className="fas fa-language mr-2"></i>Preferred Language: English</p>
          <p className="settings-info"><i className="fas fa-dollar-sign mr-2"></i>Currency: USD</p>
        </div>
      </section>

      <section className="settings-section card mb-4">
        <h3 className="settings-section-title card-header">Security Settings</h3>
        <div className="card-body">
          <p className="settings-info"><i className="fas fa-lock mr-2"></i>Password: ********</p>
          <p className="settings-info"><i className="fas fa-shield-alt mr-2"></i>Two-Factor Authentication: Enabled</p>
        </div>
      </section>


      <section className="settings-section card mb-4">
        <h3 className="settings-section-title card-header">Privacy Settings</h3>
        <div className="card-body">
          <p className="settings-info"><i className="fas fa-eye mr-2"></i>Profile Visibility: Public</p>
          <p className="settings-info"><i className="fas fa-search mr-2"></i>Search Visibility: Enabled</p>
        </div>
      </section>
    </div>
  );
};

export default Settings;