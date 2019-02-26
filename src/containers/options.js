import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import allTheActions from '../actions'
import Layout from './layout'
import { themeLight, themeDark } from '../config/themes'

import { Title } from '../components/texts'
import { Button } from 'glamorous'

class Ranking extends Component {
  static propTypes = {
    actions: PropTypes.object
  }

  render() {
    const { actions } = this.props
    return (
      <Layout>
        <Title>Choisissez un Theme</Title>
        <Button onClick={() => actions.themes.changeTheme(themeDark)}>
          Mode Nuit
        </Button>
        <Button onClick={() => actions.themes.changeTheme(themeLight)}>
          Mode Jour
        </Button>
      </Layout>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    themes: bindActionCreators(allTheActions.themes, dispatch)
  }
})

export default connect(
  null,
  mapDispatchToProps
)(Ranking)
