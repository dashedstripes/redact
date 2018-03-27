const defaultState = [
  {
    id: 1,
    title: 'Buy Butter',
    completed: false
  },
  {
    id: 2,
    title: 'Pick up laundry',
    completed: false
  }
]

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'CREATE_TODO': {
      return [...state].concat(action.payload)
    }
    case 'TODO_COMPLETED':
      return [...state].map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed
        }
        return todo
      })
    default:
      return state
  }
}

export default reducer