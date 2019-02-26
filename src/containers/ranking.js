import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Layout from './layout'

class Ranking extends Component {
  static propTypes = {
    counter : PropTypes.object
  }
  
  state = {
    rank: []
  }

  componentDidMount() {
    const { counter } = this.props
    this.toArray(counter)
  }

  toArray = obj => {
    const sortable = []
    for (let school in obj) {
      sortable.push({ name: school, score: obj[school] })
    }
    this.setState({
      rank: sortable.sort((a, b) => {
        return b.score - a.score
      })
    })
  }

  render() {
    return (
      <Layout>
        {this.state.rank.map((school, index) => (
          <p key={index}>{`${school.name} ${school.score}`}</p>
        ))}
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Ranking)
