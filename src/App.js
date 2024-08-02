import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { HouseDoorFill, Speedometer2, PeopleFill, GearFill, LockFill, PersonFill, PencilSquare, Clipboard } from 'react-bootstrap-icons';




import DashboardHome from './components/DashboardHome';
import Users from './components/Users';
import Settings from './components/Settings';
import Login from './components/Login';
import UpdateDelete from './components/UpdateDelete';
import HomePage from './components/HomePage';
import Aboutus from './components/Aboutus'
import TableData from './components/TableData'

// -----------Links--------------
import TopOffer from './components/Links/top-offer';
import MobilesTablets from './components/Links/mobiles-tablets';
import Electronics from './components/Links/electronics';
import TvsAppliances from './components/Links/tvs-appliances';
import Fashion from './components/Links/fashion';
import Beauty from './components/Links/beauty';
import HomeKitchen from './components/Links/home-kitchen';
import Furniture from './components/Links/furniture';
import Grocery from './components/Links/grocery';


function App() {
  const [sidebarOpen] = useState(true);
  const sidebarRef = React.createRef();

  return (
    <Router>
      <div className="container-fluid">
        <div className={`sidebar ${sidebarOpen ? '' : 'collapsed'}`} ref={sidebarRef}>
          <div className="sidebar-header">
            <h1 className='hhh'>
            <span style={{ color: 'green', fontSize: "20px", fontWeight: 'bold' }}> Salv</span>
            <span style={{ color: 'blue', fontSize: "15px", fontWeight: 'bold' }}>ation</span>
            </h1>
          </div>
          <ul className="nav flex-column">
  {/* home */}
  <li className="nav-item">
    <Link to="/HomePage" className="nav-link">
      <HouseDoorFill size={15} style={{ marginRight: 10, color: '#337ab7' }} /> Home
    </Link>
  </li>
  <li className="nav-item">
  <Link to="/TableData" className="nav-link">
    <Clipboard size={15} style={{ marginRight: 10, color: '#ffff00' }} /> Orders
  </Link>
</li>
  <li className="nav-item">
    <Link to="/DashboradHome" className="nav-link">
      <Speedometer2 size={15} style={{ marginRight: 10, color: '#8bc34a' }} /> Dashboard
    </Link>
  </li>
  <li className="nav-item">
    <Link to="/users" className="nav-link">
      <PeopleFill size={15} style={{ marginRight: 10, color: '#9c27b0' }} /> Users
    </Link>
  </li>
  <li className="nav-item">
    <Link to="/settings" className="nav-link">
      <GearFill size={15} style={{ marginRight: 10, color: '#2196f3' }} /> Settings
    </Link>
  </li>
  <li className="nav-item">
    <Link to="/login" className="nav-link">
      <LockFill size={15} style={{ marginRight: 10, color: '#ff9800' }} /> Login
    </Link>
  </li>
  {/* UpdateDelete */}
  <li className="nav-item">
    <Link to="/UpdateDelete" className="nav-link">
      <PencilSquare size={15} style={{ marginRight: 10, color: '#4caf50' }} /> UpdateDelete
    </Link>
  </li>
  {/* Aboutus */}
  <li className="nav-item">
  <Link to="/Aboutus" className="nav-link">
    <PersonFill size={15} style={{ marginRight: 10, color: 'skyblue' }} /> About us
  </Link>
</li>



</ul>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/DashboradHome" element={<DashboardHome />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/UpdateDelete" element={<UpdateDelete />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/TableData" element={<TableData />} />

      

            {/* Links */}

            <Route path="/top-offer" element={<TopOffer />} />
            <Route path="/mobiles-tablets" element={<MobilesTablets />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/tvs-appliances" element={<TvsAppliances />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/home-kitchen" element={<HomeKitchen />} />
            <Route path="/furniture" element={<Furniture />} />
            <Route path="/grocery" element={<Grocery />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;