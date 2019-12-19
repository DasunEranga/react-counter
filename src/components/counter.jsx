import React, { Component } from "react";
import paraObj from "./../old/list";

class Counter extends Component {
  state = {
    count: this.props.value,
    imgUrl: "" // "https://picsum.photos/300/200"
  };
  profile = {
    name: []
  };

  render() {
    console.log("counters properties", this.props);

    return (
      <div className="container">
        <div>
          <h1>Counter component</h1>
          {this.props.children}
        </div>

        <img src={this.state.imgUrl} alt="" />

        <div>
          <span className={this.countColor()}>{this.countDisplay()}</span>

          <button
            onClick={() => {
              this.cartIncrement("product");
            }}
            className="btn btn-primary"
          >
            +
          </button>
          <ul>
            {paraObj.map(items => (
              <li key={items.name}>{items.name}</li>
            ))}

            {this.profile.name.length === 0 && "No user enrolled"}

            {this.profile.name.map(name => (
              <li>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  countDisplay = () => {
    let countDasun = this.state.count;
    return countDasun === 0 ? <h6>Cart Empty</h6> : countDasun;
  };

  countColor = () => {
    let classes = "m-2 badge badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  };

  cartIncrement = product => {
    console.log("cart increased", this);
    // this.state.count++;
    console.log(this.props.selected);
    // this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.props.value + 1 });
  };
}

export default Counter;
