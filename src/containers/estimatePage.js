import React, { Component } from 'react'
import Layout from './layout'
import { estimation } from '../database'
import styled from 'styled-components'
import DataTableUnitCost from '../components/unitCostEstimation'
import { TextMenu, TextSubMenu } from '../components/texts'

const StandardDiv = styled.div`
display: flex;
flex-direction : column;
margin-top : 10px;
`
const TextMenuCustom = styled(TextMenu)`
padding : 50px 0px 50px 20px; 
margin-top : 20px;
margin-bottom : 20px;
`
const TotalDiv = styled.div`
display : flex;
flex : 1;
flex-direction : row;
width : 80%;
margin-left : 10%;
margin-top : 20px;
`
const TextSubMenuCustom = styled(TextSubMenu)`
flex : 1;
text-align : center;
`

export default class EstimatePage extends Component {

  state = {
    estimationInfo: null
  }

  componentDidMount() {
    console.log(estimation)
    this.setState({
      estimationInfo: estimation
    })
  }


  render() {
    const { estimationInfo } = this.state
    return (
      <Layout>
        <StandardDiv>{
          estimationInfo ? (
            <div>
              <TextMenuCustom>Estimation {estimationInfo.estimationId} : {estimationInfo.estimationLocation} - {estimationInfo.estimationService} </TextMenuCustom>
              <DataTableUnitCost dataUnitCost={estimationInfo.listUnitCost} ></DataTableUnitCost>
              <TotalDiv>
                <TextSubMenuCustom>Total HT : {estimationInfo.value} {estimationInfo.currency}</TextSubMenuCustom>
                <TextSubMenuCustom>TAX : {estimationInfo.tax} {estimationInfo.currency}</TextSubMenuCustom>
                <TextSubMenuCustom>FEE : {estimationInfo.fee} {estimationInfo.currency}</TextSubMenuCustom>
                <TextSubMenuCustom>Total TTC : {estimationInfo.total} {estimationInfo.currency}</TextSubMenuCustom>
              </TotalDiv>
            </div>
          ) : (null)

        }
        </StandardDiv>
      </Layout>
    )
  }
}

