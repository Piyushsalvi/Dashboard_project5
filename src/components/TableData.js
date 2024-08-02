import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faUser, faClock } from '@fortawesome/free-solid-svg-icons';
import './style/TableData.css';

import people from "./images/people.webp";

const TableData = () => {
  return (
    <div className="recent-orders-container">

      <div className="left-section" style={{ width: '100vh' }}>
        <div className="heading-section">
          <h2 className="recent-orders-heading" style={{ color: '#007bff' }}>
            RECENT ORDERS
          </h2>
        </div>
        <table className="orders-table">
          <tr>
            <th>NAME</th>
            <th>PRICE</th>
            <th>PAYMENT</th>
            <th>STATUS</th>
          </tr>
          <tr>
            <td>Smart Watch</td>
            <td>₹1500</td>
            <td>Paid</td>
            <td>
              <div className="status-box" style={{ backgroundColor: '#2ecc71' }}>Delivered</div>
            </td>
          </tr>
          <tr>
            <td>Wireless Earbuds</td>
            <td>₹200</td>
            <td>Due</td>
            <td>
              <div className="status-box" style={{ backgroundColor: '#ffc107' }}>Pending</div>
            </td>
          </tr>

          <tr>
            <td>Power Bank</td>
            <td>₹450</td>
            <td>Paid</td>
            <td>
              <div className="status-box" style={{ backgroundColor: '#e74c3c' }}>Return</div>
            </td>
          </tr>

          <tr>
            <td>Laptop Bag</td>
            <td>₹10200</td>
            <td>Due</td>
            <td>
              <div className="status-box" style={{ backgroundColor: '#3498db' }}>In Progress</div>
            </td>
          </tr>

          <tr>
            <td>Smartphone Case</td>
            <td>₹420</td>
            <td>Pending</td>
            <td>
              <div className="status-box" style={{ backgroundColor: '#2ecc71' }}>Delivered</div>
            </td>
          </tr>

          <tr>
            <td>Headphones</td>
            <td>₹500</td>
            <td>Due</td>
            <td>
              <div className="status-box" style={{ backgroundColor: '#ffc107' }}>Pending</div>
            </td>
          </tr>

          <tr>
            <td>Tablet</td>
            <td>₹25000</td>
            <td>Paid</td>
            <td>
              <div className="status-box" style={{ backgroundColor: '#e74c3c' }}>Return</div>
            </td>
          </tr>
        </table>
      </div>
      <div className="right-section" style={{ width: '50vh' }}>
        <h2 className="heading-section2" style={{ color: '#007bff' }}>RECENT CUSTOMERS</h2>
        <ul className="customers-list">
          <li>
            <img src={people} alt="Customer" className="customer-image" />
            <span><span>Akash</span> <span className="spnclr">India</span></span>
          </li>
          <li>
            <img src={people} alt="Customer" className="customer-image" />
            <span><span>Sahil</span> <span className="spnclr">Canada</span></span>
          </li>
          <li>
            <img src={people} alt="Customer" className="customer-image" />
            <span><span>Jack</span> <span className="spnclr">USA</span></span>
          </li>
          <li>
            <img src={people} alt="Customer" className="customer-image" />
            <span><span>Mini</span> <span className="spnclr">India</span></span>
          </li>
          <li>
            <img src={people} alt="Customer" className="customer-image" />
            <span><span>Akshita</span> <span className="spnclr">Canada</span></span>
          </li>
          <li>
            <img src={people} alt="Customer" className="customer-image" />
            <span><span>Arpit</span> <span className="spnclr">Russia</span></span>
          </li>
          <li>
            <img src={people} alt="Customer" className="customer-image" />
            <span><span>Ajay</span> <span className="spnclr">japan</span></span>
          </li>
          <li>
            <img src={people} alt="Customer" className="customer-image" />
            <span><span>Karan</span> <span className="spnclr">USA</span></span>
          </li>

        </ul>
      </div>

      <div className="product-grid">
  <div className="product">
    <div className="product-info">
      <div className="views">
        <div>
          <p className="viewsp1">15872</p>
          <p className="viewsp2">Products</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faBox} style={{ color: '#34A853' }} />
        </div>
      </div>
    </div>
  </div>
  <div className="product">
    <div className="product-info">
      <div className="views">
        <div>
          <p className="viewsp1">1M</p>
          <p className="viewsp2">Customers</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} style={{ color: '#2196F3' }} />
        </div>
      </div>
    </div>
  </div>
  <div className="product">
    <div className="product-info">
      <div className="views">
        <div>
          <p className="viewsp1">Due</p>
          <p className="viewsp2">Orders Pending</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faClock} style={{ color: '#FFC107' }} />
        </div>
      </div>
    </div>
  </div>
</div>

    </div>

    
  );
};

export default TableData;