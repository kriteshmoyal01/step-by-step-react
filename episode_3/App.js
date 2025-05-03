import React from "react";
import ReactDOM from "react-dom/client";

// Using React.createElement(we never use this again)
// const heading = React.createElement("h1", { className: "heading" }, "Namaste React");

// Using JSX syntax
//const jsxheading = <h1  className="heading" tabIndex={1}>Namaste React using JSX 🚀</h1>;


const elem = <span>React Element</span>;

// JSX element
const Title = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

const number = 10000;

// Functional Component
const HeadingComponent = () => {
  console.log("Rendering HeadingComponent with number:", number);
  return (
    <div id="container">
      {elem}
      {Title}
      <h1 className="heading">Namaste React Functional Component</h1>
      <p>Number: {number}</p>
    </div>
  );
};

//console.log(HeadingComponent);



// Create root and render JSX
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading); // You can change to `heading` to test that too

//this is how react compount render 
root.render(<HeadingComponent />);