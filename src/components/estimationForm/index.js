
import React from 'react'
import styled from 'styled-components'
import { TextMenu, CommonText } from '../texts'
import Input from '../input'
import Select from '../select'
import { locationOptions, currencyOptions, serviceOptions, unitOptions, unitCostOptions, categorieOptions } from '../../database'
import DataTable from '../unitCostNewEstimation'

const Form = styled.form`

`

const GlobalDiv = styled.div`
display: flex;
margin-top : 10px;
text-align: center;
flex-direction : column; `


const RowDiv = styled.div`
display : flex;
flex-direction : row;
justify-content : center;
flex : 1;`

const StyledInput = styled(Input)`
height : 16px;
width : 36vh;
`
const StyledCheckbox = styled.input`
`
const StyledSubmit = styled.button`
width : 36vh;
padding: 0px;
height : 36px;
border-radius : 4px;
font-size : 18px;
`

const StandardDiv = styled.div`
display :flex;
justify-content :center;
flex : 1;
align-items : center;
`

const TextMenuCustom = styled(TextMenu)`
font-size : 25px;
`

export default class App extends React.Component {
  state = {
    location: '',
    currency: '',
    service: '',
    errorMessage: '',
    name: '',
    defaultValue: '',
    unit: '',
    unitCost: '',
    description: '',
    categorie: '',
    defaultList: true,
    dataUnitCost: [],
    id: 0
  }

  onRemove = (rowId) => {
    const newData = this.state.dataUnitCost.filter(x => x.id !== rowId);
    this.setState({ dataUnitCost: newData });
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      console.log(this.state)
    })
  }

  inputHandlerNumber = event => {
    const re = /[-+]?([0-9]*\.[0-9]+|[0-9]+)/
    if (event.target.value === '' || re.test(event.target.value)) {
      this.setState({ [event.target.name]: event.target.value }, () => {
        console.log(this.state)
      })
    }
  }
  clearFields = () => {
    this.setState({
      location: '',
      currency: '',
      service: '',
      errorMessage: '',
      name: '',
      defaultValue: '',
      unit: '',
      unitCost: '',
      description: '',
      categorie: '',
      defaultList: true,
      dataUnitCost: [],
      id: 0
    })
  }

  clearFieldsUnitCost = () => {
    this.setState({
      errorMessage: '',
      name: '',
      defaultValue: '',
      unit: '',
      unitCost: '',
      description: '',
      categorie: '',
      defaultList: true,
      id: this.state.id + 1
    })
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
  checkInputsUnitCost = () => {
    if (this.state.name === '' || this.state.defaultValue === '' || this.state.unit === '') {
      this.setState({
        errorMessage: 'Veuillez remplir tous les champs du Unit Cost'
      })
      alert('Veuillez remplir tous les champs du Unit Cost')
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

  handleChangeUnit = (selectedUnit) => {
    this.setState({ unit: selectedUnit })
    console.log(selectedUnit.value)
  }

  handleChangeUnitCost = (selectedUnitCost) => {
    this.setState({ unitCost: selectedUnitCost })
    console.log(selectedUnitCost.value)
  }

  handleChangeCategorie = (selectedCategorie) => {
    this.setState({ categorie: selectedCategorie })
    console.log(selectedCategorie.value)
  }

  handleSubmit = event => {
    event.preventDefault()
    if (!this.checkInputs()) {
      console.log('err')
      return
    }
    console.log(this.state.location.id, this.state.currency.id, this.state.service.id, this.state.dataUnitCost)
    this.clearFields()
  }

  submitNewUnitCost = event => {
    event.preventDefault()

    if (!this.checkInputsUnitCost()) {
      console.log('err')
      return
    }
    console.log(this.state.name, this.state.defaultValue, this.state.unit.value, this.state.unitCost.value, this.state.description, this.state.categorie.value, this.state.defaultList)
    let item = {
      id: this.state.id,
      name: this.state.name,
      defaultValue: this.state.defaultValue,
      unit: this.state.unit,
      unitCost: this.state.unitCost,
      description: this.state.description,
      categorie: this.state.categorie,
      defaultList: this.state.defaultList
    }
    const newdataUnitCostAwaiting = [...this.state.dataUnitCost, item]
    this.setState({
      dataUnitCost: newdataUnitCostAwaiting
    })
    this.clearFieldsUnitCost()


  }

  handleChangeCheckBox = () => {
    this.setState({
      defaultList: !this.state.defaultList
    })
  }



  render() {
    const { location, currency, service, unit, unitCost, categorie, defaultList, description, defaultValue, name, dataUnitCost } = this.state
    return (
      <GlobalDiv>
        <Form onSubmit={this.handleSubmit} id='estimation'></Form>
        <RowDiv>
          <StandardDiv>
            <Select data={locationOptions} placeholder={'Location'} value={location} handleChange={this.handleChangeLocation} />
          </StandardDiv>
          <StandardDiv>
            <Select data={serviceOptions} placeholder={'Service'} value={service} handleChange={this.handleChangeService} />
          </StandardDiv>
          <StandardDiv>
            <Select data={currencyOptions} placeholder={'Currency'} value={currency} handleChange={this.handleChangeCurrency} />
          </StandardDiv>
        </RowDiv>
        <GlobalDiv>
          <RowDiv>
            <TextMenuCustom>Unit Cost</TextMenuCustom>
          </RowDiv>

          <Form id='unitCost' onSubmit={this.submitNewUnitCost}></Form>
          <RowDiv>
            <StandardDiv>
              <StyledInput onChange={this.inputHandler} placeholder='Name' name='name' value={name} />
            </StandardDiv>
            <StandardDiv>
              <StyledInput onChange={this.inputHandlerNumber} placeholder='Default Value' name='defaultValue' value={defaultValue} />
            </StandardDiv>
            <StandardDiv>
              <Select data={unitOptions} placeholder={'Unit'} value={unit} handleChange={this.handleChangeUnit} />
            </StandardDiv>
            <StandardDiv>
              <Select data={unitCostOptions} placeholder={'Unit Cost'} value={unitCost} handleChange={this.handleChangeUnitCost} />
            </StandardDiv>
          </RowDiv>
          <RowDiv>

            <StandardDiv>
              <StyledInput onChange={this.inputHandler} placeholder='Description' name='description' value={description} />
            </StandardDiv>
            <StandardDiv>
              <Select data={categorieOptions} placeholder={'Categorie'} value={categorie} handleChange={this.handleChangeCategorie} />
            </StandardDiv>
            <StandardDiv>
              <CommonText>Default :</CommonText>
              <StyledCheckbox type='checkbox' defaultChecked={defaultList} onChange={this.handleChangeCheckBox} />
            </StandardDiv>
            <StandardDiv>
              <StyledSubmit type='submit' form='unitCost' >Add</StyledSubmit>
            </StandardDiv>
          </RowDiv>
        </GlobalDiv>


        <RowDiv>
          <DataTable dataUnitCost={dataUnitCost} funct={this.onRemove}></DataTable>
        </RowDiv>
        <RowDiv>
          <StyledSubmit type='submit' form='estimation' >Create</StyledSubmit>
        </RowDiv>
      </GlobalDiv>

    )
  }
}


