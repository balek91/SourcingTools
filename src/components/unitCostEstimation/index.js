import React from 'react'
import styled from 'styled-components'
import Proptypes from 'prop-types'
import Griddle, { RowDefinition, ColumnDefinition, plugins, selectors, connect } from 'griddle-react'
import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import mapProps from 'recompose/mapProps'

const UnitCostDiv = styled.div`
  width : 80%;
  display : flex;
  margin-left : 10%;
  justify-content : center;
  align-items : center;
  margin-top : 10px;
  margin-bottom : 10px;`

const components = {
  Table: ({ TableHeading, TableBody, NoResults, style, visibleRows }) => (
    <table style={style}>
      <TableHeading />
      {visibleRows ? (TableBody && <TableBody />) : (NoResults && <NoResults />)}
    </table>
  ),
  NoResultsContainer: compose(
    getContext({
      components: Proptypes.object,
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
    Pagination: { textAlign: 'center' },
    Row: { border: '1px solid black' }
  }
}

export default class App extends React.Component {

  static propTypes = {
    dataUnitCost: Proptypes.any
  }

  state = {

  }
  render() {
    const { dataUnitCost } = this.props

    return (
      <UnitCostDiv>
        <Griddle data={dataUnitCost}
          components={components}
          styleConfig={styleConfig}
          enableSettings={false}
          plugins={[plugins.LocalPlugin, plugins.LegacyStylePlugin]}>
          <RowDefinition>
            <ColumnDefinition id='name' title='Name' />
            <ColumnDefinition id='value' title='Value' />
            <ColumnDefinition id='tax' title='Tax' />
            <ColumnDefinition id='fee' title='Fee' />
            <ColumnDefinition id='unit' title='Unit' />
            <ColumnDefinition id='unitCost' title='Unit Cost' />
            <ColumnDefinition id='description' title='Description' />
            <ColumnDefinition id='categorie' title='Categorie' />
          </RowDefinition>
        </Griddle>
      </UnitCostDiv>

    )
  }
}