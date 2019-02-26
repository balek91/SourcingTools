import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'
import Proptypes from 'prop-types'

import StyledLink from '../styledLink'
import { TextMenu } from '../texts'

const HeaderContainer = styled.div`
  align-items: center;
  background-color: ${props => props.theme.color.tertiaryColor};
  display: flex;
  height: 50px;
`
const LeftMenuContainer = styled.div`
  display: flex;
  flex: 7;
  justify-content: center;
`
const RightMenuContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

class Header extends React.Component {
  static propTypes = {
    history: Proptypes.object
  }
  disconnect = () => {
    const { history } = this.props
    history.push('/')
  }

  render() {
    return (
      <HeaderContainer>
        <LeftMenuContainer>
          <StyledLink to="/home">
            <TextMenu>Acceuil</TextMenu>
          </StyledLink>
          <StyledLink to="/house/gryffindor">
            <TextMenu>Maisons</TextMenu>
          </StyledLink>
          <StyledLink to="/ranking">
            <TextMenu>Classement</TextMenu>
          </StyledLink>
          <StyledLink to="/options">
            <TextMenu>Options</TextMenu>
          </StyledLink>
        </LeftMenuContainer>
        <RightMenuContainer>
          <TextMenu onClick={this.disconnect}>Deconnexion</TextMenu>
        </RightMenuContainer>
      </HeaderContainer>
    )
  }
}

const ConnectedHeader = withRouter(Header)

export default ConnectedHeader
