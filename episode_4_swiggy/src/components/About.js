import React from "react";
import "./About.css";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="title">About Us</h1>
      <p className="description">
        Welcome to our platform! We are dedicated to delivering an exceptional dining experience,
        connecting food enthusiasts with highly-rated restaurants. Our mission is to make every meal
        delightful and unforgettable.
      </p>

      <section className="developer-info">
        <h2 className="subtitle">Meet the Developer</h2>
        <p>
          Hi, I'm Kritesh Moyal — a full-stack developer and culinary enthusiast.
          I love blending technology with taste to create seamless and engaging digital experiences.
        </p>

        <div className="profile-section">
         <User
  name="Kritesh Moyal"
  age="20"
  gender="Male"
  city="Raipur"
  state="Chhattisgarh"
  country="India"
  pincode="492001"
  phone="+91 1234567890"
  email="kartikdewani01@gmail.com"
/>

     <UserClass
  name="kartik"
  age="20"
  gender="Male"
  city="Raipur"
  state="Chhattisgarh"
  country="India"
  pincode="492001"
  phone="+91 1234567890"
  email="kartikdewani01@gmail.com"

/>

        </div>

        <div className="contact-info">
          <h3>Contact Details</h3>
          <p><strong>Email:</strong> kartikdewani01@gmail.com</p>
          <p><strong>Phone:</strong> +91 12345 67890</p>
          <p><strong>Location:</strong> NIT Raipur, Chhattisgarh, India</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Kritesh Moyal. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
