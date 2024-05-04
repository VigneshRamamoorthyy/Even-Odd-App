import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
    integer: 'Even',
  }

  onIncreament = () => {
    const {count} = this.state
    const randomNumber = Math.ceil(Math.random() * 100)
    const newCount = count + randomNumber
    const isEven = newCount % 2 === 0 ? 'Even' : 'odd'

    this.setState({
      count: newCount,
      integer: isEven,
    })
  }

  render() {
    const {count, integer} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="title">{`Count ${count}`}</h1>
          <p className="even-odd-text">{`Count is ${integer}`}</p>
          <button
            className="increament-btn"
            onClick={this.onIncreament}
            type="button"
          >
            Increment
          </button>
          <p className="increase-random-text">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
