import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  incrementCount2 = () => {
    this.setState((prevState) => ({ count2: prevState.count2 + 1 }));
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
      email,
    } = this.props;

    const { count, count2 } = this.state;

    return (
      <div className="user-card">
        <h3>Developer USER (Class Component)</h3>
        <div>
          <strong>Count 1:</strong> {count}{" "}
          <button onClick={this.incrementCount}>Increment Count 1</button>
        </div>
        <div>
          <strong>Count 2:</strong> {count2}{" "}
          <button onClick={this.incrementCount2}>Increment Count 2</button>
        </div>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Gender: {gender}</div>
        <div>City: {city}</div>
        <div>State: {state}</div>
        <div>Country: {country}</div>
        <div>Pincode: {pincode}</div>
        <div>Phone: {phone}</div>
        <div>Email: {email}</div>
      </div>
    );
  }
}

export default UserClass;
