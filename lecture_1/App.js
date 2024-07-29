const reacttag = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading0" }, "hello from nested elements"),
    React.createElement("h1", { id: "heading1" }, "hello from nested elements"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading0" }, "hello from nested elements"),
    React.createElement("h1", { id: "heading1" }, "hello from nested elements"),
  ]),
]);
console.log(reacttag);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(reacttag);

//order does matter with the script tags
//element passed as root will replace its content with reactTag passed in render method
//react can only work with small piece of code unlike other framework thats the beuty of react and its a library
