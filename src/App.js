import React from 'react';

function App() {
  //JSX method
  var style1 = {
    color: "blue",
    fontSize: 30,
    backgroundColor:"yellow"
  }

  return(
    <div>
     <h1 style={style1} title="This is the heading">Heading -JSX Method</h1>
     <p id="para1">This is the paragraph</p>
     <p className="para2">Second paragraph</p>
     <div>
       <label htmlFor="input1">Data</label> 
       <br ></br>
       <input id="input1" name="input1"></input>
     </div>
    </div>
  )


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