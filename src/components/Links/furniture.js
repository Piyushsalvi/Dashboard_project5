import React from 'react';
import "../style/furniture.css"

import furniture1 from "../images/furniture1.webp"
import furniture2 from "../images/furniture2.webp"
import furniture3 from "../images/furniture3.webp"
import furniture4 from "../images/furniture4.webp"
import furniture5 from "../images/furniture5.webp"
import furniture6 from "../images/furniture6.webp"

const Furniture = () => {
  return (
    <div>
      <h1 className="linkheading">Furniture Page</h1>
      <div className="furniture-row">
        <div className="furniture-column">
          <img src={furniture1} alt="Furniture 1" className="furniture-image" />
          <p><b>Furniture 1</b><br />Description of Furniture 1</p>
          <span>₹ 9,999</span>
          <p className="tagcolorp">Offer: 10% off</p>
        </div>
        <div className="furniture-column">
          <img src={furniture2} alt="Furniture 2" className="furniture-image" />
          <p><b>Furniture 2</b><br />Description of Furniture 2</p>
          <span>₹ 12,999</span>
          <p className="tagcolorp">Offer: 15% off</p>
        </div>
        <div className="furniture-column">
          <img src={furniture3} alt="Furniture 3" className="furniture-image" />
          <p><b>Furniture 3</b><br />Description of Furniture 3</p>
          <span>₹ 14,999</span>
          <p className="tagcolorp">Offer: 20% off</p>
        </div>
        <div className="furniture-column">
          <img src={furniture4} alt="Furniture 4" className="furniture-image" />
          <p><b>Furniture 4</b><br />Description of Furniture 4</p>
          <span>₹ 16,999</span>
          <p className="tagcolorp">Offer: 25% off</p>
        </div>
        <div className="furniture-column">
          <img src={furniture5} alt="Furniture 5" className="furniture-image" />
          <p><b>Furniture 5</b><br />Description of Furniture 5</p>
          <span>₹ 18,999</span>
          <p className="tagcolorp">Offer: 30% off</p>
        </div>
        <div className="furniture-column">
          <img src={furniture6} alt="Furniture 6" className="furniture-image" />
          <p><b>Furniture 6</b><br />Description of Furniture 6</p>
          <span>₹ 20,999</span>
          <p className="tagcolorp">Offer: 35% off</p>
        </div>
      </div>
    </div>
  );
};

export default Furniture;