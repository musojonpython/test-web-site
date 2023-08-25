import React, { Component } from 'react'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    oshirish() {
        this.setState({
            count: this.state.count + 1
        })
    }

    kamayish() {
        this.setState({
            count: this.state.count - 1
        })
    }

    reset() {
        this.setState({
            count: 0
        })
    }

  render() {
    return (
      <div>
        <button onClick={(e) => this.oshirish(e)}>+</button>
        <h4>{this.state.count}</h4>
        <button onClick={(e) => this.kamayish(e)}>-</button> <br/>
        <button onClick={(e) => this.reset(e)}>Nollashtirish </button>
      </div>
    )
  }
}
