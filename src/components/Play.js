import React, { Component } from 'react'

export default class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      stepNumber: 0,
      history: [
        { squares: Array(9).fill(null) }
      ]
    }
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}
