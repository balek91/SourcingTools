import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { TextSubMenu } from '../texts'
import Griddle, { RowDefinition, ColumnDefinition, plugins, selectors, connect } from 'griddle-react'
import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import mapProps from 'recompose/mapProps'

const TextMenuCustom = styled(TextSubMenu)`
padding-left : 30px; 
`
const UnitCostDiv = styled.div`
  width : 80%;
  display : flex;
  margin-left : 10%;
  justify-content : center;
  align-items : center;
  margin-top : 10px;
  margin-bottom : 10px;`

const ChangeTableButton = (callback, nameTable, nameButton) => ({ value }, ...rest) => (
  <button onClick={() => callback(nameTable, value)}>{nameButton}</button>
)
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
    Pagination: { textAlign: 'center' },
    Row: { border: '1px solid black' }
  }
}

export default class App extends React.Component {

  static propTypes = {
    dataUnitCostValidate: PropTypes.any,
    dataUnitCostAwaiting: PropTypes.any,
    moveRow: PropTypes.func
  }

  state = {

  }

  onChangeValue = () => {
    console.log('ok')
  }


  render() {
    const { dataUnitCostValidate, dataUnitCostAwaiting, moveRow } = this.props

    return (
      <div>
        <TextMenuCustom>List Unit Cost</TextMenuCustom>
        <UnitCostDiv>
          <Griddle data={dataUnitCostValidate}
            components={components}
            styleConfig={styleConfig}
            enableSettings={false}
            plugins={[plugins.LocalPlugin, plugins.LegacyStylePlugin]}>
            <RowDefinition>
              <ColumnDefinition id='name' title='Name' />
              <ColumnDefinition id='categorie' title='Categorie' />
              <ColumnDefinition id='description' title='Description' />
              <ColumnDefinition id='unit' title='Unit' />
              <ColumnDefinition id='quantity' title='Quantity' />
              <ColumnDefinition
                id='id'
                title='Action'
                customComponent={ChangeTableButton(
                  moveRow, 'table1', 'Remove'
                )}
              />
            </RowDefinition>
          </Griddle>
        </UnitCostDiv>
        <TextMenuCustom>Other Unit Cost</TextMenuCustom>
        <UnitCostDiv>
          <Griddle data={dataUnitCostAwaiting}
            components={components}
            styleConfig={styleConfig}
            enableSettings={false}
            plugins={[plugins.LocalPlugin, plugins.LegacyStylePlugin]}>
            <RowDefinition>
              <ColumnDefinition id='name' title='Name' />
              <ColumnDefinition id='categorie' title='Categorie' />
              <ColumnDefinition id='description' title='Description' />
              <ColumnDefinition id='unit' title='Unit' />
              <ColumnDefinition id='quantity' title='Quantity' />
              <ColumnDefinition
                id='id'
                title='Action'
                customComponent={ChangeTableButton(
                  moveRow, 'table2', 'Add'
                )}
              />
            </RowDefinition>
          </Griddle>
        </UnitCostDiv>

      </div>
    )
  }
}