import React from "react";
import ReactDOM from "react-dom/client";

//JSX--HTML or XML like syntax in react
const jsxHeading = <h1>Namaste React using JSX</h1>;
//the element created using createElement and above elements are one and the same thing
//jsx code is not readable to browser directly
//thats when babel comes into picture which transpiles th JSX before it reaches to JS engine
//which is added by parcel with its intallation
const jsxHeadingMultiline = (
  <div>
    <h1>Namaste React using JSX</h1>
    <h2>Namaste React using JSX</h2>
  </div>
);

//React Heading component
//A function which is returning the some piece of JSX is a REact funcitonal component
const HeadingComponent = () => {
  //component composition
  return (
    <h1>
      {
        //when you write {} this paranthesis inside JSX we can write any javascript inside this
      }
      {Heading()}
      <Heading />
      <Heading></Heading>
    </h1>
  );
};
const Heading = () => (
  <h1>
    {
      //we can write JSX or any javascript here also
    }
    Namaste React using component
  </h1>
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <HeadingComponent />
);
