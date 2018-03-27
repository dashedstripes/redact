import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createTodo, todoCompleted } from '../actions/todoActions'

class TodoList extends Component {
  constructor() {
    super()

    this.state = {
      input: ''
    }
  }

  updateInput(e) {
    this.setState({
      input: e.target.value
    })
  }

  inputKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.dispatch(createTodo(this.state.input))
      this.setState({
        input: ''
      })
    }
  }

  markCompletedTodo(index) {
    this.props.dispatch(todoCompleted(index))
  }

  render() {
    const todolis = this.props.todos.map((todo) => {
      return (
        <li key={todo.id} onClick={this.markCompletedTodo.bind(this, todo.id)}>
          {todo.completed ? <strike>{todo.title}</strike> : todo.title}
        </li>
      )
    })

    return (
      <div>
        <ul className='p-l-1'>
          {todolis}
        </ul>
        <input
          type='text'
          value={this.state.input}
          onChange={this.updateInput.bind(this)}
          onKeyPress={this.inputKeyPress.bind(this)}
          placeholder='Enter a new todo...' />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList)
