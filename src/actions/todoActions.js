export function createTodo(title) {
  return {
    type: 'CREATE_TODO',
    payload: {
      id: Date.now(),
      title,
      completed: false
    }
  }
}

export function todoCompleted(id) {
  return {
    type: 'TODO_COMPLETED',
    payload: id
  }
}