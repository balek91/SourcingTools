import React, { Component } from 'react'

import Layout from './layout'

export default class AdminPage extends Component {

  componentDidMount() {
    console.log('page charger')
  }


  render() {
    return (
      <Layout>
        <p>AdminPage</p>
      </Layout>
    )
  }
}