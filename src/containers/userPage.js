import React, { Component } from 'react'
import Layout from './layout'
import { estimate, unitCostValidate, unitCostAwaiting } from '../database'
import styled from 'styled-components'
import EstimateDataTable from '../components/dataTableEstimate'
import UnitCostManagment from '../components/unitCostManagment'
import UnitCostEstimate from '../components/unitCostEstimate'
import TitleComp from '../components/titleComponent'
import Button from '../components/buttonCustom'
import { withRouter } from 'react-router'

const StandardDiv = styled.div`
display: flex;
flex-direction : column;
margin-top : 10px;
`


class UserPage extends Component {


  state = {
    dataEstimateTable: [],
    showUnitCost: false,
    showUnitCostEstimate: false,
    dataUnitCostValidate: [],
    dataUnitCostAwaiting: [],
    lastEstimateShow: true,
    manageUCShow: true,
    estimateUCShow: true
  }


  componentDidMount() {
    this.setState({
      dataEstimateTable: estimate
    })

  }

  onEstimate = (id) => {
    this.setState({
      showUnitCost: true,
      dataUnitCostValidate: unitCostValidate,
      dataUnitCostAwaiting: unitCostAwaiting,
      lastEstimateShow: false
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
  estimateUnitCost = () => {
    console.log('validate', this.state.dataUnitCostValidate)
    this.setState({
      showUnitCostEstimate: true,
      manageUCShow: false
    })

  }

  changeEstimateComponentStatus = () => {

    this.setState({
      lastEstimateShow: !this.state.lastEstimateShow,
      showUnitCost: false,
      showUnitCostEstimate: false,
      manageUCShow: true,
      estimateUCShow: true
    })
  }

  changeManageComponentStatus = () => {
    this.setState({
      manageUCShow: !this.state.manageUCShow,
      showUnitCostEstimate: false,
      estimateUCShow: true
    })
  }

  changeEstimateUCComponentStatus = () => {
    this.setState({
      estimateUCShow: !this.state.estimateUCShow,
    })
  }

  redirectToEstimation = () => {
    const { history } = this.props
    console.log(this.state.dataUnitCostValidate)
    history.push('/estimationPage')
  }

  updateInput = (idRow, value, type) => {
    let { dataUnitCostValidate } = this.state
    let i = 0
    let find = false
    let table = dataUnitCostValidate
    while (i < table.length && !find) {
      if (table[i].id === idRow) {
        find = true
        if (type === 'value') {
          table[i].value = parseFloat(value)
        }
        else if (type === 'fee') {
          table[i].fee = parseFloat(value)
        }
        else if (type === 'tax') {
          table[i].tax = parseFloat(value)
        }
        this.setState({
          dataUnitCostValidate: table
        })
      }
      i++;
    }
  }

  render() {
    const { dataEstimateTable, showUnitCost, dataUnitCostValidate, dataUnitCostAwaiting, lastEstimateShow, manageUCShow, showUnitCostEstimate, estimateUCShow } = this.state
    return (
      <Layout>
        <StandardDiv>
          <TitleComp func={this.changeEstimateComponentStatus} bool={lastEstimateShow} text={'Last Estimation'} />
          {lastEstimateShow ?
            <EstimateDataTable data={dataEstimateTable} funct={this.onEstimate} />
            : (null)}
        </StandardDiv>
        {
          showUnitCost ? (
            <StandardDiv>
              <TitleComp func={this.changeManageComponentStatus} bool={manageUCShow} text={'Manage Unit Cost'} />
              {manageUCShow ?
                (<div>
                  <UnitCostManagment dataUnitCostValidate={dataUnitCostValidate} dataUnitCostAwaiting={dataUnitCostAwaiting} moveRow={this.updateTable} />
                  <Button func={this.estimateUnitCost} text={'Estimate Unit Cost'}></Button>
                </div>) : (null)

              }
            </StandardDiv>
          ) : (null)
        }
        {showUnitCostEstimate ? (
          <StandardDiv>
            <TitleComp func={this.changeEstimateUCComponentStatus} bool={estimateUCShow} text={'Estimate Unit Cost'} />
            {estimateUCShow ?
              (<div>
                <UnitCostEstimate dataUnitCostValidate={dataUnitCostValidate} updateInput={this.updateInput} />
                <Button func={this.redirectToEstimation} text={'Validate Estimation'}></Button>
              </div>) : (null)

            }
          </StandardDiv>
        ) : (null)
        }
      </Layout>
    )
  }
}

const ConnectedUserPage = withRouter(UserPage)
export default ConnectedUserPage