import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import CounterArchive from "./components/counter-archive";

const dasunHeading = <h1>Hello world</h1>;
const dasunPara = <p>paragraph</p>;
console.log(dasunHeading, dasunPara);
// React.createElement

ReactDom.render(<CounterArchive />, document.getElementById("root"));
