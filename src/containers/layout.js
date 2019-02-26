import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from '../components/header'

const Container = styled.div`
  background-color: ${props => props.theme.color.backgroundColor};
  min-height: 100vh;
`

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <Container>
        <Header />
        {this.props.children}
      </Container>
    )
  }
}
