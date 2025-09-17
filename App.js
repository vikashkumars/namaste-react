import React from "react";
import ReactDOM from "react-dom/client";
const jsxheading = (
  <h1 className="head" tabIndex="5">
    
    Hi Vikash Here
  </h1>
);
const elem=(
    <span>React elemet</span>
);
const title = (
    <h1 className="head" tabIndex="5">
        {elem}
        Title example
    </h1>

);
/**
 * const elem=(
    <span>React elemet</span>
);
// how to call react elemet inside another react element
 * const Title = () => (
    <h1 className="head" tabIndex="5">
    {elem // calling react element inside another react element}
    Title example
    </h1>

);
 * @returns Calling function inside another function is 
        called component composition
const HeadingComponent = () => (
    <div id="container">
      <h2>{num}</h2>// can call any java script code inside {} 
      // How to call react element inside another react component
        <Title /> //component composition<Title></Title>// call a function {Title()}//  wrong way to call a function
        {title} // calling react element inside another react component
       <h1>This is a heading component</h1>;
    </div>
    
);
 */
const num = 1000
const HeadingComponent = () => (
    <div id="container">
          {title} 
       <h1>This is a heading component</h1>
    </div>
    
);


const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(title);// react element calling
root.render(<HeadingComponent />);// react component calling
    
 