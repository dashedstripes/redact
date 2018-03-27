import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to='/'>redact</Link>
          </li>
          <li>
            <Link to='/todo'>todo</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header
