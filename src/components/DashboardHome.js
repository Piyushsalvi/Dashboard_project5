import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Title, Tooltip, Legend } from "chart.js";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faShoppingCart, faComment } from '@fortawesome/free-solid-svg-icons';

import "./style/dashboard.css";
import "./style/TableData.css";

import customer from "./images/1.png";
import customer2 from "./images/2.png";
import freedelivery from "./images/freedelivery.webp";
import people from "./images/people.webp";
// import people from "./images/people.webp";



Chart.register(ArcElement, Title, Tooltip, Legend);

const DashboardHome = () => {
  const data = {
    labels: [
      "Electronics",
      "Grocery",
      "Fashion",
      "Furniture",
      "Home & Kitchen",
      "Orders",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],

        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1.5,
        labelsWidht: 1.5,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Doughnut Chart Example",
    },
    legend: {},
  };

  const [totalOrders, setTotalOrders] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [averageOrderValue, setAverageOrderValue] = useState(0);

  useEffect(() => {
    const totalOrdersTarget = 10;
    const totalRevenueTarget = 10000;
    const averageOrderValueTarget = 1000;

    let intervalId = null;
    let startTime = Date.now();

    intervalId = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime < 2000) {
        if (totalOrders < totalOrdersTarget) {
          setTotalOrders((prevValue) => prevValue + 1);
        }
        if (totalRevenue < totalRevenueTarget) {
          setTotalRevenue((prevValue) => prevValue + 100);
        }
        if (averageOrderValue < averageOrderValueTarget) {
          setAverageOrderValue((prevValue) => prevValue + 10);
        }
      } else {
        clearInterval(intervalId);
      }
    }, 80);
  }, [totalOrders, totalRevenue, averageOrderValue]);


  const [counter, setCounter] = useState(1504);


  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1);

    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">

      <div className="product-grid">
        <div className="product">
          <div className="product-info ">
            <div className="views ">
              <div>
                <p className="viewsp1">{counter}</p>
                <p className="viewsp2"> Daily views</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faEye} style={{ color: '#34A853' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="product-info">
            <div className="views">
              <div>
                <p className="viewsp1">2000+</p>
                <p className="viewsp2">sales</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#FFC107' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="product-info">
            <div className="views">
              <div>
                <p className="viewsp1">254</p>
                <p className="viewsp2"> comments</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faComment} style={{ color: '#2196F3' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="order-summary">
        <h2>Order Summary</h2>
        <ul className="summary-list">
          <li className="summary-item">
            <span className="summary-label">Total Orders:</span>
            <span className="summary-value" style={{ color: '', fontWeight: 'bold' }}>{totalOrders}</span>
          </li>
          <li className="summary-item">
            <span className="summary-label" >Total Revenue:</span>
            <span className="summary-value" >₹{totalRevenue.toLocaleString()}</span>
          </li>
          <li className="summary-item">
            <span className="summary-label">Average Order Value:</span>
            <span className="summary-value" >₹{averageOrderValue.toLocaleString()}</span>
          </li>
        </ul>
      </section>

      <div className="chart-container">
        <Doughnut data={data} options={options} className="small-labels" />
      </div>

      <hr></hr>

      <div className="row justify-content-center mb-3 ">
        <div className="col-md-12">
          <img src={freedelivery} className="img-fluid marrg" alt="posterrr1" />
        </div>
      </div>

      <hr></hr>

      <section className="testimonial-section">
        {/* <h1 className="elementor-heading-title elementor-size-default">What Our <span style={{ color: "#2fbbae" }}>Customers</span> Say</h1> */}
        <h2 className="headdd1">What Our Customers Say</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <h5 className="headdd">Testimonial</h5>
            <p className="fontttt">I'm so happy with my purchase! The product is amazing and the delivery was super fast.</p>
            <img src={customer} alt="Customer 1" className="imggg" />
            <p><b>John Doe</b></p>
          </div>

          <div className="testimonial">
            <h5 className="headdd">Testimonial</h5>
            <p className="fontttt">I was skeptical at first, but the product exceeded my expectations. Great job!</p>
            <img src={customer2} alt="Customer 2" className="imggg" />
            <p><b>Jane Smith</b></p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DashboardHome;
