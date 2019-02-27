import React, { Component } from 'react'
import Select from '../components/select'
import Layout from './layout'
import { countryOptions, serviceOptions } from '../database'
import { TextMenu } from '../components/texts'
import styled from 'styled-components'
import DataTable from '../components/dataTable'



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

export default class UserPage extends Component {
  static propTypes = {

  }

  state = {
    selectedLocation: null,
    selectService: null,
  }
  handleChangeLocation = (selectedLocation) => {
    this.setState({ selectedLocation })
    console.log(selectedLocation.value)
  }
  handleChangeService = (selectService) => {
    this.setState({ selectService })
    console.log(selectService.value)
  }
  componentDidMount() {
    console.log('page charger')
  }

  render() {
    const { selectedLocation, selectService } = this.state
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
          <DataTable />
        </EstimateDiv>
      </Layout>
    )
  }
}