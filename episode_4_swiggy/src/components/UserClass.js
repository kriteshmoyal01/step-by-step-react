import React, { Component } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./User.css";  // Make sure this CSS file exists in the same folder

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  incrementCount2 = () => {
    this.setState((prevState) => ({
      count2: prevState.count2 + 1
    }));
  };

  render() {
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
    } = this.props;

    const { count, count2 } = this.state;

    return (
      <div className="user-card">
        <h3>Developer USER (Class Component)</h3>

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

        <div className="button-row">
          <button onClick={this.incrementCount}>Increment Count 1</button>
          <button onClick={this.incrementCount2}>Increment Count 2</button>
        </div>

        <div className="social-links">
          <a href={`mailto:${email}`} target="_blank" rel="noreferrer" title="Send Email">
            <FaEnvelope />
            <span>Gmail</span>
          </a>
          <a href="https://github.com/kriteshmoyal01" target="_blank" rel="noreferrer" title="GitHub Profile">
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/kritesh-moyal/" target="_blank" rel="noreferrer" title="LinkedIn Profile">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    );
  }
}

export default UserClass;
