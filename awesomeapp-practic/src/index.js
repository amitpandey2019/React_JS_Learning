

/* 1 Practis
import React from 'react';
import ReactDOM from 'react-dom';

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

import React from 'react';
import ReactDOM from 'react-dom';

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

import React from 'react';
import ReactDOM from 'react-dom';

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

/* Challenge 2

import React from 'react';
import ReactDOM from 'react-dom';

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
*/

/* This is use link add and using css in js text file----

import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const name = "Amit";  
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/220/300";
const img3 = "https://picsum.photos/230/300";
const links = "https://github.com/amitpandey2019";
//.heading{
//  color: orchid;
//  text-align: center;
//  text-transform: capitalize;
//  font-weight: bold;
//  text-shadow: 0px 2px 4px whitesmoke;
//  margin: 70px 0;
//  font-family: 'Josefin Sans', sans-serif;
// }


 const heading = { 
  color : "#fa9191",
  textAlign: "center",
  textTransform : "capitalize",
  textAlign: "center",
  fontWeight: "bold",
  textShadow: '0px 2px 4px whitesmoke',
  margin: '70px 0',
  fontFamily: '"Josefin Sans", sans-serif',
}
ReactDOM.render(
<>
<h1 style={heading}> My Name is {name}</h1>

<div className="img-div">
<img src={img1} alt="randomImages"/>
<img src={img2} alt="randomImages"/>
<a href={links} target="_amitpandey2019">
<img src={img3} alt="randomImages"/>
</a>
</div> 
</>,
document.getElementById("root")
);  */

/* use of css in js and freagment use

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index1.css";

ReactDOM.render( <App/>, document.getElementById("root"));
*/
/*
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root")); */

/* IMPORT AND EXPORT FUNCTION JS AND JSX

import Reac from "react";
import ReactDOM  from "react-dom";
import mriirs, {favprog,  myName, myNames} from "./App";
ReactDOM.render(
  <>
    <ol>
      <li> Amit </li>
      <li> {mriirs} </li>
      <li> {favprog} </li>
      <li> {myName()} </li>
      <li> {myNames()} </li>
    </ol>
  </>, document.getElementById("root")
);
*/

import React from "react";
import ReactDOM  from "react-dom";
import "./index.css";
import App from "./App";



ReactDOM.render( <App />,document.getElementById('root'));

