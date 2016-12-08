import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchTopics } from '../actions/topics'

class Topics extends React.Component {
  componentDidMount () {
    this.props.fetchTopics()
  }
  render () {
    return (
      <div>
        {this.props.topics.map(topic => <div key={topic.id}>{topic.name}</div>)}
        <Link to={`${this.props.pathname}/new`}>add</Link>
      </div>
    )
  }
}

const mapStateToProps = ({ topics }) => ({ topics })

export default connect(mapStateToProps, { fetchTopics })(Topics)