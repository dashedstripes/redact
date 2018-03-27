import React, { Component } from 'react'
import { connect } from 'react-redux'

import { todoCompleted } from '../actions/todoActions'

class TodoList extends Component {
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
        <ul>
          {todolis}
        </ul>
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
