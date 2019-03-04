import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { TextMenu } from '../texts'
import DataTable from '../dataTableUnitCostValidate'

const EstimateDiv = styled.div`
display: flex;
flex-direction : column;
margin-top : 10px;
`

const TextMenuCustom = styled(TextMenu)`
padding-left : 20px; 
`

export default class App extends React.Component {

  static propTypes = {
    dataUnitCostValidate: PropTypes.any,
    onRemove: PropTypes.func,
    dataUnitCostAwaiting: PropTypes.any,
    OnAdd: PropTypes.func,
    titleFirst: PropTypes.string,
    titleSecond: PropTypes.string
  }

  state = {

  }


  render() {
    const { dataUnitCostValidate, onRemove, dataUnitCostAwaiting, OnAdd, titleFirst, titleSecond } = this.props
    console.log('ok1', dataUnitCostValidate, 'kkk', dataUnitCostAwaiting)
    console.log()
    return (
      <div>
        <EstimateDiv>
          <TextMenuCustom>{titleFirst}</TextMenuCustom>
          <DataTable data={dataUnitCostValidate} funct={onRemove} />
        </EstimateDiv>
        <EstimateDiv>
          <TextMenuCustom>{titleSecond}</TextMenuCustom>
          <DataTable data={dataUnitCostAwaiting} funct={OnAdd} />
        </EstimateDiv>

      </div>
    )
  }
}