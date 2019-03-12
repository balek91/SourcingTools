import styled from 'styled-components'

import './index.css'

const Title = styled.h2`
  font-family: Arial Rounded MT Bold;
  font-weight: normal;
  font-size: 40px;
  color: ${props =>
    props.color
      ? props.theme.color[props.color]
      : props.theme.color.black};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
`
const SubTitle = styled.h4`
  font-family: Gotham;
  font-weight: normal;
  color: ${props =>
    props.color
      ? props.theme.color[props.color]
      : props.theme.color.black};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
`
const CommonText = styled.span`
  font-family: Gotham;
  font-weight: normal;
  color: ${props =>
    props.color
      ? props.theme.color[props.color]
      : props.theme.color.black};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
`

const TextMenu = styled.span`
  font-family: Arial Rounded MT Bold;
  font-size: 30px;
  font-weight: normal;
  color: ${props =>
    props.color
      ? props.theme.color[props.color]
      : props.theme.color.black};
  margin: 5px;
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
`

const TextSubMenu = styled.span`
  font-family: Arial Rounded MT Bold;
  font-size: 25px;
  font-weight: normal;
  color: ${props =>
    props.color
      ? props.theme.color[props.color]
      : props.theme.color.black};
  margin: 5px;
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
`

export { CommonText, TextMenu, Title, SubTitle, TextSubMenu }
