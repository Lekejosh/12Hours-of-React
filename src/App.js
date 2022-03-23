import React from "react";

function App() {
  //JSX method
  var style1 = {
    color: "blue",
    fontSize: 30,
    backgroundColor: "yellow",
  };
  var var1 = "Hello WOrld";
  var var2 = 12 / 1;
  var var3 = 33 / 32;

  var fun1 = function fun1() {
    console.log("Some Kind of Function");
  };

  var func2 = function func2() {
    console.log("New type of Function");
  };
  return (
    <div>
      <h1 style={style1} title="This is the heading">
        Heading -JSX Method
      </h1>
      <p id="para1">This is the paragraph</p>
      <p className="para2">Second paragraph</p>
      <p>
        {var1 + var2} {var3}
      </p>
      <p>{var2 === 6 ? "True" : "False"}</p>

      <div>
        <label htmlFor="input1">Data</label>
        <br></br>
        <input id="input1" name="input1"></input>
      </div>
      <button onClick={fun1}>Click me!</button>
      <button onMouseEnter={func2}>Click me oga</button>
    </div>
  );

  //Main

  // return(
  //   <div>
  //   <div>Hello World</div>
  //   <h1>Heading</h1>
  //   </div>
  // )

  // Alternatively

  // return React.createElement("h1", {title: "this is the Heading"}, "heading")
}

export default App;
