import React from 'react'
import Griddle, { RowDefinition, ColumnDefinition } from 'griddle-react'
import { estimate } from '../../database'
import styled from 'styled-components'


const NewLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
  <div>
    <Filter />
    <Pagination />
    <Table />
  </div>
)

const styleConfig = {
  styles: {
    Filter: { fontSize: 18 },
    Table: { border: "2px solid #555 ", width: '1000' },
  }
}

const StyledDiv = styled.div`
width : 80%;
display : flex;
margin-left : 10%;
justify-content : center;
align-items : center;`


export default class App extends React.Component {

  static propTypes = {

  }
  render() {
    return (
      <StyledDiv>
        <Griddle data={estimate}
          styleConfig={styleConfig}
          components={{
            Layout: NewLayout
          }} >
        </Griddle>
      </StyledDiv>
    )
  }
}