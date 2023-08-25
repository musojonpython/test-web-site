import React, { Component } from 'react'
import Lesson2 from './Lesson2';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Kamoldin",
            age: 20,
            job : "Oliy malumotli dehqon"
        };
    }
  render() {
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
        <h4>My age is {this.state.age}</h4>
        <h6>My jobb is {this.state.job}</h6>
        <p>My favorute Progamming languages:</p>
        <Lesson2 />

        </div>
    )
  }
}
