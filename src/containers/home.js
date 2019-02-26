import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class Home extends Component {
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <Link to="/login"> se connecter</Link>
      </React.Fragment>
    )
  }
}
