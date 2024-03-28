import React from 'react';
import ReactDOM from 'react-dom';

/* 1 Practis
ReactDOM.render(
<>
<h1>Amit technical Netflix Pick</h1>
<p> Here the  list of my fav 5 Netflix series</p>
<ol>
  <li> DARK</li>
  <li> Extra curricular</li>
  <li> My Love The King</li>
  <li>MY first-2 Love</li>
  <li>Mr Robot</li>
</ol>
</>,
document.getElementById("root")
); */


/* use javascript in html tags in carli breakts
const flname = "Amit pandey";
ReactDOM.render(
  <>
  <h1> my name is {flname} </h1>,
   <p> my lucky number is {5 + 4}
    </p>
</>,
document.getElementById("root")
); */

/*challenge 2
const fname = "Amit";
const lname = "Pandey";

ReactDOM.render(
  <>
  <h1>My  Name is {fname} {lname}</h1>
   <p> my lucky number is {5 + 5} </p>
</>,
   
document.getElementById("root")
); 
*/
const name = "Amit";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
  <h1> Hello, My name is {name}</h1>
  <p>Current Date is ={currDate}</p>
  <p>Current Time is ={currTime}</p>
  </> ,
  document.getElementById("root")
); 