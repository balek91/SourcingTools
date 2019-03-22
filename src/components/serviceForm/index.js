
import React from 'react'
import styled from 'styled-components'
import { CommonText } from '../texts'
import Input from '../input'
import Select from '../select'
import { countryOptions, currencyOptions } from '../../database'

const Form = styled.form`
  display: flex;
  margin-top : 10px;
  flex-direction: row;
  text-align: center;
`
const StyledInput = styled(Input)`
height : 16px;
width : 50vh;
`

const StyledSubmit = styled.button`
width : 50vh;
padding: 0px;
height : 36px;
border-radius : 4px;
font-size : 18px;
`

const RowDiv = styled.div`
display :flex;
justify-content :center;
flex : 1;`

export default class App extends React.Component {
  state = {
    service: '',
    errorMessage: ''
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      console.log(this.state)
    })
  }
  clearErrorMessages = () => {
    this.setState({ errorMessage: '' })
  }
  checkInputs = () => {
    if (this.state.service === '') {
      this.setState({
        errorMessage: 'Veuillez remplir tous les champs'
      })
      alert('Veuillez remplir tous les champs')
      return false
    }
    return true
  }
  handleSubmit = event => {
    event.preventDefault()
    this.clearErrorMessages()
    if (!this.checkInputs()) {
      console.log('err')
      return
    }
    console.log(this.state.service)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <RowDiv>
        </RowDiv>
        <RowDiv>
          <StyledInput onChange={this.inputHandler} placeholder='Service' name='service' />
        </RowDiv>
        <RowDiv>
          <StyledSubmit type='submit' >Create</StyledSubmit>
        </RowDiv>
        <RowDiv>
        </RowDiv>
      </Form>
    )
  }
}


