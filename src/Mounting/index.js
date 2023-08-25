import React, { Component } from 'react'

export default class index extends Component {
    
    constructor() {
        super();
        console.log("Contruktor ishlayapti...")
    }

    componentDidMount() {
        console.log("componentDidMount is worling ...")
    }

    componentWillMount() {
        console.log("componentWillmount is working... ")
    }
    

  render() {
    console.log("Render ishlayapti...")
    return (
      <div>index</div>
    )
  }
}
