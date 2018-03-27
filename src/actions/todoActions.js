export function todoCompleted(id) {
  return {
    type: 'TODO_COMPLETED',
    payload: id
  }
}