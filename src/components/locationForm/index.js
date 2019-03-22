
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
width : 36vh;
`

const StyledSubmit = styled.button`
width : 36vh;
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
    country: '',
    port: '',
    currency: '',
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
    if (this.state.country === '' || this.state.port === '' || this.state.currency === '') {
      this.setState({
        errorMessage: 'Veuillez remplir tous les champs'
      })
      alert('Veuillez remplir tous les champs')
      return false
    }
    return true
  }

  handleChangeCountry = (selectedCountry) => {
    this.setState({ country: selectedCountry })
    console.log(selectedCountry.value)
  }

  handleChangeCurrency = (selectedCurrency) => {
    this.setState({ currency: selectedCurrency })
    console.log(selectedCurrency.value)
  }

  handleSubmit = event => {
    event.preventDefault()
    this.clearErrorMessages()
    if (!this.checkInputs()) {
      console.log('err')
      return
    }
    console.log(this.state.country.id, this.state.port, this.state.currency.id)
  }

  render() {
    const { country, currency } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <RowDiv>
          <Select data={countryOptions} placeholder={'Country'} value={country} handleChange={this.handleChangeCountry} />
        </RowDiv>
        <RowDiv>
          <StyledInput onChange={this.inputHandler} placeholder='Port' name='port' />
        </RowDiv>
        <RowDiv>
          <Select data={currencyOptions} placeholder={'Currency'} value={currency} handleChange={this.handleChangeCurrency} />
        </RowDiv>
        <RowDiv>
          <StyledSubmit type='submit' >Create</StyledSubmit>
        </RowDiv>
      </Form>
    )
  }
}


