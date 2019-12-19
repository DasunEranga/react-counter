import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import paraObj from "./list";
import * as serviceWorker from "./serviceWorker";

let para = "This paragraph is for testing purposes";

class Hell extends React.Component {
  render() {
    return paraObj.map(items => {
      return (
        <div key={items.age}>
          <h2>{items.name} Hell component</h2>
          <p>{para}</p>
          <h2>
            {items.age} {para}
          </h2>
        </div>
      );
    });
  }
}

ReactDOM.render(<Hell />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
