import axios from 'axios'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import StyledLink from '../components/styledLink'
import { CommonText, TextMenu } from '../components/texts'
import Layout from './layout'

const HouseList = styled.div`
  align-items: center;
  background-color: yellow;
  display: flex;
  height: 150px;
  justify-content: center;
`

const StudentList = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

class HomePage extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  state = {
    characters: []
  }

  componentDidMount() {
    this.getHouse()
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.houseName !== prevProps.match.params.houseName
    ) {
      this.getHouse()
    }
  }

  getHouse = () => {
    const { match } = this.props
    axios
      .get(
        `http://hp-api.herokuapp.com/api/characters/house/${
          match.params.houseName
        }`
      )
      .then(res => {
        this.setState({ characters: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { match } = this.props
    return (
      <Layout>
        <HouseList>
          <StyledLink to="/house/gryffindor">
            <TextMenu>Gryffondor</TextMenu>
          </StyledLink>
          <StyledLink to="/house/slytherin">
            <TextMenu>Serpentard</TextMenu>
          </StyledLink>
          <StyledLink to="/house/ravenclaw">
            <TextMenu>Serdaigle</TextMenu>
          </StyledLink>
          <StyledLink to="/house/hufflepuff">
            <TextMenu>PoufSouffle</TextMenu>
          </StyledLink>
        </HouseList>
        {match.params.houseName ? (
          <StudentList>
            {this.state.characters.map((character, index) => (
              <CommonText key={index}>{character.name}</CommonText>
            ))}
          </StudentList>
        ) : (
          <CommonText>Veuillez Selectionnez une Maison</CommonText>
        )}
      </Layout>
    )
  }
}

export default HomePage
