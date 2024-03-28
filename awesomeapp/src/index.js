 import React from "react";
 import  ReactDOM  from "react-dom";
  const arr = ['Amit',"pandey","tech"]

  // In React v16 it's possible for render()
  // to return an array of elements
 ReactDOM.render(
  <React.Fragment>
 <h1>Amit World Technical !!</h1>
 <p>Plz like and share</p>
 <h2>plz Subscribe my channel</h2>
</React.Fragment>,
 document.getElementById("root")
 
 );
 
 // ReactDOM.render( React.createElement("h1", null, " Amit Pandey"),
// document.getElementById("root"));  

// var h1 = document.createElement('h1');
// h1.innerHTML = "Amit Technical Subscribe";
// document.getElementById("root").appendChild(h1); 