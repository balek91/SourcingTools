import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'
import Proptypes from 'prop-types'

import StyledLink from '../styledLink'
import { TextMenu, Title } from '../texts'

const HeaderContainer = styled.div`
  align-items: center;
  background-color: ${props => props.theme.color.white};
  display: flex;
  flex-direction : column;
`

const GlobalMenuContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction : row;
  width : 100%;
  flex :1;
  border-bottom : 1px solid ${props => props.theme.color.black};
`

const TitleContainer = styled.div`
display: flex;
flex : 1;
`
const LeftMenuContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding-bottom : 20px;
`
const RightMenuContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding-bottom : 20px;
  border-left : 1px solid ${props => props.theme.color.black};
`

class Header extends React.Component {
  static propTypes = {
    title: Proptypes.string
  }
  disconnect = () => {
    const { history } = this.props
    history.push('/')
  }

  render() {
    const { title } = this.props
    return (
      <HeaderContainer>
        <TitleContainer>
          {
            title ? (
              <Title uppercase={true}>{title}</Title>
            ) : (
                <Title uppercase={true}></Title>
              )
          }
        </TitleContainer>
        <GlobalMenuContainer>
          <LeftMenuContainer>
            <StyledLink to='/userPage'>
              <TextMenu>User Page</TextMenu>
            </StyledLink>
          </LeftMenuContainer>
          <RightMenuContainer>
            <StyledLink to='/adminPage'>
              <TextMenu>Management Page</TextMenu>
            </StyledLink>
          </RightMenuContainer>
        </GlobalMenuContainer>
      </HeaderContainer>
    )
  }
}

const ConnectedHeader = withRouter(Header)

export default ConnectedHeader
