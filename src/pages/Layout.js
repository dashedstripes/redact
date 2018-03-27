import React, { Component } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import TodoList from '../components/TodoList'

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <TodoList />
        <Footer />
      </div>
    )
  }
}

export default Layout
