
import React from 'react'
import styled from 'styled-components'
import { CommonText } from '../texts'
import Input from '../input'
import Select from '../select'
import { locationOptions, currencyOptions, serviceOptions } from '../../database'

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
    location: '',
    currency: '',
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
    if (this.state.country === '' || this.state.port === '' || this.state.currency === '') {
      this.setState({
        errorMessage: 'Veuillez remplir tous les champs'
      })
      alert('Veuillez remplir tous les champs')
      return false
    }
    return true
  }

  handleChangeLocation = (selectedLocation) => {
    this.setState({ location: selectedLocation })
    console.log(selectedLocation.value)
  }

  handleChangeCurrency = (selectedCurrency) => {
    this.setState({ currency: selectedCurrency })
    console.log(selectedCurrency.value)
  }

  handleChangeService = (selectedService) => {
    this.setState({ service: selectedService })
    console.log(selectedService.value)
  }

  handleSubmit = event => {
    event.preventDefault()
    this.clearErrorMessages()
    if (!this.checkInputs()) {
      console.log('err')
      return
    }
    console.log(this.state.location.id, this.state.currency.id, this.state.service.id)
  }

  render() {
    const { location, currency, service } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <RowDiv>
          <Select data={locationOptions} placeholder={'Location'} value={location} handleChange={this.handleChangeLocation} />
        </RowDiv>
        <RowDiv>
          <Select data={serviceOptions} placeholder={'Service'} value={service} handleChange={this.handleChangeService} />
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


