import React from "react";
import "./style/homepage.css";
import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


import offer1 from "./images/offer1.webp";
import offer2 from "./images/offer2.webp";
import offer3 from "./images/offer3.webp";
import offer4 from "./images/offer4.webp";
import offer5 from "./images/offer5.webp";
import offer6 from "./images/offer6.webp";
import f1 from "./images/f1.svg"
import line1 from "./images/line1.webp"
// import line2 from "./images/line2.webp"


import animation1 from "./images/animation1.webp"
import animation2 from "./images/animation2.webp"
import animation3 from "./images/animation3.webp"
import animation4 from "./images/animation4.webp"


import topOffer from "./images/top offer - Copy.webp";
// import mobNdTab from './images/mob.nd tab - Copy.webp';
import electronic from "./images/electronic - Copy.webp";
import tv from "./images/TV - Copy.webp";
import fashion from "./images/fashion - Copy.webp";
import beauty from "./images/beauty - Copy.webp";
import homeNdKitchen from "./images/home nd kitchen - Copy.webp";
import furniture from "./images/furniture - Copy.webp";
import grocery from "./images/grocery - Copy.webp";
import posterrr1 from "./images/posterrr1.webp";



const HomePage = () => {
  console.log('HomePage component rendering');
  return (
    <div className="containerr">
      <div className="pic2">
        <div className="image-container top-offer">
          <img src={topOffer} alt="frame" height="50px" width="50px" />
          <p className="ptagg">
            <Link to="/top-offer" className="ptagg">
              Top offer
            </Link>
          </p>
        </div>
        <div className="image-container electronic">
          <img src={electronic} alt="frame" height="50px" width="50px" />
          <p className="ptagg">
            <Link to="/electronics" className="ptagg">
              Electronics
            </Link>
          </p>
        </div>

        <div className="image-container tv">
          <img src={tv} alt="frame" height="50px" width="50px" />
          <p className="ptagg">
            <Link to="/tvs-appliances" className="ptagg">
              TVs & Appliances
            </Link>
          </p>
        </div>

        <div className="image-container fashion">
          <img src={fashion} alt="frame" height="50px" width="50px" />
          <p className="ptagg">
            <Link to="/fashion" className="ptagg">
              Fashion
            </Link>
          </p>
        </div>

        <div className="image-container beauty">
          <img src={beauty} alt="frame" height="50px" width="50px" />
          <p className="ptagg">
            <Link to="/beauty" className="ptagg">
              Beauty
            </Link>
          </p>
        </div>

        <div className="image-container home-nd-kitchen">
          <img src={homeNdKitchen} alt="frame" height="50px" width="50px" />
          <p className="ptagg">
            <Link to="/home-kitchen" className="ptagg">
              Home & Kitchen
            </Link>
          </p>
        </div>

        <div className="image-container furniture">
          <img src={furniture} alt="frame" height="50px" width="50px" />
          <p className="ptagg">
            <Link to="/Furniture" className="ptagg">
              Furniture
            </Link>
          </p>
        </div>

        <div className="image-container grocery">
          <img src={grocery} alt="frame" height="50px" width="50px" />
          <p className="ptagg">
            <Link to="/grocery" className="ptagg">
              Grocery
            </Link>
          </p>
        </div>
      </div>


      <div className="dashboard-container2">
        <header className="hero">
          <h1 className="hhh">
            Welcome to
            <span style={{ color: "green" }}> Salv</span>
            <span style={{ color: "blue", fontSize: "25px" }}>ation</span>
          </h1>
          <p>India's leading online shopping destination for all your needs</p>
          {/* <button className="shop-now-btn">Shop Now</button> */}
        </header>
      </div>
      <hr></hr>
      <Carousel>
        <Carousel.Item>
          <img src={animation1} className="img-fluid marrg" alt="posterrr1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={animation2} className="img-fluid marrg" alt="posterrr1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={animation3} className="img-fluid marrg" alt="posterrr1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={animation4} className="img-fluid marrg" alt="posterrr1" />
        </Carousel.Item>
      </Carousel>
      <hr></hr>


      <div className="row justify-content-center mb-3 ">
        <div className="col-md-12">
          <img src={posterrr1} className="img-fluid marrg" alt="posterrr1" />
        </div>
      </div>


      <div className="dashboard-container3">
        <div className="image-grid ">
          <div className="row ">
            <div className="col-md-4">
              <img src={offer1} alt="Offer 1" className="imagetopup" />
            </div>
            <div className="col-md-4">
              <img src={offer2} alt="Offer 2" className="imagetopup" />
            </div>
            <div className="col-md-4">
              <img src={offer3} alt="Offer 3" className="imagetopup" />
            </div>
          </div>
          <div className="row ">
            <div className="col-md-4">
              <img src={offer4} alt="Offer 4" className="imagetopup" />
            </div>
            <div className="col-md-4">
              <img src={offer5} alt="Offer 5" className="imagetopup" />
            </div>
            <div className="col-md-4">
              <img src={offer6} alt="Offer 6" className="imagetopup" />
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mb-3">
        <div className="col-md-12">
          <img src={posterrr1} className="img-fluid marrg" alt="posterrr1" />
        </div>
      </div>

      <div className="row justify-content-center mb-3">
        <div className="col-md-12">
          <img src={line1} className="img-fluid marrg" alt="posterrr1" />
        </div>
      </div>

      <footer className="footer text-white">


        <div className="footer-links row">
          <div className="col-md-3 col-sm-6 link-column">
            <h3 className="hhh3">Quick Links</h3>
            <ul className="list-unstyled">
              <li>
                <Link to="/top-offer" className="ptagg">
                  Top offer
                </Link>
              </li>
              <li>
                <Link to="/beauty" className="ptagg">
                  Beauty
                </Link>
              </li>
              <li>
                <Link to="/electronics" className="ptagg">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/fashion" className="ptagg">
                  Fashion
                </Link>
              </li>
              <li>
                <Link to="/grocery" className="ptagg">
                  Grocery
                </Link>
              </li>
              <li>
                <Link to="/Furniture" className="ptagg">
                  Furniture
                </Link>
              </li>
              <li>
                <Link to="/home-kitchen" className="ptagg">
                  Home & Kitchen
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 link-column">
            <h3 className="hhh3">Learn More</h3>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="ptagg">
                  Become a seller
                </a>
              </li>
              <li>
                <a href="/" className="ptagg">
                  Advertise
                </a>
              </li>
              <li>
                <a href="/" className="ptagg">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="/" className="ptagg">
                  © 2000-2024
                </a>
              </li>
              <li>
                <a href="/" className="ptagg">
                  Center
                </a>
              </li>
            </ul>
          </div>



          <div className="col-md-3 col-sm-6 link-column">
            <h3 className="hhh3">Learn More</h3>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="ptagg">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="ptagg">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" className="ptagg">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="/" className="ptagg">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="/" className="ptagg">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>


{/* 
          <div className="col-md-3 col-sm-6 link-column">
            <h3 className="hhh3">Follow Us</h3>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="ptagg">
                  <FontAwesomeIcon icon={faFacebookF} style={{ color: '#3b5998' }} /> Facebook
                </a>
              </li>
              <li>
                <a href="/" className="ptagg">
                  <FontAwesomeIcon icon={faTwitter} style={{ color: '#1da1f2' }} /> Twitter
                </a>
              </li>
              <li>
                <a href="/" className="ptagg">
                  <FontAwesomeIcon icon={faInstagram} style={{ color: '#e1306c' }} /> Instagram
                </a>
              </li>
              <li>
                <a href="/" className="ptagg">
                  <FontAwesomeIcon icon={faLinkedinIn} style={{ color: '#0072b1' }} /> LinkedIn
                </a>
              </li>
            </ul>
          </div> */}

<div className="col-md-3 col-sm-6 link-column">
  <h3 className="hhh3">Follow Us</h3>
  <ul className="list-unstyled">
    <li>
      <a href="https://www.facebook.com/login" className="ptagg">
        <FontAwesomeIcon icon={faFacebookF} style={{ color: '#3b5998' }} /> Facebook
      </a>
    </li>
    <li>
      <a href="https://twitter.com/login" className="ptagg">
        <FontAwesomeIcon icon={faTwitter} style={{ color: '#1da1f2' }} /> Twitter
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/accounts/login" className="ptagg">
        <FontAwesomeIcon icon={faInstagram} style={{ color: '#e1306c' }} /> Instagram
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/login" className="ptagg">
        <FontAwesomeIcon icon={faLinkedinIn} style={{ color: '#0072b1' }} /> LinkedIn
      </a>
    </li>
  </ul>
</div>

          <div className="image-containerfoot">
            <img src={f1} alt="f1" />
          </div>
        </div>
        <hr></hr>

        {/* <div className="newsletter-container">
            <div className="row justify-content-center">
              <div className="col-md-6 col-sm-8 col-xs-12">
                <form className="newsletter">

                  <div className="input-group mb-3">
                    <input
                      type="search"
                      className="form-control rounded-0 input1"
                      placeholder="Search here..."
                    />
                    <div className="input-group-append">
                      <button
                        type="search"
                        className="btn btn-primary rounded-0 btttn"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div> */}


        <div className="copyright text-center">
          <p>© 2000-2024 Salvation.com - Latest Items Today | All rights reserved.</p>

        </div>

        {/* f1.svg */}
      </footer>
    </div>
  );
};

export default HomePage;
