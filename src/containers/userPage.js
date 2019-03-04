import React, { Component } from 'react'
import Select from '../components/select'
import Layout from './layout'
import { countryOptions, serviceOptions, estimate } from '../database'
import { TextMenu } from '../components/texts'
import styled from 'styled-components'
import DataTable from '../components/dataTableEstimate'



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
    dataEstimateTable : null,
    showUnitCost : false
  }
  handleChangeLocation = (selectedLocation) => {
    this.setState({ 
      selectedLocation : selectedLocation,
      dataEstimateTable : estimate})
    console.log(selectedLocation.value)
  }
  handleChangeService = (selectService) => {
    this.setState({ 
      selectService : selectService,
      dataEstimateTable : estimate
    })
    console.log(selectService.value)
  }
  componentDidMount() {
    console.log('page charger')
  }
  onEstimate = (id) => {
    this.setState({showUnitCost : true})
    console.log('ok', id)
  }

  estimate = () => {
    console.log('estimate')
  }

  render() {
    const { selectedLocation, selectService, dataEstimateTable, showUnitCost } = this.state
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
              <EstimateDiv>
                <TextMenuCustom>List Unit Cost</TextMenuCustom>
                <DataTable data={dataEstimateTable} funct={this.onEstimate} />
              </EstimateDiv>
                <EstimateDiv>
                  <TextMenuCustom>Other Unit Cost</TextMenuCustom>
                  <DataTable data={dataEstimateTable} funct={this.onEstimate} />
                </EstimateDiv>
                <DivEstimateButton>
                  <EstimateButton type='button' onClick={this.estimate}>
                    Estimate
                  </EstimateButton>
                </DivEstimateButton>
            </div>
          ):(null)
        }
      </Layout>
    )
  }
}