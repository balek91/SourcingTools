import React, { Component } from 'react'
import Select from '../components/select'
import Layout from './layout'
import { countryOptions, serviceOptions, estimate, unitCostValidate, unitCostAwaiting } from '../database'
import { TextMenu } from '../components/texts'
import styled from 'styled-components'
import DataTable from '../components/dataTableEstimate'
import UnitCostManagment from '../components/unitCostManagment2'



const SearchDiv = styled.div`
display: flex;
flex-direction : column;
margin-top : 10px;
`
const EstimateDiv = styled.div`
display: flex;
flex-direction : column;
margin-top : 10px;
`
const TextMenuCustom = styled(TextMenu)`
padding-left : 20px; 
`
const SelectDiv = styled.div`
margin-top : 10px;
display: flex;
flex-direction : row;
`
const SelectRight = styled.div`
display: flex;
flex : 1;
justify-content : flex-start;
margin-left : 15vh;
`
const SelectLeft = styled.div`
display: flex;
flex : 1;
justify-content : flex-end;
margin-right : 15vh;
`

const DivEstimateButton = styled.div`
margin-top : 20px;
display : flex;
align-items : center;
justify-content : center;`

const EstimateButton = styled.button`
font-size : 16;
`


export default class UserPage extends Component {


  state = {
    selectedLocation: null,
    selectService: null,
    dataEstimateTable: [],
    showUnitCost: false,
    dataUnitCostValidate: [],
    dataUnitCostAwaiting: [],
    refreshRender: true
  }

  handleChangeLocation = (selectedLocation) => {
    this.setState({
      selectedLocation: selectedLocation,
      dataEstimateTable: estimate
    })
    console.log(selectedLocation.value)
  }
  handleChangeService = (selectService) => {
    console.log(selectService.value)
  }

  componentDidMount() {

  }

  onEstimate = (id) => {
    this.setState({
      showUnitCost: true,
      dataUnitCostValidate: unitCostValidate,
      dataUnitCostAwaiting: unitCostAwaiting
    })
  }
  updateTable = (tableName, value) => {
    const { dataUnitCostValidate, dataUnitCostAwaiting } = this.state
    if (tableName === 'table1' && dataUnitCostValidate.length > 0) {
      let index = this.findRowNumber(dataUnitCostValidate, value)
      const item = dataUnitCostValidate[index]
      const newdataUnitCostValidate = dataUnitCostValidate.slice(0, index).concat(dataUnitCostValidate.slice(index + 1, dataUnitCostValidate.length))
      const newdataUnitCostAwaiting = [...dataUnitCostAwaiting, item]
      this.setState({ dataUnitCostValidate: newdataUnitCostValidate, dataUnitCostAwaiting: newdataUnitCostAwaiting })
    }
    if (tableName === 'table2' && dataUnitCostAwaiting.length > 0) {
      let index = this.findRowNumber(dataUnitCostAwaiting, value)
      const item = dataUnitCostAwaiting[index]
      const newdataUnitCostAwaiting = dataUnitCostAwaiting.slice(0, index).concat(dataUnitCostAwaiting.slice(index + 1, dataUnitCostAwaiting.length))
      const newdataUnitCostValidate = [...dataUnitCostValidate, item]
      this.setState({ dataUnitCostValidate: newdataUnitCostValidate, dataUnitCostAwaiting: newdataUnitCostAwaiting })
    }
  }
  findRowNumber = (table, id) => {
    let i = 0
    let find = false
    let value = -1
    while (i < table.length && !find) {
      if (table[i].id === id) {
        value = i
      }
      i++
    }
    return value
  }
  estimate = () => {
    console.log('validate', this.state.dataUnitCostValidate)
    console.log('awaiting', this.state.dataUnitCostAwaiting)
    console.log('estimate')
    this.setState({
      refreshRender: true

    })

  }

  render() {
    const { selectedLocation, selectService, dataEstimateTable, showUnitCost, dataUnitCostValidate, dataUnitCostAwaiting } = this.state
    return (
      <Layout>
        <SearchDiv>
          <TextMenuCustom>Search Last Estimation</TextMenuCustom>
          <SelectDiv>
            <SelectLeft>
              <Select data={countryOptions} placeholder={'Location'} value={selectedLocation} handleChange={this.handleChangeLocation} />
            </SelectLeft>
            <SelectRight>
              <Select data={serviceOptions} placeholder={'Service'} value={selectService} handleChange={this.handleChangeService} />
            </SelectRight>
          </SelectDiv>
        </SearchDiv>
        <EstimateDiv>
          <TextMenuCustom>Last Estimation</TextMenuCustom>
          <DataTable data={dataEstimateTable} funct={this.onEstimate} />
        </EstimateDiv>
        {
          showUnitCost ? (
            <div>

              <UnitCostManagment dataUnitCostValidate={dataUnitCostValidate} dataUnitCostAwaiting={dataUnitCostAwaiting} moveRow={this.updateTable} />
              <DivEstimateButton>
                <EstimateButton type='button' onClick={this.estimate}>
                  Estimate
                  </EstimateButton>
              </DivEstimateButton>
            </div>
          ) : (null)
        }
      </Layout>
    )
  }
}