import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { createTopic } from '../actions/topics'
import classnames from 'classnames'

class NewTopic extends React.Component {
  state = {
    name: '',
    description: '',
    loading: false,
    done: false
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { name, description } = this.state
    this.setState({ loading: true })
    this.props.createTopic({ name, description }).then(
      () => this.setState({ done: true }),
      (error) => this.setState({ loading: false })
    )
  }
  handleTextChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render () {
    const form = (
      <form onSubmit={this.handleSubmit} className={classnames({ loading: this.state.loading })}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={this.handleTextChange} value={this.state.name} />
        <label htmlFor="description">description</label>
        <input type="text" id="description" name="description" onChange={this.handleTextChange} value={this.state.description} />
        <button type="submit">Add</button>
      </form>
    )
    return this.state.done ? <Redirect to="/topics" /> : form
  }
}

export default connect(null, { createTopic })(NewTopic)