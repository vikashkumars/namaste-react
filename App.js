
/**
 * 

const heading = React.createElement(
    "h1",{id:"heading",xyz:"abc"},"Hello World"
);
console.log(heading);//Object
const root = ReactDOM.createRoot(
    document.getElementById("root")
);
 */
/** 
 *  <div id= "parent">
 *      <div id="child">
 *          <h1>I am H1 tag</h1>
 *          <h2>I am H2 tag</h2>
 *      </div>
 * <div id="child 2">
 *          <h1>I am H1 tag</h1>
 *          <h2>I am H2 tag</h2>
 *      </div>
 *  </div> 
 * 
 * 
 * 
*/
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child", key: "child1-container" },
      [
        React.createElement("h1", { id: "child1", key: "h1-1" }, "I am h1 tag"),
        React.createElement("h2", { id: "child2", key: "h2-1" }, "I am h2 tag  ")
      ]
    ),
    React.createElement(
      "div",
      { id: "Testo", key: "child2-container" },
      [
        React.createElement("h1", { id: "child3", key: "h1-2" }, "I am h1 tag"),
        React.createElement("h2", { id: "child4", key: "h2-2" }, "I am h2 tag")
      ]
    )
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

    
 