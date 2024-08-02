import React from 'react';
import '../style/Fashion.css';

import fashion1 from "../images/fashion1.webp"
import fashion2 from "../images/fashion2.webp"
import fashion3 from "../images/fashion3.webp"
import fashion4 from "../images/fashion4.webp"
import fashion5 from "../images/fashion5.webp"
import fashion6 from "../images/fashion6.webp"


const Fashion = () => {
  return (
    <div>
      <h1 className='fashion-heading'>Fashion Page</h1>

      <div className="fashion-row">
        <div className="fashion-column">
          <img src={fashion1} alt="Fashion Product 1" className="fashion-image" />
          <p><b>Product 1</b><br />15,000</p>
        </div>
        <div className="fashion-column">
          <img src={fashion2} alt="Fashion Product 2" className="fashion-image" />
          <p><b>Product 2</b><br />1,000</p>
        </div>
        <div className="fashion-column">
          <img src={fashion3} alt="Fashion Product 3" className="fashion-image" />
          <p><b>Product 3</b><br />15,000</p>
        </div>

        <div className="fashion-column">
          <img src={fashion4} alt="Fashion Product 4" className="fashion-image" />
          <p><b>Product 4</b><br />10,000</p>
        </div>
        <div className="fashion-column">
          <img src={fashion5} alt="Fashion Product 5" className="fashion-image" />
          <p><b>Product 5</b><br />1,000</p>
        </div>
        <div className="fashion-column">
          <img src={fashion6} alt="Fashion Product 6" className="fashion-image" />
          <p><b>Product 6</b><br />8,000</p>
        </div>
      </div>
    </div>
  );
};
 
export default Fashion;