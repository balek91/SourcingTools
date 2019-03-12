import Proptypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import arrowDown from '../../static/icon/sort-down.png'
import arrowRight from '../../static/icon/sort-right.png'
import { TextMenu } from '../../components/texts'

const TextMenuCustom = styled(TextMenu)`
padding : 10px 0px 10px 20px; 
border : 1px solid black;
border-radius: 50px;
`

export default class App extends React.Component {
  static propTypes = {
    func: Proptypes.func,
    bool: Proptypes.bool,
    text: Proptypes.string

  }
  render() {
    const { func, bool, text } = this.props
    return (
      <TextMenuCustom onClick={func} >{text}  {bool ? (<img src={arrowDown} alt='-' />) : (<img src={arrowRight} alt='+' />)}</TextMenuCustom>
    )
  }
}


