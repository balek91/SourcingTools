import React, { Component } from 'react'
import styled from 'styled-components'

import LoginForm from '../components/loginForm'

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items : center;
  justify-content : center;
  height : 80vh;
`
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MainContainer>
            <LoginForm />
        </MainContainer>
      </React.Fragment>
    )
  }
}
