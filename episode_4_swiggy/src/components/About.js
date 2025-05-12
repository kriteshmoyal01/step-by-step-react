import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="title">About Us</h1>
      <p className="description">
        Welcome to our platform! We are dedicated to bringing you the finest dining experience,
        connecting food enthusiasts with top-rated restaurants. Our goal is to make every meal
        delightful and memorable.
      </p>

      <div className="developer-info">
        <h2 className="subtitle">About the Developer</h2>
        <p>
          Hi, I am Kritesh Moyal, a passionate developer and food lover. I enjoy creating web 
          applications that merge technology and taste, making life easier and more enjoyable.
        </p>
        <p>Feel free to connect with me!</p>

        <div className="contact-info">
          <p><strong>Email:</strong> kartikdewani01@gmail.com</p>
          <p><strong>Phone:</strong> +91 12345 67890</p>
          <p><strong>Location:</strong> NIT Raipur, Chhattisgarh</p>
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Kritesh Moyal. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
