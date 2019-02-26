import React from 'react'
import { XYPlot, XAxis, YAxis, Hint, VerticalRectSeries } from 'react-vis'
import styled from 'styled-components'
import { Title, CommonText } from '../texts'
import { count } from 'rxjs/operators'

import './graph.css'
import Data from './fakeData'

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
  border-bottom: none;
  background-color: rgba(0, 0, 0, 0.1);
`
const ColorDotContainer = styled.div`
  width: 50px;
  display: flex;
  height: inherit;
  align-items: center;
  justify-content: center;
`

const ColorDot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 20px;
  box-shadow: 0.3px 0.3px 10px #fad149;
  background-color: #fad149;
`
const GraphTitleContainer = styled.div`
  height: inherit;
  width: 100%;
  display: flex;
  align-items: center;
`

const AllContainer = styled.div``

const Background = styled.div`
  ${props =>
    props.background ? `background-image: url(${props.background})` : 'none'};
  filter: blur(15px);
  width: 450px;
  height: 250px;
  position: absolute;
  z-index: -1;
`

const StyledHintContent = styled.div`
  width: '100%';
  color: ${props => props.theme.color.white};
  text-shadow: 1px 1px 30px rgba(0, 0, 0, 0.4);
`

const SingleBar = (key, data) => (
  <StyledPlot margin={0} width={150} height={200} yDomain={[0, 18117]}>
    <VerticalRectSeries
      opacity={1}
      fill="#fad149"
      stroke="none"
      style={{ width: '100%' }}
      data={[{ x: 0, y: 0 }, { x: 1, y: data.count }]}
    />
    <Hint value={[{}]}>
      <StyledHintContent>
        <h3>{data.name} </h3>
        <p>{data.count}</p>
      </StyledHintContent>
    </Hint>
  </StyledPlot>
)

const DisplayChart = datas => {
  return datas.map((data, key) => {
    return SingleBar(key, data)
  })
}

class Chart extends React.Component {
  state = {
    hoverState: null
  }

  render() {
    return (
      <AllContainer>
        <ChartTitle>
          <ColorDotContainer>
            <ColorDot />
          </ColorDotContainer>
          {/*<Background background={this.props.background} />*/}
          <GraphTitleContainer>
            <CommonText color="white">Graphique</CommonText>
          </GraphTitleContainer>
        </ChartTitle>
        <AllCharts>{DisplayChart(Data)}</AllCharts>
      </AllContainer>
    )
  }
}
export default Chart
