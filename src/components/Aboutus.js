import React from 'react';
import './style/aboutus.css';
import CEO from './images/mypic.jpg'

const AboutUs = () => {
  return (
    <div className="about-us">
       <header className="header2">
        <h1>About Us</h1>
        <p>Learn more about our company, mission, and team</p>
      </header>
      <section className="mission-section">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-description">
          Our mission is to provide the best quality products and services to our customers. We strive to
          innovate and improve constantly to meet the changing needs of our market.
        </p>
      </section>
      <section className="history-section">
        <h2 className="section-title">Our History</h2>
        <p className="section-description">
          Founded in 2020, our company has grown from a small startup to a leading player in the industry. Over the
          years, we have achieved numerous milestones and continue to push the boundaries of what is possible.
        </p>
      </section>

      
      <section className="team-section">
  <h2 className="section-title ">Meet the Team</h2>
  <div className="team-members">
    <div className="team-member">
      <img src={CEO} alt="Team Member 1" className="team-member-image" />
      <h3 className="team-member-name">Piyush</h3>
      <p className="team-member-position">CEO</p>
    </div>
    <div className="team-member">
      <img src={CEO} alt="Team Member 2" className="team-member-image" />
      <h3 className="team-member-name">Arpit</h3>
      <p className="team-member-position">CTO</p>
    </div>
  </div>
</section>


      <section className="values-section">
        <h2 className="section-title">Our Values</h2>
        <ul className="values-list">
          <li className="value-item">Integrity: We believe in doing the right thing, always.</li>
          <li className="value-item">Innovation: We are constantly looking for new ways to improve.</li>
          <li className="value-item">Customer Focus: Our customers are at the center of everything we do.</li>
          <li className="value-item">Excellence: We strive for excellence in everything we do.</li>
        </ul>
      </section>
      <section className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <p className="contact-description">If you have any questions or would like to get in touch, please contact us at:</p>
        <p className="contact-info">Email: piyushsalvi@gmail.com</p>
        <p className="contact-info">Phone: (123) 456-7890</p>
      </section>
    </div>
  );
};

export default AboutUs;