import Proptypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'


const DivEstimateButton = styled.div`
margin-top : 20px;
display : flex;
align-items : center;
justify-content : center;`

const EstimateButton = styled.input`
font-size : 20px;
`

export default class App extends React.Component {
  static propTypes = {
    func: Proptypes.func,
    text: Proptypes.string,
  }
  render() {
    const { func, text } = this.props
    return (
      <DivEstimateButton>
        <EstimateButton type='button' onClick={func} value={text} />
      </DivEstimateButton>
    )
  }
}


