import React from 'react';
import '../style/topoffer.css'

import offer1 from '../images/offer1.webp';
import offer2 from '../images/offer2.webp';
import offer3 from '../images/offer3.webp';
import offer4 from '../images/offer4.webp';
import offer5 from '../images/offer5.webp';
import offer6 from '../images/offer6.webp';

const TopOffer = () => {
  return (
    <div className="dashboard-container">

 <h1 class="main-heading">
 
  <span class="color2"> TOP </span> 
  <span class="color3"> OFFER</span>
</h1>

      <div className="image-grid ">
        <div className="row ">
          <div className="col-md-4">
            <img src={offer1} alt="Offer 1" className='imagetopup' />
          </div>
          <div className="col-md-4">
            <img src={offer2} alt="Offer 2" className='imagetopup' />
          </div>
          <div className="col-md-4">
            <img src={offer3} alt="Offer 3" className='imagetopup' />
          </div>
        </div>
        <div className="row ">
          <div className="col-md-4">
            <img src={offer4} alt="Offer 4" className='imagetopup' />
          </div>
          <div className="col-md-4">
            <img src={offer5} alt="Offer 5" className='imagetopup' />
          </div>
          <div className="col-md-4">
            <img src={offer6} alt="Offer 6" className='imagetopup' />
          </div>
        </div>
      </div>

    </div>
  );
};

export default TopOffer;