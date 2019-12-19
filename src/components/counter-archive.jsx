import React, { Component } from "react";
import Counter from "./counter";
class CounterArchive extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} selected={counter.id}>
            <h4>Counter Children {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default CounterArchive;
