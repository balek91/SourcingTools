import React from 'react'
import PropTypes from 'prop-types'

import { CommonText } from '../texts'

import './index.css'

export default class Counter extends React.Component {
  static propTypes = {
    counterNumber: PropTypes.number.isRequired,
    counterTitle: PropTypes.string.isRequired,
    decrement: PropTypes.func,
    disabled: PropTypes.bool,
    increment: PropTypes.func
  }

  render() {
    const {
      counterNumber,
      counterTitle,
      decrement,
      disabled,
      increment
    } = this.props

    if (disabled) {
      return null
    }

    return (
      <div className="counterContainer">
        <div>
          <span className="commonText">{counterTitle}</span>
        </div>
        <div className="counterNumberContainer">
          <span className="commonText">{counterNumber}</span>
        </div>
        <div>
          <button className="styledButton" onClick={decrement}>
            <span className="commonText">-</span>
          </button>
          <button className="styledButton" onClick={increment}>
            <span className="commonText">+</span>
          </button>
        </div>
      </div>
    )
  }
}
