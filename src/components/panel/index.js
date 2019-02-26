import styled from 'styled-components'

const Panel = styled.div`
  align-items: center;
  background-color: ${props =>
    props.color
      ? props.theme.color[props.color]
      : props.theme.color.primaryColor};
  cursor: pointer;
  display: flex;
  flex: 1;
  height: 100vh;
  justify-content: center;
  min-width: 250px;
`

export default Panel
