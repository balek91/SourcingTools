import React from 'react'
import Griddle, { RowDefinition, ColumnDefinition, plugins, selectors, connect } from 'griddle-react'
import styled from 'styled-components'
import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import * as PropTypes from 'prop-types'
import mapProps from 'recompose/mapProps'
import Proptypes from 'prop-types'


const enhanceWithOnClick = (onClick,id) => class ComputeThing extends React.Component<any, any> {

  localClick = () => {
    const { id } = this.props.rowData
    console.log(id)
      onClick(id)
  }

  render() { 
    return (
      <button type='button' onClick={this.localClick}>
        Estimate
      </button>
    )
  }
}

const components = {
  Table: ({ TableHeading, TableBody, NoResults, style, visibleRows }) => (
    <table style={style}>
      <TableHeading />
      {visibleRows ? (TableBody && <TableBody />) : (NoResults && <NoResults />)}
    </table>
  ),
  NoResultsContainer: compose(
    getContext({
      components: PropTypes.object,
    }),
    connect(
      state => ({
        columnIds: selectors.columnIdsSelector(state),
        style: selectors.stylesForComponentSelector(state, 'NoResults'),
      })
    ),
    mapProps(props => ({
      NoResults: props.components.NoResults,
      ...props
    }))
  ),
  NoResults: ({ columnIds, style }) => (
    <tr style={style}>
      <td colSpan={columnIds.length}>Nothing!</td>
    </tr>
  ),
}

const styleConfig = {
  styles: {
    Filter: {
      fontSize: 14,
      width: '48%',
      borderRadius: '20px',
      padding: '5px 0px 5px 10px',
      margin: '5px 0px 5px 5px'
    },
    Table: {
      width: '100%',
      textAlign: 'center'
    },
    Container: { width: '100%' },
    Pagination : {textAlign : 'center'},
    Row : {border : '1px solid black'}
  }
}

const StyledDiv = styled.div`
  width : 80%;
  display : flex;
  margin-left : 10%;
  justify-content : center;
  align-items : center;`

  const EnhanceWithRowData = connect((state, props) => ({
    rowData: selectors.rowDataSelector(state, props)
  }));


export default class App extends React.Component {

  static propTypes = {
    data : Proptypes.any,
    funct : Proptypes.func
  }
 

  state = {

  }

  onRemove = () => {
    console.log('ok')
  }


  render() {
    const {funct, data} = this.props
    return (
      <StyledDiv>
        <Griddle data={data}
          components={components}
          styleConfig={styleConfig}
          enableSettings={false}
          plugins={[plugins.LocalPlugin, plugins.LegacyStylePlugin]}>
          <RowDefinition  >

            <ColumnDefinition id='port' title='Port' />
            <ColumnDefinition id='country' title='Country' />
            <ColumnDefinition id='currency' title='Currency' />
            <ColumnDefinition id='estimate' title='Estimate' customComponent={EnhanceWithRowData(enhanceWithOnClick(funct))}/>
          </RowDefinition>
        </Griddle>
      </StyledDiv>
    )
  }
}