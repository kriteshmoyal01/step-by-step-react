import React, { Component } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./User.css";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "",
        name: "",
        bio: "",
        public_repos: 0,
        followers: 0,
        following: 0,
        avatar_url: "",
        html_url: ""
      },
      count: 0,
      count2: 1
    };
    console.log("UserClass Constructor");
  }

  async componentDidMount() {
    console.log("UserClass Component Did Mount");
    try {
      const response = await fetch("https://api.github.com/users/kriteshmoyal01");
      const data = await response.json();
      this.setState({ userInfo: data });
    } catch (error) {
      console.error("Error fetching GitHub data", error);
    }
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  incrementCount2 = () => {
    this.setState((prevState) => ({ count2: prevState.count2 + 1 }));
  };

  render() {
    console.log("UserClass Render");
    const { count, count2, userInfo } = this.state;

    return (
      <div className="user-card">
        <h3>Developer USER (Class Component)</h3>
        <div className="user-info-row">
          <div className="user-info-block"><strong>Count 1:</strong> {count}</div>
          <div className="user-info-block"><strong>Count 2:</strong> {count2}</div>
          <div className="user-info-block"><strong>GitHub Username:</strong> {userInfo.login}</div>
          <div className="user-info-block"><strong>Name:</strong> {userInfo.name}</div>
          <div className="user-info-block"><strong>Bio:</strong> {userInfo.bio}</div>
          <div className="user-info-block"><strong>Public Repos:</strong> {userInfo.public_repos}</div>
          <div className="user-info-block"><strong>Followers:</strong> {userInfo.followers}</div>
          <div className="user-info-block"><strong>Following:</strong> {userInfo.following}</div>
          <div className="user-info-block"><strong>Profile:</strong> <a href={userInfo.html_url} target="_blank" rel="noreferrer">GitHub</a></div>
        </div>

        <div className="button-row">
          <button onClick={this.incrementCount}>Increment Count 1</button>
          <button onClick={this.incrementCount2}>Increment Count 2</button>
        </div>

        <div className="social-links">
          <a href={userInfo.html_url} target="_blank" rel="noreferrer" title="GitHub Profile">
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/kritesh-moyal/" target="_blank" rel="noreferrer" title="LinkedIn Profile">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:kartikdewani01@gmail.com" target="_blank" rel="noreferrer" title="Send Email">
            <FaEnvelope />
            <span>Gmail</span>
          </a>
        </div>
      </div>
    );
  }
}

export default UserClass;
