import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child Constructor");
  }
  componentDidMount() {
    console.log("Child ComponentDidMount");
  }
  componentDidUpdate() {
    console.log("component updated");
  }
  componentWillUnmount() {
    console.log("Component unmounted");
  }
  render() {
    console.log("Child Render");
    const { name, location, contact } = this.props;
    return (
      <div
        style={{
          border: "1px solid #f0f0f0",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <h2>Count : {this.state.count}</h2>
        <button
          onClick={() => {
            // Never update state variables directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : {contact}</h4>
      </div>
    );
  }
}
export default UserClass;
