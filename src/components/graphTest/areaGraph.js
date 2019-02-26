import React from 'react'
import { XYPlot, XAxis, YAxis, Hint, AreaSeries } from 'react-vis'
import styled from 'styled-components'
import { CommonText } from '../texts'

import './graph.css'
import axisPressed from '../../static/icon/axisPressed.png'
import axisUnpressed from '../../static/icon/axisUnpressed.png'

const StyledPlot = styled(XYPlot)`
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid #cacaca;
  display: flex;
  justify-content: center;
  &:not(:first-child) {
    border-left: none;
  }
`

const AllCharts = styled.div`
  display: flex;
  // flex-wrap: wrap;
`

const ChartTitle = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  border: 1px solid #cacaca;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border-bottom: none;
  background-color: rgba(0, 0, 0, 0.1);
`
const ColorDotContainer = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  height: inherit;
  align-items: center;
  justify-content: center;
`

const ColorDot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 20px;
  margin: 2px;
  box-shadow: 0.3px 0.3px 10px
    ${props => (props.color ? props.color : '#a0cd48')};
  background-color: ${props => (props.color ? props.color : '#a0cd48')};
`
const GraphTitleContainer = styled.div`
  height: inherit;
  width: 100%;
  display: flex;
  align-items: center;
`

const AllContainer = styled.div``

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: 5px;
`
const StyledXAxis = styled(XAxis)`
  display: ${props => (props.visible ? 'flex' : 'none')};
`
const StyledYAxis = styled(YAxis)`
  display: ${props => (props.visible ? 'flex' : 'none')};
`

class Chart extends React.Component {
  state = {
    hoverState: null,
    axisState: true
  }

  handleAxis = () => {
    this.setState({ axisState: !this.state.axisState })
  }

  render() {
    const { axisState } = this.state
    return (
      <AllContainer>
        <ChartTitle>
          <ColorDotContainer>
            <ColorDot color="#fad149" />
            <ColorDot color="#fad" />
          </ColorDotContainer>
          {/*<Background background={this.props.background} />*/}
          <GraphTitleContainer>
            <CommonText color="white">Graphique</CommonText>
          </GraphTitleContainer>
          <Icon
            src={axisState ? axisPressed : axisUnpressed}
            onClick={this.handleAxis}
          />
        </ChartTitle>
        <AllCharts>
          <StyledPlot width={1058} height={300} margin={axisState ? '' : 0}>
            <StyledXAxis visible={axisState} />
            <StyledYAxis visible={axisState} />
            <AreaSeries
              opacity={0.8}
              fill="#fad149"
              stroke="none"
              curve="curveNatural"
              data={[{ x: 1, y: 10 }, { x: 2, y: 14 }, { x: 3, y: 15 }]}
            />
            <AreaSeries
              opacity={0.8}
              fill="#fad"
              stroke="none"
              curve="curveNatural"
              data={[{ x: 1, y: 25 }, { x: 2, y: 4 }, { x: 3, y: 15 }]}
            />
          </StyledPlot>
        </AllCharts>
      </AllContainer>
    )
  }
}
export default Chart
