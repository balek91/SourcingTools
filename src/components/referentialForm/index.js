
import React from 'react'
import styled from 'styled-components'
import Input from '../input'
import Select from '../select'
import { referentialTypeOptions } from '../../database'

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
    referential: '',
    referentialType: '',
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
  clearFields = () => {
    this.setState({ referential: '', referentialType: '' })
  }
  checkInputs = () => {
    if (this.state.referential === '' || this.state.referentialType === '') {
      this.setState({
        errorMessage: 'Veuillez remplir tous les champs '
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
    console.log(this.state.referentialType.value, this.state.referential)
    this.clearFields()
  }

  handleChangeReferentialType = (selectedReferentialType) => {
    this.setState({ referentialType: selectedReferentialType })
    console.log(selectedReferentialType.value)
  }

  render() {
    const { referentialType, referential } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>

        <RowDiv>
          <StyledInput onChange={this.inputHandler} placeholder='Referential' name='referential' value={referential} />
        </RowDiv>
        <RowDiv>
          <Select data={referentialTypeOptions} placeholder={'Referential Type'} value={referentialType} handleChange={this.handleChangeReferentialType} />
        </RowDiv>
        <RowDiv>
          <StyledSubmit type='submit' >Create</StyledSubmit>
        </RowDiv>

      </Form>
    )
  }
}


