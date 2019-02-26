import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { CommonText } from '../texts'

const CounterContainer = styled.div`
  align-items: center;
  background-color: ${props =>
    props.color ? props.theme.color[props.color] : props.theme.color.black};
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-width: 120px;
`
const TitleContainer = styled.div``

const CounterNumberContainer = styled.div`
  margin: 10px;
`

const ButtonContainer = styled.div`
  display: flex;
`

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props =>
    props.color ? props.theme.color[props.color] : props.theme.color.black};
  cursor: pointer;
  outline: none;
  font-size: 20px;
`

export default class Counter extends React.Component {
  static propTypes = {
    counterNumber: PropTypes.number,
    counterTitle: PropTypes.string.isRequired,
    decrement: PropTypes.func,
    increment: PropTypes.func,
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string
  }

  state = {
    counter: 0
  }

  handleCounter = index => {
    this.setState({ counter: this.state.counter + index })
  }

  render() {
    const {
      counterNumber,
      counterTitle,
      decrement,
      increment,
      primaryColor,
      secondaryColor
    } = this.props
    return (
      <CounterContainer color={primaryColor}>
        <TitleContainer>
          <CommonText color={secondaryColor}>{counterTitle}</CommonText>
        </TitleContainer>
        <CounterNumberContainer>
          <CommonText color={secondaryColor}>{counterNumber}</CommonText>
        </CounterNumberContainer>
        <ButtonContainer>
          <StyledButton onClick={decrement}>
            <CommonText color={secondaryColor}>-</CommonText>
          </StyledButton>
          <StyledButton onClick={increment}>
            <CommonText color={secondaryColor}>+</CommonText>
          </StyledButton>
        </ButtonContainer>
      </CounterContainer>
    )
  }
}
