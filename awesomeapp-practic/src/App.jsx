/*import React from "react";
import Heading from "./Heading";
import Para from "./Para";
import List from "./List";

function App(){
  let currDate = new Date(2023, 5, 5, 5);
  currDate = currDate.getHours();
  let greeting = "";
  const cssStyle = { };
 
  if(currDate >=1 && currDate <12){
   greeting = 'Good Morning';
   cssStyle.color = 'Green';
  }else if(currDate>=12 && currDate <19){
   greeting = "Good Afternoon";
   cssStyle.color = 'Red';
  }else{
   greeting = "Good Night";
   cssStyle.color = 'black';
  } 
 
  return(
    <>
       <div>
        <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
    </div>
    </>
  );
}

export default App;  */

/*
const mriirs = "Amit technical";

const favprog = "React js";

function myName(){
  let name = "MCA";
  return name;
}

function myNames(){
  let names = "Manav Rachna";
  return names; 
}
 
export default mriirs;

export {favprog,  myName, myNames};    
*/

import React from "react";
import { add, sub, mult, div } from "./App1";
function App(){
  return(
  <>
    <ul>
      <li>{add(40, 7)}</li>
      <li>{sub(40, 7)}</li>
      <li>{mult(40, 7)}</li>
      <li>{div(40, 4)}</li>
    </ul>
    </>
  );  
}

export default App;