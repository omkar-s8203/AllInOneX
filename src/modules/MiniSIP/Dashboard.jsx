import React, { useState, useContext } from 'react';
import ProfileSectionLeft from './ProfileSectionLeft';
import Overview from './Overview';
import Statistics from './Statistics';
import MyWallet from './MyWallet';
import Transfer from './Transfer';
import { Message } from './Message';
import ThemeContext from '../../context/ThemeContext';
import './Dashboard.css'

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('Overview');
  const { theme, toggleTheme } = useContext(ThemeContext);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'Overview':
        return <Overview />;
      case 'Statistics':
        return <Statistics />;
      case 'My Wallet':
        return <MyWallet />;
      case 'Transfer':
        return <Transfer />;
      case 'Message':
        return <Message />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className={`container theme-${theme}`}>
    <div className="row">
      <div className="col-3">
        <ProfileSectionLeft
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
      <div className="col-9">
        {/* Display Current Theme */}
        <h1>{`Current Theme: ${theme}`}</h1>
        {/* Button to Toggle Theme */}
        <button onClick={toggleTheme} style={{ marginBottom: '20px' }}>
          Toggle Theme
        </button>
        {renderActiveSection()}
      </div>
    </div>
  </div>
  );
}
