import React from 'react'
import { Link, Match } from 'react-router'
import Home from './Home'
import About from './About'
import Topics from './Topics'
import NewTopic from './NewTopic'

export default () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
      <Match exactly pattern="/" component={Home} />
      <Match pattern="/about" component={About} />
      <Match exactly pattern="/topics" component={Topics} />
      <Match pattern="/topics/new" component={NewTopic} />
    </div>
  )
}