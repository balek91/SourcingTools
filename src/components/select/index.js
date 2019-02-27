import React from 'react'
import Select from 'react-select'
import Proptypes from 'prop-types'
import styled from 'styled-components'

const StyledDiv = styled.div`
width : ${props => props.size ? props.size : '40vh'}; `



export default class App extends React.Component {

  static propTypes = {
    data: Proptypes.any,
    placeholder: Proptypes.string,
    value: Proptypes.any,
    handleChange: Proptypes.func,
    size: Proptypes.string,
  }
  render() {
    const { data, placeholder, value, handleChange, size } = this.props

    return (
      <StyledDiv size={size}>
        <Select
          value={value}
          placeholder={placeholder ? placeholder : 'Select'}
          onChange={handleChange}
          options={data ? data : []}
        />
      </StyledDiv>
    );
  }
}