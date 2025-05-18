import React from "react";
import "./About.css";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import User from "./Users";
import UserClass from "./UserClass";
import Users from "./Users";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome to About Class Component!"
    };
    console.log("AboutClass Constructor");
  }

  componentDidMount() {
    console.log("AboutClass Component Did Mount");
    // You can make API calls here if needed
  }

  render() {
    console.log("AboutClass Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"Akshay Saini (class)"} location={"Dehradun Class"} />
      </div>
    );
  }
}

const About = () => {
  const userData = {
    name: "Kritesh Moyal",
    age: 20,
    gender: "Male",
    city: "Raipur",
    state: "Chhattisgarh",
    country: "India",
    pincode: "492001",
    phone: "+91 1234567890",
    email: "kartikdewani01@gmail.com"
  };

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
        <div className="profile-section app-container">
          <Users {...userData} />
          <UserClass {...userData} />
        </div>
        <div className="contact-info">
          <h3>Contact Details</h3>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
          <p><strong>Location:</strong> NIT Raipur, Chhattisgarh, India</p>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://github.com/kriteshmoyal01" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>
      </section>
      <footer className="footer">
        <p>© 2025 Kritesh Moyal. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
