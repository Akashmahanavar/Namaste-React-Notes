import React from "react";
import User from "../components/User";
import UserClass from "../components/UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("parent ComponentDidMount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div style={{ padding: "10px" }}>
        <UserClass
          name={"Akash Mahanavar"}
          location={"Kalamboli"}
          contact={"akashmahanavar@gmail.com"}
        />
      </div>
    );
  }
}

export default About;
