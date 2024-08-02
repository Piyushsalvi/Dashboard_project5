
import React from 'react';

import mobile1 from "../images/row1.webp"
import mobile2 from "../images/row2.webp"
import mobile3 from "../images/ro3.webp"
import mobile4 from "../images/row4.webp"
// import mobile5 from "../images/mobile5.webp"
// import mobile6 from "../images/mobile6.webp"

const MobilesTablets = () => {
  return (
    <div className="mobiles-container">
      <h1 className="linkheading">Mobiles & Tablets Page</h1>
      <div className="mobiles-row">
        <div className="mobiles-column">
          <img src={mobile1} alt="Mobile 1" className="mobiles-image" />
          <p><b>Mobile 1</b><br />Description of Mobile 1</p>
          <span>₹ 999</span>
        </div>
        <div className="mobiles-column">
          <img src={mobile2} alt="Mobile 2" className="mobiles-image" />
          <p><b>Mobile 2</b><br />Description of Mobile 2</p>
          <span>₹ 1,299</span>
        </div>
        <div className="mobiles-column">
          <img src={mobile3} alt="Mobile 3" className="mobiles-image" />
          <p><b>Mobile 3</b><br />Description of Mobile 3</p>
          <span>₹ 1,499</span>
        </div>
        <div className="mobiles-column">
          <img src={mobile4} alt="Mobile 4" className="mobiles-image" />
          <p><b>Mobile 4</b><br />Description of Mobile 4</p>
          <span>₹ 1,699</span>
        </div>
        {/* <div className="mobiles-column">
          <img src={mobile5} alt="Mobile 5" className="mobiles-image" />
          <p><b>Mobile 5</b><br />Description of Mobile 5</p>
          <span>₹ 1,899</span>
        </div>
        <div className="mobiles-column">
          <img src={mobile6} alt="Mobile 6" className="mobiles-image" />
          <p><b>Mobile 6</b><br />Description of Mobile 6</p>
          <span>₹ 2,099</span>
        </div> */}
      </div>
    </div>
  );
};

export default MobilesTablets;