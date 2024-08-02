import React from 'react';
import '../style/beauty.css';
import beauty1 from '../images/beauty-product1.webp';
import beauty2 from '../images/beauty-product2.webp';
import beauty3 from '../images/beauty-product3.webp';
import beauty4 from '../images/beauty-product4.webp';
import beauty5 from '../images/beauty-product5.webp';
import beauty6 from '../images/beauty-product6.webp';

const Beauty = () => {
  return (

    <div>
            <h1 className='linkheading'>Beauty Page</h1>
            <div className="beauty-container">


<div className="beauty-row">
  <div className="beauty-column">
    <img src={beauty1} alt="Beauty Product 1" className="beauty-image" />
    <p ><b className="tagcolorp">Product 1</b><br />Description of Product 1</p>
  </div>
  <div className="beauty-column">
    <img src={beauty2} alt="Beauty Product 2" className="beauty-image" />
    <p><b className="tagcolorp">Product 2</b><br />Description of Product 2</p>
  </div>
  <div className="beauty-column">
    <img src={beauty3} alt="Beauty Product 3" className="beauty-image" />
    <p ><b className="tagcolorp">Product 3</b><br />Description of Product 3</p>
  </div>
</div>

<div className="beauty-row">
  <div className="beauty-column">
    <img src={beauty4} alt="Beauty Product 4" className="beauty-image" />
    <p><b className="tagcolorp">Product 4</b><br />Description of Product 4</p>
  </div>
  <div className="beauty-column">
    <img src={beauty5} alt="Beauty Product 5" className="beauty-image" />
    <p><b className="tagcolorp">Product 5</b><br />Description of Product 5</p>
  </div>
  <div className="beauty-column">
    <img src={beauty6} alt="Beauty Product 6" className="beauty-image" />
    <p><b className="tagcolorp">Product 6</b><br />Description of Product 6</p>
  </div>
</div>

</div>
    </div>
   
  );
};

export default Beauty;