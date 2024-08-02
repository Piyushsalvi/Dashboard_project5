import React from 'react';
import '../style/electronics.css'; 
import electronic1 from '../images/monitor1.webp';
import electronic2 from '../images/monito2.webp';
import electronic3 from '../images/monitor3.webp';
import electronic4 from '../images/monitor4.webp';
import electronic5 from '../images/monitor5.webp';
import electronic6 from '../images/electronic6.webp';

const Electronics = () => {
  return (
    <div>
      <h1 className='electronics-heading'>Electronics Page</h1>

   
       
        <div className="electronics-row">

        <div className="electronics-column">
            <img src={electronic1} alt="Electronic Product 1" className="electronics-image" />
            <p><b>Product 1</b><br />Description of Product 1</p>
          </div>
          <div className="electronics-column">
            <img src={electronic2} alt="Electronic Product 2" className="electronics-image" />
            <p><b>Product 2</b><br />Description of Product 2</p>
          </div>
          <div className="electronics-column">
            <img src={electronic3} alt="Electronic Product 3" className="electronics-image" />
            <p><b>Product 3</b><br />Description of Product 3</p>
          </div>

          <div className="electronics-column">
            <img src={electronic4} alt="Electronic Product 4" className="electronics-image" />
            <p><b>Product 4</b><br />Description of Product 4</p>
          </div>
          <div className="electronics-column">
            <img src={electronic5} alt="Electronic Product 5" className="electronics-image" />
            <p><b>Product 5</b><br />Description of Product 5</p>
          </div>
          <div className="electronics-column">
            <img src={electronic6} alt="Electronic Product 6" className="electronics-image" />
            <p><b>Product 6</b><br />Description of Product 6</p>
          </div>




        </div>

      </div>


  );
};

export default Electronics;