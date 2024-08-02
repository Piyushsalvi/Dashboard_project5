import React from 'react';
import "../style/grocery.css";

import grocery1 from "../images/grocery1.webp"
import grocery2 from "../images/grocery2.webp"
import grocery3 from "../images/grocery3.webp"
import grocery4 from "../images/grocery4.webp"
import grocery5 from "../images/grocery5.webp"
import grocery6 from "../images/grocery6.webp"

const HomeKitchen = () => {
  return (
    <div >
    <h1 className="linkheading">Home & Kitchen</h1>
    <div className="grocery-row">
      <div className="grocery-column">
        <img src={grocery6} alt="Grocery 1" className="grocery-image" />
        <p><b>Grocery 1</b><br />Description of Grocery 1</p>
        <span>₹ 99</span>
        <p className="tagcolorp">Offer: 10% off</p>
      </div>
      <div className="grocery-column">
        <img src={grocery5} alt="Grocery 2" className="grocery-image" />
        <p><b>Grocery 2</b><br />Description of Grocery 2</p>
        <span>₹ 149</span>
        <p className="tagcolorp">Offer: 15% off</p>
      </div>
      <div className="grocery-column">
        <img src={grocery4} alt="Grocery 3" className="grocery-image" />
        <p><b>Grocery 3</b><br />Description of Grocery 3</p>
        <span>₹ 199</span>
        <p className="tagcolorp">Offer: 20% off</p>
      </div>
      <div className="grocery-column">
        <img src={grocery3} alt="Grocery 4" className="grocery-image" />
        <p><b>Grocery 4</b><br />Description of Grocery 4</p>
        <span>₹ 249</span>
        <p className="tagcolorp">Offer: 25% off</p>
      </div>
      <div className="grocery-column">
        <img src={grocery2} alt="Grocery 5" className="grocery-image" />
        <p><b>Grocery 5</b><br />Description of Grocery 5</p>
        <span>₹ 299</span>
        <p className="tagcolorp">Offer: 30% off</p>
      </div>
      <div className="grocery-column">
        <img src={grocery1} alt="Grocery 6" className="grocery-image" />
        <p><b>Grocery 6</b><br />Description of Grocery 6</p>
        <span>₹ 349</span>
        <p className="tagcolorp">Offer: 35% off</p>
      </div>
    </div>
  </div>
  );
};

export default HomeKitchen;