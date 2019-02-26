import styled from 'styled-components'

import './index.css'

const Title = styled.h2`
  font-family: Gotham;
  font-weight: normal;
  font-size: 40px;
  color: ${props =>
    props.color
      ? props.theme.color[props.color]
      : props.theme.color.primaryColor};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
`
const SubTitle = styled.h4`
  font-family: Gotham;
  font-weight: normal;
  color: ${props =>
    props.color
      ? props.theme.color[props.color]
      : props.theme.color.primaryColor};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
`
const CommonText = styled.span`
  font-family: Gotham;
  font-weight: normal;
  color: ${props =>
    props.color
      ? props.theme.color[props.color]
      : props.theme.color.primaryColor};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
`

const TextMenu = styled.span`
  cursor: pointer;
  font-family: Gotham;
  font-size: 25px;
  font-weight: normal;
  color: ${props =>
    props.color
      ? props.theme.color[props.color]
      : props.theme.color.primaryColor};
  margin: 5px;
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
`

export { CommonText, TextMenu, Title, SubTitle }
