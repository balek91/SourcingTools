import React, { Component } from 'react'
import Select from '../components/select'
import Layout from './layout'
import { countryOptions, serviceOptions, estimate, unitCostValidate, unitCostAwaiting, estimateTest } from '../database'
import { TextMenu } from '../components/texts'
import styled from 'styled-components'
import DataTable from '../components/dataTableEstimate'
import UnitCostManagment from '../components/unitCostManagment'


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
    this.setState({
      selectService: selectService,
      dataEstimateTable: estimateTest
    })
    console.log(selectService.value)
  }
  componentDidMount() {
    console.log('page charger')
  }
  onEstimate = (id) => {
    this.setState({
      showUnitCost: true,
      dataUnitCostValidate: unitCostValidate,
      dataUnitCostAwaiting: unitCostAwaiting
    })
    console.log('ok', id)
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



  removeUnitCost = (id) => {
    console.log('remove Unit Cost', id)
    let index = this.findRowNumber(this.state.dataUnitCostValidate, id)
    let tableForRemove = this.state.dataUnitCostValidate
    let tableForAdd = this.state.dataUnitCostAwaiting
    let rowToMove
    if (index > -1) {
      rowToMove = tableForRemove[index]
      tableForAdd.push(rowToMove)
      tableForRemove.splice(index, 1)
      this.setState({
        dataUnitCostValidate: tableForRemove,
        dataUnitCostAwaiting: tableForAdd
      })
    }
  }

  addUnitCost = (id) => {
    let index = this.findRowNumber(this.state.dataUnitCostAwaiting, id)
    let tableForRemove = this.state.dataUnitCostAwaiting
    let tableForAdd = this.state.dataUnitCostValidate
    let rowToMove
    if (index > -1) {
      rowToMove = tableForRemove[index]
      tableForAdd.push(rowToMove)
      tableForRemove.splice(index, 1)
      this.setState({
        dataUnitCostAwaiting: tableForRemove,
        dataUnitCostValidate: tableForAdd
      })
    }

    console.log('add Unit Cost', id)
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
              <UnitCostManagment dataUnitCostValidate={dataUnitCostValidate} onRemove={this.removeUnitCost} dataUnitCostAwaiting={dataUnitCostAwaiting} OnAdd={this.addUnitCost} titleFirst={'List Unit Cost'} titleSecond={'Other Unit Cost'} />
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