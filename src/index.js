import React from "react";
import ReactDOM from "react-dom";

const fname = "Drupad";
const lname = "Dev Dixit";
var luckynumber = 7;
// I can write only javascript expressions over here not the statements inside curly braces
ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}</h1>
    <p>My lucky number is {luckynumber}</p>
  </div>,
  document.getElementById("root")
);
