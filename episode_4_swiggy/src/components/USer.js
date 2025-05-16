import React, { useState } from "react";
import "./About.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const User = (props) => {
  const {
    name,
    age,
    gender,
    city,
    state,
    country,
    pincode,
    phone,
    email
  } = props;

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  return (
    <div className="user-card">
      <h3>Developer USER</h3>
      <div className="user-info-row">
        <div className="user-info-block"><strong>Count 1:</strong> {count}</div>
        <div className="user-info-block"><strong>Count 2:</strong> {count2}</div>
        <div className="user-info-block"><strong>Name:</strong> {name}</div>
        <div className="user-info-block"><strong>Age:</strong> {age}</div>
        <div className="user-info-block"><strong>Gender:</strong> {gender}</div>
        <div className="user-info-block"><strong>City:</strong> {city}</div>
        <div className="user-info-block"><strong>State:</strong> {state}</div>
        <div className="user-info-block"><strong>Country:</strong> {country}</div>
        <div className="user-info-block"><strong>Pincode:</strong> {pincode}</div>
        <div className="user-info-block"><strong>Phone:</strong> {phone}</div>
        <div className="user-info-block"><strong>Email:</strong> {email}</div>
      </div>

      {/* Count Buttons */}
      <div className="social-links">
        <button onClick={() => setCount(count + 1)}>Increment Count 1</button>
        <button onClick={() => setCount2(count2 + 1)}>Increment Count 2</button>
      </div>

      {/* Social Links */}
      <div className="social-links">
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Send Email"
        >
          <FaEnvelope />
          <span>Gmail</span>
        </a>
        <a
          href="https://github.com/kriteshmoyal01"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Profile"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/kritesh-moyal/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Profile"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default User;
